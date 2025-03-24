// src/App.js
import React, { useState } from 'react';
import {Container, Container2} from './components/Container';

import Button from './components/Button';
import Content from './components/Content';
import Footer from './components/Footer';
import Header from './components/Header';
import Menu from './components/Menu';

const labWorks = [
    { title: 'Лабораторная работа 1', description: 'Описание лабораторной работы 1.' },
    { title: 'Лабораторная работа 2', description: 'Описание лабораторной работы 2.' },
    { title: 'Лабораторная работа 3', description: 'Описание лабораторной работы 3.' },
];

const App = () => {
    const [selectedDescription, setSelectedDescription] = useState('');

    const handleSelect = (description) => {
        setSelectedDescription(description);
    };

    return (
        <Container>
            <Header />
            <Menu items={labWorks} onSelect={handleSelect} />
            <Container2> 
                <Content description={selectedDescription} />
            </Container2>
            
            <Footer />
        </Container>
    );
};

export default App;