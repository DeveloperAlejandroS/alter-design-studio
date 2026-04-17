import { useEffect } from "react";
import { Routes, Route, useLocation } from "react-router-dom";
import { AnimatePresence, motion } from "framer-motion";
import Home from "./pages/Home";
import Estudio from "./pages/Estudio";
import Equipo from "./pages/Equipo";
import Contacto from "./pages/Contacto";
import FixedNavbar from "./components/FixedNavbar";
import FixedFooter from "./components/FixedFooter";

function App() {
  const location = useLocation();

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, [location.pathname]);

  useEffect(() => {
    const pageMeta: Record<string, { title: string; description: string }> = {
      "/": {
        title: "ALTER Studio | Inicio",
        description:
          "Diseño estratégico, narrativa de marca y dirección creativa para transformar la identidad visual de marcas contemporáneas.",
      },
      "/estudio": {
        title: "ALTER Studio | Estudio",
        description:
          "Conoce el manifiesto de ALTER Studio: intención, coherencia y transformación aplicadas al diseño de marca.",
      },
      "/equipo": {
        title: "ALTER Studio | Nosotras",
        description:
          "Descubre la visión y especialidades del equipo de ALTER Studio en estrategia, identidad visual y curaduría creativa.",
      },
      "/contacto": {
        title: "ALTER Studio | Contacto",
        description:
          "Solicita una consultoría de marca con ALTER Studio. Conversemos sobre identidad visual, dirección creativa y crecimiento digital.",
      },
    };

    const fallback = {
      title: "ALTER Studio | Diseño, Identidad y Dirección Creativa",
      description:
        "ALTER Studio crea experiencias visuales y estratégicas para marcas que buscan evolucionar con coherencia.",
    };

    const meta = pageMeta[location.pathname] ?? fallback;
    document.title = meta.title;

    const descriptionTag = document.querySelector('meta[name="description"]');
    if (descriptionTag) {
      descriptionTag.setAttribute("content", meta.description);
    }
  }, [location.pathname]);

  return (
    <>
      <a
        href="#main-content"
        className="skip-link absolute left-4 top-2 z-[60] -translate-y-16 rounded bg-primary px-4 py-2 text-sm font-label uppercase tracking-wider text-surface transition-transform focus:translate-y-0"
      >
        Saltar al contenido
      </a>
      <FixedNavbar />
      <AnimatePresence mode="wait" initial={false}>
        <motion.div
          tabIndex={-1}
          key={location.pathname}
          initial={{ opacity: 0, y: 14, filter: "blur(4px)" }}
          animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
          exit={{ opacity: 0, y: -10, filter: "blur(4px)" }}
          transition={{ duration: 0.48, ease: [0.2, 0.8, 0.2, 1] }}
        >
          <Routes location={location}>
            <Route path="/" element={<Home />} />
            <Route path="/estudio" element={<Estudio />} />
            <Route path="/equipo" element={<Equipo />} />
            <Route path="/contacto" element={<Contacto />} />
          </Routes>
        </motion.div>
      </AnimatePresence>
      <FixedFooter />
    </>
  );
}

export default App;
