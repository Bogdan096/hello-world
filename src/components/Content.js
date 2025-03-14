import React from 'react';
import Typography from '@mui/material/Typography';

const Content = ({ selectedLab }) => {
    return (
        <div>
            <Typography variant="h4">{selectedLab.title}</Typography>
            <Typography variant="body1">{selectedLab.content}</Typography>
        </div>
    );
};

export default Content;