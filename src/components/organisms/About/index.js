import React from 'react';
import PropTypes from 'prop-types';
import Typography from '@material-ui/core/Typography';
import { withStyles } from '@material-ui/core/styles';
import InViewMonitor from 'react-inview-monitor';

import SectionLayout from '../../molecules/SectionLayout';

const styles = () => ({
  hidden: {
    visibility: 'hidden',
  },
});


const About = ({ light, classes }) => {
  const side = (
    <>
      <Typography
        color="primary"
        component="h2"
        variant="h6"
      >
        ABOUT
      </Typography>
      <Typography
        color="primary"
        component="h4"
        variant="body2"
      >
        A little about me
      </Typography>
    </>
  );

  const main = (
    <InViewMonitor
      classNameNotInView={classes.hidden}
      classNameInView="animated fadeIn"
    >
      <Typography
        color="primary"
        paragraph
      >
        Hi, I am Tamas, a Professional web developer based in West London, UK.
        I have over 12 years commercial experience providing front-end development,
        producing high quality responsive websites and exceptional user experience.
      </Typography>
      <Typography color="primary">
        I do this for a living and I love what I do as every day there is something
        new and exciting to learn. When I'm not coding, you'll find me cooking, playing on
        my guitar, or travelling around South-East Asia.
      </Typography>
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

About.propTypes = {
  classes: PropTypes.object.isRequired,
  light: PropTypes.bool,
};

About.defaultProps = {
  light: false,
};

export default withStyles(styles)(About);
