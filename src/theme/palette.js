import { colors } from '@material-ui/core';

const white = '#FFFFFF';
const black = '#000000';
const koscomDark = '#AB3D0B';
const koscomMain = '#F36F32';
const koscomLight = 'rgba(255,204,169,0.6)';
const koscomText = '#58585a';

export default {
  black,
  white,
  koscomDark,
  koscomMain,
  koscomLight,
  koscomText,
  customblue: colors.blue[100],
  primary: {
    contrastText: white,
    dark: colors.indigo[900],
    main: colors.indigo[500],
    light: colors.indigo[100]
  },
  secondary: {
    contrastText: white,
    dark: koscomDark,
    main: koscomMain,
    light: koscomLight
  },
  success: {
    contrastText: white,
    dark: colors.green[900],
    main: colors.green[600],
    light: colors.green[400]
  },
  info: {
    contrastText: white,
    dark: colors.blue[900],
    main: colors.blue[600],
    light: colors.blue[400]
  },
  warning: {
    contrastText: white,
    dark: colors.orange[900],
    main: colors.orange[600],
    light: colors.orange[400]
  },
  error: {
    contrastText: white,
    dark: colors.red[900],
    main: colors.red[600],
    light: colors.red[400]
  },
  text: {
    primary: colors.blueGrey[900],
    secondary: colors.blueGrey[600],
    link: colors.blue[600]
  },
  background: {
    default: '#F4F6F8',
    paper: white
  },
  icon: colors.blueGrey[600],
  divider: colors.grey[200]
};
