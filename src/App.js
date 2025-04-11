
import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, useLocation } from 'react-router-dom';
import { Provider } from 'react-redux';
import { ThemeProvider } from './ThemeContext';
import { FeedbackProvider } from './feedback/FeedbackContext';
import FeedbackBlock from './FeedbackBlock';
import Footer from './components/Footer';
import Header from './components/Header';
import Menu from './components/Menu';
import { AuthProvider, useAuth } from './auto/AuthContext'; // Импортируем useAuth
import { Container, Container2 } from './components/Container';
import { Content, labWorks } from './components/Content';
import Counter from './components/Counter';
import About from './components/About';
import store from './redux/store';






const App = () => {
    const [selectedDescription, setSelectedDescription] = useState('');



    return (
        <Provider store={store}>
            <ThemeProvider>
                <Router>
                    <FeedbackProvider>
                        <AuthProvider>
                            <MainContent onSelect={setSelectedDescription} />
                            
                        </AuthProvider>
                    </FeedbackProvider>    
                </Router>
            </ThemeProvider>
        </Provider>
    );
};

const MainContent = ({ onSelect }) => {
    const { isAuthenticated } = useAuth(); // Получаем isAuthenticated из контекста аутентификации
    const location = useLocation(); // Получаем текущий путь

    useEffect(() => {
        if (location.pathname.includes('lab')) {
            alert("Страница смонтирована");
        }
    }, [location.pathname]);

    return (
        <Container>
            <Header />
           
            <Container2>
                <Content />
               
                {isAuthenticated && location.pathname === '/counter' && <Counter  />} {/* Условный рендеринг на основе isAuthenticated */}
                {isAuthenticated && location.pathname === '/about' && <About  />} {/* Условный рендеринг на основе isAuthenticated */}
                {isAuthenticated && location.pathname === '/main' && <Counter  />} {/* Условный рендеринг на основе isAuthenticated */}
            </Container2>
            <Footer />
        </Container>
    );
};

export default App;