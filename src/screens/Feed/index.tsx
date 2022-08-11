import React from 'react';
import { ListRenderItemInfo, StatusBar, View, ViewToken } from 'react-native';
import InfiniteScrollList from '@components/InfiniteScrollList';
import FeedVideo from '@components/FeedVideo';
import FeaturedVideoService from '@services/featured-videos'
import { FetchStatus, Product } from '@models/index';
import { responsiveHeight } from '@utils/responsive-dimensions';
import styles from './styles';


const LIMIT = 10; // number of videos to fetch per request
const FeedScreen = (): JSX.Element => {
  const [videos, setVideos] = React.useState<Product[]>([])
  const [fetchStatus, setFetchStatus] = React.useState<FetchStatus>(FetchStatus.IDLE)
  const videoRefs = React.useRef([]);
  const allFetched = React.useRef(false);

  React.useEffect(() => {
    getVideos()
  }, [])

  const getVideos = async () => {
    try {
      setFetchStatus(FetchStatus.LOADING)
      const newVideos = await FeaturedVideoService.getFeaturedVideos(Math.floor(videos.length / LIMIT) + 1, LIMIT);
      if (newVideos.length < LIMIT) allFetched.current = true
      setVideos(videos => videos.concat(newVideos.map(v => ({ ...v, likeCount: 0, commentCount: 0 }))))
    } catch (error) {
      console.log({ error });
      // TODO: handle error
    } finally {
      setFetchStatus(FetchStatus.IDLE)
    }
  }

  const renderFeedVideo = (args: ListRenderItemInfo<Product>) => {
    const { item } = args

    const mute = () => {
      const videoRef = videoRefs.current[item.id]
      if (videoRef) videoRef.toggleMute()
    }

    const like = () => {
      if (item.isLiked) {
        item.isLiked = false;
        item.likeCount -= 1;
      } else {
        item.isLiked = true;
        item.likeCount += 1;
      }
      setVideos([...videos])
    }

    const comment = () => { }
    return (
      <View style={{ height: responsiveHeight(100) + (StatusBar.currentHeight || 0) }}>
        <FeedVideo video={item} ref={ref => videoRefs.current[item.id] = ref} onMutePress={mute} onLikePress={like} onCommentPress={comment} onUserAvatarPress={() => { }} />
      </View>
    )
  }

  const onViewRef = React.useRef((info: {
    changed: ViewToken[];
  }) => {
    info.changed.forEach((row) => {
      const videoRef = videoRefs.current[row.key as any]
      if (videoRef) {
        if (row.isViewable) {
          videoRef.play()
        } else {
          videoRef.pause()
        }
      }
    })
    // Use viewable items in state or as intended
  })
  const viewConfigRef = React.useRef({ itemVisiblePercentThreshold: 0 })


  return (
    <View style={styles.container}>
      <StatusBar translucent backgroundColor="transparent" barStyle="light-content" />
      <InfiniteScrollList
        data={videos}
        pagingEnabled
        renderItem={renderFeedVideo}
        keyExtractor={(item: Product) => item.id.toString()}
        loading={fetchStatus === FetchStatus.LOADING}
        loadMore={getVideos}
        onViewableItemsChanged={onViewRef.current}
        viewabilityConfig={viewConfigRef.current}
        decelerationRate='normal'
        initialNumToRender={0}
        maxToRenderPerBatch={2}
        windowSize={4}
        removeClippedSubviews
        contentContainerStyle={{ flexGrow: 1 }}
      />
    </View>
  );
};

export default FeedScreen;
