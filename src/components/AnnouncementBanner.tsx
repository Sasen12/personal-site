export default function AnnouncementBanner() {
  return (
    <div className="bg-gradient-to-r from-indigo-600 to-purple-600 text-center text-xs text-white">
      <p className="px-4 py-2">
        🚀 New blog posts weekly!{" "}
        <a href="/feed.xml" className="underline hover:no-underline">Subscribe via RSS</a>
      </p>
    </div>
  )
}
