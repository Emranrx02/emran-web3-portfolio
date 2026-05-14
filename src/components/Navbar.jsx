function Navbar() {
  return (
    <nav className="relative z-10 border-b border-white/10 bg-[#0B0F19]/90">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-5">
        
        <h1 className="text-xl font-bold text-white">
          Emran<span className="text-emerald-400">.</span>
        </h1>

        <div className="hidden gap-8 text-sm text-gray-300 md:flex">
          <a href="#about" className="hover:text-white transition">
            About
          </a>

          <a href="#services" className="hover:text-white transition">
            Services
          </a>

          <a href="#projects" className="hover:text-white transition">
            Projects
          </a>

          <a href="#research" className="hover:text-white transition">
            Research
          </a>

          <a href="#contact" className="hover:text-white transition">
            Contact
          </a>
        </div>

      </div>
    </nav>
  )
}

export default Navbar