import { COLORS } from '@utils/colors';
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
    paddingRight: 20,
  },
  title: {
    alignSelf: 'center',
  },
  // Toolbar styles
  toolbar: {
    alignSelf: 'flex-end',
    top: responsiveHeight(33)
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
  },
  //TalentInfo styles
  talentInfoContainer: {
    paddingVertical: 40,
    borderRadius: 20,
    paddingHorizontal: 28,
    position: 'absolute',
    width: '100%',
    alignSelf: 'center',
    backgroundColor: "rgba(0,0,0,0.5)",
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center'
  },
  talentAvatar: {
    width: 64,
    height: 64,
    borderRadius: 32,
  },
  talentInfo: {
    flex: 3,
    paddingHorizontal: 16
  },
  talentName: {
    marginVertical: 8
  },
  addToCartBtn: {
    flex: 2,
    height: "100%",
    backgroundColor: COLORS.primary,
    justifyContent: "center",
    borderRadius: 12,
    paddingHorizontal: 10,
  },
  addToCartText: {
    textAlign: 'center',
  },
  addToCartBtnLine: {
    height: 4,
    width: "100%",
    alignSelf: "center",
    backgroundColor: "rgb(109,9,51)",
    borderRadius: 4,
    position: "absolute",
    bottom: 3
  }
});

export default styles;
