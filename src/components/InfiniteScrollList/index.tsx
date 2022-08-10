import LoadingIndicator from '@components/LoadingIndicator';
import { responsiveHeight } from '@utils/responsive-dimensions';
import React from 'react';
import { ActivityIndicator } from 'react-native';
import { FlatList, FlatListProps, NativeScrollEvent, NativeSyntheticEvent } from 'react-native';
import styles from './styles';

interface InfiniteScrollListProps<T> extends FlatListProps<T> {
	loading: boolean,
	loadMore: () => void;
}

function InfiniteScrollList<T>(props: InfiniteScrollListProps<T>): JSX.Element {
	const { loading, loadMore } = props
	const offset = React.useRef(0);
	const scrollBegun = React.useRef(false);

	const renderFooter = (): JSX.Element => (
		<LoadingIndicator loading={loading} />
	)

	// the following is used to prevent the list calling onEndReached when empty
	function onScroll(
		event: NativeSyntheticEvent<NativeScrollEvent>,
	): void {
		const { nativeEvent } = event;
		let currentOffset = nativeEvent.contentOffset.y;
		let direction = currentOffset > offset.current ? "down" : "up";
		offset.current = currentOffset;
		const { contentOffset, contentSize, layoutMeasurement } =
			nativeEvent;
		// check if on end reached
		if (
			layoutMeasurement.height + contentOffset.y >=
			contentSize.height - responsiveHeight(10) &&
			scrollBegun.current &&
			direction === "down"
		) {
			loadMore();
		}
	}

	return (
		<FlatList
			bounces
			showsVerticalScrollIndicator={false}
			onScrollBeginDrag={() => (scrollBegun.current = true)}
			onScrollEndDrag={() => (scrollBegun.current = false)}
			onScroll={onScroll}
			onEndReachedThreshold={0.1}
			contentContainerStyle={[
				styles.contentContainer,
				{
					paddingBottom: props.horizontal
						? 0
						: loading
							? "10%"
							: "5%",
				},
			]}
			ListFooterComponent={renderFooter()}
			{...props}
		/>
	)
}

export default InfiniteScrollList