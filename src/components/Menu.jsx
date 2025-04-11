import React, { useState } from 'react';
import { Link } from 'react-router-dom'; // Импортируйте Link
import './Menu.css';
import { Drawer, Button, List, ListItem, ListItemText } from '@mui/material';
import { useTheme } from '../ThemeContext';

const Menu = ({ items, onSelect }) => {
    const [isOpen, setIsOpen] = useState(false);
    const { toggleTheme } = useTheme(); // Используйте контекст темы

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    return (
        <div className="menu">
            <Button variant="contained" onClick={toggleMenu}>
                Меню
            </Button>
            <Drawer anchor="left" open={isOpen} onClose={toggleMenu}>
                <div style={{ width: 250 }}>
                    <h3>Выберите лабораторную работу:</h3>
                    <List>
                        {items.map((item, index) => (
                            <ListItem button key={index}>
                                <Link to={item.path} onClick={() => {
                                    onSelect(item.description);
                                    toggleMenu(); // Закрываем меню после выбора
                                }}>
                                    <ListItemText primary={item.title} />
                                </Link>
                            </ListItem>
                        ))}
                    </List>
                    {/* <Button variant="contained" onClick={toggleTheme}>
                        Изменить тему
                    </Button> */}
                </div>
            </Drawer>
        </div>
    );
};

export default Menu;
