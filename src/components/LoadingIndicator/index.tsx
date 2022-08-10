import React from "react";
import { ActivityIndicator } from "react-native";

const LoadingIndicator = ({ loading }: { loading: boolean }): JSX.Element => {

	return loading ? (
		<ActivityIndicator color="red" />
	) : <></>
}

export default LoadingIndicator