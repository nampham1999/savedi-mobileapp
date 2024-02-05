import { Dimensions, Platform, StatusBar } from 'react-native';

const STATUSBAR_DEFAULT_HEIGHT = 20;
const STATUSBAR_X_HEIGHT = 44;
const STATUSBAR_IP12_HEIGHT = 47;
const STATUSBAR_IP12MAX_HEIGHT = 47;
const STATUSBAR_IP14PRO_HEIGHT = 49;

const X_WIDTH = 375;
const X_HEIGHT = 812;

const XSMAX_WIDTH = 414;
const XSMAX_HEIGHT = 896;

const IP12_WIDTH = 390;
const IP12_HEIGHT = 844;

const IP12MAX_WIDTH = 428;
const IP12MAX_HEIGHT = 926;

const IP14PRO_WIDTH = 393;
const IP14PRO_HEIGHT = 852;

const IP14PROMAX_WIDTH = 430;
const IP14PROMAX_HEIGHT = 932;

const { height: W_HEIGHT, width: W_WIDTH } = Dimensions.get('window');

let statusBarHeight = STATUSBAR_DEFAULT_HEIGHT;
let isIPhoneX_v = false;
let isIPhoneXMax_v = false;
let isIPhone12_v = false;
let isIPhone12Max_v = false;
let isIPhoneWithMonobrow_v = false;
let isIPhoneWithDynamicIsland_v = false;

if (Platform.OS === 'ios' && !Platform.isPad && !Platform.isTV) {
  if (W_WIDTH === X_WIDTH && W_HEIGHT === X_HEIGHT) {
    isIPhoneWithMonobrow_v = true;
    isIPhoneX_v = true;
    statusBarHeight = STATUSBAR_X_HEIGHT;
  } else if (W_WIDTH === XSMAX_WIDTH && W_HEIGHT === XSMAX_HEIGHT) {
    isIPhoneWithMonobrow_v = true;
    isIPhoneXMax_v = true;
    statusBarHeight = STATUSBAR_X_HEIGHT;
  } else if (W_WIDTH === IP12_WIDTH && W_HEIGHT === IP12_HEIGHT) {
    isIPhoneWithMonobrow_v = true;
    isIPhone12_v = true;
    statusBarHeight = STATUSBAR_IP12_HEIGHT;
  } else if (W_WIDTH === IP12MAX_WIDTH && W_HEIGHT === IP12MAX_HEIGHT) {
    isIPhoneWithMonobrow_v = true;
    isIPhone12Max_v = true;
    statusBarHeight = STATUSBAR_IP12MAX_HEIGHT;
  } else if (W_WIDTH === IP14PROMAX_WIDTH && W_HEIGHT === IP14PROMAX_HEIGHT) {
    isIPhoneWithDynamicIsland_v = true;
    statusBarHeight = STATUSBAR_IP14PRO_HEIGHT;
  } else if (W_WIDTH === IP14PRO_WIDTH && W_HEIGHT === IP14PRO_HEIGHT) {
    isIPhoneWithDynamicIsland_v = true;
    statusBarHeight = STATUSBAR_IP14PRO_HEIGHT;
  }
}

export function getStatusBarHeight() {
  return Platform.select({
    ios: statusBarHeight,
    android: StatusBar.currentHeight,
    default: 0,
  });
}

export const { width: screenWidth, height: screenHeight } =
  Dimensions.get('window');
const guidelineBaseWidth = 393;
const guidelineBaseHeight = 852;

export const verticalScale = (size = 1) => {
  return (screenHeight / guidelineBaseHeight) * size;
};

export const horizontalScale = (size = 1) => {
  return (screenWidth / guidelineBaseWidth) * size;
};

export const moderateScale = (size = 1, factor = 0.5) => {
  return size + (verticalScale(size) - size) * factor;
};

export const isIos = Platform.OS === 'ios';

export const isIphoneX = () => {
  const val = Dimensions.get('window');
  return (
    Platform.OS === 'ios' &&
    !Platform.isPad &&
    !Platform.isTV &&
    (val.height === 780 ||
      val.width === 780 ||
      val.height === 812 ||
      val.width === 812 ||
      val.height === 844 ||
      val.width === 844 ||
      val.height === 896 ||
      val.width === 896 ||
      val.height === 926 ||
      val.width === 926 ||
      val.height === 932 ||
      val.width === 932 ||
      val.height === 852 ||
      val.width === 852)
  );
};
