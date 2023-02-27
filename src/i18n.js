import { register, init, getLocaleFromNavigator } from 'svelte-i18n';

register('en', () => import('./locale/en.json'));
register('de', () => import('./locale/de.json'));

// Fallback if language doesn't exist
init({
    fallbackLocale: 'en',
    initialLocale: getLocaleFromNavigator(),
});