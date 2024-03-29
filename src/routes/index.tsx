import React, { useEffect } from 'react';
import { BackHandler } from 'react-native';
import { NavigationContainer, ParamListBase } from '@react-navigation/native';
import {
  createStackNavigator,
  StackNavigationProp,
} from '@react-navigation/stack';

import Home from '@screens/Home';
import Quiz from '@screens/Quiz';
import Results from '@screens/Results';
import screensRoutes from './screensRoutes';

export type RouteNavigationProps = StackNavigationProp<ParamListBase>;

const Stack = createStackNavigator();

const Routes: React.FC = () => {
  const handlerBackButtonPress = () => true;

  useEffect(() => {
    // Disable go back action
    BackHandler.addEventListener('hardwareBackPress', handlerBackButtonPress);

    return () => {
      BackHandler.removeEventListener(
        'hardwareBackPress',
        handlerBackButtonPress,
      );
    };
  }, []);

  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{ headerShown: false }}>
        <Stack.Screen name={screensRoutes.Home} component={Home} />
        <Stack.Screen name={screensRoutes.Quiz} component={Quiz} />
        <Stack.Screen name={screensRoutes.Results} component={Results} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default Routes;
