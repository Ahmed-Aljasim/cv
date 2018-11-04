import React, { Component } from 'react';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Slider from '@material-ui/lab/Slider';

const styles = {
  slider: {
    padding: '8px 0px',
    cursor: 'default'
  },
}

class Skill extends Component {
  render() {
    const { classes, text, score } = this.props;

    return (
      <Grid container justify='center' alignItems='center'>
        <Grid item xl={3} lg={3} md={4} sm={2} xs={5}>
          <Typography variant="subtitle1" component="h2" gutterBottom style={{ textAlign: 'right', marginRight: 15 }}>
            {text}
          </Typography>
        </Grid>
        <Grid item xl={6} lg={6} md={5} sm={5} xs={7}>
          <Slider classes={{ container: classes.slider }} value={score} disabled />
        </Grid>
      </Grid>
    );
  }
}

Skill.propTypes = {
  classes: PropTypes.object.isRequired,
  text: PropTypes.string.isRequired,
  score: PropTypes.number.isRequired,
};

export default withStyles(styles)(Skill)
