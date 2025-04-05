import React from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import './Content.css'; // Убедитесь, что этот файл существует и подключен
import { useAuth } from '../auto/AuthContext';
import { useTheme } from '../ThemeContext'; 
import AuthContainer from '../auto/AuthContainer';
import UserProfile from '../auto/userProfile'; 
import Counter from './Counter';

const labWorks = [
    { title: 'Лабораторная работа 1', description: 'Описание лабораторной работы 1.', path: '/lab1' },
    { title: 'Лабораторная работа 2', description: 'Описание лабораторной работы 2.', path: '/lab2' },
    { title: 'Лабораторная работа 3', description: 'Описание лабораторной работы 3.', path: '/lab3' },
    { title: 'Счетчик', description: '', path: '/counter' },
];

const Content = () => {
    const { isAuthenticated } = useAuth();
    const { isDarkTheme } = useTheme();

    return (
        <div className="content-container">
            <Routes>
                {/* Если пользователь аутентифицирован, показываем его профиль */}
                {isAuthenticated ? (
                    <>
                        <Route path="/" element={<Navigate to="/counter" />} /> {/* Перенаправление на первую лабораторную работу */}
                        {labWorks.map((work) => (
                            <Route 
                                key={work.path} 
                                path={work.path} 
                                element={<p className="description">{work.description}</p>} // Отображаем описание
                            />
                        ))}
                        <Route path="/profile" element={<UserProfile />} /> {/* Профиль пользователя */}
                        <Route path="/counter" element={<Counter />} /> {/* Страница счетчика с кнопками */}
                    </>
                ) : (
                    // Если пользователь не аутентифицирован, показываем форму входа/регистрации
                    <Route path="/" element={<AuthContainer />} />
                )}
                {/* <Route path="*" element={<p>Страница не найдена</p>} /> Обработка несуществующих маршрутов */}
            </Routes>
        </div>
    );
};

export { Content, labWorks };