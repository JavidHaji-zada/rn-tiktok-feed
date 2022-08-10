import { responsiveHeight, responsiveWidth } from '@utils/responsive-dimensions';
import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  // Overlay styles
  overlay: {
    width: responsiveWidth(100),
    height: "100%",
    position: 'absolute',
    zIndex: 1000,
    paddingBottom: 20,
    paddingRight: 20
  },
  title: {
    alignSelf: 'center',
  },
  // Toolbar styles
  toolbar: {
    alignSelf: 'flex-end',
    top: responsiveHeight(33)
    // position: 'absolute',
    // zIndex: 1000,
    // right: responsiveWidth(10),
    // top: responsiveHeight(33),
  },
  toolbarItem: {
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: responsiveHeight(2)
  },
  toolbarButton: {
    width: responsiveWidth(12),
    height: responsiveWidth(12),
    borderRadius: responsiveWidth(6),
    backgroundColor: 'rgba(0,0,0,0.5)',
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 6
  },

  toolbarIcon: {
    width: 24,
    height: 24
  }
});

export default styles;
