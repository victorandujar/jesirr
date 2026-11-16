# Jesirr — propuesta de web

Demo de Ammavaroo para Construcciones Metálicas Jesirr, S.L., taller de hierro y acero inoxidable en Cabrera de Mar (Maresme) desde 1991. **No es la web oficial.**

## Por qué

Su dominio `jesirr.com` ya no resuelve: hoy solo aparecen en el directorio de empresas del Ayuntamiento de Cabrera de Mar y en su ficha de Xarxa Industrial. El email es de Gmail.

## Idiomas

Castellano en `/` y catalán en `/ca` (textos en `src/i18n/ui.ts`). Selector en la cabecera, `hreflang` entre versiones y páginas legales en los dos idiomas.

## Identidad

- **Logo:** su logo (rojo #EF5A52 y negro) vectorizado con potrace a partir de la imagen de su ficha.
- **Paleta:** crema, negro hierro y el rojo del logo (con una variante más oscura para cumplir contraste).
- **Tipografía:** Archivo (anchura expandida para titulares) e Inter Tight, autoalojadas.
- **Elemento interactivo:** configurador de barandillas en el hero. Se elige el estilo (barrotes, forja, inox con tubos, inox y vidrio), el color y los metros, y el dibujo SVG se genera al momento (`src/scripts/barana.ts`). El botón «Pedir presupuesto» abre un email ya rellenado con el diseño elegido.

## Contenido y fuentes

- Datos: directorio municipal de Cabrera de Mar y ficha de Xarxa Industrial (historia 1991 → 1995, dirección, teléfonos, email, servicios, línea de decoración y perchas patentadas).
- Fotos: 19 recortes de los collages de trabajos reales de su ficha. Son pequeños (unos 190 px) y por eso se muestran como miniaturas enmarcadas que se amplían en un diálogo.

## Pendiente

- [ ] Confirmar en Google Maps que siguen activos en C/ Torrent de Can Boba 13.
- [ ] NIF para el aviso legal (ahora pone «pendiente»).
- [ ] Fotos originales a buena resolución.
- [ ] Horario.

## Stack

Astro (SSG) · TypeScript estricto · Tailwind 4 · JS mínimo. Modo demo con `PUBLIC_IS_DEMO` (por defecto activo: `noindex`, `robots.txt` cerrado y aviso visible). Lighthouse: rendimiento 98–99, accesibilidad 100, buenas prácticas 100 (SEO baja solo por el `noindex` del modo demo).

```bash
npm install
npm run dev
npm run build
```
