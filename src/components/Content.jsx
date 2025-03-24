// src/components/Content.js
// import React from 'react';
// import './Content.css';

// const Content = ({ description }) => {
//     return <div className="content">{description}</div>;
// };

// export default Content;

import React from 'react';
import './Content.css'; // Убедитесь, что этот файл существует и подключен

const Content = ({ description }) => {
    return (
        <div className="content-container">
            {description && <p className="description">{description}</p>}
        </div>
    );
};

export default Content;

