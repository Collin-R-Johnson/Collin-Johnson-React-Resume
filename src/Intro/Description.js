import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';

const styles = {
    card: {
        marginTop: 20,
    },
    row: {
        display: 'flex',
        justifyContent: 'center',
        marginBottom: 20
    },
    avatar: {
        width: 25,
        height: 25,
        margin: 10,
    },
};

/* 
    - Description component for introduction component
    - Display multiple social media icons
    - A paragraph about yourself
*/

function Description(props) {
    const { classes } = props;
    return (
        <div>
            <Card className={classes.card}>
                <CardContent>
                    <div className={classes.row}>
                        <a href="https://www.linkedin.com/in/collin-r-johnson" target="_blank">
                            <img alt="linkedin" src="./Images/SocialMedia/linkedin.png" className={classes.avatar} />
                        </a>
                        <a href="https://github.com/collin-r-johnson" target="_blank">
                            <img alt="github" src="./Images/SocialMedia/github.png" className={classes.avatar} />
                        </a>
                        <a href="mailto:collin.reed.johnson@gmail.com" target="_blank">
                            <img alt="email" src="./Images/SocialMedia/gmail.png" className={classes.avatar} />
                        </a>
                    </div>
                    <Typography paragraph component="p" align="center">
                        Passionate about web technologies and application development. 
            </Typography>
                </CardContent>
            </Card>
        </div>
    );
}

Description.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Description);