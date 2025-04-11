// import React from 'react';
// import { useSelector, useDispatch } from 'react-redux';
// import './Counter.css'; // Импортируйте CSS файл

// const Counter = () => {
//     const count = useSelector((state) => state.counter.count);
//     const dispatch = useDispatch();

//     const increment = () => {
//         dispatch({ type: 'INCREMENT' });
//     };

//     const decrement = () => {
//         dispatch({ type: 'DECREMENT' });
//     };

//     return (
//         <div className="counter-container"> {/* Применяем класс для центрирования */}
//             <h1 className="counter-title">Счетчик: {count}</h1> {/* Применяем класс для заголовка */}
//             <button className="counter-button" onClick={increment}>Увеличить</button>
//             <button className="counter-button" onClick={decrement}>Уменьшить</button>
//         </div>
//     );
// };

// export default Counter;

import React, { useState } from 'react';
import './Counter.css'; // Импортируйте CSS файл

const Counter = () => {
    const [count, setCount] = useState(0); // Используем useState для управления состоянием

    const increment = () => {
        setCount(prevCount => prevCount + 1); 
        
    };

    const decrement = () => {
        setCount(prevCount => prevCount - 1); // Уменьшаем счетчик на 1
    };

    return (
        <div className="counter-container"> {/* Применяем класс для центрирования */}
            <h1 className="counter-title">Счетчик: {count}</h1> {/* Применяем класс для заголовка */}
            <button className="counter-button" onClick={increment}>Увеличить</button>
            <button className="counter-button" onClick={decrement}>Уменьшить</button>
        </div>
    );
};

export default Counter;