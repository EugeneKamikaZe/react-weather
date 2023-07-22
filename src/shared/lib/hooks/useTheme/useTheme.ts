import { useContext } from 'react';

import { LOCAL_STORAGE_THEME_KEY } from '~/shared/const/localstorage';
import { Theme } from '~/shared/const/theme';

import { ThemeContext } from '../../context/ThemeContext';

interface UseThemeResult {
    toggleTheme: () => void;
    //  какого-то хрена сравнивает с undefined (временное решение)
    theme?: Theme;
}

export function useTheme(): UseThemeResult {
    const { theme, setTheme } = useContext(ThemeContext);

    const toggleTheme = () => {
        const newTheme = theme === Theme.GRAY ? Theme.DEFAULT : Theme.GRAY;

        setTheme!(newTheme);
        localStorage.setItem(LOCAL_STORAGE_THEME_KEY, newTheme);
    };

    return { theme, toggleTheme };
}
