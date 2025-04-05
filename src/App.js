
import React, { useState } from 'react';
import { BrowserRouter as Router, useLocation } from 'react-router-dom';
import { Provider } from 'react-redux';
import { ThemeProvider } from './ThemeContext';
import Footer from './components/Footer';
import Header from './components/Header';
import Menu from './components/Menu';
import { AuthProvider, useAuth } from './auto/AuthContext'; // Импортируем useAuth
import { Container, Container2 } from './components/Container';
import { Content, labWorks } from './components/Content';
import Counter from './components/Counter';
import store from './redux/store';

const App = () => {
    const [selectedDescription, setSelectedDescription] = useState('');

    const handleSelect = (description) => {
        setSelectedDescription(description);
    };

    return (
        <Provider store={store}>
            <ThemeProvider>
                <Router>
                    <AuthProvider>
                        <MainContent onSelect={handleSelect} />
                    </AuthProvider>
                </Router>
            </ThemeProvider>
        </Provider>
    );
};

const MainContent = ({ onSelect }) => {
    const { isAuthenticated } = useAuth(); // Получаем isAuthenticated из контекста аутентификации
    const location = useLocation(); // Получаем текущий путь


    return (
        <Container>
            <Header />
            <Menu items={labWorks} onSelect={onSelect} />
            <Container2>
                <Content />
                {isAuthenticated && location.pathname === '/counter' && <Counter  />} {/* Условный рендеринг на основе isAuthenticated */}
            </Container2>
            <Footer />
        </Container>
    );
};

export default App;