import React from 'react';
import PropTypes from 'prop-types';

import Section from '../../atoms/Section';
import SectionMain from '../../atoms/SectionMain';
import SectionSide from '../../atoms/SectionSide';

const SectionLayout = ({
  light,
  fullHeight,
  small,
  side,
  main,
}) => ((
  <Section fullHeight={fullHeight}>
    <SectionSide light={light} small={small}>
      {side}
    </SectionSide>
    <SectionMain light={!light} small={small}>
      {main}
    </SectionMain>
  </Section>
));

SectionLayout.propTypes = {
  fullHeight: PropTypes.bool,
  light: PropTypes.bool,
  small: PropTypes.bool,
  main: PropTypes.node.isRequired,
  side: PropTypes.node.isRequired,
};

SectionLayout.defaultProps = {
  fullHeight: false,
  light: false,
  small: false,
};

export default SectionLayout;
