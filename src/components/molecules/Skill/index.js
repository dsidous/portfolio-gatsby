import React from 'react';
import PropTypes from 'prop-types';
import Typography from '@material-ui/core/Typography';
import { withStyles } from '@material-ui/core/styles';
import * as Icons from './Icons';

import ProgressBar from '../../atoms/ProgressBar';


const styles = theme => ({
  icon: {
    color: '#666',
    margin: '7px 4px 8px',
    verticalAlign: 'middle',
  },
  copy: {
    [theme.breakpoints.up('sm')]: {
      alignItems: 'center',
      color: '#666',
      display: 'grid',
      fontWeight: 500,
      gridTemplateColumns: '35px 3fr 1fr',
      height: '100%',
      padding: '0 8px',
      position: 'absolute',
      width: '100%',
      zIndex: 1,
    },
  },
  value: {
    display: 'none',
    textAlign: 'right',
    [theme.breakpoints.up('sm')]: {
      color: '#888',
      display: 'inline',
    },
  },
});

const Skill = ({ data: { icon, value, skill }, classes }) => {
  const Icon = Icons[icon];

  return (
    <div style={{ position: 'relative' }}>
      <Typography color="primary" className={classes.copy}>
        <Icon className={classes.icon} />
        {skill}
        <Typography
          component="span"
          color="primary"
          className={classes.value}
        >
          {`${value}%`}
        </Typography>
      </Typography>
      <ProgressBar value={value} />
    </div>
  );
};

Skill.propTypes = {
  data: PropTypes.shape({
    icon: PropTypes.string.isRequired,
    value: PropTypes.number.isRequired,
    skill: PropTypes.string.isRequired,
  }).isRequired,
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Skill);
