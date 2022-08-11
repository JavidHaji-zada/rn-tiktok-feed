import React from 'react';
import { Pressable, TouchableOpacity, ScrollView, View, Image } from 'react-native';
import FastImage from 'react-native-fast-image';
import { RouteProp, useNavigation, useRoute } from '@react-navigation/native';
import Animated, { SlideInDown, SlideOutDown } from 'react-native-reanimated';
import Carousel from 'react-native-reanimated-carousel';
import Typography from '@components/shared/Typography';
import StrokedText from '@components/shared/StrokedText';
import CenteredRow from '@components/shared/CenteredRow';
import CloseIcon from '@assets/icons/close.png';
import StarIcon from '@assets/icons/star.png';
import AddVideoIcon from '@assets/icons/addVideo.png';
import CartIcon from '@assets/icons/cart.png';
import { FeedStackNavigationProp, FeedStackParamList } from '@models/common';
import { responsiveHeight, responsiveWidth } from '@utils/responsive-dimensions';
import { TYPOGRAPHY } from '@utils/typography';
import { COLORS } from '@utils/colors';
import styles from './styles';

const ProductBottomSheetScreen = (): JSX.Element => {
	const route = useRoute<RouteProp<FeedStackParamList, 'ProductBottomSheet'>>();
	const navigation = useNavigation<FeedStackNavigationProp>();
	const { params } = route;
	const { video } = params;
	const { talent, occasion } = video;
	const [currentCarouselIndex, setCurrentCarouselIndex] = React.useState(0);

	const carouselImages = Array(5)
		.fill(0)
		.map(_ => talent.avatar_url);

	const goBack = () => {
		navigation.goBack();
	};

	const renderCarouselCircle = (item: string, index: number): JSX.Element => {
		return <View style={[styles.carouselCircle, { backgroundColor: index === currentCarouselIndex ? COLORS.black : COLORS.lightGray }]} key={`${item}-${index}`} />;
	};

	return (
		<View style={styles.container}>
			<Pressable style={styles.backdrop} onPress={goBack} />
			<Animated.View
				style={styles.modal}
				entering={SlideInDown}
				exiting={SlideOutDown}>
				<TouchableOpacity style={styles.closeBtn} onPress={goBack}>
					<FastImage
						source={CloseIcon}
						style={styles.closeIcon}
						resizeMode="contain"
					/>
				</TouchableOpacity>
				<View style={styles.carousel}>
					<Carousel
						width={responsiveWidth(80)}
						height={responsiveHeight(20)}
						pagingEnabled
						data={carouselImages}
						renderItem={({ item }) => (
							<View>
								<FastImage
									source={{ uri: item }}
									style={styles.carouselItem}
									resizeMode="cover"
								/>
								<FastImage
									source={{ uri: item }}
									style={styles.carouselItemMirror}
									resizeMode="cover"
								/>
							</View>
						)}
						onScrollEnd={setCurrentCarouselIndex}
					/>
					<CenteredRow style={styles.carouselCircles}>
						{carouselImages.map(renderCarouselCircle)}
					</CenteredRow>
				</View>
				<View style={styles.tagInfo}>
					<View style={{ flex: 1 }}>
						<Typography fontSize={TYPOGRAPHY.subtext} color={COLORS.gray}>
							Top Notes: {talent.tags.map(t => t.name_en).join(',')}
						</Typography>
					</View>
					<View style={styles.exclusiveBox}>
						<Typography bold fontSize={TYPOGRAPHY.subtext} color={COLORS.white}>
							EXCLUSIVE
						</Typography>
					</View>
				</View>
				<View style={styles.priceInfo}>
					<View style={{ flex: 1 }}>
						<Typography fontSize={20} bold>
							{talent.name_en}
						</Typography>
					</View>
					<View style={{ flexDirection: 'row' }}>
						<StrokedText
							text={`$${talent.cost}`}
							textProps={{ fontSize: 20, bold: true }}
						/>
						<Typography fontSize={20} color={COLORS.primary} bold>
							${(parseFloat(talent.cost) * 0.8).toFixed(2)}
						</Typography>
					</View>
				</View>
				<View style={styles.divider} />
				<View style={styles.userInfo}>
					<FastImage
						source={{ uri: talent.avatar_url }}
						style={styles.userAvatar}
					/>
					<View style={styles.userInfoMid}>
						<Typography fontSize={20}>
							By{' '}
							<Typography fontSize={20} bold>
								{talent.name_en}
							</Typography>
						</Typography>
						{/* used margin bottom to align triange symbol */}
						<Typography fontSize={20} style={styles.category}>
							Actors{' '}
							<View style={{ marginBottom: 1 }}>
								<Typography>▶</Typography>
							</View>{' '}
							Egypt
						</Typography>
					</View>
					<View style={{ alignItems: 'center' }}>
						<CenteredRow>
							<Image source={StarIcon} style={styles.star} />
							<Typography fontSize={TYPOGRAPHY.title} bold>
								4.9
							</Typography>
						</CenteredRow>
						<Typography fontSize={TYPOGRAPHY.title}>33 Reviews</Typography>
					</View>
				</View>
				<ScrollView contentContainerStyle={styles.descriptionContainer}>
					<Typography fontSize={20} color={COLORS.black} bold>
						Description
					</Typography>
					<Typography>{occasion.description_en}</Typography>
				</ScrollView>
				<CenteredRow>
					<TouchableOpacity style={styles.reviewBtn}>
						<CenteredRow>
							<Image source={AddVideoIcon} />
							<Typography
								style={{ marginLeft: 6, textAlign: 'center' }}
								color={COLORS.white}
								fontSize={TYPOGRAPHY.title}
								bold>
								ADD VIDEO REVIEW
							</Typography>
						</CenteredRow>
					</TouchableOpacity>
					<TouchableOpacity style={styles.cartBtn}>
						<CenteredRow>
							<Image source={CartIcon} />
							<Typography color={COLORS.white} fontSize={TYPOGRAPHY.title} bold>
								ADD TO CART
							</Typography>
						</CenteredRow>
					</TouchableOpacity>
				</CenteredRow>
			</Animated.View>
		</View>
	);
};

export default ProductBottomSheetScreen;
