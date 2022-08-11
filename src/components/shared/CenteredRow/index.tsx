import React from "react";
import { StyleSheet, View, ViewProps } from "react-native";

const CenteredRow = (props: ViewProps): JSX.Element => {
	return <View {...props} style={[styles.container, props.style]} />;
}

const styles = StyleSheet.create({
	container: {
		flexDirection: "row",
		alignItems: "center",
	},
});

export default CenteredRow;
