import React, { useState } from 'react';
import { Link } from 'react-router-dom'; // Импортируйте Link
import './Menu.css';
import { useTheme } from '../ThemeContext';

const Menu = ({ items, onSelect }) => {
    const [isOpen, setIsOpen] = useState(false);
    const { toggleTheme } = useTheme(); // Используйте контекст темы

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    return (
        <div className="menu">
            <button className="menu-button" onClick={toggleMenu}>
                Меню
            </button>
            {isOpen && (
                <div className="menu-dropdown">
                    <h3>Выберите лабораторную работу:</h3>
                    <ul>
                        {items.map((item, index) => (
                            <li key={index}>
                                <Link to={item.path} onClick={() => onSelect(item.description)}>
                                    {item.title}
                                </Link>
                            </li>
                        ))}
                    </ul>
                </div>
            )}
            <button className="theme-toggle-button" onClick={toggleTheme}>
                Изменить тему
            </button>
        </div>
    );
};

export default Menu;