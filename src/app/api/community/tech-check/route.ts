import { NextResponse } from "next/server"
import { isTechRelated } from "@/lib/tech-filter"

export async function POST(req: Request) {
  const { text } = await req.json()
  const result = isTechRelated(text || "")
  return NextResponse.json(result)
}
