import React from 'react';
import { Box, Card, CardContent, Typography } from '@mui/material';

const About = () => {
    const siteDescription = {
        title: "Салам алейкум!!",
        content: "Это сайт"
    };

    return (
        <Box 
            display="flex" 
            justifyContent="center" 
            alignItems="center" 
            height="600vh"
        >
            <Card>
                <CardContent>
                    <Typography variant="h5">{siteDescription.title}</Typography>
                    <Typography variant="body1">{siteDescription.content}</Typography>
                </CardContent>
            </Card>
        </Box>
    );
};

export default About;