import React from 'react';
import PropTypes from 'prop-types';
import Typography from '@material-ui/core/Typography';
import { withStyles } from '@material-ui/core';
import InViewMonitor from 'react-inview-monitor';

const styles = theme => ({
  exRow: {
    display: 'grid',
    gridTemplateColumns: 'repeat(12, 1fr)',
    marginBottom: `${theme.spacing.unit * 6}px`,
    '&:last-child $exMain:before': {
      display: 'none',
    },
  },
  exLeft: {
    gridColumnEnd: 'span 3',
    textAlign: 'right',
    '& p': {
      color: theme.palette.grey[600],
      fontStyle: 'italic',
    },
  },
  exMain: {
    gridColumn: '5 / 12',
    position: 'relative',
    '&:after': {
      position: 'absolute',
      top: 7,
      width: 13,
      height: 13,
      border: '2px solid #777',
      borderRadius: '50%',
      backgroundColor: theme.palette.secondary.main,
      [theme.breakpoints.up('sm')]: {
        content: '""',
        left: '-4vw',
      },
      [theme.breakpoints.up('md')]: {
        left: '-2.25vw',
      },
    },
    '&:before': {
      position: 'absolute',
      top: 24,
      width: 1,
      backgroundColor: theme.palette.grey[600],
      height: 'calc(100% + 28px)',
      [theme.breakpoints.up('sm')]: {
        content: '""',
        left: 'calc(-4vw + 6px)',
      },
      [theme.breakpoints.up('md')]: {
        left: 'calc(-2.25vw + 6px)',
      },
    },
    '& h6': {
      color: theme.palette.grey[600],
      fontStyle: 'italic',
      margin: '0 0 2rem',
    },
  },
  hidden: {
    visibility: 'hidden',
  },
});

const ExpRow = ({
  exp: {
    from,
    to,
    job,
    company,
    description,
  },
  classes,
}) => ((
  <InViewMonitor
    classNameNotInView={classes.hidden}
    classNameInView={`${classes.exRow} animated fadeIn`}
  >
    <div className={classes.exLeft}>
      <Typography
        variant="body2"
      >
        {from}
        <br />
        {`to ${to}`}
      </Typography>
    </div>
    <div className={classes.exMain}>
      <Typography
        color="primary"
        variant="body1"
        component="h5"
      >
        {job}
      </Typography>
      <Typography
        color="primary"
        variant="body2"
        component="h6"
        gutterBottom
      >
        {company}
      </Typography>
      <Typography
        paragraph
        color="primary"
      >
        {description}
      </Typography>
    </div>
  </InViewMonitor>
));

ExpRow.propTypes = {
  exp: PropTypes.shape({
    from: PropTypes.string.isRequired,
    to: PropTypes.string.isRequired,
    job: PropTypes.string.isRequired,
    company: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
  }).isRequired,
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(ExpRow);
