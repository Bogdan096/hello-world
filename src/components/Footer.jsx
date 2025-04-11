import React, { useState } from 'react';
import './Footer.css';
import FeedbackBlock from '../FeedbackBlock'; // Импортируем компонент FeedbackBlock

const Footer = () => {
    const [isFeedbackVisible, setFeedbackVisible] = useState(false); // Состояние для управления видимостью

    const toggleFeedback = () => {
        setFeedbackVisible(!isFeedbackVisible); // Переключаем видимость блока с отзывами
    };

    return (
        <footer className="footer">
            <button onClick={toggleFeedback}>
                Оставить отзыв
            </button>
            {isFeedbackVisible && <FeedbackBlock />} {/* Условный рендеринг блока с отзывами */}
            <p>© 2025 Все бобры защищены</p>
        </footer>
    );
};

export default Footer;