import React from "react";
import { Image, Pressable, View } from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import Typography from "@components/shared/Typography";
import { Talent } from "@models/Talent";
import { TYPOGRAPHY } from "@utils/typography";
import { COLORS } from "@utils/colors";
import styles from "./styles";

interface TalentInfoProps {
	talent: Talent
}

const TalentInfo = (props: TalentInfoProps): JSX.Element => {
	const { talent } = props;
	const safeAreaInsets = useSafeAreaInsets();

	return (
		<View style={[styles.talentInfoContainer, {
			bottom: safeAreaInsets.bottom + 20,
		}]}>
			<Image source={{ uri: talent.avatar_url }} style={styles.talentAvatar} />
			<View style={styles.talentInfo}>
				<Typography numberOfLines={1} fontSize={20} color={COLORS.white}>${talent.cost}</Typography>
				<Typography numberOfLines={1} style={styles.talentName} fontSize={20} color={COLORS.white}>{talent.name_en}</Typography>
				{
					talent.tags?.length > 0 && (
						<Typography numberOfLines={1} fontSize={TYPOGRAPHY.subtitle} color={COLORS.white}>Top Notes{talent.tags.map(t => t.name_en).join(',')}</Typography>
					)
				}
			</View>
			<Pressable style={styles.addToCartBtn}>
				<Typography style={styles.addToCartText} fontWeight="600" color={COLORS.white} fontSize={TYPOGRAPHY.title}>
					Add to Cart
				</Typography>
				<View style={styles.addToCartBtnLine}></View>
			</Pressable>
		</View>
	)
}

export default TalentInfo