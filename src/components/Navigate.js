import React from 'react';
import { Link } from 'react-router-dom';

const Navigation = () => {
  return (
    <nav style={styles.nav}>
      <Link style={styles.link} to="/">Home</Link>
      <Link style={styles.link} to="/about">About</Link>
      <Link style={styles.link} to="/contact">Contact</Link>
    </nav>
  );
};

const styles = {
  nav: {
    display: 'flex',
    justifyContent: 'space-around',
    padding: '10px',
    backgroundColor: '#343a40',
  },
  link: {
    color: '#fff',
    textDecoration: 'none',
    padding: '10px',
  },
};

export default Navigation;