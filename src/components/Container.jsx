// src/components/Container.js
import React from 'react';
import './Container.css';
import { useTheme } from '../ThemeContext';



const Container = ({ children }) => {
    const { isDarkTheme } = useTheme();
    return <div className="container" style={{ backgroundColor: isDarkTheme ? '#ff008c' : '#ffee00' }}>{children}</div>;
};
const Container2 = ({ children }) => {
    const { isDarkTheme } = useTheme();
    return <div className="container2" style={{ backgroundColor: isDarkTheme ? '#ffee00' : '#ff008c' }}>{children}</div>;
};

export  {Container, Container2}; 
