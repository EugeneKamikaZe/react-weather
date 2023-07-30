/**
 * Хук изменяет favicon
 * @param icon - ссылка на *.ico
 */
export function useFavicon(icon: string) {
    const favicon = document.getElementById('favicon') as HTMLLinkElement;

    favicon.href = icon;
}
