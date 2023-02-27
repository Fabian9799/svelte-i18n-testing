import '$lib/i18n'; // Import to initialize. Important :)
import { locale, waitLocale } from 'svelte-i18n';
import type { LayoutLoad } from './$types';

export const load: LayoutLoad = async (load) => {
	const lang = load.params.lang || 'en';
	locale.set(lang);
	await waitLocale();
};
