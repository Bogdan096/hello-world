// src/components/Container.js
import React from 'react';
import './Container.css';

const Container = ({ children }) => {
    return <div className="container">{children}</div>;
};
const Container2 = ({ children }) => {
    return <div className="container2">{children}</div>;
};

export  {Container, Container2}; 
