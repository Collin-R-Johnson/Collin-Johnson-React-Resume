import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import Drawer from '@material-ui/core/Drawer';
import List from '@material-ui/core/List';
import Typography from '@material-ui/core/Typography';

import { DrawerListItem } from './DrawerData';

const styles = {
  menuButton: {
    marginLeft: -12,
    marginRight: 20,
  },
  list: {
    width: 250,
  }
};

class TheAppBar extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      left: false
    };
  }

  toggleDrawer = (open) => () => {
    this.setState({
      left: open,
    });
  }

  render() {
    const { classes } = this.props;

    /* 
      Drawer navigation list componenet with local styling
    */
    const fullList = (
      <div className={classes.list}>
        <List>{DrawerListItem}</List>
      </div>
    );

    /* 
        - Drawer component which open from the left
        - Auto close when click or key down
    */
    const drawer = (
      <Drawer open={this.state.left} onClose={this.toggleDrawer(false)}>
        <div
          tabIndex={0}
          role="button"
          onClick={this.toggleDrawer(false)}
          onKeyDown={this.toggleDrawer(false)}>
          {fullList}
        </div>
      </Drawer>
    );

    return (
      <div>
        <AppBar>
          <Toolbar>
            <IconButton
              onClick={this.toggleDrawer(true)}
              className={classes.menuButton}
              color="inherit" aria-label="Menu">
              <MenuIcon />
            </IconButton>
            <Typography variant="title" color="inherit" className={classes.flex}>
              MY RESUME
          </Typography>
          </Toolbar>
        </AppBar>
        {drawer}
      </div>
    );
  }
}

TheAppBar.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(TheAppBar);