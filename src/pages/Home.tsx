import banner2 from "../assets/Banner 2.png";
import content4 from "../assets/content (4).png";
import content1 from "../assets/content (1).png";
import content2 from "../assets/content (2).png";
import content3 from "../assets/content (3).png";

export default function Home() {
  return (
    <>
      <main id="main-content" aria-label="Inicio de ALTER Studio" className="pt-24 md:pt-32 overflow-x-hidden">
        {/* Hero Section */}
        <section className="min-height-[921px] flex flex-col items-center justify-center px-4 sm:px-6 md:px-12 py-16 md:py-24 text-center max-w-screen-2xl mx-auto">
          <div className="mb-12 opacity-80">
            <span className="font-label text-xs tracking-[0.3em] uppercase text-on-surface-variant">Estudio de Diseño Bogotá 2026</span>
          </div>
          <h1 className="text-4xl sm:text-5xl md:text-8xl lg:text-9xl font-headline font-bold leading-[0.95] tracking-tighter text-primary text-balanced max-w-6xl">
            No diseñamos para encajar. Diseñamos para transformar.
          </h1>
          <div className="mt-12 md:mt-20 w-full max-w-4xl relative">
            <div className="hidden md:block absolute -top-10 -left-10 w-32 h-32 border-l border-t border-outline-variant/30"></div>
            <div className="group h-[340px] sm:h-[460px] md:h-[600px] w-full bg-surface-dim relative overflow-hidden transition-transform duration-700 hover:-translate-y-1 hover:shadow-[0_24px_60px_rgba(58,18,55,0.12)]">
              <img alt="Banner principal del estudio" className="w-full h-full object-cover opacity-90 transition-transform duration-700 group-hover:scale-105 group-hover:rotate-[0.25deg]" data-alt="Banner editorial del estudio con composición minimalista y luz suave" src={banner2}/>
              <div className="absolute inset-0 border-[16px] sm:border-[24px] md:border-[40px] border-surface"></div>
            </div>
            <div className="hidden md:block absolute -bottom-10 -right-10 w-32 h-32 border-r border-b border-outline-variant/30"></div>
          </div>
        </section>

        {/* Narrativa Estratégica Section */}
        <section className="bg-surface-dim py-20 md:py-32 px-4 sm:px-6 md:px-24">
          <div className="max-w-screen-2xl mx-auto grid grid-cols-1 md:grid-cols-12 gap-12 items-start">
            <div className="md:col-span-4">
              <h2 className="font-label text-xs tracking-[0.4em] uppercase text-primary border-b border-primary/20 pb-4 inline-block mb-12">
                Narrativa Estratégica
              </h2>
            </div>
            <div className="md:col-span-8">
              <p className="text-2xl sm:text-3xl md:text-5xl lg:text-6xl font-body font-light leading-snug text-primary-container text-balanced">
                El diseño es una herramienta de construcción, expresión y evolución. No se trata de mantener lo que somos, sino de construir en lo que podemos convertirnos.
              </p>
              <div className="mt-16 flex flex-col md:flex-row gap-12 items-end">
                <div className="group w-full md:w-1/2 h-80 bg-primary-container lotus-mask overflow-hidden transition-all duration-700 hover:-translate-y-1 hover:shadow-[0_18px_40px_rgba(58,18,55,0.08)]">
                  <img alt="Organic texture" className="w-full h-full object-cover mix-blend-overlay opacity-60 transition-transform duration-700 group-hover:scale-110" data-alt="Abstract layered composition with soft organic tones and editorial contrast" src={content4}/>
                </div>
                <div className="w-full md:w-1/2">
                  <p className="font-body text-lg leading-relaxed text-on-surface-variant max-w-sm">
                    Nuestra metodología fusiona la precisión arquitectónica con la fluidez orgánica, creando identidades que respiran y mutan con el entorno.
                  </p>
                  <a className="group inline-flex items-center gap-2 mt-8 font-label text-xs tracking-widest uppercase border-b border-primary pb-1 hover:text-on-secondary-container transition-all duration-300 hover:translate-x-1" href="/estudio">
                    Ver Manifiesto
                    <span className="material-symbols-outlined text-[16px] transition-transform duration-300 group-hover:translate-x-1">arrow_right_alt</span>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Gallery / Bento Section */}
        <section className="py-20 md:py-32 px-4 sm:px-6 md:px-12 max-w-screen-2xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-1">
            {/* Col 1 */}
            <div className="group space-y-1 transition-transform duration-500 hover:-translate-y-1.5">
              <div className="aspect-[4/5] bg-surface-container overflow-hidden group">
                <img alt="Detalle de identidad visual" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" data-alt="Composición abstracta con formas fluidas y tonos neutros" src={content1}/>
              </div>
              <div className="p-6 md:p-8 border border-outline-variant/30 transition-all duration-500 group-hover:-translate-y-1 group-hover:shadow-[0_16px_30px_rgba(58,18,55,0.06)]">
                <span className="font-label text-[10px] tracking-widest uppercase opacity-60">01 / Identidad</span>
                <h3 className="font-headline text-2xl mt-4">Conscious Branding</h3>
              </div>
            </div>

            {/* Col 2 (Asymmetric Offset) */}
            <div className="group space-y-1 md:-mt-12 transition-transform duration-500 hover:-translate-y-1.5">
              <div className="p-6 md:p-8 border border-outline-variant/30 bg-surface transition-all duration-500 group-hover:shadow-[0_16px_30px_rgba(58,18,55,0.06)]">
                <span className="font-label text-[10px] tracking-widest uppercase opacity-60">02 / Espacio</span>
                <h3 className="font-headline text-2xl mt-4">Dirección Creativa</h3>
              </div>
              <div className="aspect-square bg-primary-container overflow-hidden relative transition-all duration-700 group-hover:shadow-[0_20px_40px_rgba(58,18,55,0.1)]">
                <img alt="Proceso creativo y espacio" className="w-full h-full object-cover brightness-75 transition-transform duration-700 group-hover:scale-110" data-alt="Escena de trabajo editorial con texturas, papel y luz direccional" src={content2}/>
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="w-48 h-48 border border-on-primary/20 rotate-45 transition-transform duration-700 group-hover:rotate-[52deg]"></div>
                </div>
              </div>
            </div>

            {/* Col 3 */}
            <div className="group space-y-1 transition-transform duration-500 hover:-translate-y-1.5">
              <div className="aspect-[3/4] bg-surface-container-high overflow-hidden group">
                <img alt="Composición editorial contemporánea" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" data-alt="Composición visual de alto contraste con estética editorial contemporánea" src={content3}/>
              </div>
              <div className="p-6 md:p-8 border border-outline-variant/30 transition-all duration-500 group-hover:-translate-y-1 group-hover:shadow-[0_16px_30px_rgba(58,18,55,0.06)]">
                <span className="font-label text-[10px] tracking-widest uppercase opacity-60">03 / Digital</span>
                <h3 className="font-headline text-2xl mt-4">Ecosistemas Dinámicos</h3>
              </div>
            </div>
          </div>
        </section>

        {/* Newsletter / Contact Teaser */}
        <section className="py-20 md:py-32 px-4 sm:px-6 md:px-12 border-t border-outline-variant/20">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl sm:text-4xl md:text-6xl font-headline font-bold mb-10 md:mb-12 text-primary">Hablemos del futuro.</h2>
            <form className="relative group">
              <input className="w-full bg-transparent border-b border-outline-variant py-6 font-label text-xs tracking-widest outline-none focus:border-primary transition-colors duration-300 uppercase px-0" placeholder="CORREO ELECTRÓNICO" type="email"/>
              <button className="absolute right-0 bottom-6 transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-0.5" type="submit">
                <span className="material-symbols-outlined text-primary transition-transform duration-300 group-hover:scale-110">arrow_forward</span>
              </button>
            </form>
          </div>
        </section>
      </main>

    </>
  )
}
