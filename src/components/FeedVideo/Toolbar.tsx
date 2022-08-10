import React from 'react';
import LikeIcon from '@assets/icons/like.png';
import CommentIcon from '@assets/icons/comments.png';
import MuteIcon from '@assets/icons/audioMute.png';
import { Image, Pressable, View } from 'react-native';
import styles from './styles';
import Typography from '@components/shared/Typography';
import { Video } from '@models/Feed';
import { TYPOGRAPHY } from '@utils/typography';
import { COLORS } from '@utils/colors';

export interface FeedVideoToolbarProps {
	video: Video,
	onLikePress: () => void,
	onCommentPress: () => void,
	onMutePress: () => void,
	onUserAvatarPress: () => void
}
const FeedVideoToolbar = (props: FeedVideoToolbarProps): JSX.Element => {
	const { video, onLikePress, onCommentPress, onMutePress, onUserAvatarPress } = props


	return (
		<View style={styles.toolbar}>
			<View style={styles.toolbarItem}>
				<Pressable onPress={onLikePress} style={styles.toolbarButton}>
					<Image style={styles.toolbarIcon} source={LikeIcon} resizeMode='contain' />
				</Pressable>
				<Typography color={COLORS.white} fontSize={TYPOGRAPHY.subtitle} fontWeight="600">{video.likeCount}</Typography>
			</View>
			<View style={styles.toolbarItem}>
				<Pressable onPress={onCommentPress} style={styles.toolbarButton}>
					<Image style={styles.toolbarIcon} source={CommentIcon} resizeMode='contain' />
				</Pressable>
				<Typography color={COLORS.white} fontSize={TYPOGRAPHY.subtitle} fontWeight="600">{video.commentCount}</Typography>
			</View>
			<Pressable onPress={onMutePress} style={styles.toolbarButton}>
				<Image style={styles.toolbarIcon} source={MuteIcon} resizeMode='contain' />
			</Pressable>
		</View>
	)
}

export default FeedVideoToolbar