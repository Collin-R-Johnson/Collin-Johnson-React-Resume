import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import GridList from '@material-ui/core/GridList';
import GridListTile from '@material-ui/core/GridListTile';
import GridListTileBar from '@material-ui/core/GridListTileBar';
import IconButton from '@material-ui/core/IconButton';
import InfoIcon from '@material-ui/icons/Info';


const styles = theme => ({
    root: {
        display: 'flex',
        flexWrap: 'wrap',
        justifyContent: 'space-around',
        overflow: 'hidden',
        backgroundColor: theme.palette.background.paper,
    },
    gridList: {
        flexWrap: 'nowrap',
        // Promote the list into his own layer on Chrome. This cost memory but helps keeping high FPS.
        transform: 'translateZ(0)',
    }
});


/* 
    - Portfolio component
    - portfolio dataset
        ~ A screenshot of your work (img)
        ~ A title for your work (title)
        ~ A link to showcase your work (url)
    - Dataset is displayed in horizontal gridlist style
*/

function Portfolio(props) {
    const { classes } = props;
    const portfolioData = [
        {
            img: './Images/Portfolio/docker_MERN.png',
            title: 'Spins up dockerized MERN boilerplate',
            url: 'https://github.com/collin-r-johnson/dockerized_mern'
        },
        {
            img: './Images/Portfolio/JAMstack.png',
            title: 'Ecomerce demo using JAMStack philosophy',
            url: 'https://github.com/collin-r-johnson/hello-strapi-next-react'
        },
    ];
    return (
        <div className={classes.root}>
            <GridList className={classes.gridList} cellHeight={350} cols={1.33}>
                {portfolioData.map(portfolio => (
                    <GridListTile key={portfolio.img}>
                        <img src={portfolio.img} alt={portfolio.title} />
                        <GridListTileBar
                            title={portfolio.title}
                            actionIcon={
                                <IconButton
                                    className={classes.icon}
                                    component="a"
                                    href={portfolio.url}
                                    target="_blank">
                                    <InfoIcon />
                                </IconButton>
                            }
                        />
                    </GridListTile>
                ))}
            </GridList>
        </div>
    );
}

Portfolio.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Portfolio);