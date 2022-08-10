import React, { forwardRef } from "react";
import { AVPlaybackStatus, AVPlaybackStatusSuccess, ResizeMode, Video as VideoPlayer } from 'expo-av'
import { Video } from "@models/Feed";
import styles from "./styles";

interface FeedVideoProps {
	video: Video
}

const FeedVideo = forwardRef((props: FeedVideoProps, forwardedRef): JSX.Element => {
	const { video } = props;
	const player = React.useRef<VideoPlayer>(null);
	const [duration, setDuration] = React.useState(0);
	React.useImperativeHandle(forwardedRef, () => ({
		play,
		pause,
		mute
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
	}

	/**
	 * pause the video if ref exists
	 */
	const pause = async () => {
		if (!player.current) return;
		const playerStatus = await player.current.getStatusAsync() as AVPlaybackStatusSuccess;
		if (!playerStatus?.isPlaying) return;
		await player.current.pauseAsync();
	}

	/**
	 * mute the video if ref exists
	 */
	const mute = async (isMuted: boolean) => {
		if (!player.current) return;
		const playerStatus = await player.current.getStatusAsync() as AVPlaybackStatusSuccess;
		if (playerStatus?.isMuted == isMuted) return;
		await player.current.setIsMutedAsync(isMuted);
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
		<VideoPlayer
			ref={player}
			usePoster
			posterSource={{ uri: video.thumbnail }}
			style={styles.container}
			resizeMode={ResizeMode.COVER}
			shouldPlay={false}
			isLooping
			source={{ uri: video.url }}
			isMuted={false}
			onLoad={onLoad}
		/>
	)
})


export default React.memo(FeedVideo)