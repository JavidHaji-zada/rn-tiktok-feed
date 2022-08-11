import React from "react";
import { ActivityIndicator } from "react-native";
import { COLORS } from "@utils/colors";

const LoadingIndicator = ({ loading }: { loading: boolean }): JSX.Element => {

	return loading ? (
		<ActivityIndicator color={COLORS.primary} />
	) : <></>
}

export default LoadingIndicator