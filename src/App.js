import React, { Component } from 'react';
import { MuiThemeProvider } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import CssBaseline from '@material-ui/core/CssBaseline';
import TheAppBar from './AppBar/AppBar';
import Intro from './Intro/Intro';
import Experience from './Experience/Experience';
import Portfolio from './Portfolio/Portfolio';
import Skills from './Skills/Skills';
import Education from './Education/Education';
import Footer from './Footer/Footer';



/* 
    - App component 
    - Display multiple component accordingly
    - Position can be adjusted accordingly
*/

class App extends Component {
  render() {
    return (
      <MuiThemeProvider theme={this.props.theme}>
        <CssBaseline />
        <TheAppBar />
        <Grid container
          spacing={24}
          alignItems='center'
          direction='row'
          justify='center'>
          <Grid item xs={11} sm={8}>
            <Intro />
          </Grid>
          <Grid item xs={11} sm={8}>
            <Typography variant="headline">
              <a id="experience"> EXPERIENCE </a>
            </Typography>
          </Grid>
          <Grid item xs={11} sm={8}>
            <Experience />
          </Grid>
          <Grid item xs={11} sm={8}>
            <Typography variant="headline">
              <a id="portfolio">   PORTFOLIO</a>
            </Typography>
          </Grid>
          <Grid item xs={11} sm={8}>
            <Portfolio />
          </Grid>
          <Grid item xs={11} sm={8}>
            <Typography variant="headline">
              <a id="skills">  SKILLS</a>
            </Typography>
          </Grid>
          <Grid item xs={11} sm={8}>
            <Skills />
          </Grid>
          <Grid item xs={11} sm={8}>
            <Typography variant="headline">
              <a id="education">  EDUCATION </a>
            </Typography>
          </Grid>
          <Grid item xs={11} sm={8}>
            <Education />
          </Grid>
          <Grid item xs={12} sm={8}>
            <Footer />
          </Grid>
        </Grid>
      </MuiThemeProvider>
    );
  }
}

export default App;

