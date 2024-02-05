import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {useTheme} from '@emotion/react';
import {Platform, StatusBar, useColorScheme} from 'react-native';
import {GestureHandlerRootView} from 'react-native-gesture-handler';
import {SafeAreaProvider} from 'react-native-safe-area-context';
import Login from '../features/Auth/screens/Login';

const Tab = createBottomTabNavigator<any>();
const AppStack = createNativeStackNavigator<any>();

const AuthStack = createNativeStackNavigator<any>();
const RootStackNavigator = () => {
  // const accessToken = useAppSelector(getAccessToken);
  // const userInfo = useAuth().userInfo;

  // if (!accessToken) return <AuthStackNavigtor />;
  return (
    <AppStack.Navigator
      screenOptions={{headerShown: false}}
      initialRouteName="Login">
      <AppStack.Screen name="Login" component={Login} />
      </AppStack.Navigator>
  );
};
const NavigationRouter = () => {
  const isDarkMode = useColorScheme() === 'dark';
  // const backgroundStyle = {
  //   backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
  // };

  return (
    <SafeAreaProvider>
      <NavigationContainer>
        <StatusBar
          barStyle={isDarkMode ? 'light-content' : 'dark-content'}
          // backgroundColor={backgroundStyle.backgroundColor}
        />
        <GestureHandlerRootView style={{flex: 1}}>
          <RootStackNavigator />
        </GestureHandlerRootView>
      </NavigationContainer>
    </SafeAreaProvider>
  );
};

export default NavigationRouter;
