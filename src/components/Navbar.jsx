import { useState } from "react"

function Navbar() {
  const [open, setOpen] = useState(false)

  return (
    <nav className="relative z-50 border-b border-white/10 bg-[#0B0F19]/90 backdrop-blur-xl">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-5">
        <h1 className="text-xl font-bold text-white">
          Emran<span className="text-emerald-400">.</span>
        </h1>

        <div className="hidden gap-8 text-sm text-gray-300 md:flex">
          <a href="#about" className="hover:text-white">About</a>
          <a href="#services" className="hover:text-white">Services</a>
          <a href="#strategy" className="hover:text-white">Strategy</a>
          <a href="#projects" className="hover:text-white">Projects</a>
          <a href="#research" className="hover:text-white">Research</a>
          <a href="#resume" className="hover:text-white">Resume</a>
          <a href="#contact" className="hover:text-white">Contact</a>
        </div>

        <button
          onClick={() => setOpen(!open)}
          className="text-2xl text-white md:hidden"
        >
          {open ? "✕" : "☰"}
        </button>
      </div>

      {open && (
        <div className="border-t border-white/10 bg-[#0B0F19] px-6 py-5 md:hidden">
          <div className="flex flex-col gap-4 text-gray-300">
            <a onClick={() => setOpen(false)} href="#about">About</a>
            <a onClick={() => setOpen(false)} href="#services">Services</a>
            <a onClick={() => setOpen(false)} href="#strategy">Strategy</a>
            <a onClick={() => setOpen(false)} href="#projects">Projects</a>
            <a onClick={() => setOpen(false)} href="#research">Research</a>
            <a onClick={() => setOpen(false)} href="#resume">Resume</a>
            <a onClick={() => setOpen(false)} href="#contact">Contact</a>
          </div>
        </div>
      )}
    </nav>
  )
}

export default Navbar