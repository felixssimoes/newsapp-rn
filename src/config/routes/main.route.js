import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';

import HomeScreen from 'ui/screens/home/home.screen';
import BlankScreen from 'ui/screens/blank.screen';

const MainStack = createStackNavigator({
  home: HomeScreen,
  all: BlankScreen,
});

export default createAppContainer(MainStack);
