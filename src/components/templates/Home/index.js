import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';

import styles from '../../../styles/styles';
import Welcome from '../../organisms/Welcome';
import About from '../../organisms/About';
import Skills from '../../organisms/Skills';
import Experiences from '../../organisms/Experiences';
import Portfolio from '../../organisms/Portfolio';
import Contact from '../../organisms/Contact';
import Footer from '../../organisms/Footer';

class Home extends PureComponent {
  render() {
    const { classes } = this.props;

    return (
      <>
        <div className={classes.main}>
          <Welcome fullHeight />

          <About light />

          <Skills />

          <Experiences light />

          <Portfolio />

          <Contact light />

          <Footer />
        </div>
      </>
    );
  }
}

Home.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Home);
