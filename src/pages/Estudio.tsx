import OrganicShape from '../components/OrganicShape'

export default function Estudio() {
  return (
    <>
      <main id="main-content" aria-label="Manifiesto de Estudio ALTER">
        {/* Hero Section: Manifesto Title */}
        <section className="px-4 sm:px-6 md:px-12 pt-24 md:pt-32 pb-16 md:pb-24 max-w-screen-2xl mx-auto relative overflow-hidden">
          <OrganicShape className="absolute -top-20 -left-24 w-[28rem] h-[20rem] z-0 opacity-20 organic-float-slow pointer-events-none" variant="blob" />
          <OrganicShape className="absolute -bottom-16 right-[-5rem] w-[18rem] h-[14rem] z-0 opacity-15 organic-float-reverse pointer-events-none" variant="petal" />
          <div className="grid grid-cols-1 md:grid-cols-12 gap-12 items-end">
            <div className="md:col-span-8">
              <span className="font-label text-xs tracking-[0.3em] uppercase mb-8 block text-outline">Filosofía &amp; Visión</span>
              <h1 className="text-4xl sm:text-5xl md:text-[10rem] font-bold leading-[0.9] md:leading-[0.85] tracking-tighter font-headline text-primary">
                ESTUDIO <br/> <span className="italic font-normal">Manifesto.</span>
              </h1>
            </div>
            <div className="md:col-span-4 pb-4">
              <p className="text-lg font-light leading-relaxed max-w-xs text-on-surface-variant">
                Una búsqueda constante de la esencia a través del diseño consciente. No construimos imágenes; orquestamos significados que perduran en el tiempo.
              </p>
            </div>
          </div>
          <div className="mt-14 md:mt-24 h-px bg-outline-variant/30 w-full"></div>
          <OrganicShape className="mt-12 w-full h-12 opacity-20 pointer-events-none" variant="separator" />
        </section>

        {/* Values Section: Asymmetric Editorial Layout */}
        <section className="bg-surface-dim/30 py-16 md:py-32 border-y border-outline-variant/20 relative overflow-hidden">
          <OrganicShape className="absolute top-40 right-[-8rem] w-[26rem] h-[20rem] z-0 opacity-20 organic-float-slow pointer-events-none" variant="blob" />
          <OrganicShape className="absolute bottom-20 left-[-6rem] w-[20rem] h-[15rem] z-0 opacity-15 organic-float-reverse pointer-events-none" variant="petal" />
          <div className="max-w-screen-2xl mx-auto px-4 sm:px-6 md:px-12">
            {/* Intención & Coherencia */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-14 md:gap-32 mb-20 md:mb-48">
              <div className="relative">
                <span className="font-headline text-[6rem] md:text-[12rem] opacity-[0.03] absolute -top-10 md:-top-20 -left-4 md:-left-10 select-none">01</span>
                <h2 className="text-4xl md:text-6xl font-bold font-headline mb-6 md:mb-8 tracking-tight">Intención</h2>
                <p className="text-xl font-light leading-relaxed max-w-md">
                  Cada trazo, cada vacío, cada decisión tipográfica nace de un propósito deliberado. Rechazamos lo decorativo en favor de lo significativo.
                </p>
                <div className="mt-12 w-24 h-px bg-primary"></div>
              </div>
              <div className="md:mt-64">
                <div className="mb-12 overflow-hidden">
                  <img className="w-full grayscale brightness-90 hover:scale-105 transition-transform duration-700 aspect-[4/5] object-cover" data-alt="Minimalist architectural detail showing light and shadow on a clean concrete wall with sharp geometric lines" src="https://lh3.googleusercontent.com/aida-public/AB6AXuAsnsQB52R6rJO24IO442GLaTrC5QJc25lqEVl17htPOKn4vBWvoau2KAdQx7lGp5RP8nW5fF37WkqaqYxkzsbobSpuJfjrWAYUVwccjHRnn4gQxNXK_BFqkpnQC9Fcfv6WWfty6GIGr9gEN1KK9MI3eiPMTu-wWxe-Vh3MLpw1T_l9r8FV6jBfHRBUuotiZyiml_9KzL6bqe0fNKyr25TMZJAw_nVtNjcNNmVptYE59HiYPu_AbUKs4YGh21I27Bn2VB4_NVP0JUu-"/>
                </div>
                <h2 className="text-4xl md:text-6xl font-bold font-headline mb-6 md:mb-8 tracking-tight text-right">Coherencia</h2>
                <p className="text-xl font-light leading-relaxed max-w-md ml-auto text-right">
                  La armonía entre el concepto y la ejecución. Creamos sistemas visuales que hablan un solo lenguaje, sin importar el medio o la escala.
                </p>
              </div>
            </div>

            {/* Separation Line */}
            <div className="w-full h-px bg-outline-variant mb-20 md:mb-48"></div>

            {/* Exploración & Transformación */}
            <div className="grid grid-cols-1 md:grid-cols-12 gap-10 md:gap-12 mb-20 md:mb-48 items-center">
              <div className="md:col-span-5 order-2 md:order-1">
                <h2 className="text-5xl md:text-8xl font-bold font-headline mb-6 md:mb-8 tracking-tighter leading-none italic">Exploración</h2>
                <p className="text-xl font-light leading-relaxed mb-12">
                  Entendemos el diseño como un laboratorio de ideas. Cuestionamos lo establecido para encontrar soluciones que desafíen la convención.
                </p>
                <div className="lotus-mask overflow-hidden aspect-square bg-primary-container">
                  <img className="w-full h-full object-cover mix-blend-soft-light opacity-80" data-alt="Abstract fluid shapes in shades of deep purple and cream, resembling organic lotus petals in motion" src="https://lh3.googleusercontent.com/aida-public/AB6AXuDO8MUpb7RvPzE9qvZjLVh0nVsZZ4sRiJ9PdQ78FKohDZ6QfrOtdY4ck8WEWEYkJfloF11xkeVruK37ltG-qvL-NGI3Ma7292cCb8WGk6MpmoXyYVp-3CV8_4tJxTfxd7xCc9GPd9ljCol6OJPF3iaQnQBatAHZdnusOpPmiazOwQCIgRJaWlP-__qzjhGzk0TXGgSaUy2Ekf3qQwSEqfUz1PA9zbnVtMx-0GqdnLC2i6rYkEweadN8O8_IFbpKpKV4kRA8c_HrrRwj"/>
                </div>
              </div>
              <div className="md:col-span-2 hidden md:flex justify-center order-2">
                <div className="h-96 w-px bg-outline-variant"></div>
              </div>
              <div className="md:col-span-5 order-1 md:order-3">
                <span className="font-label text-[10px] tracking-[0.5em] uppercase text-outline block mb-4">El proceso de cambio</span>
                <h2 className="text-4xl md:text-6xl font-bold font-headline mb-6 md:mb-8 tracking-tight">Transformación</h2>
                <p className="text-xl font-light leading-relaxed max-w-sm mb-8">
                  Nuestros proyectos no solo comunican; alteran la percepción de la audiencia y elevan el valor de marca hacia una nueva dimensión.
                </p>
                <button className="font-serif text-sm italic border-b border-primary pb-1 hover:text-primary-container transition-colors">Ver casos de estudio</button>
              </div>
            </div>

            {/* Separation Line */}
            <div className="w-full h-px bg-outline-variant mb-20 md:mb-48"></div>

            {/* Sensibilidad & Autenticidad */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 items-start">
              <div className="bg-primary text-surface p-8 md:p-16 h-full flex flex-col justify-between">
                <div>
                  <h2 className="text-4xl md:text-7xl font-bold font-headline mb-8 md:mb-12 leading-[0.9]">Sensibilidad</h2>
                  <p className="text-xl md:text-2xl font-light leading-relaxed opacity-80">
                    La capacidad de observar lo invisible. Diseñamos con el tacto, el oído y el alma, capturando la esencia emocional de cada marca.
                  </p>
                </div>
                <div className="mt-24">
                  <span className="material-symbols-outlined text-4xl">auto_awesome</span>
                </div>
              </div>
              <div className="p-8 md:p-16 border border-outline-variant h-full">
                <span className="font-label text-xs tracking-widest uppercase mb-12 block opacity-60">The Core Pillar</span>
                <h2 className="text-4xl md:text-7xl font-bold font-headline mb-8 md:mb-12 text-primary leading-[0.9]">Autenticidad</h2>
                <p className="text-lg md:text-xl font-light leading-relaxed text-on-surface-variant mb-8 md:mb-12">
                  En un mundo de imitaciones, la verdad es el mayor lujo. Ayudamos a las marcas a encontrar su voz única y a proyectarla con orgullo editorial.
                </p>
                <div className="grid grid-cols-2 gap-4 mt-12">
                  <div className="aspect-video bg-surface-dim overflow-hidden">
                    <img className="w-full h-full object-cover grayscale" data-alt="Satellite imagery of earth at night showing interconnected city lights like neural networks" src="https://lh3.googleusercontent.com/aida-public/AB6AXuCBovd0M9XB9PBYclOl5fobL4Llx9Y-FhBn9JxxvXj7nQo8_wE9fDLDk27gcwYrgME6ErR4cLMzHLAP5s84rQyNtyXPQwG3EucX8LpanLXknqVHrxKNq3UgdFQlNVWRBDxWyKemqB_hszV4ZHdXyWqeyh7HepMCX0RSQj1BjBYH0d2ElFlDwcvfzpNCAH3Mzv5NGQXCBvbOXbG-sLfQXTibeC1w-BEYh-AXY0sl5NGmVgavjTX_gy1_5yplijOYJJlwfshInSFfLRda"/>
                  </div>
                  <div className="aspect-video bg-surface-dim overflow-hidden">
                    <img className="w-full h-full object-cover grayscale" data-alt="Wide mountain landscape in soft misty light with minimalist composition" src="https://lh3.googleusercontent.com/aida-public/AB6AXuBg8bDtYCV0IVw8xh2ROhaoDWadIa3YyJ6pj-BUAdrY0NTxfvv0J4Hp2-0h1oa-JvOTvrA9GHuX3vUIa30tLhv7ojWYLYyeXNLIu4xy3vpdU_vkmIsu1j0FDLsDmyXTD5ao5gnwKdU4paqIYw4jmt6tPsfr7_tbmT8HO-DMQ_jw2XsDdCooBsD8ry1zT3aZII7yCNFNTvCyJV8VeQc2GJOgraU15PEA-MMV-G8LoZ9_8KJBAOZms-lgBPZTfONn0RcZPL2PhYXwELIV"/>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Call to Action */}
        <section className="py-20 md:py-48 px-4 sm:px-6 md:px-12 max-w-screen-2xl mx-auto text-center">
          <h3 className="text-3xl sm:text-4xl md:text-6xl font-bold font-headline mb-10 md:mb-12 max-w-4xl mx-auto leading-tight">
            ¿Listo para elevar la narrativa visual de su marca?
          </h3>
          <div className="flex flex-col md:flex-row justify-center items-center gap-8">
            <button className="bg-primary text-surface px-12 py-5 font-serif text-xl font-bold uppercase tracking-widest hover:bg-primary-container transition-all">
              Iniciar Proyecto
            </button>
          </div>
        </section>
      </main>

    </>
  )
}
