import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';


const styles = {
    media: {
        height: 200
    },
};


/* 
    - Experience card component which can be reuse
    - require an image, company name, job position and description about
    the job
*/

function ExperienceCard(props) {
    const { classes } = props;
    return (
        <div>
            <Card>
                <CardMedia
                    className={classes.media}
                    image={props.image}
                    title={props.title}
                />
                <CardContent>
                    <Typography gutterBottom variant="headline">
                        {props.title}
                    </Typography>
                    <Typography gutterBottom variant="subheading">
                        {props.position}
                    </Typography>
                    <Typography gutterBottom variant="body2">
                        {props.description}
                    </Typography>
                </CardContent>
            </Card>
        </div>
    );
}



/* 
    - Experience component
    - Displaying multiple jobs experience card
    - Edit card size according to the number of experience card displayed
*/

class Experience extends Component {
    render() {
        return (
            <Grid container
                spacing={24}
                alignItems='center'
                direction='row'
                justify='center'>
                <Grid item xs={12} sm={4}>
                    <ExperienceCard
                        classes={this.props.classes}
                        image='./Images/Experience/belcan.png'
                        title='Belcan, LLC'
                        position='Enterprise Application Developer'
                        description='Lead development of web application for engineering client. Maintained and updated several web applications for internal use. Modified and implemented ETL solutions'
                    />
                </Grid>
                <Grid item xs={12} sm={4}>
                    <ExperienceCard
                        classes={this.props.classes}
                        image='./Images/Experience/trustaff.png'
                        title=' Trustaff'
                        position='Operations Specialist'
                        description='Assisted in the operation and configuration of recruiting and HR software. Implemented workflows to ensure data fidelity'
                    />
                </Grid>
                <Grid item xs={12} sm={4}>
                    <ExperienceCard
                        classes={this.props.classes}
                        image='./Images/Experience/NKU_biology.jpeg'
                        title=' NKU Biology Department'
                        position=' Research Assistant'
                        description=' Led cancer genetics research project utilizing Bioinforamtics techniques (via Python and Bash)'
                    />
                </Grid>
            </Grid>

        );
    }
}

Experience.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Experience);