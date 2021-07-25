import {Navigation} from 'react-native-navigation';
import ReduxProvider from './ReduxProvider';
import FormScreen from './src/screens/FormScreen';
import HomeScreen from './src/screens/HomeScreen';

Navigation.registerComponent(
  'home',
  () => ReduxProvider(HomeScreen),
  () => HomeScreen,
);

Navigation.registerComponent(
  'form',
  () => ReduxProvider(FormScreen),
  () => FormScreen,
);

Navigation.events().registerAppLaunchedListener(() => {
  Navigation.setDefaultOptions({
    topBar: {
      visible: false,
    },
  });
  Navigation.setRoot({
    root: {
      stack: {
        children: [
          {
            component: {
              name: 'home',
            },
          },
        ],
      },
    },
  });
});
