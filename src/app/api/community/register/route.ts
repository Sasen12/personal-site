import { NextResponse } from "next/server"
import { findUserByEmail, findUserByUsername, createUser } from "@/lib/community-storage"
import { createSession } from "@/lib/community-auth"

export async function POST(req: Request) {
  try {
    const { username, email, password } = await req.json()

    if (!username || !email || !password) {
      return NextResponse.json({ error: "All fields required" }, { status: 400 })
    }

    if (username.length < 3) {
      return NextResponse.json({ error: "Username must be at least 3 characters" }, { status: 400 })
    }

    if (password.length < 6) {
      return NextResponse.json({ error: "Password must be at least 6 characters" }, { status: 400 })
    }

    const existingEmail = await findUserByEmail(email)
    if (existingEmail) {
      return NextResponse.json({ error: "Email already registered" }, { status: 409 })
    }

    const existingUser = await findUserByUsername(username)
    if (existingUser) {
      return NextResponse.json({ error: "Username taken" }, { status: 409 })
    }

    const user = await createUser(username, email, password)
    const token = createSession(user.username)

    const res = NextResponse.json({ username: user.username })
    res.cookies.set("community_session", token, {
      httpOnly: true,
      secure: process.env.NODE_ENV === "production",
      sameSite: "lax",
      path: "/",
      maxAge: 60 * 60 * 24 * 7,
    })

    return res
  } catch {
    return NextResponse.json({ error: "Server error" }, { status: 500 })
  }
}
