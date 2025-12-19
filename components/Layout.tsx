import Link from "next/link";

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div className="min-h-screen flex flex-col bg-slate-950 text-slate-100">
      <header className="border-b border-slate-800">
        <div className="mx-auto max-w-5xl flex items-center justify-between px-4 py-4">
          <Link href="/" className="text-lg font-semibold">
            Your Name
          </Link>
          <nav className="flex gap-4 text-sm text-slate-300">
            <Link href="/projects" className="hover:text-emerald-400">
              Projects
            </Link>
            <Link href="/blog" className="hover:text-emerald-400">
              Blog
            </Link>
            <Link href="/about" className="hover:text-emerald-400">
              About
            </Link>
            <Link href="/contact" className="hover:text-emerald-400">
              Contact
            </Link>
          </nav>
        </div>
      </header>

      <main className="flex-1">
        <div className="mx-auto max-w-5xl px-4 py-10">{children}</div>
      </main>

      <footer className="border-t border-slate-800">
        <div className="mx-auto max-w-5xl px-4 py-4 text-xs text-slate-500 flex justify-between">
          <span>© {new Date().getFullYear()} Your Name</span>
          <span>Built with Next.js & Tailwind</span>
        </div>
      </footer>
    </div>
  );
}
