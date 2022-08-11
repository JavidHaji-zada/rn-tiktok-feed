import { COLORS } from '@utils/colors';
import { responsiveHeight, responsiveWidth } from '@utils/responsive-dimensions';
import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: "transparent",
		justifyContent: 'flex-end'
	},
	backdrop: {
		flex: 1,
		backgroundColor: 'transparent'
	},
	modal: {
		height: responsiveHeight(84),
		backgroundColor: COLORS.white,
		width: "100%",
		borderRadius: 20,
		paddingHorizontal: 24,
		paddingVertical: 36
	},
	closeBtn: {
		alignSelf: 'flex-end',
	},
	closeIcon: {
		height: 12,
		width: 12,
	},
	carousel: {
		marginTop: responsiveHeight(4),
		alignItems: 'center',
	},
	carouselItem: {
		width: '100%',
		height: '80%',
	},
	carouselItemMirror: {
		width: '100%',
		height: '20%',
		transform: [{ rotateX: '180deg' }],
		opacity: 0.2,
	},
	carouselCircles: {
		marginTop: responsiveHeight(2)
	},
	carouselCircle: {
		height: 8,
		width: 8,
		borderRadius: 8,
		backgroundColor: COLORS.lightGray,
		marginRight: responsiveWidth(2)
	},
	tagInfo: {
		marginTop: responsiveHeight(2),
		flexDirection: 'row',
		justifyContent: 'space-between',
		alignItems: 'center'
	},
	exclusiveBox: {
		backgroundColor: COLORS.primary,
		alignItems: 'center',
		justifyContent: "center",
		paddingHorizontal: responsiveWidth(2),
		paddingVertical: 2,
		borderRadius: 4,
	},
	priceInfo: {
		marginTop: responsiveHeight(2),
		flexDirection: 'row',
		justifyContent: 'space-between',
		alignItems: 'center'
	},
	divider: {
		marginVertical: responsiveHeight(2),
		width: '100%',
		borderBottomWidth: 1,
		borderBottomColor: COLORS.lightGray
	},
	userInfo: {
		flexDirection: 'row',
		justifyContent: 'space-between',
	},
	userInfoMid: {
		flex: 1,
		paddingHorizontal: responsiveWidth(2),
	},
	userAvatar: {
		width: 64,
		height: 64,
		borderRadius: 32,
	},
	category: {
		marginTop: 4,
	},
	star: {
		width: 20,
		height: 20,
	},
	descriptionContainer: {
		marginTop: responsiveHeight(2),
		flexGrow: 1,
	},
	reviewBtn: {
		paddingHorizontal: responsiveWidth(2),
		height: responsiveHeight(8),
		minHeight: 60,
		backgroundColor: COLORS.black,
		borderRadius: 10,
		paddingVertical: 6,
		alignItems: 'center',
		justifyContent: 'center',
		flex: 4,
		marginRight: responsiveWidth(2)
	},
	cartBtn: {
		flex: 5,
		height: responsiveHeight(8),
		minHeight: 60,
		paddingHorizontal: responsiveWidth(2),
		backgroundColor: COLORS.primary,
		borderRadius: 10,
		paddingVertical: 6,
		alignItems: 'center',
		justifyContent: 'center',
	}
});

export default styles;
