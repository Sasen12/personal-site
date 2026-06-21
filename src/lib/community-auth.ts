import { cookies } from "next/headers"
import crypto from "crypto"

export interface CommunityUser {
  id: string
  username: string
  email: string
  passwordHash: string
  salt: string
  createdAt: string
}

const SESSION_COOKIE = "community_session"
const SESSION_SECRET = "community-secret-2026"

function hashPassword(password: string, salt: string): string {
  return crypto.scryptSync(password, salt, 64).toString("hex")
}

export function createUserHash(password: string): { hash: string; salt: string } {
  const salt = crypto.randomBytes(16).toString("hex")
  return { hash: hashPassword(password, salt), salt }
}

export function verifyPassword(password: string, hash: string, salt: string): boolean {
  return hashPassword(password, salt) === hash
}

function encodeToken(username: string): string {
  const payload = `${username}:${Date.now()}`
  const b64 = Buffer.from(payload).toString("base64")
  const sig = Buffer.from(SESSION_SECRET + b64).toString("base64").slice(0, 12)
  return `${b64}.${sig}`
}

function decodeToken(token: string): string | null {
  try {
    const [b64] = token.split(".")
    const decoded = Buffer.from(b64, "base64").toString()
    return decoded.split(":")[0]
  } catch {
    return null
  }
}

export function createSession(username: string): string {
  return encodeToken(username)
}

export async function getSessionUser(): Promise<string | null> {
  const cookieStore = await cookies()
  const token = cookieStore.get(SESSION_COOKIE)?.value
  return token ? decodeToken(token) : null
}
