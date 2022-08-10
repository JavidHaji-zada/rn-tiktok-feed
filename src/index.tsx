import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import FeedScreen from '@screens/Feed';
import ProductBottomSheetScreen from '@screens/ProductBottomSheet';

const Stack = createNativeStackNavigator();

const RootNavigator = (): JSX.Element => {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name="Feed" component={FeedScreen} />
      <Stack.Screen name="ProductBottomSheet" component={ProductBottomSheetScreen} />
    </Stack.Navigator>
  );
};

export default RootNavigator;
