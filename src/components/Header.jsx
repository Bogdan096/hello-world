import React, { useState } from 'react';
import Menu from './Menu';
import './Menu.css';
import { useTheme } from '../ThemeContext';
import { useAuth } from '../auto/AuthContext'; 
import '../components/Header.css';
import { useNavigate } from 'react-router-dom';
import { Content, labWorks } from './Content';

const Header = () => {
    const { isDarkTheme, toggleTheme } = useTheme();
    const { isAuthenticated, logout, userEmail } = useAuth();
    const navigate = useNavigate();
    const [isOpen, setIsOpen] = useState(false);

    const handleEmailClick = () => {
        navigate('/profile');
    };

    const handleLogout = () => {
        logout();
        navigate('/');
    };

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    const menuItems = labWorks.map(work => ({
        title: work.title,
        path: work.path,
        description: work.description,
    }));

    return (
        <header className="header">
            {/* Кнопка меню */}
            <Menu className="menu-button" items={menuItems} onSelect={() => { /* Здесь можно оставить пустым или добавить другое действие */ }} />
            Лабораторные работы 
            {isAuthenticated ? (
                <>
                    <span className="user-email" onClick={handleEmailClick}>
                        {userEmail}
                    </span>
                    <button className="logout-button" onClick={handleLogout}>Выйти</button>
                    <button className="main-button" onClick={() => navigate('/main')}>
                        Главная
                    </button>
                    <button className="about-button" onClick={() => navigate('/about')}>
                        О себе
                    </button>
                    <button className="theme-button" onClick={toggleTheme}>
                        Изменить тему
                    </button>
                </>
            ) : (
                <button className="auth-button" onClick={() => alert('Заполните форму')}>Войти</button>
            )}
        </header>
    );
};

export default Header;
