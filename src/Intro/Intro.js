import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import FaceAvatar from './FaceAvatar';
import Description from './Description';

const styles = theme => ({
    root: theme.mixins.gutters({
        paddingTop: 16,
        paddingBottom: 16,
        marginTop: theme.spacing.unit * 10,
    }),
});

/* 
    - Introduction component
    - Name and job title required
    - Added both Face Avatar and Description Component
*/

function Intro(props) {
    const { classes } = props;
    return (
        <div>
            <Paper className={classes.root}>
                <Typography variant="headline" component="h1" align="center">
                    Collin Johnson
                    </Typography>
                <Typography variant="subheading" align="center">
                    Web Application Developer
                    </Typography>
                <FaceAvatar />
            </Paper>
            <Description />
        </div>
    );
}

Intro.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Intro);