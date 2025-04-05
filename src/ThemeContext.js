// ThemeContext.js
import React, { createContext, useContext, useState, useEffect } from 'react';

// Создаем контекст
const ThemeContext = createContext();

// Создаем провайдер
export const ThemeProvider = ({ children }) => {
    const [isDarkTheme, setIsDarkTheme] = useState(false);

    const toggleTheme = () => {
        setIsDarkTheme(prevTheme => !prevTheme);
    };

    // Эффект для изменения стилей body
    useEffect(() => {
        if (isDarkTheme) {
            document.body.style.backgroundColor = ' #ff008c'; // Цвет фона для темной темы
        } else {
            document.body.style.backgroundColor = ' #ffee00'; // Цвет фона для светлой темы
        }
    }, [isDarkTheme]); // Зависимость от isDarkTheme

    return (
        <ThemeContext.Provider value={{ isDarkTheme, toggleTheme }}>
            {children}
        </ThemeContext.Provider>
    );
};

// Хук для использования контекст
export const useTheme = () => {
    return useContext(ThemeContext);
};