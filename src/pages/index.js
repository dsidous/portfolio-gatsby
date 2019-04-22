import React from 'react';
import { MuiThemeProvider } from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';

import SEO from '../components/seo';
import Home from '../components/pages/Home';
import MyTheme from '../components/MyTheme';

const IndexPage = () => (
  <>
    <SEO title="Home" keywords={[
      'Tamas Jonas', 'web designer', 'webdesigner', 'photoshop',
      'css', 'portfolio', 'valid html5', 'css3 development', 'React',
      'Redux', 'GraphQL'
    ]} />
    <MuiThemeProvider theme={MyTheme}>
      <CssBaseline />
      <Home />
    </MuiThemeProvider>
  </>
)

export default IndexPage
