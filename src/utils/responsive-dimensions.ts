import { Dimensions } from 'react-native';

const getWindowDimensions = () => {
  return Dimensions.get('window');
};

export function responsiveHeight(heightPercentage: number) {
  return getWindowDimensions().height * (heightPercentage / 100);
}

export function responsiveWidth(widthPercentage: number) {
  return getWindowDimensions().width * (widthPercentage / 100);
}
