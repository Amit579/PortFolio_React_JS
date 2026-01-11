import { useEffect, useState } from 'react'

export default function App() {
  const [dark, setDark] = useState(false)

  useEffect(() => {
    document.documentElement.classList.toggle('dark', dark)
  }, [dark])

  return (
    <main className="min-h-screen text-gray-900 dark:text-gray-100">
      <header className="p-6 flex justify-between">
        <h1 className="text-xl font-bold">Amit Sharma</h1>
        <button onClick={() => setDark(!dark)} className="border px-3 py-1 rounded">
          Toggle
        </button>
      </header>

      <section className="p-10 text-center">
        <h2 className="text-4xl font-extrabold">Mobile & Web App Developer</h2>
        <p className="mt-4 max-w-xl mx-auto">
          I build high quality iOS, Android, Web and Hybrid applications.
        </p>
      </section>

      <section className="grid md:grid-cols-3 gap-6 p-10">
        {['Mobile Apps', 'Web Apps', 'Hybrid Apps'].map(s => (
          <div key={s} className="rounded-2xl p-6 shadow bg-white dark:bg-gray-900">
            <h3 className="font-semibold">{s}</h3>
            <p className="mt-2 text-sm opacity-80">
              Production ready, scalable and secure solutions.
            </p>
          </div>
        ))}
      </section>

      <footer className="p-6 text-center opacity-60">
        © {new Date().getFullYear()} Amit Sharma
      </footer>
    </main>
  )
}