import React from 'react';
import PropTypes from 'prop-types';
import Typography from '@material-ui/core/Typography';
import { withStyles } from '@material-ui/core/styles';

import SectionLayout from '../../molecules/SectionLayout';
import PortfolioItem from '../../molecules/PortfolioItem';

import data from './data';

const styles = theme => ({
  portfolio: {
    [theme.breakpoints.up('sm')]: {
      display: 'grid',
      gridTemplateColumns: '1fr',
      gridGap: '20px',
    },
  },
});

const Portfolio = ({ light, classes }) => {
  const side = (
    <>
      <Typography
        color="primary"
        component="h2"
        variant="h6"
      >
        PORTFOLIO
      </Typography>
      <Typography
        color="primary"
        component="h4"
        variant="body2"
      >
        My amazing works
      </Typography>
    </>
  );

  const main = (
    <>
      <div className={classes.portfolio}>
        {data.map((work, i) => (
          <PortfolioItem work={work} key={i} />
        ))}
      </div>
    </>
  );

  return (
    <SectionLayout
      side={side}
      main={main}
      light={light}
    />
  );
};

Portfolio.propTypes = {
  classes: PropTypes.object.isRequired,
  light: PropTypes.bool,
};

Portfolio.defaultProps = {
  light: false,
};

export default withStyles(styles)(Portfolio);
