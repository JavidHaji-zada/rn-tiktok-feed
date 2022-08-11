import React from "react";
import FeedVideoToolbar, { FeedVideoToolbarProps } from "./Toolbar";
import ProductInfo, { ProductInfoProps } from "./ProductInfo";
import Typography from "@components/shared/Typography";
import { SafeAreaView } from "react-native-safe-area-context";
import { TYPOGRAPHY } from "@utils/typography";
import { COLORS } from "@utils/colors";
import styles from "./styles";

const FeedVideoOverlay = (props: FeedVideoToolbarProps & ProductInfoProps): JSX.Element => {
	const { video, duration, isPlaying, ...toolbarProps } = props

	return (
		<SafeAreaView edges={['top']} style={styles.overlay}>
			<Typography style={styles.title} fontSize={TYPOGRAPHY.title} color={COLORS.white}>{video.from} to {video.to}</Typography>
			<FeedVideoToolbar video={video}{...toolbarProps} />
			<ProductInfo video={video} duration={duration} isPlaying={isPlaying} />
		</SafeAreaView>
	)
}

export default FeedVideoOverlay