# Portfolio web personal — Milton Cárdenas

Trabajo Final de Diseño UX-UI 2026 · Licenciatura en Sistemas de Información · UADER FCyT

## Enlaces

- **Sitio publicado:** https://portfoliouxuitpfinal.netlify.app/
- **Figma (design system y prototipo):** https://www.figma.com/design/h7txeyAo3tkqKA6GzLMHhU/Portfolio-UX-UI?node-id=1-2&t=Wt0OtFvBFM7UfTeW-1
- **Repositorio:** https://github.com/CardenasMilton/Portfolio-UX-UI

## ¿Qué es este proyecto?

Es mi portfolio personal: una página única donde presento quién soy, qué sé hacer y los proyectos que realicé durante la carrera. Está pensado para que una persona que lo visite encuentre rápido mi perfil, un proyecto y cómo contactarme.

## Secciones del sitio

1. **Header:** barra fija con mi logo, links a cada sección, link a GitHub y botón de contacto. En celular se convierte en un menú hamburguesa.
2. **Hero:** nombre, rol, propuesta de valor, dos botones (ver trabajos y contacto), disponibilidad y zona horaria.
3. **Métricas:** tres cifras destacadas.
4. **Skills:** cuatro categorías con una descripción y sus herramientas.
5. **Proyectos:** dos tarjetas clickeables. Uno de los proyectos tiene su caso de estudio completo (problema, proceso, solución y resultado) en una ventana emergente.
6. **Experiencia y formación:** línea de tiempo con período, rol, institución y dos logros por ítem.
7. **Sobre mí:** presentación, retrato y tres principios de trabajo.
8. **Contacto:** botón de mail, LinkedIn y otras redes.
9. **Footer:** copyright, navegación y redes 

## Tecnologías

- **HTML5**: estructura de la página.
- **CSS3**: estilos, con variables para colores, tipografías y espaciados.
- **JavaScript**: menú hamburguesa y ventana del caso de estudio.
- **Google Fonts**: Manrope (títulos) e Inter (textos).
- **Figma**: wirefrime, design system y prototipo.
- **GitHub**: control de versiones.

## Cómo verlo en tu computadora

1. Descargar o clonar el repositorio.
2. Abrir la carpeta con Visual Studio Code.
3. Instalar la extensión **Live Server**.
4. Clic derecho sobre `index.html` → **Open with Live Server**.

No hace falta instalar nada más.

## Proceso de diseño

El detalle completo está en `docs/proceso-ux.md` y en el archivo de Figma. Resumen:

1. **Usuario objetivo:** reclutadores y estudios que necesitan encontrar, en menos de 30 segundos, quién soy, qué sé hacer, un proyecto y cómo contactarme.
2. **Benchmark:** análisis de 3 portfolios de referencia.
3. **Concepto visual:** tres palabras clave (claro, cercano y prolijo) que se traducen en colores, tipografías e imágenes.
4. **Arquitectura de información:** sitemap y card sorting.
5. **Wireframes** de baja fidelidad para mobile y desktop.
6. **Design system** en Figma: colores, tipografía, espaciado y componentes.
7. **Prototipo** de alta fidelidad para mobile (con menú cerrado y abierto) y desktop.
8. **Validación:** prueba de usabilidad con 3 personas. Comentarios de prueba y correcciones: 
Cremona Emma: Logro llegar bien a los proyectos sin problemas, entendio lo que estudio de manera sencilla, el deslizamiento del contacto le sirvio, considera que esta ordenado y se ve bien.
Rapallini Facundo:Logro acceder a todo bien, aunque comentó que se ve algo desordenado, hay letras chicas lo cual se buscaria corregir y un boton nuevo que te mande a la formacion 
Dumrauf Tomas:No tuvo problemas en deslizarse hacia las secciones que queria, tambien comenta que buscaria cambiar el fondo, pero que esta bueno que puedas leer todo directamente o buscar por partes lo que necesites de manera rapida 

## Design system (resumen)

| Elemento | Valor |
|---|---|
| Color primario | `#0F6B5C` |
| Color de acento | `#E8A33D` |
| Fondo | `#FAF7F2` |
| Texto | `#1F2933` |
| Tipografía de títulos | Manrope |
| Tipografía de textos | Inter |
| Espaciado | Múltiplos de 4 y 8 |

Los mismos valores están definidos como variables en Figma y en `assets/css/styles.css`.

## Accesibilidad

- Estructura con etiquetas semánticas (`header`, `nav`, `main`, `section`, `article`, `footer`) y un solo `h1`.
- Menú del celular con `aria-expanded` y `aria-controls`.
- Imágenes con texto alternativo.
- Se respetan las preferencias de movimiento reducido del sistema.

## Rendimiento y SEO

- Título, descripción, Open Graph, color del tema e ícono definidos.

Resultados de Lighthouse en celular (capturas en la carpeta `assets/img`)

## Uso de inteligencia artificial

Se utilizó Claude como asistente durante el trabajo, siguiendo la política de la cátedra.

**Qué se generó con IA**
- El código base de `index.html`, `assets/css/styles.css`, `assets/js/main.js`, `404.html` y `favicon.svg`.
- Propuestas iniciales de paleta de colores, tipografías y palabras clave del concepto visual.
- Una guía de trabajo: estructura del archivo de Figma, plantillas de investigación y esquema de la presentación.