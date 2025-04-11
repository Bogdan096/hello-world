import React, { useState, useEffect } from 'react'; // Импортируем React и хуки useState и useEffect
import { useAuth } from '../auto/AuthContext'; // Импортируем хук для доступа к данным о пользователе и аутентификации
import 'bootstrap/dist/css/bootstrap.min.css'; // Импортируем стили Bootstrap для оформления

const UserProfile = () => {
    const { userEmail } = useAuth(); // Получаем email пользователя из контекста аутентификации
    const [nickname, setNickname] = useState(''); // Состояние для хранения псевдонима пользователя
    const [age, setAge] = useState(''); // Состояние для хранения возраста пользователя
    const [description, setDescription] = useState(''); // Состояние для хранения описания деятельности пользователя
    const [isEditing, setIsEditing] = useState(false); // Состояние для управления отображением формы редактирования

    // URL API для сохранения данных профиля
    const apiUrl = 'http://localhost:5000/users';

    // Эффект для загрузки данных профиля из localStorage при монтировании компонента
    useEffect(() => {
        const savedProfile = JSON.parse(localStorage.getItem('userProfile')); // Получаем сохраненные данные профиля из localStorage
        if (savedProfile) { // Если данные существуют
            setNickname(savedProfile.nickname); // Устанавливаем псевдоним из сохраненных данных
            setAge(savedProfile.age); // Устанавливаем возраст из сохраненных данных
            setDescription(savedProfile.description); // Устанавливаем описание из сохраненных данных
        }
    }, []); // Пустой массив зависимостей означает, что эффект выполнится только один раз при монтировании

    // Функция для сохранения данных профиля пользователя
    const saveUserProfile = async (e) => {
        e.preventDefault(); // Предотвращаем перезагрузку страницы при отправке формы
        try {
            if (!nickname || !age || !description) { // Проверяем, заполнены ли все поля
                alert('Пожалуйста, заполните все поля.'); // Если нет, выводим предупреждение
                return; // Выходим из функции
            }

            // Отправляем данные на сервер для создания или обновления профиля
            const response = await fetch(apiUrl, {
                method: 'POST', // Используем метод POST для отправки данных на сервер
                headers: {
                    'Content-Type': 'application/json', // Указываем тип контента как JSON
                },
                body: JSON.stringify({ email: userEmail, nickname, age, description }), // Формируем тело запроса с данными профиля и email пользователя
            });

            if (!response.ok) { // Если ответ сервера не успешный (ошибка)
                throw new Error('Ошибка при сохранении профиля'); // Генерируем ошибку
            }

            alert('Профиль сохранен!'); // Выводим сообщение об успешном сохранении

            localStorage.setItem('userProfile', JSON.stringify({ nickname, age, description })); // Сохраняем профиль в localStorage для дальнейшего использования
            setIsEditing(false); // Закрываем форму редактирования после успешного сохранения
        } catch (error) {
            console.error(error); // Логируем ошибку в консоль для отладки
        }
    };

    return (
        <>
            <h3  style={{ left: '10px' }}>Профиль пользователя</h3>
            <div className="card" style={{ marginBottom: '20px' }}> {/* Добавляем нижний отступ */}
                <div className="card-body">
                    <h5 className="card-title">Информация о пользователе</h5>
                    <p className="card-text">Email: <strong>{userEmail}</strong></p>
    
                    <div className="mt-3">
                        {nickname && <p><strong>Псевдоним:</strong> {nickname}</p>}
                        
                        {description && <p><strong>Описание деятельности:</strong> {description}</p>}
                    </div>
    
                    {isEditing ? (
                        <form onSubmit={saveUserProfile}>
                            <div className="mb-3">
                                <label htmlFor="nickname" className="form-label">Псевдоним</label>
                                <input
                                    type="text"
                                    id="nickname"
                                    value={nickname}
                                    onChange={(e) => setNickname(e.target.value)}
                                    className="form-control"
                                    required
                                />
                            </div>
                            {/* <div className="mb-3">
                                <label htmlFor="age" className="form-label">Возраст</label>
                                <input
                                    type="number"
                                    id="age"
                                    value={age}
                                    onChange={(e) => setAge(e.target.value)}
                                    className="form-control"
                                    required
                                />
                            </div> */}
                            <div className="mb-3">
                                <label htmlFor="description" className="form-label">Описание деятельности</label>
                                <textarea
                                    id="description"
                                    value={description}
                                    onChange={(e) => setDescription(e.target.value)}
                                    className="form-control"
                                    required
                                />
                            </div>
                            <button type="submit" className="btn btn-primary">Сохранить изменения</button>
                            <button type="button" onClick={() => setIsEditing(false)} className="btn btn-secondary ms-2">Отмена</button>
                        </form>
                    ) : (
                        <>
                            {!nickname ? (
                                <button onClick={() => setIsEditing(true)} className="btn btn-warning mt-3">Создать профиль</button>
                            ) : (
                                <button onClick={() => setIsEditing(true)} className="btn btn-info mt-3">Редактировать профиль</button>
                            )}
                        </>
                    )}
                </div>
            </div>
        </>
    );
}    
    export default UserProfile;  /* Экспортируем компонент UserProfile по умолчанию */