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
    minWidth: 40
  }
});

class Tabs1 extends React.Component {
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
        <div style={{ padding: 20, fontSize: 25, cursor: 'default' }}>Advanced Courses</div>
        <Tabs
          value={this.state.value}
          onChange={this.handleChange}
          indicatorColor="primary"
          textColor="primary"
          // fullWidth
          variant="scrollable"
          scrollButtons="on"
        >
          <Tab label="EE405" classes={{ root: classes.tabRoot }} />
          <Tab label="EE450" classes={{ root: classes.tabRoot }} />
          <Tab label="EE458" classes={{ root: classes.tabRoot }} />
          <Tab label="EE480" classes={{ root: classes.tabRoot }} />
        </Tabs>
        <SwipeableViews
          axis={theme.direction === 'rtl' ? 'x-reverse' : 'x'}
          index={this.state.value}
          onChangeIndex={this.handleChangeIndex}
          resistance
        >
          <TabContainer dir={theme.direction}>
            <span style={{ fontSize: 17 }}>VLSI Circuit Design</span>
            <br />
            <br />
            Back in the 1960s, it was not possible to put more than a few thousands of transistors in a single piece of silicon called an integrated circuit or IC. As technology advances and manufacturing process got pretty sophisticated, it became possible to put billions of transistors in the same piece of silicon.
          </TabContainer>
          <TabContainer dir={theme.direction}>
            <span style={{ fontSize: 17 }}>Computer Architecture</span>
            <br />
            <br />
            Computers come in many different ways but regardless of that they almost all operate in the same way.
          </TabContainer>
          <TabContainer dir={theme.direction}>
            <span style={{ fontSize: 17 }}>Advanced Logic Design</span>
            <br />
            <br />
            Circuit design could be done at different level of abstration. One of these abstration is the RTL or Register Transfer Level. Engineers use FPGAs or Field Programmable Gate Array to write any custom logic. FPGAs are great tools for prototyping due to their high flexiblity and computation capability.
          </TabContainer>
          <TabContainer dir={theme.direction}>
            <span style={{ fontSize: 17 }}>Artificial Intelligence</span>
            <br />
            <br />
            Machines are stupid. They do whatever they are programmed to do. However, one could program them in a way such that they could learn and make decisions on their own. The topics covered in this course are neural network, fuzzy logic and genetic algorithms.
          </TabContainer>
        </SwipeableViews>
      </div>
    );
  }
}

Tabs1.propTypes = {
  classes: PropTypes.object.isRequired,
  theme: PropTypes.object.isRequired,
};

export default withStyles(styles, { withTheme: true })(Tabs1);
