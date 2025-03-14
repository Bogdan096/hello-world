import React from 'react';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';

const Footer = () => {
    return (
        <footer>
            <Container>
                <Typography variant="body2" color="textSecondary" align="center">
                    © {new Date().getFullYear()} Лабораторные работы. Все права защищены.
                </Typography>
            </Container>
        </footer>
    );
};

export default Footer;