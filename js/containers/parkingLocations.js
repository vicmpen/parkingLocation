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

import { connect } from "react-redux";

class Location extends React.Component {
  renderItem = item => {
    const {
      index,
      item: { lat, lang }
    } = item;

    return (
      <TouchableOpacity
        style={styles.cell}
        onPress={() => this.locationPressed(item)}
      >
        <Text style={{ fontSize: 24 }}>
          {lat} / {lang}
        </Text>
      </TouchableOpacity>
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
  },
  cell: {
    flex: 1,
    alignItems: "center"
  }
});

export default connect()(Location);
