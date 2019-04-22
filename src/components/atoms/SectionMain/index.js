import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core';

const styles = theme => ({
  sectionMain: {
    gridColumnEnd: 'span 9',
    position: 'relative',
    padding: `10% ${theme.spacing.unit * 2}px`,
    [theme.breakpoints.up('sm')]: {
      padding: `${theme.spacing.unit * 15}px`,
    },
    '&:before': {
      content: '""',
      backgroundColor: '#2D2E2E',
      bottom: 0,
      display: 'block',
      height: '100%',
      position: 'absolute',
      left: 0,
      top: 0,
      zIndex: '-1',
      width: '100vw',
    },
  },
  sectionMainLight: {
    '&:before': {
      backgroundColor: '#2B2C2C',
    },
  },
  sectionMainSmall: {
    padding: `${theme.spacing.unit}px`,
    [theme.breakpoints.up('sm')]: {
      padding: `${theme.spacing.unit}px ${theme.spacing.unit * 15}px`,
    },
  },
  fullHeight: {
    height: '100vh',
  },
});

const SectionMain = ({ classes, light, small, children }) => (
  <div className={
    [classes.sectionMain, light
      ? classes.sectionMainLight
      : '',
    small
      ? classes.sectionMainSmall
      : '',
    ].join(' ')
  }
  >
    {children}
  </div>
);

SectionMain.propTypes = {
  classes: PropTypes.object.isRequired,
  light: PropTypes.bool,
  small: PropTypes.bool,
  children: PropTypes.node.isRequired,
};

SectionMain.defaultProps = {
  light: false,
  small: false,
};

export default withStyles(styles)(SectionMain);
