import React from 'react';
import PropTypes from 'prop-types';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import { withStyles } from '@material-ui/core/styles';
import InViewMonitor from 'react-inview-monitor';

import SectionLayout from '../../molecules/SectionLayout';
import Skill from '../../molecules/Skill';

import data from './data.json';

const styles = theme => ({
  skills: {
    display: 'grid',
    gridGap: `${theme.spacing.unit * 5}px`,
    marginTop: theme.spacing.unit * 2,
  },
  otherButton: {
    margin: theme.spacing.unit,
    '&:hover': {
      cursor: 'pointer',
    },
  },
  hidden: {
    visibility: 'hidden',
  },
});

const Skills = ({ light, classes }) => {
  const side = (
    <>
      <Typography
        color="primary"
        component="h2"
        variant="h6"
      >
        SKILLS
      </Typography>
      <Typography
        color="primary"
        component="h4"
        variant="body2"
      >
        What I love to do
      </Typography>
    </>
  );

  const main = (
    <InViewMonitor
      classNameNotInView={classes.hidden}
      classNameInView="animated fadeIn"
    >
      <Typography color="primary" style={{ marginBottom: '48px' }}>
        TOP SKILLS
      </Typography>
      <div className={classes.skills}>
        {data.main.map((skill, i) => <Skill key={i} data={skill} />)}
      </div>
      <Typography color="primary" style={{ margin: '48px 0 24px' }}>
        OTHER SKILLS
      </Typography>
      <div className={classes.otherSkills}>
        {data.other.map((skill, i) => (
          <Button
            key={i}
            variant="outlined"
            color="primary"
            size="small"
            className={classes.otherButton}
          >
            {skill.skill}
          </Button>
        ))}
      </div>
    </InViewMonitor>
  );

  return (
    <SectionLayout
      side={side}
      main={main}
      light={light}
    />
  );
};

Skills.propTypes = {
  classes: PropTypes.object.isRequired,
  light: PropTypes.bool,
};

Skills.defaultProps = {
  light: false,
};

export default withStyles(styles)(Skills);
