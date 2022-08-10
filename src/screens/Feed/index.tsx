import React from 'react';
import { ListRenderItemInfo, StatusBar, Text, View } from 'react-native';
import { SafeAreaView, useSafeAreaInsets } from 'react-native-safe-area-context';
import FeaturedVideoService from '@services/featured-videos'
import { Video } from '@models/Feed';
import InfiniteScrollList from '@components/InfiniteScrollList';
import FeedVideo from '@components/FeedVideo';
import { FetchStatus } from '@models/common';
import styles from './styles';


const LIMIT = 10; // number of videos to fetch per request
const FeedScreen = (): JSX.Element => {
  const [videos, setVideos] = React.useState<Video[]>([])
  const [fetchStatus, setFetchStatus] = React.useState<FetchStatus>(FetchStatus.IDLE)
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
      <FeedVideo video={item} />
    )
  }

  return (
    <View style={[styles.container, { paddingTop: safeAreaInsets.top }]}>
      <StatusBar translucent backgroundColor="transparent" barStyle="light-content" />
      <InfiniteScrollList
        data={videos}
        renderItem={renderFeedVideo}
        keyExtractor={(item: Video) => item.id.toString()}
        loading={fetchStatus === FetchStatus.LOADING}
        pagingEnabled
        loadMore={getVideos} />
    </View>
  );
};

export default FeedScreen;
