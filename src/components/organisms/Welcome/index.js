import React from 'react';
import PropTypes from 'prop-types';
import Typography from '@material-ui/core/Typography';
import Link from '@material-ui/core/Link';
import { withStyles } from '@material-ui/core/styles';
import InViewMonitor from 'react-inview-monitor';
import MapMarker from 'mdi-material-ui/MapMarker';
import Earth from 'mdi-material-ui/Earth';
import EmailOutline from 'mdi-material-ui/EmailOutline';
import Linkedin from 'mdi-material-ui/Linkedin';
import GithubCircle from 'mdi-material-ui/GithubCircle';

import SectionLayout from '../../molecules/SectionLayout';
import profile from '../../images/profile3.jpg';

const styles = theme => ({
  main: {
    height: '100%',
  },
  root: {
    display: 'flex',
    flexDirection: 'column',
    height: '100%',
    justifyContent: 'center',
    '& h5': {
      color: theme.palette.grey[600],
      fontSize: 18,
      letterSpacing: '1px',
    },
    '& h3': {
      fontSize: '21vw',
      letterSpacing: '1vw',
      marginTop: '30px',
      [theme.breakpoints.up('sm')]: {
        fontSize: '12vw',
      },
      [theme.breakpoints.up('md')]: {
        fontSize: 90,
        letterSpacing: '2px',
      },
    },
    '& h3 + h3': {
      fontWeight: '900',
      letterSpacing: '2vw',
      margin: '0 0 30px',
      [theme.breakpoints.up('md')]: {
        letterSpacing: '30px',
      },
    },
  },
  footer: {
    borderTop: `1px solid ${theme.palette.grey[600]}`,
    justifyContent: 'space-between',
    marginTop: '10px',
    paddingTop: '10px',
    [theme.breakpoints.up('sm')]: {
      display: 'flex',
      marginTop: '40px',
      paddingTop: '20px',

    },
    '& p': {
      color: theme.palette.grey[600],
      fontSize: '12px',
    },
  },
  left: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    height: '100%',
    flexDirection: 'column',
  },
  leftImage: {
    border: '2px solid #666',
    borderRadius: '50%',
    height: '210px',
    overflow: 'hidden',
    position: 'relative',
    width: '210px',
    '& img': {
      display: 'block',
      left: '-57px',
      margin: 0,
      padding: 0,
      position: 'absolute',
      top: '-160px',
      transform: 'scale(-1,1)',
      width: '170%',
    },
  },
  icon: {
    marginRight: theme.spacing.unit * 0.5,
    verticalAlign: 'middle',
    width: '0.7em',
  },
  iconLeft: {
    color: theme.palette.grey[600],
    height: '2rem',
    margin: theme.spacing.unit,
    marginTop: theme.spacing.unit * 4,
    transition: 'color .5s',
    width: '2rem',
    '&:hover': {
      color: theme.palette.secondary.main,
    },
  },
  hidden: {
    visibility: 'hidden',
  },
});

const Welcome = ({ light, fullHeight, classes }) => {
  const side = (
    <div className={classes.left}>
      <div className={classes.leftImage}>
        <img
          src={profile}
          alt="profile"
        />
      </div>
      <Typography color="primary">
        <Link
          href="https://www.linkedin.com/in/tamas-jonas-571469b/"
          target="_blank"
          rel="noopener"
        >
          <Linkedin className={classes.iconLeft} />
        </Link>
        <Link
          href="https://github.com/dsidous"
          target="_blank"
          rel="noopener"
        >
          <GithubCircle className={classes.iconLeft} />
        </Link>
      </Typography>
    </div>
  );

  const main = (
    <InViewMonitor
      classNameNotInView={classes.hidden}
      classNameInView={`${classes.main} animated slow fadeIn`}
    >
      <div className={classes.root}>
        <Typography
          color="primary"
          variant="h5"
        >
          HELLO, I AM
        </Typography>
        <Typography
          color="secondary"
          variant="h3"
        >
          TAMAS
        </Typography>
        <Typography
          color="secondary"
          variant="h3"
        >
          JONAS
        </Typography>
        <Typography
          color="primary"
          variant="h5"
        >
          Senior Front-end Developer
        </Typography>
      </div>
      <div className={classes.footer}>
        <Typography>
          <MapMarker className={classes.icon} />
          London, UK
        </Typography>
        <Typography>
          <Earth className={classes.icon} />
          www.tamasjonas.com
        </Typography>
        <Typography>
          <EmailOutline className={classes.icon} />
          jonastamas2@gmail.com
        </Typography>
      </div>
    </InViewMonitor>
  );

  return (
    <SectionLayout
      side={side}
      main={main}
      light={light}
      fullHeight={fullHeight}
    />
  );
};

Welcome.propTypes = {
  classes: PropTypes.object.isRequired,
  fullHeight: PropTypes.bool,
  light: PropTypes.bool,
};

Welcome.defaultProps = {
  fullHeight: false,
  light: false,
};

export default withStyles(styles)(Welcome);
