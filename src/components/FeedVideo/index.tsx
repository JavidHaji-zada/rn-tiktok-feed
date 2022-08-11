import React, { forwardRef } from "react";
import { AVPlaybackStatus, AVPlaybackStatusSuccess, ResizeMode, Video as VideoPlayer } from 'expo-av'
import { FeedVideoToolbarProps } from "./Toolbar";
import FeedVideoOverlay from "./Overlay";
import { Product } from "@models/Product";
import styles from "./styles";

interface FeedVideoProps extends FeedVideoToolbarProps {
	video: Product
}

const FeedVideo = forwardRef((props: FeedVideoProps, forwardedRef): JSX.Element => {
	const { video, ...toolbarProps } = props;
	const player = React.useRef<VideoPlayer>(null);
	const [isPlaying, setIsPlaying] = React.useState(false)
	const [duration, setDuration] = React.useState(0);
	React.useImperativeHandle(forwardedRef, () => ({
		play,
		pause,
		toggleMute
	}))

	React.useEffect(() => {
		return () => { removeVideoFromMemory() }
	}, [])

	/**
	 * play the video if ref exists
	 */
	const play = async () => {
		if (!player.current) return;
		const playerStatus = await player.current.getStatusAsync() as AVPlaybackStatusSuccess;
		if (playerStatus?.isPlaying) return;
		await player.current.playAsync();
		setIsPlaying(true)
	}

	/**
	 * pause the video if ref exists
	 */
	const pause = async () => {
		if (!player.current) return;
		const playerStatus = await player.current.getStatusAsync() as AVPlaybackStatusSuccess;
		if (!playerStatus?.isPlaying) return;
		await player.current.pauseAsync();
		setIsPlaying(false)
	}

	/**
	 * mute the video if ref exists
	 */
	const toggleMute = async () => {
		if (!player.current) return;
		const playerStatus = await player.current.getStatusAsync() as AVPlaybackStatusSuccess;
		await player.current.setIsMutedAsync(!playerStatus?.isMuted);
	}

	/**
	 * remove the video on unmount if ref exists
	 */
	const removeVideoFromMemory = async () => {
		if (!player.current) return;
		await player.current.unloadAsync();
	}

	const onLoad = (status: AVPlaybackStatus) => {
		setDuration((status as AVPlaybackStatusSuccess).durationMillis || 0)
	}

	return (
		<>
			<FeedVideoOverlay video={video} {...toolbarProps} duration={duration} isPlaying={isPlaying} />
			<VideoPlayer
				ref={player}
				usePoster
				posterSource={{ uri: video.thumbnail }}
				style={styles.container}
				resizeMode={ResizeMode.COVER}
				shouldPlay={false}
				source={{ uri: video.url }}
				onLoad={onLoad}
			/>
		</>
	)
})


export default React.memo(FeedVideo)