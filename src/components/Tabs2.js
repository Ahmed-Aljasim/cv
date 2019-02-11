import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import SwipeableViews from 'react-swipeable-views';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Typography from '@material-ui/core/Typography';

function TabContainer({ children, dir }) {
  return (
    <Typography component="div" dir={dir} style={{ padding: 8 * 3 }}>
      {children}
    </Typography>
  );
}

TabContainer.propTypes = {
  children: PropTypes.node.isRequired,
  dir: PropTypes.string.isRequired,
};

const styles = theme => ({
  root: {
    backgroundColor: theme.palette.background.paper,
    width: '100%',
  },
  tabRoot: {
    minWidth: 40,
  }
});

class Tabs2 extends React.Component {
  state = {
    value: 0,
  };

  handleChange = (event, value) => {
    this.setState({ value });
  };

  handleChangeIndex = index => {
    this.setState({ value: index });
  };

  render() {
    const { classes, theme } = this.props;

    return (
      <div className={classes.root}>
        <div style={{ padding: 20, fontSize: 25, cursor: 'default' }}>What is... ?</div>
        <Tabs
          value={this.state.value} onChange={this.handleChange} indicatorColor="primary" textColor="primary" variant="scrollable" scrollButtons="on" style={{ overflow: 'hidden' }}
        //fullWidth
        >
          <Tab label="HTML" classes={{ root: classes.tabRoot }} />
          <Tab label="CSS" classes={{ root: classes.tabRoot }} />
          <Tab label="JavaScript" classes={{ root: classes.tabRoot }} />
          <Tab label="Express" classes={{ root: classes.tabRoot }} />
          <Tab label="React" classes={{ root: classes.tabRoot }} />
          <Tab label="Git" classes={{ root: classes.tabRoot }} />
          <Tab label="C++" classes={{ root: classes.tabRoot }} />
          <Tab label="MATLAB" classes={{ root: classes.tabRoot }} />
          <Tab label="VHDL" classes={{ root: classes.tabRoot }} />
        </Tabs>
        <SwipeableViews
          axis={theme.direction === 'rtl' ? 'x-reverse' : 'x'}
          index={this.state.value}
          onChangeIndex={this.handleChangeIndex}
          resistance
        >
          <TabContainer dir={theme.direction}>
            <div style={{ textAlign: 'center' }}>
              <img src="./img/lang/html.png" alt="HTML" width='64' />
            </div>
            <br />
            HTML or Hyper Text Markup Language is the standard language used to write content and specify structure in web pages. The latest version is HTML5.
          </TabContainer>

          <TabContainer dir={theme.direction}>
            <div style={{ textAlign: 'center' }}>
              <img src="./img/lang/css.png" alt="CSS" width='64' />
            </div>
            <br />
            CSS stands for Cascading Style Sheets. It is used to style web pages. CSS is also used to animate HTML elements. However, due to its basic animation capability, most developers use JavaScript (e.g. Jquery) to handle animation.
          </TabContainer>

          <TabContainer dir={theme.direction}>
            <div style={{ textAlign: 'center' }}>
              <img src="./img/lang/js.png" alt="JS" width='64' />
            </div>
            <br />
            JavaScript is not Java. Everything in JavaScript is an object. It could be used in any type of programming. However, most people use it in web development. It is dynamically typed language which means data types are associated with values not variables and the same variable could hold multiple types. One of the biggest feature in JavaScript is the eco-system and the support built around it.
            {/* The latest version of JavaScript is know as ES6. ES6 concentrates on making things look more compact. */}
          </TabContainer>

          <TabContainer dir={theme.direction}>
            <div style={{ textAlign: 'center' }}>
              <img src="./img/lang/express.png" alt="Express" width='64' />
            </div>
            <br />
            Express is an open source framework built on top of NodeJS. The latter is a JavaScript runtime built on Chrome's V8 JavaScript engine. It is designed for building web applications and APIs.
            {/* Express allows you to create a web server in no time. */}
          </TabContainer>

          <TabContainer dir={theme.direction}>
            <div style={{ textAlign: 'center' }}>
              <img src="./img/lang/react.png" alt="React" width='64' />
            </div>
            <br />
            React is an open source library made by Facebook to create powerful Ui using JavaScript. React uses JSX to write HTML elements inside a JavaScript file. Everything in React is a component. Components have a state and could pass props to other components. React is usually used with a state manager (e.g. Redux) because things get pretty complexe in larger projects.
          </TabContainer>

          <TabContainer dir={theme.direction}>
            <div style={{ textAlign: 'center' }}>
              <img src="./img/lang/git.png" alt="Git" width='64' />
            </div>
            <br />
            Git is an open source distributed version control system. This means you could track your progress and create multiple versions of your project. Also, Git allows you and your team to collaborate and work on the same project using different branches and merge them to the master branch if they are bug free.
          </TabContainer>

          <TabContainer dir={theme.direction}>
            <div style={{ textAlign: 'center' }}>
              <img src="./img/lang/c++.png" alt="C++" width='64' />
            </div>
            <br />
            C++ is OOP or object orinted programming langauge. Unlike JavaScript, it is statically typed langauge.
          </TabContainer>

          <TabContainer dir={theme.direction}>
            <div style={{ textAlign: 'center' }}>
              <img src="./img/lang/matlab.gif" alt="MATLAB" width='64' />
            </div>
            <br />
            MATLAB is a software or rather a platform that uses its own language and syntax. Engineers use it due to its high computational capability. Evereything in MATLAB is a matrix.
          </TabContainer>

          <TabContainer dir={theme.direction}>
            <div style={{ textAlign: 'center' }}>
              <img src="./img/lang/vhdl.png" alt="VHDL" width='64' />
            </div>
            <br />
            VHDL stands for Very High Speed Integrated Circuit - Hardware Description Language. It is used to program electronic devices such as FPGAs. The code is executed in parallel (not concurrent) which means the whole code is executed all at once unless if you told it to run sequentially. VHDL allows you to specify timing specs regardless of the target hardware. These features are not supported in high level langauges such as C++.
          </TabContainer>

        </SwipeableViews>
      </div>
    );
  }
}

Tabs2.propTypes = {
  classes: PropTypes.object.isRequired,
  theme: PropTypes.object.isRequired,
};

export default withStyles(styles, { withTheme: true })(Tabs2);
