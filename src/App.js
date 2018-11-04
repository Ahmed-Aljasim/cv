import React, { Component } from 'react';
import './App.css';
import { MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';
import Landing from './components/Landing';
import About from './components/About';
import Edu from './components/Edu';
import Exp from './components/Exp';
import Skills from './components/Skills';
import Projects from './components/Projects';
// import Contact from './components/Contact';

const theme = createMuiTheme({
  palette: {
    primary: {
      main: '#000000',
    },
    secondary: {
      main: '#66bb6a',
    }
  },
  typography: {
    useNextVariants: true,
  },
});

class App extends Component {
  render() {
    return (
      <MuiThemeProvider theme={theme}>
        <CssBaseline />
        <Landing />
        <About />
        <Edu />
        <Exp />
        <Skills />
        {/* <Projects /> */}
        {/* <Contact /> */}
      </MuiThemeProvider>
    );
  }
}

export default App;
