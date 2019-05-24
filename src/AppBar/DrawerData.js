import React from 'react';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';

import CodeIcon from '@material-ui/icons/Code';
import ComputerIcon from '@material-ui/icons/Computer';
import InsertChartIcon from '@material-ui/icons/InsertChart';
import GradeIcon from '@material-ui/icons/Grade';


/* 
    Drawer navigation list componenet
*/

export const DrawerListItem = (
    <div>
        <ListItem button component="a" href="#experience">
            <ListItemIcon>
                <CodeIcon />
            </ListItemIcon>
            <ListItemText primary="Experience" />
        </ListItem>
        <ListItem button component="a" href="#portfolio">
            <ListItemIcon>
                <ComputerIcon />
            </ListItemIcon>
            <ListItemText primary="Portfolio" />
        </ListItem>
        <ListItem button component="a" href="#skills">
            <ListItemIcon>
                <InsertChartIcon />
            </ListItemIcon>
            <ListItemText primary="Skills" />
        </ListItem>
        <ListItem button component="a" href="#education">
            <ListItemIcon>
                <GradeIcon />
            </ListItemIcon>
            <ListItemText primary="Education" />
        </ListItem>
    </div>
);