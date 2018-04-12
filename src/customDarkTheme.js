import {
  orange200,
  orange500,
  orange800,
  grey600,
  grey300, grey700, grey800,
  fullWhite,
} from 'material-ui/styles/colors';
import {fade} from 'material-ui/utils/colorManipulator';
import spacing from 'material-ui/styles/spacing';

export default {
  spacing: spacing,
  fontFamily: 'Roboto, sans-serif',
  borderRadius: 2,
  palette: {
    primary1Color: orange500,
    primary2Color: orange500,
    primary3Color: grey800,
    accent1Color: grey300,
    accent2Color: grey600,
    accent3Color: grey700,
    textColor: orange800,
    secondaryTextColor: fade(orange800, 0.7),
    alternateTextColor: '#303030',
    canvasColor: '#303030',
    borderColor: fade(fullWhite, 0.3),
    disabledColor: fade(fullWhite, 0.3),
    pickerHeaderColor: fade(fullWhite, 0.12),
    clockCircleColor: fade(fullWhite, 0.12),
  },
};
