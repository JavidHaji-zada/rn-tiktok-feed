import React from "react";
import { Text, TextProps } from "react-native";

interface TypographyProps extends Pick<TextProps, "children" | "style"> {
	fontSize?: number;
	bold?: boolean;
	fontWeight?: 'normal' | 'bold' | '100' | '200' | '300' | '400' | '500' | '600' | '700' | '800' | '900' | undefined;
	color?: string;
}

function Typography(props: TypographyProps): JSX.Element {
	const { fontSize = 12, bold = false, fontWeight, color = "black", children, style = {} } = props;

	const _fontWeight = bold ? "bold" : fontWeight ? fontWeight : "normal";

	return (
		<Text style={[{ fontSize, color, fontWeight: _fontWeight, }, style]} > {children}</ Text >

	)
}

export default Typography