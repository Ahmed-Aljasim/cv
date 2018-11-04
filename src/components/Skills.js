import React, { Component } from 'react';
import Grid from '@material-ui/core/Grid';
import Hidden from '@material-ui/core/Hidden';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Skill from './Skill';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Divider from '@material-ui/core/Divider';
import Tabs2 from './Tabs2';
import Typography from '@material-ui/core/Typography';

const styles = {
  title1: {
    textAlign: 'center',
    marginTop: 128,
  },
  card: {
    // minWidth: 575,
    marginTop: 24,
    textAlign: 'left'
  },
  card1: {
    // minWidth: 575,
    marginTop: 24,
    textAlign: 'left'
  }
}

class Skills extends Component {
  render() {
    const { classes } = this.props;

    return (
      <div>
        <Grid id="container" container direction="row" alignItems="center" justify="space-around"
          style={{ marginBottom: 128 }}
        // style={{ borderBottom: '1px solid rgba(0, 0, 0, 0.12)' }}
        >
          <Hidden smDown>
            <Grid item xs='auto' />
          </Hidden>

          <Grid id='fw4' item xl={4} lg={4} md={4} sm={11} xs={11} style={styles.title1}>
            Programming Skills
          <Divider />
            <Card className={classes.card1}>
              <CardContent>
                <Skill text='HTML' score={90} />
                <Skill text='CSS' score={75} />
                <Skill text='JavaScript' score={95} />
                <Skill text='Express' score={90} />
                <Skill text='React' score={95} />
                <Skill text='Git' score={96} />
                <Skill text='C++' score={70} />
                <Skill text='MATLAB' score={80} />
                <Skill text='VHDL' score={85} />
              </CardContent>
            </Card>
          </Grid>

          <Grid item xl={4} lg={4} md={4} sm={11} xs={11}>
            <Grid container direction='column' justify='center'>
              <Grid item md='auto' xs={12}>
                <Card className={classes.card}>
                  <Tabs2 />
                </Card>
              </Grid>
            </Grid>
          </Grid>

          <Hidden smDown>
            <Grid item xs='auto' />
          </Hidden>


        </Grid>
        <Typography style={{ textAlign: 'center', marginBottom: 8 }}>
          Ahmed Aljasim &copy; {new Date().getFullYear()}
        </Typography>
      </div>
    );
  }
}

Skills.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Skills)
