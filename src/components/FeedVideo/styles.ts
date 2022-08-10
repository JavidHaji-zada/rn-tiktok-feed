import { StyleSheet } from 'react-native';
import { responsiveHeight, responsiveWidth } from '@utils/responsive-dimensions';

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  video: {
    position: 'absolute',
    top: 0,
    left: 0,
    bottom: 0,
    right: 0,
  },
});

export default styles;
