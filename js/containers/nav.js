import {
  createAppContainer,
  createTabNavigator,
  createBottomTabNavigator
} from "react-navigation";

import map from "./map";
import locations from "./parkingLocations";

const AppNavigator = createBottomTabNavigator(
  {
    Location: locations,
    Map: map
  },
  {}
);

export default createAppContainer(AppNavigator);
