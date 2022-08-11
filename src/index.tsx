import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import FeedScreen from '@screens/Feed';
import ProductBottomSheetScreen from '@screens/ProductBottomSheet';
import { FeedStackParamList } from './models';


const Stack = createStackNavigator<FeedStackParamList>();


const RootNavigator = (): JSX.Element => {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name="Feed" component={FeedScreen} />
      <Stack.Screen name="ProductBottomSheet" component={ProductBottomSheetScreen} options={{
        presentation: 'transparentModal',
      }} />
    </Stack.Navigator>
  );
};

export default RootNavigator;
