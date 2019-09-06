import React from 'react';
import { HashRouter as Router, Route } from 'react-router-dom';

// Material-UI Theme
import MuiThemeProvider from '@material-ui/core/styles/MuiThemeProvider';
import { createMuiTheme } from '@material-ui/core/styles';
import {
  pink,
  green,
  lime,
} from '@material-ui/core/colors';

import './App.css';
import HomePage from './components/HomePage/HomePage';
import PlantDetails from "./components/PlantDetails/PlantDetails";

const theme = createMuiTheme({
  palette: {
    primary: green,
    secondary: lime,
    error: pink,
    // Used by `getContrastText()` to maximize the contrast between the background and
    // the text.
    contrastThreshold: 3,
    // Used to shift a color's luminance by approximately
    // two indexes within its tonal palette.
    // E.g., shift from Red 500 to Red 300 or Red 700.
    tonalOffset: 0.2,
  }
});


const App = () => (
  <MuiThemeProvider theme={theme}>
    <div className="App">
      <header className="App-header">
        <h1>Welcome to your garden!</h1>
      </header>
      <Router>
        <Route exact path="/" component={HomePage} />
        <Route exact path="/plant/:id" component={PlantDetails} />
      </Router >
    </div>
  </MuiThemeProvider>
);

export default App;
