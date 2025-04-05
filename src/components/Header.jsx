import React from 'react';
import Menu from './Menu';
import { useTheme } from '../ThemeContext';
import { useAuth } from '../auto/AuthContext'; 
import '../components/Header.css';
import { useNavigate } from 'react-router-dom';

const Header = () => {
    const { isDarkTheme, toggleTheme } = useTheme();
    const { isAuthenticated, logout, userEmail } = useAuth();
    const navigate = useNavigate(); // Получаем navigate для навигации

    const handleEmailClick = () => {
        navigate('/profile'); // Переход на страницу профиля пользователя
    };

    const handleLogout = () => {
        logout(); // Вызываем функцию logout
        navigate('/'); // Переходим на главную страницу или страницу авторизации
    };

    return (
        <header className="header">
            Лабораторные работы 
            {isAuthenticated ? (
                <>
                    <span className="user-email" onClick={handleEmailClick}>
                        {userEmail}
                    </span>
                    <button className="logout-button" onClick={handleLogout}>Выйти</button>
                </>
            ) : (
                <button className="auth-button" onClick={() => alert('Заполните форму')}>Войти</button>
            )}
        </header>
    );
};

export default Header;