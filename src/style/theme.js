import { createMuiTheme, responsiveFontSizes  } from '@material-ui/core/styles';

import amber from '@material-ui/core/colors/amber';
import blue from '@material-ui/core/colors/blue';

const theme = createMuiTheme({
  palette: {
    primary: amber,
    secondary: blue
  },
  typography: {
    fontFamily: [
      '"Titillium Web", sans-serif',
    ].join(','),
  },
  shadows: Array(25).fill('none')
});

export default responsiveFontSizes(theme);