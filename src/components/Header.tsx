import Link from "next/link";

export default function Header({ title, navLinks, theme }) {
  return (
    <div className="fixed top-4 inset-x-0 z-50 flex justify-center px-4">
      <nav className="w-full max-w-7xl backdrop-blur-md bg-white/70 dark:bg-gray-900/70 border border-gray-200/50 dark:border-gray-700/50 shadow-2xl rounded-2xl flex items-center justify-between p-4 px-8 transition-all">
        <Link href="/" className="text-2xl font-black tracking-tighter text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600">
          {title}
        </Link>
        <div className="hidden md:flex items-center gap-8">
          {Object.entries(navLinks).map(([key, label]) => (
            <Link key={key} href={`#${key}`} className="text-sm font-semibold text-gray-600 dark:text-gray-300 hover:text-blue-600 transition-colors">
              {label}
            </Link>
          ))}
        </div>
        <button className="px-5 py-2.5 text-sm font-bold text-white bg-blue-600 rounded-xl hover:shadow-lg transition-all">
          Холбогдох
        </button>
      </nav>
    </div>
  );
}