import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Grid from '@material-ui/core/Grid';
import Hidden from '@material-ui/core/Hidden';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import { withStyles } from '@material-ui/core/styles';
import Cert from './Cert';
import Tabs1 from './Tabs1';

const styles = {
  page: {
    // borderBottom: '1px solid rgba(0, 0, 0, 0.12)'
    backgroundColor: '#e0e0e0'
  },
  pageTitle: {
    textAlign: 'center'
  },
  rightGrid: {
    marginTop: 24
  },
  leftCard: {
    marginTop: 24,
    border: '1.5px solid black'
  },
  zz: {
    marginTop: 24
  }
}

class Edu extends Component {
  render() {
    const { classes } = this.props;

    const x = (
      <Grid item xl={5} lg={5} md={5} sm={12} xs={12}>
        <Card style={{ border: '1.5px solid black' }}>
          <Cert />
        </Card>
      </Grid>
    );

    return (
      <Grid id="container" container direction="row" alignItems="center" justify="space-around" className={classes.page}>
        <Hidden smDown>
          <Grid item xs='auto' />
        </Hidden>
        <Grid id='fw2' item xl={3} lg={3} md={4} sm={11} xs={11} className={classes.pageTitle} style={styles.zz}>
          Education
          <Card className={classes.leftCard}>
            <CardContent style={{ textAlign: 'center' }}>
              <img src="./img/ksu.jpg" alt="KSU" width='128' />
              <div style={{ textAlign: 'center' }}>
                <Typography className={classes.title} color="textSecondary" gutterBottom>
                  King Saud University • Riyadh • 2010 - 2015
                </Typography>
                <Typography variant="subtitle1" component="h2" gutterBottom>
                  BSc in Electrical Engineering
                  <br />
                  Automation and Intelligent Systems
                </Typography>
              </div>
            </CardContent>
          </Card>
        </Grid>

        <Grid item xl={6} lg={6} md={6} sm={11} xs={11} style={styles.rightGrid}>
          <br />
          <br />
          <br />
          <br />
          <Grid container direction="row" alignItems="flex-end" justify="flex-start" spacing={24}>

            <Grid item xl={6} lg={6} md={7} sm={12} xs={12}>
              <Card style={{ border: '1.5px solid black' }}>
                <Tabs1 />
              </Card>
            </Grid>

            <Hidden smDown>{x}</Hidden>

            <Grid item xl={11} lg={11} md={12} sm={12} xs={12}>
              <Card style={{ border: '1.5px solid black' }}>
                <CardContent>
                  {/* <Typography variant="h5" component="h2" gutterBottom>
                    Graduation Project
                  </Typography> */}
                  <div style={{ paddingBottom: 10, fontSize: 25, cursor: 'default' }}>Graduation Project</div>
                  <Typography variant="subtitle1" component="h2" gutterBottom>
                    Design and Manufacturing of a Mobile Serving Robot
                  </Typography>
                  <Typography gutterBottom>
                    A multidisciplinary project between EEs and MEs students. The final prototype was a robot that is able to serve coffee on two manipulator arms, uses sensors to avoid obstacles, greets customers using a recorded speech, and uses <a style={{ color: 'black' }} rel="noopener noreferrer" target="_blank" href="https://www.festo-didactic.com/int-en/services/robotino/">Robotino</a> as a platform for controling the whole assembly and as a means of mobility.
                  </Typography>

                </CardContent>
              </Card>
            </Grid>

            <Hidden mdUp>{x}</Hidden>

          </Grid>
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
        </Grid>

      </Grid >
    );
  }
}

Edu.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Edu)
