export async function POST(request: Request) {
  try {
    const body = await request.json()

    // Forward to Netlify Forms when deployed
    // The submission endpoint is the site's own URL with form-encoded data
    const formData = new URLSearchParams({
      "form-name": "contact",
      name: body.name || "",
      email: body.email || "",
      message: body.message || "",
    })

    // Attempt to submit to Netlify Forms via the site's own endpoint
    // Only works when deployed (not locally)
    const origin = request.headers.get("origin") || ""
    if (origin.includes("netlify.app")) {
      await fetch(origin, {
        method: "POST",
        headers: { "Content-Type": "application/x-www-form-urlencoded" },
        body: formData.toString(),
      }).catch(() => {})
    }

    return Response.json({ success: true })
  } catch (err) {
    console.error("Contact form error:", err)
    return Response.json({ error: "Internal server error" }, { status: 500 })
  }
}
