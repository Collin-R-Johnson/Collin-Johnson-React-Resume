import React from 'react';
import ReactDOM from 'react-dom';
import { createMuiTheme } from '@material-ui/core/styles';
import App from './App';
import registerServiceWorker from './registerServiceWorker';


/* 
    - Theme for the website
    - more info can be found on https://material-ui.com/customization/default-theme/
*/

const theme = createMuiTheme({
    palette: {
        primary: {
            light: '#9E9E9E',
            main: '#424242',
            dark: '#212121',
            contrastText: '#FFFFFF',
        }
    }
});

ReactDOM.render(<App theme={theme}/>, document.getElementById('root'));
registerServiceWorker();
