import React from 'react';
import PropTypes from 'prop-types';
import Paper from '@material-ui/core/Paper';
import { withStyles } from '@material-ui/core';

const styles = theme => ({
  mainSection: {
    background: 'none',
    justifySelf: 'center',
    gridColumnEnd: 'span 12',
    gridTemplateColumns: 'repeat(12, 1fr)',
    maxWidth: theme.breakpoints.values.lg,
    overflow: 'hidden',
    width: '100%',
    [theme.breakpoints.up('md')]: {
      display: 'grid',
    },
  },
  fullHeight: {
    [theme.breakpoints.up('sm')]: {
      minHeight: '100vh',
    },
  },
});

const Section = ({ classes, fullHeight, children }) => (
  <Paper
    elevation={0}
    square
    className={[classes.mainSection, fullHeight
      ? classes.fullHeight
      : '',
    ].join(' ')}
    component="section"
  >
    {children}
  </Paper>
);

Section.propTypes = {
  classes: PropTypes.object.isRequired,
  fullHeight: PropTypes.bool,
  children: PropTypes.node.isRequired,
};

Section.defaultProps = {
  fullHeight: false,
};

export default withStyles(styles)(Section);
