import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import {createDrawerNavigator} from 'react-navigation-drawer';

import SplashScreen from "../features/SplashScreen";
import SideMenu from './sideMenu';
//@BlueprintImportInsertion
import UserProfile186217Navigator from '../features/UserProfile186217/navigator';
import Maps186198Navigator from '../features/Maps186198/navigator';
import Settings186176Navigator from '../features/Settings186176/navigator';
import Settings186161Navigator from '../features/Settings186161/navigator';
import NotificationList186160Navigator from '../features/NotificationList186160/navigator';
import Maps186159Navigator from '../features/Maps186159/navigator';

/**
 * new navigators can be imported here
 */

const AppNavigator = {

    //@BlueprintNavigationInsertion
UserProfile186217: { screen: UserProfile186217Navigator },
Maps186198: { screen: Maps186198Navigator },
Settings186176: { screen: Settings186176Navigator },
Settings186161: { screen: Settings186161Navigator },
NotificationList186160: { screen: NotificationList186160Navigator },
Maps186159: { screen: Maps186159Navigator },

    /** new navigators can be added here */
    SplashScreen: {
      screen: SplashScreen
    }
};

const DrawerAppNavigator = createDrawerNavigator(
  {
    ...AppNavigator,
  },
  {
    contentComponent: SideMenu
  },
);

const AppContainer = createAppContainer(DrawerAppNavigator);

export default AppContainer;
