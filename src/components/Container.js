
import React from 'react';

const Container = ({ children }) => {
  return <div style={styles.container}>{children}</div>;
};

const styles = {
  container: {
    maxWidth: '1200px',
    margin: '0 auto',
    padding: '20px',
    backgroundColor: '#f8f9fa',
    borderRadius: '8px',
  },
};

export default Container;