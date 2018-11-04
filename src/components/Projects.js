import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Grid from '@material-ui/core/Grid';
import Hidden from '@material-ui/core/Hidden';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Divider from '@material-ui/core/Divider';
import Typography from '@material-ui/core/Typography';
import { withStyles } from '@material-ui/core/styles';

const styles = {
  page: {
    borderBottom: '1px solid rgba(0, 0, 0, 0.12)',
    marginTop: 24
  },
  pageTitle: {
    textAlign: 'center',
  },
  rightGrid: {
    // marginTop: 24
  },
  leftCard: {
    marginTop: 24,
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
      <Grid id="container" container direction="row" alignItems="center" justify="space-around" className={classes.page}>

        <Hidden smDown>{x}</Hidden>

        <Grid id='fw5' item xl={4} lg={4} md={4} sm={11} xs={11} className={classes.pageTitle} style={styles.zz}>
          Projects
          <Divider />
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

        <Hidden mdUp>{x}</Hidden>

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

      </Grid >
    );
  }
}

Projects.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Projects)
