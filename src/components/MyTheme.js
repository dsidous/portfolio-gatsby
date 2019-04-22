import { createMuiTheme } from '@material-ui/core/styles';
import { green, grey } from '@material-ui/core/colors';

export default createMuiTheme({
  palette: {
    primary: grey,
    secondary: green,
    type: 'dark',
  },
  typography: {
    htmlFontSize: 14,
    useNextVariants: true,
  },
  overrides: {
    MuiLinearProgress: {
      root: {
        height: '40px',
        borderRadius: '2px',
      },
      bar1Determinate: {
        transition: 'transform 1.5s linear',

      },
      colorSecondary: {
        backgroundColor: '#373838',
      },
    },
  },
});
