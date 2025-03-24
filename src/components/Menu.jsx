import React, { useState } from 'react';
import './Menu.css';

const Menu = ({ items, onSelect }) => {
    const [isOpen, setIsOpen] = useState(false);

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
                            <li key={index} onClick={() => onSelect(item.description)}>
                                {item.title}
                            </li>
                        ))}
                    </ul>
                </div>
            )}
        </div>
    );
};

export default Menu;
