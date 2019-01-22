import React from "react";
import {
  View,
  Text,
  FlatList,
  StyleSheet,
  TouchableOpacity
} from "react-native";
import { createStackNavigator, createAppContainer } from "react-navigation";
import parkingLocations from "../res/parkingLocations.json";

import ParkingLocationCell from "../components/ParkingLocationCell";
console.log(ParkingLocationCell);
import { connect } from "react-redux";

class Location extends React.Component {
  renderItem = item => {
    return (
      <ParkingLocationCell location={item} onPressCB={this.locationPressed} />
    );
  };

  locationPressed = location => {
    this.props.navigation.navigate("Map", { location });
  };
  render() {
    return (
      <React.Fragment>
        <View style={styles.container}>
          <FlatList
            style={{ flex: 1, backgroundColor: "lightblue" }}
            data={parkingLocations}
            renderItem={this.renderItem}
          />
        </View>
      </React.Fragment>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    ...StyleSheet.absoluteFillObject,
    flexDirection: "column"
  }
});

export default connect()(Location);
