# CHECKPOINT — CoreWerk (konrad → corewerk)

## Proyecto
SvelteKit + Svelte 5 runes + TS + Tailwind v3 + adapter-static. GSAP instalado.
Local: C:\Users\aronr\OneDrive\Escritorio\konrad
Repo GitHub: 25225840Rico/corewerk. Rama: main.
Deploy: GitHub Pages vía Actions (.github/workflows/deploy.yml), BASE_PATH=/corewerk.
Enlace en vivo: https://25225840rico.github.io/corewerk/
Sistema visual: glass/dark + acento ámbar #F59E0B y verde-IA #10B981 (definitivo).

## Fase actual
Subpáginas internas COMPLETADAS en código (build limpio) y commiteadas/pusheadas.
Deploy GitHub Pages disparado por el push. La home ya estaba desplegada antes (79d5274).

## Hecho en esta sesión (2026-06-14, sesión 2)
- 8 componentes interior reutilizables en src/lib/components/interior/:
  HeroInterior, InteriorSection, FeatureGrid, CheckList, ProcesoInterior,
  PreciosInterior (props ai + items), FaqInterior, CTAInterior.
- 35 subpáginas creadas (36 HTML con la home), todos los links de Navbar/Footer resuelven:
  - /sitios/ + 9 hijos (landing-page como plantilla de referencia)
  - /inteligencia-artificial/ (hub extenso) + 5 hijos (verde-IA, ai={true})
  - /servicios/ + 8 hijos
  - /servicios-basicos/ + 5 hijos
  - /portafolio/, /nosotros/, /contacto/, /blog/ (blog noindex, "próximamente")
- Cada página: <svelte:head> con title/description únicos + canonical + JSON-LD
  (Service/CollectionPage/AboutPage/ContactPage + BreadcrumbList + FAQPage).
- Reparto en agentes: 5 builders (haiku, 1 sonnet para hub IA) + 2 ux-ui-expert (auditoría)
  + 2 builders fixer (haiku). Archivos disjuntos por pillar.
- Fixes UX/UI aplicados (de la auditoría de 2 agentes):
  - Globales (yo): contraste muted #64748B→#94A3B8 (WCAG AA); hover breadcrumb
    interpolado roto→ternario estático; CheckList accentText derivado de ai;
    InteriorSection scroll-mt-20 + h2 lg:text-4xl; PreciosInterior prop ai (btn-ai);
    FaqInterior borde + aria-labelledby + sr-only estado; CTAInterior padding móvil;
    FeatureGrid reveal escalonado; portfolioItems +campo icon.
  - Por página (fixers): PreciosInterior ai={true} en las 6 páginas IA; tabla comparativa
    min-w-[600px]; burbujas chat max-w-[75%]; logo-branding emojis→FeatureGrid;
    nosotros h1 con "CoreWerk"; contacto/blog sin rounded + emojis→Icon; portafolio icon dinámico.

## Verificación
- `npm run build`: exit 0, sin 404, 36 páginas en build/.
- `npm run check`: 0 ERRORS (1 warning ambiental: tsconfig "type node", preexistente).

## Próximo paso accionable
1) Verificar deploy: que la Action termine OK y https://25225840rico.github.io/corewerk/
   + subpáginas respondan HTTP 200 (revisar /sitios/, /inteligencia-artificial/, /servicios/).
2) Considerar volver svelte.config handleHttpError de 'warn' a 'fail' (ya no hay 404).
3) Reemplazar datos placeholder (ver bloqueos) cuando el usuario los entregue.

## Decisiones clave
- Componentes interior reutilizables como base de todas las subpáginas (de-riesga y unifica).
- /sitios/landing-page/ es la plantilla de referencia para futuras páginas.
- blog en noindex hasta tener artículos reales (evita thin content).
- Empresa NUEVA: nosotros sin trayectoria inventada; "nuevos + especialistas IA" = ventaja.

## Bloqueos / pendientes datos reales (NO inventar)
- WhatsApp real (placeholder +56 9 0000 0000 en src/lib/seo/site.ts y data.ts contact).
- PUBLIC_ANTHROPIC_KEY real para el chat en prod (ojo: key PUBLIC queda expuesta en bundle).
- email hola@corewerk.cl / contacto@corewerk.cl: confirmar cuál es el real (site.ts vs data.ts).

## Gotchas
- .env PUBLIC_ANTHROPIC_KEY en .gitignore. AgenteDemo usa $env/dynamic/public (static rompe CI).
- Git Bash mangla BASE_PATH=/corewerk en Windows; usar MSYS_NO_PATHCONV=1 si se prueba local.
- Legacy sin uso: Industrias, Casos, ComoTrabajamos, CashflowRapido, Pricing.
- border-radius 0 en todo el sistema glass (las burbujas de chat son la excepción justificada).
