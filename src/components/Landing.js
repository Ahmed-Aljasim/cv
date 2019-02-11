import React, { Component } from 'react';
import Grid from '@material-ui/core/Grid';
import Divider from '@material-ui/core/Divider';

const styles = {
  title: {
    textAlign: 'center',
    marginTop: '25vh'
  },
  divid: {
    marginTop: 20,
    border: 'black 1.5px solid'
  }
}

class Landing extends Component {
  render() {
    return (
      <Grid id="container" container direction="column" alignItems="stretch" justify="space-between" style={{ backgroundColor: '#e0e0e0' }}>
        <Grid id='fw0' item xs={12} style={styles.title}>
          Ahmed Aljasim
          <Divider className='divid' style={styles.divid} />
        </Grid>
      </Grid>
    );
  }
}

export default Landing;
