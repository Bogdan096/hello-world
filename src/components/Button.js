import React from 'react';

const Button = ({ onClick, children }) => {
  return (
    <button onClick={onClick} style={styles.button}>
      {children}
    </button>
  );
};

const styles = {
  button: {
    padding: '10px 20px',
    fontSize: '16px',
    cursor: 'pointer',
    border: 'none',
    borderRadius: '5px',
    backgroundColor: '#007BFF',
    color: '#fff',
  },
};

export default Button;