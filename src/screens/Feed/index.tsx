import React from 'react';
import { ListRenderItemInfo, StatusBar, View, ViewToken } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import InfiniteScrollList from '@components/InfiniteScrollList';
import FeedVideo from '@components/FeedVideo';
import FeaturedVideoService from '@services/featured-videos'
import { Video, FetchStatus } from '@models/index';
import styles from './styles';
import { responsiveHeight } from '@utils/responsive-dimensions';


const LIMIT = 10; // number of videos to fetch per request
const FeedScreen = (): JSX.Element => {
  const [videos, setVideos] = React.useState<Video[]>([])
  const [fetchStatus, setFetchStatus] = React.useState<FetchStatus>(FetchStatus.IDLE)
  const videoRefs = React.useRef([]);
  const allFetched = React.useRef(false);
  const safeAreaInsets = useSafeAreaInsets()

  React.useEffect(() => {
    getVideos()
  }, [])

  const getVideos = async () => {
    try {
      setFetchStatus(FetchStatus.LOADING)
      const newVideos = await FeaturedVideoService.getFeaturedVideos(videos.length, LIMIT);
      console.log({ newVideos: newVideos.map(v => v.id) })
      console.log({ oldVIdeos: videos.map(v => v.id) })
      if (newVideos.length < LIMIT) allFetched.current = true
      setVideos(videos => videos.concat(newVideos))
    } catch (error) {
      console.log({ error });

      // TODO: handle error
    } finally {
      setFetchStatus(FetchStatus.IDLE)
    }
  }

  const renderFeedVideo = (args: ListRenderItemInfo<Video>) => {
    const { item } = args
    return (
      <View style={{ height: responsiveHeight(100) }}>
        <FeedVideo video={item} ref={ref => videoRefs.current[item.id] = ref} />
      </View>
    )
  }

  const onViewRef = React.useRef((info: {
    changed: ViewToken[];
  }) => {
    info.changed.forEach((row) => {
      const videoRef = videoRefs.current[row.key]
      if (videoRef) {
        if (row.isViewable) {
          console.log('play video', row.key);
          videoRef.play()
        } else {
          console.log('pause video', row.key);
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
        keyExtractor={(item: Video) => item.id.toString()}
        loading={fetchStatus === FetchStatus.LOADING}
        loadMore={getVideos}
        onViewableItemsChanged={onViewRef.current}
        viewabilityConfig={viewConfigRef.current}
        decelerationRate='normal'
        initialNumToRender={0}
        maxToRenderPerBatch={2}
        windowSize={4}
        removeClippedSubviews
      />
    </View>
  );
};

export default FeedScreen;
