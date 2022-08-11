import React from "react";
import { View, ViewProps, ViewStyle } from "react-native";
import Typography, { TypographyProps } from "../Typography";
import { COLORS } from "@utils/colors";
import styles from "./styles";

interface StrokedTextProps {
	containerStyle?: ViewStyle;
	lineStyle?: ViewStyle;
	viewProps?: ViewProps;
	textProps?: TypographyProps;
	text: string;
}

const StrokedText = (props: StrokedTextProps): JSX.Element => {
	const { text, containerStyle, viewProps, textProps, lineStyle } =
		props;

	return (
		<View style={[styles.container, containerStyle]} {...viewProps}>
			<View
				style={[
					styles.lineThrough,
					,
					{ backgroundColor: COLORS.black },
					lineStyle,
				]}
			/>
			<Typography
				style={{
					...styles.text,
					color: COLORS.black,
				}}
				{...textProps}>
				{text}
			</Typography>
		</View>
	);
}
export default StrokedText;
