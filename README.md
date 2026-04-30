# ALTER Studio — Ecosistema Digital

Plataforma web moderna de **ALTER Studio**, un estudio boutique de diseño digital basado en Bogotá.

![React](https://img.shields.io/badge/React-61DAFB?style=flat-square&logo=react&logoColor=black) ![TypeScript](https://img.shields.io/badge/TypeScript-3178C6?style=flat-square&logo=typescript&logoColor=white) ![Vite](https://img.shields.io/badge/Vite-646CFF?style=flat-square&logo=vite&logoColor=white) ![Tailwind](https://img.shields.io/badge/Tailwind_CSS-06B6D4?style=flat-square&logo=tailwind-css&logoColor=white) ![Framer](https://img.shields.io/badge/Framer_Motion-0055FF?style=flat-square&logo=framer&logoColor=white)

---

## Quick Start

### Prerequisites
- Node.js >= 18
- npm o yarn

### Installation

```bash
# Clonar el repositorio
git clone https://github.com/DeveloperAlejandroS/alter-design-studio.git
cd alter-design-studio

# Instalar dependencias
npm install

# Iniciar servidor de desarrollo
npm run dev

# Compilar para producción
npm run build

# Servir preview de build
npm run preview
```

---

## Tech Stack

| Tecnología | Versión | Propósito |
| :--- | :--- | :--- |
| **React** | ^18 | Librería UI |
| **TypeScript** | ^5 | Type safety |
| **Vite** | ^5 | Build tool & dev server |
| **React Router** | ^6 | Routing |
| **Tailwind CSS** | ^3 | Styling |
| **Framer Motion** | ^11 | Animaciones |
| **PostCSS** | ^8 | CSS processing |
| **ESLint** | ^8 | Code linting |

---

## Project Structure

```
src/
├── components/          # Componentes reutilizables
│   ├── BrandbookDownloadLink.tsx
│   ├── FixedFooter.tsx
│   ├── FixedNavbar.tsx
│   ├── MainNavLinks.tsx
│   ├── OrganicShape.tsx
│   └── SiteLogo.tsx
├── pages/              # Páginas (rutas principales)
│   ├── Home.tsx
│   ├── Estudio.tsx
│   ├── Equipo.tsx
│   └── Contacto.tsx
├── assets/             # Recursos estáticos
├── App.tsx             # Componente raíz
├── main.tsx            # Entry point
├── index.css           # Estilos globales
└── vite-env.d.ts       # Type definitions
```

---

## Available Scripts

```bash
# Desarrollo
npm run dev           # Inicia servidor en http://localhost:5173

# Producción
npm run build         # Compila TypeScript y empaqueta para prod
npm run preview       # Previsualizacion del build local

# Linting
npm run lint          # Ejecuta ESLint
```

---

## Key Components

- **FixedNavbar** — Navegación persistente en la parte superior
- **FixedFooter** — Footer fijo en la parte inferior
- **MainNavLinks** — Links de navegación principal
- **OrganicShape** — Componente de formas orgánicas SVG
- **BrandbookDownloadLink** — Link para descargar brandbook

---

## Configuración de Estilo

### Tailwind CSS
Configurado en `tailwind.config.js` con variables personalizadas de marca.

### PostCSS
Procesamiento CSS configurado en `postcss.config.js`.

---

## Routing

Las rutas principales están definidas en `App.tsx`:
- `/` — Home
- `/estudio` — About Studio
- `/equipo` — Team
- `/contacto` — Contact

---

## Development Tips

- Los componentes están organizados por tipo (components vs pages)
- Se utiliza TypeScript para type safety
- Tailwind CSS para estilos — no CSS modules
- Framer Motion para animaciones suaves
- Hot Module Replacement (HMR) habilitado con Vite

---

## Browser Support

- Chrome/Edge (latest)
- Firefox (latest)
- Safari (latest)

---

*ALTER Studio — Bogotá, Colombia*
