import React from 'react';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';

const Menu = ({ labs, onSelectLab }) => {
    return (
        <List>
            {labs.map((lab, index) => (
                <ListItem button key={index} onClick={() => onSelectLab(lab)}>
                    <ListItemText primary={lab.title} />
                </ListItem>
            ))}
        </List>
    );
};

export default Menu;