import React from 'react';
import PropTypes from 'prop-types';
import Typography from '@material-ui/core/Typography';

import SectionLayout from '../../molecules/SectionLayout';
import ExpRow from '../../atoms/ExpRow';

import data from './data.json';

const Experiences = ({ light }) => {
  const side = (
    <>
      <Typography
        color="primary"
        component="h2"
        variant="h6"
      >
        EXPERIENCES
      </Typography>
      <Typography
        color="primary"
        component="h4"
        variant="body2"
      >
        
      </Typography>
    </>
  );

  const main = data.map((exp, i) => <ExpRow key={i} exp={exp} />);

  return (
    <SectionLayout
      side={side}
      main={main}
      light={light}
    />
  );
};

Experiences.propTypes = {
  light: PropTypes.bool,
};

Experiences.defaultProps = {
  light: false,
};

export default Experiences;
