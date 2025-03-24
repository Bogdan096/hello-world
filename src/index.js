import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import './index.css'; // Добавьте общий стиль для всего приложения, если необходимо.

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <React.StrictMode>
        <App />
    </React.StrictMode>
);