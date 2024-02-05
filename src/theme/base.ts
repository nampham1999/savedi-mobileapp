import { Dimensions } from 'react-native';
import { colors } from './colors';
import { horizontalScale, verticalScale } from './helper';
import styles from './styles';
import { typography } from './typography';

const { width: WINDOW_WIDTH, height: WINDOW_HEIGHT } = Dimensions.get('window');

const base = {
  typography,
  colors: {
    ...colors,
  },
  borderRadius: {
    none: 0,
    'xs-small': 2,
    'x-small': 4,
    'xx-small': 5,
    'xl-small': 6,
    small: 8,
    medium: 10,
    large: 16,
    'x-large': 20,
    'xx-large': 30,
    full: 9999,
  },
  opacity: {
    default: 1,
    disabled: 0.5,
  },
  animation: {
    duration: 500,
    chartsLayout: {
      duration: 1500,
    },
    searchBar: {
      duration: 200,
    },
  },
  window: {
    width: WINDOW_WIDTH,
    height: WINDOW_HEIGHT,
  },
  styles,
  verticalScale,
  horizontalScale,
};

export type BaseType = typeof base;
export type RadiusType = keyof typeof base.borderRadius;

export default base;
