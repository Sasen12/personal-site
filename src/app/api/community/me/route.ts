import { NextResponse } from "next/server"
import { getSessionUser } from "@/lib/community-auth"

export async function GET() {
  const username = await getSessionUser()
  if (!username) {
    return NextResponse.json({ username: null })
  }
  return NextResponse.json({ username })
}
