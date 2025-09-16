import React, { useEffect, useState } from "react";

export default function App() {
  // init theme: cek localStorage atau prefers-color-scheme
  const [dark, setDark] = useState(() => {
    try {
      const saved = localStorage.getItem("theme");
      if (saved) return saved === "dark";
      return window.matchMedia && window.matchMedia("(prefers-color-scheme: dark)").matches;
    } catch {
      return false;
    }
  });

  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    document.documentElement.classList.toggle("dark", dark);
    try { localStorage.setItem("theme", dark ? "dark" : "light"); } catch {}
  }, [dark]);

  return (
    <>
      {/* Navbar */}
      <header className="fixed w-full bg-white/80 dark:bg-gray-800/80 backdrop-blur z-50 shadow">
        <div className="max-w-6xl mx-auto px-4 py-3 flex justify-between items-center">
          <h1 className="text-2xl font-bold">ZayyPorto</h1>

          <nav className="hidden md:flex gap-6">
            <a href="#home" className="hover:text-blue-500">Home</a>
            <a href="#about" className="hover:text-blue-500">About</a>
            <a href="#projects" className="hover:text-blue-500">Projects</a>
            <a href="#contact" className="hover:text-blue-500">Contact</a>
          </nav>

          <div className="flex items-center gap-2">
            {/* mobile menu button */}
            <button
              onClick={() => setMobileOpen((s) => !s)}
              className="md:hidden p-2 rounded bg-gray-200 dark:bg-gray-700"
              aria-label="Toggle menu"
            >
              ☰
            </button>

            {/* dark toggle */}
            <button
              id="darkToggle"
              onClick={() => setDark((d) => !d)}
              className="ml-4 p-2 rounded bg-gray-200 dark:bg-gray-700"
              aria-label="Toggle dark mode"
            >
              {dark ? "☀️" : "🌙"}
            </button>
          </div>
        </div>

        {/* mobile menu */}
        {mobileOpen && (
          <div className="md:hidden bg-white dark:bg-gray-800/90 border-t border-gray-200 dark:border-gray-700">
            <div className="px-4 py-3 flex flex-col gap-2">
              <a href="#home" onClick={() => setMobileOpen(false)}>Home</a>
              <a href="#about" onClick={() => setMobileOpen(false)}>About</a>
              <a href="#projects" onClick={() => setMobileOpen(false)}>Projects</a>
              <a href="#contact" onClick={() => setMobileOpen(false)}>Contact</a>
            </div>
          </div>
        )}
      </header>

      <main className="pt-20">
        {/* Hero */}
        <section id="home" className="min-h-screen flex flex-col justify-center items-center text-center px-4">
          <h2 className="text-5xl font-extrabold">Hi, I’m <span className="text-blue-500">Zayy</span> 👋</h2>
          <p className="mt-4 text-lg max-w-xl">
            Web Developer | Belajar TailwindCSS V3 | Gen Z ngulik koding 🚀
          </p>
          <a href="#projects" className="mt-6 px-6 py-3 bg-blue-500 text-white rounded-lg shadow hover:bg-blue-600 transition">
            Lihat Project
          </a>
        </section>

        {/* About */}
        <section id="about" className="max-w-5xl mx-auto py-20 px-4">
          <h3 className="text-3xl font-bold mb-6 text-center">About Me</h3>
          <p className="text-lg leading-relaxed text-center">
            Aku seorang developer yang lagi eksplorasi web development dengan TailwindCSS.
            Suka bikin tampilan clean, responsif, dan pastinya mobile-first.
          </p>
        </section>

        {/* Projects */}
        <section id="projects" className="bg-gray-100 dark:bg-gray-800 py-20 px-4">
          <h3 className="text-3xl font-bold mb-12 text-center">Projects</h3>
          <div className="grid gap-8 md:grid-cols-3 max-w-6xl mx-auto">
            <div className="bg-white dark:bg-gray-700 p-6 rounded-lg shadow">
              <h4 className="text-xl font-semibold mb-2">Project 1</h4>
              <p className="text-gray-600 dark:text-gray-300">Deskripsi singkat project.</p>
            </div>
            <div className="bg-white dark:bg-gray-700 p-6 rounded-lg shadow">
              <h4 className="text-xl font-semibold mb-2">Project 2</h4>
              <p className="text-gray-600 dark:text-gray-300">Deskripsi singkat project.</p>
            </div>
            <div className="bg-white dark:bg-gray-700 p-6 rounded-lg shadow">
              <h4 className="text-xl font-semibold mb-2">Project 3</h4>
              <p className="text-gray-600 dark:text-gray-300">Deskripsi singkat project.</p>
            </div>
          </div>
        </section>

        {/* Contact */}
        <section id="contact" className="max-w-4xl mx-auto py-20 px-4 text-center">
          <h3 className="text-3xl font-bold mb-6">Contact Me</h3>
          <p className="mb-6">Kalau ada project menarik atau mau ngopi bareng, hit me up 👇</p>
          <form className="flex flex-col gap-4">
            <input type="text" placeholder="Nama" className="p-3 rounded border border-gray-300 dark:border-gray-600 dark:bg-gray-800" />
            <input type="email" placeholder="Email" className="p-3 rounded border border-gray-300 dark:border-gray-600 dark:bg-gray-800" />
            <textarea placeholder="Pesan" rows="4" className="p-3 rounded border border-gray-300 dark:border-gray-600 dark:bg-gray-800"></textarea>
            <button type="submit" className="px-6 py-3 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition">Kirim</button>
          </form>
        </section>
      </main>

      {/* Footer */}
      <footer className="bg-gray-200 dark:bg-gray-800 py-6 text-center">
        <p className="text-sm">© 2025 ZayyPorto. Dibuat dengan 💙 & TailwindCSS v3.</p>
      </footer>
    </>
  );
}
