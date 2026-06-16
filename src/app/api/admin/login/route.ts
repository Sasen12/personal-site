import { cookies } from "next/headers"
import { validateCredentials, createSession } from "@/lib/auth"

export async function POST(request: Request) {
  const { email, password } = await request.json()

  if (!validateCredentials(email, password)) {
    return Response.json({ error: "Invalid credentials" }, { status: 401 })
  }

  const token = createSession()
  const cookieStore = await cookies()
  cookieStore.set("admin_session", token, {
    httpOnly: true,
    secure: process.env.NODE_ENV === "production",
    sameSite: "lax",
    path: "/",
    maxAge: 60 * 60 * 24 * 7,
  })

  return Response.json({ success: true })
}
