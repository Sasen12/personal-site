import { NextResponse } from "next/server"
import { findUserByEmail } from "@/lib/community-storage"
import { createSession, verifyPassword } from "@/lib/community-auth"

export async function POST(req: Request) {
  try {
    const { email, password } = await req.json()

    if (!email || !password) {
      return NextResponse.json({ error: "Email and password required" }, { status: 400 })
    }

    const user = await findUserByEmail(email)
    if (!user) {
      return NextResponse.json({ error: "Invalid email or password" }, { status: 401 })
    }

    if (!verifyPassword(password, user.passwordHash, user.salt)) {
      return NextResponse.json({ error: "Invalid email or password" }, { status: 401 })
    }

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
