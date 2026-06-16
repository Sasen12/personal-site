import { cookies } from "next/headers"

const ADMIN_EMAIL = "techsavvy356@gmail.com"
const ADMIN_PASSWORD = "!1Chandima123"

const SESSION_COOKIE = "admin_session"
const SESSION_SECRET = "personal-site-admin-secret-2026"

function encodeToken(email: string): string {
  const payload = `${email}:${Date.now()}`
  const hash = Buffer.from(payload).toString("base64")
  return `${hash}.${Buffer.from(SESSION_SECRET + hash).toString("base64").slice(0, 10)}`
}

function verifyToken(token: string): boolean {
  try {
    const [hash] = token.split(".")
    const decoded = Buffer.from(hash, "base64").toString()
    const [email] = decoded.split(":")
    return email === ADMIN_EMAIL
  } catch {
    return false
  }
}

export function validateCredentials(email: string, password: string): boolean {
  return email === ADMIN_EMAIL && password === ADMIN_PASSWORD
}

export function createSession(): string {
  return encodeToken(ADMIN_EMAIL)
}

export async function checkSession(): Promise<boolean> {
  const cookieStore = await cookies()
  const token = cookieStore.get(SESSION_COOKIE)?.value
  return token ? verifyToken(token) : false
}
