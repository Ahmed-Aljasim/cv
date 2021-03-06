import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import MobileStepper from '@material-ui/core/MobileStepper';
import Button from '@material-ui/core/Button';
import KeyboardArrowLeft from '@material-ui/icons/KeyboardArrowLeft';
import KeyboardArrowRight from '@material-ui/icons/KeyboardArrowRight';

import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import SwipeableViews from 'react-swipeable-views';

const tutorialSteps = [
  {
    label: 'Graduation Certificate',
    imgPath: './img/grad.png',
  },
  {
    label: '1st Class Honor Certificate',
    imgPath: './img/honor.png',
  }
];

const styles = theme => ({
  root: {
    // maxWidth: 400,
    flexGrow: 1,
  },
  header: {
    display: 'flex',
    alignItems: 'center',
    height: 50,
    paddingLeft: theme.spacing.unit * 2,
    backgroundColor: 'white',
  },
  img: {
    height: '100%',
    // maxWidth: 400,
    overflow: 'hidden',
    display: 'block',
    width: '100%',
    cursor: 'zoom-in'
  },
});

class Cert extends React.Component {
  state = {
    activeStep: 0,
    open: false,
  };

  handleNext = () => this.setState({ activeStep: 1 });
  handleBack = () => this.setState({ activeStep: 0 });

  handleClickOpen = () => this.setState({ open: true });
  handleClose = () => this.setState({ open: false });

  handleChangeIndex = index => this.setState({ activeStep: index });

  render() {
    const { classes, theme } = this.props;
    const { activeStep } = this.state;
    const maxSteps = 2;

    return (
      <div className={classes.root}>
        <div style={{ padding: 20, fontSize: 25, cursor: 'default' }}>{tutorialSteps[activeStep].label}</div>
        <SwipeableViews
          axis={theme.direction === 'rtl' ? 'x-reverse' : 'x'}
          index={this.state.activeStep}
          onChangeIndex={this.handleChangeIndex}
          resistance
        >
          <img
            className={classes.img}
            src={tutorialSteps[0].imgPath}
            alt={tutorialSteps[0].label}
            onClick={this.handleClickOpen}
          />
          <img
            className={classes.img}
            src={tutorialSteps[1].imgPath}
            alt={tutorialSteps[1].label}
            onClick={this.handleClickOpen}
          />
        </SwipeableViews>

        <MobileStepper
          steps={maxSteps}
          position="static"
          activeStep={activeStep}
          className={classes.mobileStepper}
          nextButton={
            <Button size="small" onClick={this.handleNext} disabled={activeStep === maxSteps - 1}>
              Next<KeyboardArrowRight />
            </Button>
          }
          backButton={
            <Button size="small" onClick={this.handleBack} disabled={activeStep === 0}>
              <KeyboardArrowLeft />Back
            </Button>
          }
        />

        <Dialog
          open={this.state.open}
          onClose={this.handleClose}
          aria-labelledby="alert-dialog-title"
          aria-describedby="alert-dialog-description"
        >
          <DialogContent style={{ padding: 8, paddingBottom: 0 }}>
            <img src={tutorialSteps[activeStep].imgPath} alt={tutorialSteps[activeStep].label} width='100%' />
          </DialogContent>

          <DialogActions style={{ marginTop: 4 }}>
            <Button onClick={this.handleClose} color="primary">
              Close
            </Button>
          </DialogActions>
        </Dialog>

      </div>
    );
  }
}

Cert.propTypes = {
  classes: PropTypes.object.isRequired,
  theme: PropTypes.object.isRequired,
};

export default withStyles(styles, { withTheme: true })(Cert);
