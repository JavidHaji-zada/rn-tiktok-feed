import React from "react";
import { View } from "react-native";
import Typography from "@components/shared/Typography";
import { Video } from "@models/Feed";
import styles from "./styles";
import { SafeAreaView } from "react-native-safe-area-context";
import { TYPOGRAPHY } from "@utils/typography";
import { COLORS } from "@utils/colors";
import FeedVideoToolbar, { FeedVideoToolbarProps } from "./Toolbar";

interface FeedVideoOverlayProps extends FeedVideoToolbarProps {
}

const FeedVideoOverlay = (props: FeedVideoOverlayProps): JSX.Element => {
	const { video, ...toolbarProps } = props

	return (
		<SafeAreaView style={styles.overlay}>
			<Typography style={styles.title} fontSize={TYPOGRAPHY.title} color={COLORS.white}>{video.from} to {video.to}</Typography>
			<FeedVideoToolbar video={video}{...toolbarProps} />
		</SafeAreaView>
	)
}

export default FeedVideoOverlay