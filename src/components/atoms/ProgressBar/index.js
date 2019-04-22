import React, { useState } from 'react';
import PropTypes from 'prop-types';
import InViewMonitor from 'react-inview-monitor';
import LinearProgress from '@material-ui/core/LinearProgress';
import { withStyles } from '@material-ui/core/styles';

const styles = theme => ({
  root: {
    [theme.breakpoints.down('xs')]: {
      height: '8px',
    },
  },
});

const ProgressBar = ({ value, classes }) => {
  const [width, setWidth] = useState(0);

  return (
    <InViewMonitor
      intoViewMargin="-5%"
      onInView={() => setWidth(value)}
    >
      <LinearProgress
        className={classes.root}
        color="secondary"
        variant="determinate"
        value={width}
      />
    </InViewMonitor>
  );
};

ProgressBar.propTypes = {
  value: PropTypes.number.isRequired,
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(ProgressBar);
