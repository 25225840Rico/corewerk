# Decisiones de diseño — CoreWerk

2026-06-14 - Componentes interior reutilizables como base de las ~35 subpáginas - de-riesga el trabajo en paralelo de agentes y unifica el sistema visual; cada página solo compone props.
2026-06-14 - /sitios/landing-page/ es la plantilla de referencia canónica - los agentes la copian en estructura, head y JSON-LD.
2026-06-14 - text-muted #64748B → #94A3B8 - el original fallaba WCAG AA (~3.2:1) sobre #0A1628; el nuevo alcanza ~5.5:1. Afecta ~80% del texto de cuerpo de un solo cambio.
2026-06-14 - PreciosInterior con prop ai (btn-ai verde) - mantener coherencia del acento verde-IA en las páginas de IA hasta el momento de conversión (precios).
2026-06-14 - blog en robots=noindex - es placeholder "próximamente" sin contenido real; evita penalización por thin content hasta publicar artículos.
2026-06-14 - nosotros sin trayectoria inventada - empresa nueva; se enmarca "nuevos + especialistas en IA" como ventaja en vez de inventar años/clientes/premios.
2026-06-14 - border-radius 0 en todo el sistema glass; única excepción justificada: burbujas de chat (imitan UI de WhatsApp).
