import { StyleSheet } from "react-native";

export default StyleSheet.create({
	container: {
		flexDirection: "row",
		alignItems: "baseline",
		alignSelf: "center",
		justifyContent: "center",
		paddingHorizontal: 4,
	},
	lineThrough: {
		position: "absolute",
		alignSelf: "center",
		left: 0,
		right: 0,
		height: 2,
		borderRadius: 2,
	},
	text: {
		fontWeight: "bold",
	},
});
