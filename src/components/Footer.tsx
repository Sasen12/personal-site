export default function Footer() {
  return (
    <footer className="border-t border-gray-200 dark:border-gray-800">
      <div className="mx-auto flex max-w-4xl flex-col items-center gap-2 px-4 py-8 text-sm text-gray-500 sm:flex-row sm:justify-between">
        <p>&copy; {new Date().getFullYear()} Sasen. All rights reserved.</p>
        <div className="flex gap-4">
          <a href="https://github.com/username" target="_blank" rel="noopener noreferrer" className="hover:text-gray-900 dark:hover:text-gray-100">
            GitHub
          </a>
          <a href="https://linkedin.com/in/username" target="_blank" rel="noopener noreferrer" className="hover:text-gray-900 dark:hover:text-gray-100">
            LinkedIn
          </a>
          <a href="mailto:hello@example.com" className="hover:text-gray-900 dark:hover:text-gray-100">
            Email
          </a>
        </div>
      </div>
    </footer>
  )
}
