import { readable } from 'svelte/store';

/**
 * Create a reactive store that tracks a media query match state
 * @param query CSS media query string
 * @returns Readable store with boolean value
 */
export function useMediaQuery(query: string) {
	// Server-side rendering guard
	if (typeof window === 'undefined') {
		return readable(false);
	}

	return readable(false, (set) => {
		const mq = window.matchMedia(query);
		set(mq.matches);

		const listener = (e: MediaQueryListEvent) => set(e.matches);
		mq.addEventListener('change', listener);

		return () => mq.removeEventListener('change', listener);
	});
}

/**
 * Reactive store: true when viewport is mobile (max-width: 767px)
 */
export const isMobile = useMediaQuery('(max-width: 767px)');

/**
 * Reactive store: true when viewport is tablet (768px - 1023px)
 */
export const isTablet = useMediaQuery('(min-width: 768px) and (max-width: 1023px)');

/**
 * Reactive store: true when viewport is desktop (min-width: 1024px)
 */
export const isDesktop = useMediaQuery('(min-width: 1024px)');
