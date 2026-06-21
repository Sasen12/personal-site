import crypto from "crypto"
import { createUserHash } from "./community-auth"
import type { CommunityUser } from "./community-auth"

export interface Thread {
  id: string
  title: string
  content: string
  type: "question" | "debate" | "discussion"
  authorId: string
  authorUsername: string
  createdAt: string
  tags: string[]
  replies: Reply[]
}

export interface Reply {
  id: string
  content: string
  authorId: string
  authorUsername: string
  createdAt: string
}

let usersStore: CommunityUser[] = []
let threadsStore: Thread[] = []

async function getBlobStore(name: string) {
  const { getStore } = await import("@netlify/blobs")
  return getStore({ name })
}

function isNetlify(): boolean {
  return !!process.env.NETLIFY
}

// ── Users ──

export async function getUsers(): Promise<CommunityUser[]> {
  if (isNetlify()) {
    try {
      const store = await getBlobStore("community-users")
      const data = await store.get("users", { type: "json" })
      return (data as CommunityUser[]) || []
    } catch {
      return []
    }
  }
  return usersStore
}

export async function findUserByEmail(email: string): Promise<CommunityUser | null> {
  const users = await getUsers()
  return users.find((u) => u.email === email) || null
}

export async function findUserByUsername(username: string): Promise<CommunityUser | null> {
  const users = await getUsers()
  return users.find((u) => u.username === username) || null
}

export async function createUser(username: string, email: string, password: string): Promise<CommunityUser> {
  const { hash, salt } = createUserHash(password)
  const user: CommunityUser = {
    id: crypto.randomUUID(),
    username,
    email,
    passwordHash: hash,
    salt,
    createdAt: new Date().toISOString(),
  }

  if (isNetlify()) {
    try {
      const store = await getBlobStore("community-users")
      const users = await getUsers()
      users.push(user)
      await store.setJSON("users", users)
    } catch {
      usersStore.push(user)
    }
  } else {
    usersStore.push(user)
  }

  return user
}

// ── Threads ──

export async function getThreads(): Promise<Thread[]> {
  if (isNetlify()) {
    try {
      const store = await getBlobStore("community-threads")
      const data = await store.get("threads", { type: "json" })
      return (data as Thread[]) || []
    } catch {
      return []
    }
  }
  return threadsStore
}

export async function getThread(id: string): Promise<Thread | null> {
  const threads = await getThreads()
  return threads.find((t) => t.id === id) || null
}

export async function createThread(
  title: string,
  content: string,
  type: Thread["type"],
  authorId: string,
  authorUsername: string,
  tags: string[],
): Promise<Thread> {
  const thread: Thread = {
    id: crypto.randomUUID(),
    title,
    content,
    type,
    authorId,
    authorUsername,
    createdAt: new Date().toISOString(),
    tags,
    replies: [],
  }

  if (isNetlify()) {
    try {
      const store = await getBlobStore("community-threads")
      const threads = await getThreads()
      threads.unshift(thread)
      await store.setJSON("threads", threads)
    } catch {
      threadsStore.unshift(thread)
    }
  } else {
    threadsStore.unshift(thread)
  }

  return thread
}

export async function addReply(
  threadId: string,
  content: string,
  authorId: string,
  authorUsername: string,
): Promise<Reply | null> {
  const threads = await getThreads()
  const idx = threads.findIndex((t) => t.id === threadId)
  if (idx === -1) return null

  const reply: Reply = {
    id: crypto.randomUUID(),
    content,
    authorId,
    authorUsername,
    createdAt: new Date().toISOString(),
  }

  threads[idx].replies.push(reply)

  if (isNetlify()) {
    try {
      const store = await getBlobStore("community-threads")
      await store.setJSON("threads", threads)
    } catch {
      threadsStore = threads
    }
  } else {
    threadsStore = threads
  }

  return reply
}
