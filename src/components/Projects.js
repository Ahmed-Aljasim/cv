import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Grid from '@material-ui/core/Grid';
import Hidden from '@material-ui/core/Hidden';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import { withStyles } from '@material-ui/core/styles';

const styles = {
  page: {
    // borderBottom: '1px solid rgba(0, 0, 0, 0.12)',
    marginTop: 24
  },
  pageTitle: {
    textAlign: 'center',
    marginTop: 24
  },
  rightGrid: {
    // marginTop: 24
  },
  leftCard: {
    // backgroundColor: '#e0e0e0',
    marginTop: 24,
    // padding: 15,
    height: 500,
    border: 'black 1.5px solid',
    overflowY: 'auto',
  },
  zz: {
    // marginTop: 24,
  }
}

class Projects extends Component {
  state = ({
    w: window.innerWidth
  });

  render() {
    const { classes } = this.props;

    const x = (
      <Grid item xl={3} lg={3} md={3} sm={11} xs={11} className={classes.pageTitle} style={styles.zz}>
        <Card className={classes.leftCard}>
          <CardContent style={{ textAlign: 'center' }}>
            <div style={{ textAlign: 'center' }}>
              <Typography className={classes.title} color="textSecondary" gutterBottom>
                King Saud University • Riyadh • 2010 - 2015
              </Typography>
            </div>
          </CardContent>
        </Card>
      </Grid>
    );

    return (
      <div>
        <br />
        <br />
        <br />
        <Grid id="container" container direction="row" alignItems="center" justify="space-around" className={classes.page}>

          {/* <Hidden smDown>{x}</Hidden> */}

          <Grid id='fw5' item xl={4} lg={4} md={4} sm={11} xs={11} className={classes.pageTitle} style={styles.zz}>
            Projects
          <Card className={classes.leftCard}>
              <CardContent style={{ textAlign: 'center' }}>
                <div style={{ textAlign: 'center' }}>

                  <a className="twitter-timeline" href="https://twitter.com/praytimesRiyadh?ref_src=twsrc%5Etfw">Tweets by praytimesRiyadh</a>

                </div>
              </CardContent>
            </Card>
          </Grid>

          {/* <Hidden mdUp>{x}</Hidden> */}

          <Grid item xl={3} lg={3} md={3} sm={11} xs={11} className={classes.pageTitle} style={styles.zz}>
            <Card style={{ border: 'black 1.5px solid', backgroundColor: '#e0e0e0' }}>
              <CardContent style={{ textAlign: 'center' }}>
                <br />
                <img src="./img/carty.png" alt="Carty" width='128' />
                <br />
                <Typography variant="subtitle1" component="h2" gutterBottom>
                  Carty
                </Typography>
                <br />
                <a rel="noopener noreferrer" target="_blank" href='https://play.google.com/store/apps/details?id=com.carty.www&pcampaignid=MKT-Other-global-all-co-prtnr-py-PartBadge-Mar2515-1'><img style={{ width: 180 }} alt='Get it on Google Play' src='https://play.google.com/intl/en_us/badges/images/generic/en_badge_web_generic.png' /></a>
              </CardContent>
            </Card>
          </Grid>



        </Grid >
        <br />
        <br />
        <br />
        <Typography style={{ textAlign: 'center', paddingBottom: 8 }}>
          Ahmed Aljasim &copy; {new Date().getFullYear()}
        </Typography>
      </div >
    );
  }
}

Projects.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Projects)
