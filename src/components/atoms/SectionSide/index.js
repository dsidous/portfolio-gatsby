import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core';

const styles = theme => ({
  sectionSide: {
    gridColumnEnd: 'span 3',
    padding: `${theme.spacing.unit * 2}px`,
    position: 'relative',
    textAlign: 'left',
    [theme.breakpoints.up('sm')]: {
      padding: `5% ${theme.spacing.unit * 15}px`,
    },
    [theme.breakpoints.up('md')]: {
      textAlign: 'right',
      padding: `${theme.spacing.unit * 15}px 10%`,
    },
    '&:before': {
      content: '""',
      backgroundColor: '#292A2A',
      bottom: 0,
      display: 'block',
      height: '100%',
      position: 'absolute',
      right: '-16px',
      top: 0,
      zIndex: '-1',
      width: 2000,
    },
    '& h2': {
      letterSpacing: '4px',
      margin: '4px 0 0',
      padding: '30px 0 0',
      position: 'relative',
      '&:before': {
        backgroundColor: theme.palette.secondary.main,
        content: '""',
        height: '4px',
        position: 'absolute',
        top: 0,
        width: '50px',
        [theme.breakpoints.up('md')]: {
          right: 0,
        },
      },
    },
    '& h4': {
      color: theme.palette.grey[600],
      fontStyle: 'italic',
      padding: '0 4px 0 0',
    },
  },
  setionSideLight: {
    '&:before': {
      backgroundColor: '#2B2C2C',
    },
  },
  sectionSideSmall: {
    [theme.breakpoints.up('sm')]: {
      padding: `${theme.spacing.unit}px ${theme.spacing.unit * 15}px`,
    },
    [theme.breakpoints.up('md')]: {
      padding: `${theme.spacing.unit}px 10%`,
    },
  },
  fullHeight: {
    height: '100vh',
  },
});

const SectionSide = ({
  classes,
  light,
  small,
  children,
}) => ((
  <div className={
    [classes.sectionSide, light
      ? classes.setionSideLight
      : '',
    small
      ? classes.sectionSideSmall
      : '',
    ].join(' ')}
  >
    {children}
  </div>
));

SectionSide.propTypes = {
  classes: PropTypes.object.isRequired,
  light: PropTypes.bool,
  small: PropTypes.bool,
  children: PropTypes.node.isRequired,
};

SectionSide.defaultProps = {
  light: false,
  small: false,
};

export default withStyles(styles)(SectionSide);
