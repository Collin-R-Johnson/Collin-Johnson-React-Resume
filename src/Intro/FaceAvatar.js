import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Avatar from '@material-ui/core/Avatar';

const styles = theme => ({
    row: {
        paddingTop: 16, 
        display: 'flex',
        justifyContent: 'center',
    },
    bigAvatar: {
        width: 150,
        height: 150,
    },
});

/* 
    - Face Avatar component for introduction component
    - Display an image of yourself
*/

function FaceAvatar(props) {
    const { classes } = props;
    return (
        <div className={classes.row}>
            <Avatar
                alt="Collin Johnson"
                src="./Images/me.jpg"
                className={classes.bigAvatar} />
        </div>
    );
}

FaceAvatar.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(FaceAvatar);