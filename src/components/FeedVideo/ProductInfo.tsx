import React from "react";
import { TouchableOpacity, View } from "react-native";
import FastImage from "react-native-fast-image"
import { useSafeAreaInsets } from "react-native-safe-area-context";
import { CountdownCircleTimer } from 'react-native-countdown-circle-timer'
import { useNavigation } from "@react-navigation/native";
import Typography from "@components/shared/Typography";
import { TYPOGRAPHY } from "@utils/typography";
import { COLORS } from "@utils/colors";
import { FeedStackNavigationProp } from "@models/common";
import { Product } from "@models/Product";
import styles from "./styles";

export interface ProductInfoProps {
	video: Product
	duration: number // duration in millis
	isPlaying: boolean
}

const ProductInfo = (props: ProductInfoProps): JSX.Element => {
	const { video, duration, isPlaying } = props;
	const { talent } = video
	const safeAreaInsets = useSafeAreaInsets();
	const navigation = useNavigation<FeedStackNavigationProp>()

	const showBottomSheet = () => {
		navigation.navigate('ProductBottomSheet', { video })
	}

	return (
		<View style={[styles.talentInfoContainer, {
			bottom: safeAreaInsets.bottom + 20,
		}]}>
			<CountdownCircleTimer
				isPlaying={isPlaying}
				duration={duration / 1000}
				colors={['#f71e78', '#f71e78', '#f71e78', '#f71e78']}
				colorsTime={[0, 0, 0, 0]}
				size={68}
				strokeWidth={3}
				trailColor={"transparent"}
			>
				{() => (
					<TouchableOpacity onPress={showBottomSheet}>
						<FastImage source={{ uri: talent.avatar_url }} style={styles.talentAvatar} />
					</TouchableOpacity>
				)}
			</CountdownCircleTimer>
			<View style={styles.talentInfo}>
				<Typography numberOfLines={1} fontSize={20} color={COLORS.white}>${talent.cost}</Typography>
				<Typography numberOfLines={1} style={styles.talentName} fontSize={20} color={COLORS.white}>{talent.name_en}</Typography>
				{
					talent.tags?.length > 0 && (
						<Typography numberOfLines={1} fontSize={TYPOGRAPHY.subtitle} color={COLORS.white}>Top Notes{talent.tags.map(t => t.name_en).join(',')}</Typography>
					)
				}
			</View>
			<TouchableOpacity style={styles.addToCartBtn} onPress={showBottomSheet}>
				<Typography style={styles.addToCartText} fontWeight="600" color={COLORS.white} fontSize={TYPOGRAPHY.title}>
					Add to Cart
				</Typography>
				<View style={styles.addToCartBtnLine}></View>
			</TouchableOpacity>
		</View>
	)
}

export default ProductInfo