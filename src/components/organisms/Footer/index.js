import React from 'react';
import PropTypes from 'prop-types';
import Typography from '@material-ui/core/Typography';
import Link from '@material-ui/core/Link';
import { withStyles } from '@material-ui/core/styles';
import Linkedin from 'mdi-material-ui/Linkedin';
import GithubCircle from 'mdi-material-ui/GithubCircle';

import SectionLayout from '../../molecules/SectionLayout';

const styles = theme => ({
  icon: {
    color: theme.palette.grey[600],
    height: '2rem',
    margin: theme.spacing.unit,
    transition: 'color .5s',
    width: '2rem',
    '&:hover': {
      color: theme.palette.secondary.main,
    },
  },
  left: {
    alignItems: 'center',
    display: 'flex',
    height: '100%',
    justifyContent: 'center',
    [theme.breakpoints.up('md')]: {
      justifyContent: 'flex-end',
    },
  },
  right: {
    textAlign: 'center',
    [theme.breakpoints.up('md')]: {
      textAlign: 'right',
    },
  },
  hidden: {
    visibility: 'hidden',
  },
});

const Footer = ({ light, classes }) => {
  const main = (
    <Typography
      className={classes.right}
      color="primary"
    >
      <Link
        href="https://www.linkedin.com/in/tamas-jonas-571469b/"
        target="_blank"
        rel="noopener"
      >
        <Linkedin className={classes.icon} />
      </Link>
      <Link
        href="https://github.com/dsidous"
        target="_blank"
        rel="noopener"
      >
        <GithubCircle className={classes.icon} />
      </Link>
    </Typography>
  );

  const side = (
    <Typography
      color="primary"
      variant="caption"
      className={classes.left}
    >
      TAMAS JONAS &copy; 2019
    </Typography>
  );

  return (
    <SectionLayout
      side={side}
      main={main}
      light={light}
      small
    />
  );
};

Footer.propTypes = {
  classes: PropTypes.object.isRequired,
  light: PropTypes.bool,
};

Footer.defaultProps = {
  light: false,
};

export default withStyles(styles)(Footer);
