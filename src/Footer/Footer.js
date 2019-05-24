import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';

const styles = theme => ({
    root: theme.mixins.gutters({
        paddingTop: 20,
        paddingBottom: 20,
        marginTop: theme.spacing.unit * 3,
        marginBottom: -15,
        backgroundColor: theme.palette.primary.light,
    }),
    text: {
        color: theme.palette.primary.contrastText,
    },
});


/* 
    - Footer component  
    - Feel free to edit or remove it
*/

function Footer(props) {
    const { classes } = props;
    return (
        <div>
            <Paper className={classes.root}>
                <Typography variant="body1" align="center" className={classes.text}>
                    This website is build using <a href="https://reactjs.org/" target="_blank">React</a> with
                    <a href="https://github.com/mui-org/material-ui" target="_blank"> Material-UI</a> by
                    <a href="https://github.com/collin-r-johnson" target="_blank"> Collin Johnson</a>
                </Typography>
            </Paper>
        </div>
    );
}

Footer.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Footer);