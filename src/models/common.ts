import { Product } from "./Product";
import { StackNavigationProp } from "@react-navigation/stack";

export enum FetchStatus {
  IDLE,
  LOADING,
  SUCCESS,
  FAILURE,
}

export type FeedStackParamList = {
  Feed: undefined,
  ProductBottomSheet: { video: Product },
}

export type FeedStackNavigationProp = StackNavigationProp<FeedStackParamList>;