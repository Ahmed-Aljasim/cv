import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Grid from '@material-ui/core/Grid';
import Hidden from '@material-ui/core/Hidden';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Divider from '@material-ui/core/Divider';
import Typography from '@material-ui/core/Typography';
import { withStyles } from '@material-ui/core/styles';
import Cert2 from './Cert2';

const styles = {
  page: {
    // borderBottom: '1px solid rgba(0, 0, 0, 0.12)'
  },
  pageTitle: {
    textAlign: 'center'
  },
  rightGrid: {
    marginTop: 24
  },
  leftCard: {
    marginTop: 24,
  },
  zz: {
    marginTop: 24,
  }
}

class Exp extends Component {
  render() {
    const { classes } = this.props;

    const x = (
      <CardContent style={{ textAlign: 'left' }}>
        <div style={{ paddingBottom: 10, fontSize: 25, cursor: 'default' }}>Job Duties</div>

        <Typography gutterBottom>
          1- Understanding business technical requirements, and searching for the best suitable supplier and solution.
          <br />
          2- Effectively communicatng with hardware suppliers & manufacturers for telematics devices procurement.
          <br />
          3- Working on designing and customizing the hardware and solutions closely with the suppliers, to fit customer requirements.
          <br />
          4- Testng the new telematics devices and validatng the technical aspects of the solutions.
          <br />
          5- Worked with the product team on developing a new telematics consumer product.
          <br />
          6- Supportng R&D team with the debugging, testing and validating telematics products on the hardware, communicaton, and web platorm layers.
        </Typography>
      </CardContent>
    );

    const y = (
      <Grid item xl={6} lg={6} md={6} sm={12} xs={12}>
        <Card>
          <Cert2 />
        </Card>
      </Grid>
    );

    return (
      <Grid id="container" container direction="row" alignItems="center" justify="space-around" className={classes.page}>

        <Grid item xl={8} lg={8} md={8} sm={11} xs={11} >
          <Grid container direction="row" alignItems="flex-end" justify="center" spacing={24}>

            <Hidden smDown>{y}</Hidden>

            <Grid id='fw3' item xl={6} lg={6} md={6} sm={12} xs={12} className={classes.pageTitle} style={styles.zz}>
              Experience
              <Divider />
              <Card className={classes.leftCard}>
                <CardContent style={{ textAlign: 'center' }}>
                  <div style={{ textAlign: 'center' }}>
                    <img src="/img/mt.png" alt="MT" width='128' id='imgExp' />
                  </div>

                  <Typography className={classes.title} color="textSecondary" gutterBottom>
                    MachinesTalk • Riyadh • 2015 - 2017
                  </Typography>
                  <Typography variant="subtitle1" component="h2" gutterBottom>
                    Product Manager
                  </Typography>
                </CardContent>
              </Card>
            </Grid>

            <Grid item md={12} xs={12}>
              <Card>{x}</Card>
            </Grid>

            <Hidden mdUp>{y}</Hidden>

          </Grid>
        </Grid>
      </Grid >
    );
  }
}

Exp.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Exp)
