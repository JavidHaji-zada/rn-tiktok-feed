import React from "react";
import FeedVideoToolbar, { FeedVideoToolbarProps } from "./Toolbar";
import ProductInfo from "./TalentInfo";
import Typography from "@components/shared/Typography";
import { SafeAreaView } from "react-native-safe-area-context";
import { TYPOGRAPHY } from "@utils/typography";
import { COLORS } from "@utils/colors";
import styles from "./styles";

const FeedVideoOverlay = (props: FeedVideoToolbarProps): JSX.Element => {
	const { video, ...toolbarProps } = props

	return (
		<SafeAreaView style={styles.overlay}>
			<Typography style={styles.title} fontSize={TYPOGRAPHY.title} color={COLORS.white}>{video.from} to {video.to}</Typography>
			<FeedVideoToolbar video={video}{...toolbarProps} />
			<ProductInfo talent={video.talent} />
		</SafeAreaView>
	)
}

export default FeedVideoOverlay