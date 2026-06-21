import { NextResponse } from "next/server"
import { getThreads, createThread } from "@/lib/community-storage"
import { getSessionUser } from "@/lib/community-auth"
import { isTechRelated } from "@/lib/tech-filter"

export async function GET() {
  const threads = await getThreads()
  return NextResponse.json(threads)
}

export async function POST(req: Request) {
  const username = await getSessionUser()
  if (!username) {
    return NextResponse.json({ error: "Not logged in" }, { status: 401 })
  }

  try {
    const { title, content, type, tags } = await req.json()

    if (!title || !content || !type) {
      return NextResponse.json({ error: "Title, content, and type required" }, { status: 400 })
    }

    if (!["question", "debate", "discussion"].includes(type)) {
      return NextResponse.json({ error: "Invalid thread type" }, { status: 400 })
    }

    const combined = `${title} ${content}`
    const techCheck = isTechRelated(combined)
    if (!techCheck.pass) {
      return NextResponse.json({
        error: "Content doesn't appear to be tech-related. Please include more tech-specific details.",
        score: techCheck.score,
      }, { status: 400 })
    }

    const thread = await createThread(
      title,
      content,
      type,
      username,
      username,
      tags || [],
    )

    return NextResponse.json(thread)
  } catch {
    return NextResponse.json({ error: "Server error" }, { status: 500 })
  }
}
