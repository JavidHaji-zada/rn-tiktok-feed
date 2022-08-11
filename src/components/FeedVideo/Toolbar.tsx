import React from 'react';
import { TouchableOpacity, View } from 'react-native';
import FastImage from 'react-native-fast-image'
import Typography from '@components/shared/Typography';
import LikeIcon from '@assets/icons/like.png';
import CommentIcon from '@assets/icons/comments.png';
import MuteIcon from '@assets/icons/audioMute.png';
import { Product } from '@models/Product';
import { TYPOGRAPHY } from '@utils/typography';
import { COLORS } from '@utils/colors';
import styles from './styles';

export interface FeedVideoToolbarProps {
	video: Product,
	onLikePress: () => void,
	onCommentPress: () => void,
	onMutePress: () => void,
	onUserAvatarPress: () => void
}
const FeedVideoToolbar = (props: FeedVideoToolbarProps): JSX.Element => {
	const { video, onLikePress, onCommentPress, onMutePress } = props


	return (
		<View style={styles.toolbar}>
			<View style={styles.toolbarItem}>
				<TouchableOpacity onPress={onLikePress} style={styles.toolbarButton}>
					<FastImage style={styles.toolbarIcon} source={LikeIcon} resizeMode='contain' />
				</TouchableOpacity>
				<Typography color={COLORS.white} fontSize={TYPOGRAPHY.subtitle} fontWeight="600">{video.likeCount}</Typography>
			</View>
			<View style={styles.toolbarItem}>
				<TouchableOpacity onPress={onCommentPress} style={styles.toolbarButton}>
					<FastImage style={styles.toolbarIcon} source={CommentIcon} resizeMode='contain' />
				</TouchableOpacity>
				<Typography color={COLORS.white} fontSize={TYPOGRAPHY.subtitle} fontWeight="600">{video.commentCount}</Typography>
			</View>
			<TouchableOpacity onPress={onMutePress} style={styles.toolbarButton}>
				<FastImage style={styles.toolbarIcon} source={MuteIcon} resizeMode='contain' />
			</TouchableOpacity>
		</View>
	)
}

export default FeedVideoToolbar