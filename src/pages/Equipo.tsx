import OrganicShape from '../components/OrganicShape'

export default function Equipo() {
  return (
    <>
      <main id="main-content" aria-label="Equipo de ALTER Studio" className="pt-24 md:pt-32 min-h-screen overflow-x-hidden">
        {/* Hero Section */}
        <section className="px-4 sm:px-6 md:px-12 py-14 md:py-20 max-w-screen-2xl mx-auto border-b border-outline-variant/20 relative overflow-hidden">
          <OrganicShape className="absolute -top-16 -right-20 w-[22rem] h-[17rem] z-0 opacity-20 organic-float-slow pointer-events-none" variant="blob" />
          <OrganicShape className="absolute bottom-[-3rem] left-[-4rem] w-[16rem] h-[12rem] z-0 opacity-15 organic-float-reverse pointer-events-none" variant="petal" />
          <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-end">
            <div className="md:col-span-8">
              <span className="font-label text-xs tracking-[0.3em] uppercase opacity-60 mb-4 block">Conscious Evolution</span>
              <h1 className="text-4xl sm:text-5xl md:text-9xl font-headline font-bold leading-none tracking-tighter">
                El Alma tras <br/> el <span className="italic font-light">Monolito</span>.
              </h1>
            </div>
            <div className="md:col-span-4 pb-4">
              <p className="text-sm font-light leading-relaxed max-w-xs border-l border-primary pl-4 md:pl-6">
                Dos visiones, una misma búsqueda de la excelencia. Laura y Alejandra definen el equilibrio entre la estructura arquitectónica y la sensibilidad orgánica.
              </p>
            </div>
          </div>
        </section>

        {/* Asymmetric Team Grid */}
        <section className="max-w-screen-2xl mx-auto grid grid-cols-1 md:grid-cols-2 relative overflow-hidden">
          <OrganicShape className="absolute top-1/3 right-[42%] w-[14rem] h-[10rem] z-0 opacity-15 pointer-events-none" variant="separator" />
          {/* Block 1: Laura Hernández */}
          <article className="relative flex flex-col md:border-r border-outline-variant/20 group">
            <div className="aspect-[4/5] overflow-hidden relative">
              <OrganicShape className="absolute -top-6 -left-6 w-36 h-28 z-0 opacity-0 transition-opacity duration-700 ease-out group-hover:opacity-30 organic-float-slow pointer-events-none" variant="petal" />
              <img 
                className="relative z-10 w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-1000 ease-in-out scale-105 group-hover:scale-100" 
                data-alt="Laura Hernández - Gerente & Visionaria Comercial" 
                src={new URL('../assets/laura_profile.jpeg', import.meta.url).href}
              />
              <div className="absolute inset-0 bg-primary/5 mix-blend-multiply"></div>
            </div>
            <div className="p-6 sm:p-8 md:p-20 bg-surface">
              <div className="mb-8 md:mb-12 flex justify-between items-start gap-6">
                <div>
                  <h2 className="text-3xl sm:text-4xl md:text-5xl font-headline font-bold mb-2">Laura Hernández</h2>
                  <p className="font-label text-xs tracking-widest uppercase text-secondary">Gerente &amp; Visionaria Comercial</p>
                </div>
                <div className="w-12 h-12 flex items-center justify-center border border-outline-variant/30">
                  <span className="material-symbols-outlined text-primary text-xl">architecture</span>
                </div>
              </div>
              <div className="editorial-line mb-12 w-1/3"></div>
              <div className="space-y-8">
                <p className="text-xl md:text-2xl font-headline italic leading-snug">
                  "La estrategia no es un plan, es una coreografía entre la ambición y la realidad tangible."
                </p>
                <p className="font-body font-light text-base md:text-lg leading-relaxed opacity-80">
                  Con una formación en alta dirección y una obsesión por la eficiencia estructural, Laura es el cimiento de ALTER Studio. Su enfoque transforma conceptos abstractos en modelos de negocio sostenibles y de alto impacto. Ella no solo ve el presente, proyecta el legado de cada marca que tocamos.
                </p>
                <div className="pt-8">
                  <h4 className="font-label text-[10px] uppercase tracking-[0.2em] mb-4 opacity-50">Especialidades</h4>
                  <div className="flex flex-wrap gap-x-8 gap-y-2">
                    <span className="font-headline font-semibold text-sm">Dirección Estratégica</span>
                    <span className="font-headline font-semibold text-sm">Visión Comercial</span>
                    <span className="font-headline font-semibold text-sm">Arquitectura de Procesos</span>
                  </div>
                </div>
              </div>
            </div>
          </article>

          {/* Block 2: Alejandra Castro */}
          <article className="relative flex flex-col group bg-surface-dim">
            <div className="p-6 sm:p-8 md:p-20 order-2 md:order-1">
              <div className="mb-8 md:mb-12 flex justify-between items-start gap-6">
                <div>
                  <h2 className="text-3xl sm:text-4xl md:text-5xl font-headline font-bold mb-2">Alejandra Castro</h2>
                  <p className="font-label text-xs tracking-widest uppercase text-secondary">Diseñadora Gráfica &amp; Curadora Visual</p>
                </div>
                <div className="w-12 h-12 flex items-center justify-center border border-outline-variant/30">
                  <span className="material-symbols-outlined text-primary text-xl">auto_awesome</span>
                </div>
              </div>
              <div className="editorial-line mb-12 w-1/3 ml-auto"></div>
              <div className="space-y-8 text-right">
                <p className="text-xl md:text-2xl font-headline italic leading-snug">
                  "La estética es la forma más honesta de comunicación; es el alma manifestada en color y proporción."
                </p>
                <p className="font-body font-light text-base md:text-lg leading-relaxed opacity-80">
                  Especialista en identidad visual y coherencia estética. Alejandra aporta la sensibilidad necesaria para que lo rígido se vuelva fluido. Su trabajo se inspira en el diseño bogotano contemporáneo: crudo, directo, pero profundamente emocional. Ella cura cada píxel para que la marca respire.
                </p>
                <div className="pt-8">
                  <h4 className="font-label text-[10px] uppercase tracking-[0.2em] mb-4 opacity-50">Especialidades</h4>
                  <div className="flex flex-wrap gap-x-8 gap-y-2 justify-end">
                    <span className="font-headline font-semibold text-sm">Visual Identity</span>
                    <span className="font-headline font-semibold text-sm">Editorial Design</span>
                    <span className="font-headline font-semibold text-sm">Curaduría de Color</span>
                  </div>
                </div>
              </div>
            </div>
            <div className="aspect-[4/5] overflow-hidden relative order-1 md:order-2">
              <OrganicShape className="absolute -bottom-4 -right-4 w-40 h-32 z-0 opacity-0 transition-opacity duration-700 ease-out group-hover:opacity-30 organic-float-reverse pointer-events-none" variant="petal" />
              <div className="absolute inset-0 bg-gradient-to-t from-surface-dim to-transparent z-10 opacity-30"></div>
              <img 
                className="relative z-10 w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-1000 ease-in-out scale-105 group-hover:scale-100" 
                data-alt="Alejandra Castro - Diseñadora Gráfica & Curadora Visual" 
                src={new URL('../assets/alejandra_profile.jpeg', import.meta.url).href}
              />
              <div className="absolute top-10 right-10 w-32 h-32 organic-shape-1 bg-surface-container/40 backdrop-blur-sm z-20"></div>
            </div>
          </article>
        </section>

        {/* Philosophy Section */}
        <section className="bg-primary text-on-primary py-16 md:py-32 px-4 sm:px-6 md:px-12 overflow-hidden relative">
          <OrganicShape className="absolute -top-10 left-[-6rem] w-[22rem] h-[16rem] z-0 opacity-20 organic-float-slow pointer-events-none" variant="blob" />
          <OrganicShape className="absolute bottom-[-5rem] right-[-5rem] w-[20rem] h-[14rem] z-0 opacity-15 organic-float-reverse pointer-events-none" variant="petal" />
          <div className="max-w-screen-xl mx-auto relative z-10">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 md:gap-20 items-center">
              <div>
                <h3 className="text-4xl md:text-6xl font-headline font-bold leading-tight mb-6 md:mb-8">Nuestra dualidad es nuestra fuerza.</h3>
                <div className="editorial-line opacity-20 mb-8"></div>
                <p className="text-lg md:text-xl font-light opacity-80 leading-relaxed italic">
                  En ALTER Studio, no creemos en el diseño como un elemento aislado. Es la intersección donde el rigor de los negocios se encuentra con la poesía de la imagen. Laura construye el escenario; Alejandra dirige la luz.
                </p>
              </div>
              <div className="flex justify-center">
                <div className="w-44 h-44 md:w-64 md:h-64 border border-on-primary/20 flex items-center justify-center transform rotate-45">
                  <div className="w-full h-full border border-on-primary/20 transform -rotate-12 flex items-center justify-center">
                    <span className="material-symbols-outlined text-5xl md:text-7xl font-thin -rotate-[33deg]" style={{ fontVariationSettings: "'wght' 100" }}>all_inclusive</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* Decorative Grain */}
          <div className="absolute inset-0 opacity-10 pointer-events-none bg-[radial-gradient(#ffffff_1px,transparent_1px)] [background-size:20px_20px]"></div>
        </section>
      </main>

    </>
  )
}
