import { NextResponse } from "next/server"
import { getThread, addReply } from "@/lib/community-storage"
import { getSessionUser } from "@/lib/community-auth"
import { isTechRelated } from "@/lib/tech-filter"

export async function GET(_req: Request, { params }: { params: Promise<{ id: string }> }) {
  const { id } = await params
  const thread = await getThread(id)
  if (!thread) {
    return NextResponse.json({ error: "Thread not found" }, { status: 404 })
  }
  return NextResponse.json(thread)
}

export async function POST(req: Request, { params }: { params: Promise<{ id: string }> }) {
  const username = await getSessionUser()
  if (!username) {
    return NextResponse.json({ error: "Not logged in" }, { status: 401 })
  }

  const { id } = await params
  const { content } = await req.json()

  if (!content || content.trim().length === 0) {
    return NextResponse.json({ error: "Reply content required" }, { status: 400 })
  }

  const techCheck = isTechRelated(content)
  if (!techCheck.pass) {
    return NextResponse.json({
      error: "Reply doesn't appear to be tech-related.",
    }, { status: 400 })
  }

  const reply = await addReply(id, content, username, username)
  if (!reply) {
    return NextResponse.json({ error: "Thread not found" }, { status: 404 })
  }

  return NextResponse.json(reply)
}
