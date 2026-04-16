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
            <div className="h-[340px] sm:h-[460px] md:h-[600px] w-full bg-surface-dim relative overflow-hidden">
              <img alt="Studio interior" className="w-full h-full object-cover grayscale opacity-90" data-alt="Minimalist architectural studio space with high ceilings, concrete textures, and soft dramatic sunlight streaming through large windows" src="https://lh3.googleusercontent.com/aida-public/AB6AXuDAsHd1eFtlhrvD3PEEG4PBVKJ9Zlv21UZs3XGfhoG9WThwkHv9x-eO8YXmTIDwzxaYpAMI1JUzDNROLbmbL8ve0dNUb6ClEgYFlcfEbyxN2wkTGxhJVziNy7bzdOyhS36DRZb5Sj2X1HK0G4oPTLVjYOlBR2jS7GRamWOapgr8OULjDV_90EZeY6D0OOq8Hf8-K-eQDvoBtnzsY2pBP0QnY96DtC4ucjOUHO75gHK5uP8v-QGVbFGWOM8y_UyM5QhUq3GrS_PCwpK9"/>
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
                <div className="w-full md:w-1/2 h-80 bg-primary-container lotus-mask overflow-hidden">
                  <img alt="Organic texture" className="w-full h-full object-cover mix-blend-overlay opacity-50" data-alt="Abstract macro shot of organic petal textures with soft curves and delicate shadows in warm tonal palette" src="https://lh3.googleusercontent.com/aida-public/AB6AXuB2nazEa0irZmEgCCOK3nwc1Ayl0yhMCL1BTmLeIOxtNCKRqootSMiD-iae8-VDs-JMEx4n0Z5puGrE4L7wUOZ-0bTAfJQDmD05leKhx0bQk3JXv0UxxbRfwi7RB9VLjJmPUlyGLwZNB4qfQOouXpOF07z4KYIcqillI5JO-kvOfDOR0HsNiH2_GdRiXou5fkrsNrjZc_zq-5b_badFNKdidio5CEltIgT2CBuCJ36vCclYAc-CVmRQ-hZc6a1z1E15bJ7IWzVQIDHo"/>
                </div>
                <div className="w-full md:w-1/2">
                  <p className="font-body text-lg leading-relaxed text-on-surface-variant max-w-sm">
                    Nuestra metodología fusiona la precisión arquitectónica con la fluidez orgánica, creando identidades que respiran y mutan con el entorno.
                  </p>
                  <a className="inline-block mt-8 font-label text-xs tracking-widest uppercase border-b border-primary pb-1 hover:text-on-secondary-container transition-colors duration-300" href="/estudio">
                    Ver Manifiesto
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
            <div className="space-y-1">
              <div className="aspect-[4/5] bg-surface-container overflow-hidden group">
                <img alt="Design element" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" data-alt="Minimalist abstract 3D rendering of fluid shapes floating in a neutral space with soft lighting" src="https://lh3.googleusercontent.com/aida-public/AB6AXuAiJpucu8G76RD1Dmf9UrILK_lg0TXBAihqywFU9s1_7F8t7T2UMYN2QGVHflXIO0URm-uTBPhioc65fdevkvOPoG3qp2_rGVQf_4W25Gb2GJEzeFlwsZVpujbDs-orVrVHc9grzblX6Vyt-SKb-pCFqAvHy2-nRrn2PFsfjL1R2mqZ6L4KXWbSch53nlCkgIwc-sVsC7XGH0597VEIZQPppVNyh0DBiMTHwOrIZfaKvRPGge99Bz1lkyxdWukpGQhLY8nIBi6FAEYQ"/>
              </div>
              <div className="p-6 md:p-8 border border-outline-variant/30">
                <span className="font-label text-[10px] tracking-widest uppercase opacity-60">01 / Identidad</span>
                <h3 className="font-headline text-2xl mt-4">Conscious Branding</h3>
              </div>
            </div>

            {/* Col 2 (Asymmetric Offset) */}
            <div className="space-y-1 md:-mt-12">
              <div className="p-6 md:p-8 border border-outline-variant/30 bg-surface">
                <span className="font-label text-[10px] tracking-widest uppercase opacity-60">02 / Espacio</span>
                <h3 className="font-headline text-2xl mt-4">Dirección Creativa</h3>
              </div>
              <div className="aspect-square bg-primary-container overflow-hidden relative">
                <img alt="Creative process" className="w-full h-full object-cover grayscale brightness-75" data-alt="Elegant close-up of high-quality paper textures and architect drawings on a studio table with directional lighting" src="https://lh3.googleusercontent.com/aida-public/AB6AXuAPxfKD15diHDggzECz6oGIhyOjTZ3Jk0rqMJwKTAOvdKE9fhb-cwc2SJdHfX0TIHxQ6m8-mIMpl0KFi6-x0XySdxhfjczzRseYBm-vKvVDBafkroO9Fuma23sQfp_17DFPPmJZFZdNRtB0qQnuVxjXke3OFoSdDIda-VdnyrwAsDRgSnr3CVNOh2tQEjiZrbdqNBYSxGg3FyhOoYsMisDU4Rww8d6fIhB2WMS_hpib67PxfYnB9_7AP_gKYOmmjh_4_jGqqMFKg4SB"/>
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="w-48 h-48 border border-on-primary/20 rotate-45"></div>
                </div>
              </div>
            </div>

            {/* Col 3 */}
            <div className="space-y-1">
              <div className="aspect-[3/4] bg-surface-container-high overflow-hidden group">
                <img alt="Luxury editorial" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" data-alt="Editorial fashion photography with high contrast and sharp shadows on a minimalist neutral background" src="https://lh3.googleusercontent.com/aida-public/AB6AXuAfMrHwUcKP-NWUIxRqPwbm3sqd584hJdxK7BsiqAH-YHqPai9obh_T1Fd87m7RAe8a8PJbMNbfJmzV-IhkhBCCpy9yGhX4LY_cc0m8GNjf-D6eLmsuW2zVE4piUNNb0BreX0kDtMkm3T-Ydfo4hfx4GNehoseyEvGMw4XXZ3LNuRNul34EpcG_cW7vLub1-oOfYMMUin0-JYkrQfyKgFrxrtATfwrMw477fforUP5a-VJxgcaZ-8dVVjZF5JUElDo_kLErQu_36Ei1"/>
              </div>
              <div className="p-6 md:p-8 border border-outline-variant/30">
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
            <form className="relative">
              <input className="w-full bg-transparent border-b border-outline-variant py-6 font-label text-xs tracking-widest outline-none focus:border-primary transition-colors duration-300 uppercase px-0" placeholder="CORREO ELECTRÓNICO" type="email"/>
              <button className="absolute right-0 bottom-6" type="submit">
                <span className="material-symbols-outlined text-primary">arrow_forward</span>
              </button>
            </form>
          </div>
        </section>
      </main>

    </>
  )
}
