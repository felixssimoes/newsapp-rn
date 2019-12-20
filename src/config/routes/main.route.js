import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';

import HomeScreen from 'ui/screens/home/home.screen';
import ViewAllNewsScreen from 'ui/screens/news/view_all.screen';

const MainStack = createStackNavigator({
  home: HomeScreen,
  all: ViewAllNewsScreen,
});

export default createAppContainer(MainStack);
