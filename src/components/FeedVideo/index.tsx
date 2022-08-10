import { Video } from "@models/Feed";
import React from "react";
import { Text, View } from "react-native";
import styles from "./styles";

interface FeedVideoProps {
	video: Video
}

const FeedVideo = (props: FeedVideoProps): JSX.Element => {
	const { video } = props;
	return (
		<View style={styles.container}>
			<Text>Feed Video with id {video.id}</Text>
		</View>
	)
}

export default React.memo(FeedVideo)