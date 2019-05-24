import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';

const styles = {
  card: {
    display: 'flex',
  },
  details: {
    display: 'flex',
    flexDirection: 'column',
  },
  content: {
    flex: '1 0 auto',
  },
  cover: {
    width: 200,
    height: 200,
  },
};



/* 
    - Education component
    - Display school image, name, link and description
*/
function Education(props) {
  const { classes } = props;

  return (
    <div>
      <Card className={classes.card}>
        <CardMedia
          className={classes.cover}
          image="./Images/Education/NKU.png"
          title="Northen Kentucky University"
        />
        <div className={classes.details}>
          <CardContent className={classes.content}>
            <Typography variant="headline">Northern Kentucky University</Typography>
            <Typography variant="subheading" color="textSecondary">
              <a href="http://www.nku.edu" target="_blank">Find out more</a>
            </Typography>
            <Typography variant="body1">
              B.S in Biology with Minors in Computer Science, Neuroscience and Chemistry (2012 - 2017)
            </Typography>
          </CardContent>
        </div>
      </Card>
    </div>
  );
}

Education.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Education);