import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import Avatar from '@material-ui/core/Avatar';
import Chip from '@material-ui/core/Chip';
import Grid from '@material-ui/core/Grid';
import { FrontEndSkills, BackEndSkills, DatabaseSkills, additionalSkills } from './SkillsData';


const styles = theme => ({
    root: {
        display: 'flex',
        flexWrap: 'wrap',
    },
    chip: {
        margin: theme.spacing.unit,
        backgroundColor: theme.palette.primary.dark,
        color: theme.palette.primary.contrastText,
    },
    card: {
        height: 'auto',
        minHeight: 225,
    }
});

/* 
    - Reusable SkillsCard component 
    - make use of SkillsData dataset
*/

function SkillsCard(props) {
    const { classes } = props;
    const skillsData = props.skillsData;
    return (
        <div>
            <Card className={classes.card}>
                <CardContent>
                    <Typography gutterBottom variant="headline">
                        {props.title}
                    </Typography>
                    <div className={classes.root}>
                        {skillsData.map(skills => (
                            <Chip
                                key={skills.id}
                                avatar={<Avatar>{skills.avatar}</Avatar>}
                                label={skills.label}
                                className={classes.chip}
                            />
                        ))}
                    </div>
                </CardContent>
            </Card>
        </div>
    );
}

/* 
    - Skills component 
    - Display multiple SkillsCard components
*/

class Skills extends Component {
    render() {
        return (
            <Grid container
                spacing={24}
                alignItems='center'
                direction='row'
                justify='center'>
                <Grid item xs={12} sm={6}>
                    <SkillsCard
                        classes={this.props.classes}
                        title='Front-end development'
                        skillsData={FrontEndSkills}
                    />
                </Grid>
                <Grid item xs={12} sm={6}>
                    <SkillsCard
                        classes={this.props.classes}
                        title='Back-end development'
                        skillsData={BackEndSkills}
                    />
                </Grid>
                <Grid item xs={12} sm={6}>
                    <SkillsCard
                        classes={this.props.classes}
                        title='Database Management'
                        skillsData={DatabaseSkills}
                    />
                </Grid>
                <Grid item xs={12} sm={6}>
                    <SkillsCard
                        classes={this.props.classes}
                        title='Additional Skills'
                        skillsData={additionalSkills}
                    />
                </Grid>
            </Grid>

        );
    }
}

Skills.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Skills);