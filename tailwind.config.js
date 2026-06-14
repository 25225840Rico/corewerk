/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{html,js,svelte,ts}'],
	theme: {
		extend: {
			colors: {
				// --- Paleta CoreWerk (B2B industrial) ---
				primary: '#0A1628', // azul noche industrial (fondos de marca, hero, footer)
				'primary-700': '#0F1F38', // navy un punto más claro (cards sobre primary)
				accent: '#F59E0B', // ámbar (CTAs, foco)
				'accent-soft': '#FBBF24',
				accent2: '#0EA5E9', // celeste eléctrico (highlights tecnológicos)
				surface: '#F8FAFC', // fondo base claro
				'surface-200': '#EEF2F7', // superficie alterna
				ink: '#1E293B', // texto principal sobre claro
				muted: '#64748B', // texto secundario
				faint: '#94A3B8', // texto terciario
				line: '#E2E8F0', // bordes
				danger: '#EF4444', // urgencia / alertas
				success: '#10B981' // confirmaciones
			},
			fontFamily: {
				sans: ['Inter', 'ui-sans-serif', 'system-ui', 'sans-serif']
			},
			spacing: {
				18: '4.5rem',
				22: '5.5rem',
				30: '7.5rem'
			},
			borderRadius: {
				xl: '0.875rem',
				'2xl': '1.25rem',
				'3xl': '1.75rem'
			},
			transitionTimingFunction: {
				spring: 'cubic-bezier(0.22, 1, 0.36, 1)',
				'spring-soft': 'cubic-bezier(0.34, 1.56, 0.64, 1)',
				exit: 'cubic-bezier(0.4, 0, 1, 1)'
			},
			transitionDuration: {
				90: '90ms',
				120: '120ms'
			},
			boxShadow: {
				card: '0 1px 2px rgba(15,23,42,0.04), 0 4px 16px rgba(15,23,42,0.06)',
				'card-lg': '0 8px 24px rgba(15,23,42,0.08), 0 20px 48px rgba(15,23,42,0.10)',
				glow: '0 0 0 1px rgba(245,158,11,0.35), 0 8px 30px rgba(245,158,11,0.25)'
			}
		}
	},
	plugins: []
};
