import content4 from "../assets/content (4).png";

export default function Contacto() {
  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault()

    const formData = new FormData(event.currentTarget)
    const name = String(formData.get('name') ?? '')
    const email = String(formData.get('email') ?? '')
    const projectType = String(formData.get('projectType') ?? '')
    const message = String(formData.get('message') ?? '')

    const subject = encodeURIComponent(`Nueva consulta de ${name}`)
    const body = encodeURIComponent(
      `Nombre / Empresa: ${name}\nCorreo Electrónico: ${email}\nNaturaleza del Proyecto: ${projectType}\nMensaje:\n${message}`,
    )

    window.location.href = `mailto:alterstudio.crea@gmail.com?subject=${subject}&body=${body}`
  }

  return (
    <>
      {/* Main Content Canvas */}
      <main id="main-content" aria-label="Contacto con ALTER Studio" className="max-w-screen-2xl mx-auto px-4 sm:px-6 md:px-12 py-16 md:py-24 min-h-screen overflow-x-hidden">
        {/* Header Section */}
        <header className="mb-16 md:mb-32">
          <h1 className="text-4xl sm:text-6xl md:text-9xl font-headline font-bold text-primary tracking-tighter leading-none mb-6 md:mb-8">
            Hablemos.
          </h1>
          <div className="flex flex-col md:flex-row justify-between items-start gap-12">
            <p className="text-lg md:text-2xl font-light text-primary max-w-xl leading-relaxed italic">
              Estamos aquí para materializar la evolución de su identidad. Un diálogo consciente para un mundo que exige autenticidad arquitectónica.
            </p>
            <div className="text-label text-xs uppercase tracking-[0.2em] text-primary/60 md:border-l border-outline-variant md:pl-8 py-2">
              Contacto virtual<br />Estudio de Diseño 2026
            </div>
          </div>
        </header>

        {/* Asymmetric Layout Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 md:gap-24 items-start">
          {/* Left Column: Contact Form */}
          <section className="lg:col-span-7 space-y-10 md:space-y-16">
            <form className="space-y-10 md:space-y-12" onSubmit={handleSubmit}>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12">
                <div className="group relative">
                  <label className="text-[10px] uppercase tracking-widest text-primary/40 block mb-2">Nombre / Empresa</label>
                  <input className="w-full bg-transparent border-none py-4 px-0 focus:ring-0 outline-none font-body text-lg md:text-xl placeholder:text-primary/10 border-b border-outline-variant/30" placeholder="Su respuesta" type="text" name="name" required />
                  <div className="absolute bottom-0 left-0 h-[1px] w-0 bg-primary group-focus-within:w-full transition-all duration-500"></div>
                </div>
                <div className="group relative">
                  <label className="text-[10px] uppercase tracking-widest text-primary/40 block mb-2">Correo Electrónico</label>
                  <input className="w-full bg-transparent border-none py-4 px-0 focus:ring-0 outline-none font-body text-lg md:text-xl placeholder:text-primary/10 border-b border-outline-variant/30" placeholder="email@dominio.com" type="email" name="email" required />
                  <div className="absolute bottom-0 left-0 h-[1px] w-0 bg-primary group-focus-within:w-full transition-all duration-500"></div>
                </div>
              </div>
              <div className="group relative">
                <label className="text-[10px] uppercase tracking-widest text-primary/40 block mb-2">Naturaleza del Proyecto</label>
                <select className="w-full bg-transparent border-none py-4 px-0 focus:ring-0 outline-none font-body text-lg md:text-xl text-primary/60 appearance-none border-b border-outline-variant/30" name="projectType" required defaultValue="">
                  <option value="" disabled>Selecciona una opción</option>
                  <option>Identidad Visual</option>
                  <option>Consultoría de Marca</option>
                  <option>Desarrollo Digital</option>
                  <option>Manual de Identidad</option>
                </select>
                <div className="absolute bottom-0 left-0 h-[1px] w-0 bg-primary group-focus-within:w-full transition-all duration-500"></div>
              </div>
              <div className="group relative">
                <label className="text-[10px] uppercase tracking-widest text-primary/40 block mb-2">Mensaje</label>
                <textarea className="w-full bg-transparent border-none py-4 px-0 focus:ring-0 outline-none font-body text-lg md:text-xl placeholder:text-primary/10 resize-none border-b border-outline-variant/30" placeholder="Describa su visión..." rows={4} name="message" required></textarea>
                <div className="absolute bottom-0 left-0 h-[1px] w-0 bg-primary group-focus-within:w-full transition-all duration-500"></div>
              </div>
              <button className="group flex items-center gap-3 md:gap-4 text-primary font-serif font-bold text-xl md:text-2xl uppercase tracking-tighter transition-all duration-300 hover:-translate-y-1 hover:tracking-[0.12em]" type="submit">
                <span>Enviar Solicitud</span>
                <span className="material-symbols-outlined text-4xl transition-transform duration-300 group-hover:translate-x-4 group-hover:rotate-[-8deg]">arrow_right_alt</span>
              </button>
            </form>
          </section>

          {/* Right Column: Information & Visuals */}
          <aside className="lg:col-span-5 space-y-14 md:space-y-24">
            <div className="group aspect-[4/5] bg-surface-dim relative overflow-hidden transition-all duration-700 hover:-translate-y-1 hover:shadow-[0_24px_50px_rgba(58,18,55,0.12)]">
              <img className="w-full h-full object-cover opacity-80 transition-transform duration-1000 group-hover:scale-110" data-alt="Modern architectural interior of a minimalist design studio with soft shadows, concrete walls, and a single elegant plant in the corner" src={content4} />
              <div className="absolute inset-0 bg-primary/10 mix-blend-multiply"></div>
            </div>
            <div className="grid grid-cols-1 gap-8 border-t border-outline-variant pt-12">
              <div>
                <h4 className="text-[10px] uppercase tracking-widest text-primary/40 mb-4">Conectividad</h4>
                <p className="font-serif text-lg leading-snug">alterstudio.crea@gmail.com<br />+57 312 450 0000</p>
              </div>
            </div>
            <div className="space-y-4">
              <h4 className="text-[10px] uppercase tracking-widest text-primary/40">Horario de Atención</h4>
              <p className="font-serif italic text-xl md:text-2xl text-primary/80">Cita previa necesaria para una curaduría personalizada.</p>
            </div>
            <div className="space-y-4 border-t border-outline-variant pt-12">
              <h4 className="text-[10px] uppercase tracking-widest text-primary/40">Instagram</h4>
              <a
                href="https://www.instagram.com/alte_rstudio/"
                target="_blank"
                rel="noopener noreferrer"
                className="block text-xl md:text-2xl font-headline font-bold text-primary transition-all duration-300 hover:italic hover:translate-x-1"
              >
                @alte_rstudio
              </a>
              <p className="font-serif text-sm leading-relaxed text-primary/60 max-w-sm">
                Referencias, procesos y novedades del estudio en una sola línea visual.
              </p>
            </div>
          </aside>
        </div>

        {/* Resources Section: Brandbook Download */}
        <section className="mt-20 md:mt-48 py-16 md:py-32 border-t border-outline-variant relative overflow-hidden">
          <div className="flex flex-col items-center text-center max-w-4xl mx-auto space-y-12">
            <span className="text-xs uppercase tracking-[0.3em] font-label text-primary/60">Recursos Exclusivos</span>
            <h2 className="text-3xl sm:text-5xl md:text-7xl font-headline font-bold text-primary tracking-tighter">BRANDBOOK 2026</h2>
            <p className="text-lg md:text-xl font-light max-w-2xl leading-relaxed italic">
              Descargue nuestro manual corporativo completo. Una guía sobre nuestra filosofía de diseño, tipografía y la evolución consciente del color.
            </p>
            <a className="group relative inline-block py-4 md:py-6 px-8 md:px-16 border border-primary overflow-hidden transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_20px_50px_rgba(58,18,55,0.12)]" href="/brandbook.pdf" download>
              <span className="relative z-10 font-serif font-bold text-base md:text-xl uppercase tracking-widest group-hover:text-surface transition-colors duration-500">Descargar PDF (42MB)</span>
              <div className="absolute inset-0 bg-primary translate-y-full group-hover:translate-y-0 transition-transform duration-500 ease-in-out"></div>
            </a>
          </div>
          <div className="absolute -bottom-24 -left-24 w-96 h-96 bg-surface-container-highest rounded-full blur-[120px] opacity-30"></div>
          <div className="absolute -top-24 -right-24 w-64 h-64 bg-primary-container rounded-full blur-[100px] opacity-10"></div>
        </section>
      </main>
    </>
  )
}
