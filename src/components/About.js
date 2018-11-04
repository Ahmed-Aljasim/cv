import React, { Component } from 'react';
import Grid from '@material-ui/core/Grid';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Divider from '@material-ui/core/Divider';

const styles = {
  title1: {
    textAlign: 'center',
    // marginTop: '20vh'
  },
  card1: {
    // minWidth: 375,
    marginTop: 24,
    textAlign: 'center'
  },
  title: {
    fontSize: 14,
  }
}

class About extends Component {
  render() {
    const { classes } = this.props;

    return (
      <Grid id="container" container direction="row" alignItems="center" justify="space-around"
        style={{
          marginTop: 24,
          // borderBottom: '1px solid rgba(0, 0, 0, 0.12)' 
        }} >

        <Grid id='fw1' item xl={3} lg={3} md={4} sm={11} xs={11} style={styles.title1}>
          About me
          <Divider />
          <Card className={classes.card1}>
            <CardContent>
              {/* <img src="/img/ksu.jpg" alt="AJ" width='128' /> */}
              <Typography className={classes.title} color="textSecondary">
                Birthday
              </Typography>
              <Typography variant="subtitle1" component="h2" gutterBottom>
                1st January 1992 • Riyadh
              </Typography>

              <Typography className={classes.title} color="textSecondary">
                Marital Status
              </Typography>
              <Typography variant="subtitle1" component="h2" gutterBottom>
                Single
              </Typography>

              <Typography className={classes.title} color="textSecondary">
                Nationality
              </Typography>
              <Typography variant="subtitle1" component="h2" gutterBottom>
                Syria
              </Typography>

            </CardContent>
          </Card>
        </Grid>

      </Grid>
    );
  }
}

About.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(About)
