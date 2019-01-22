import React from "react";
import { View, Text, StyleSheet } from "react-native";
import { connect } from "react-redux";
import { map } from "rsvp";
import MapView from "react-native-maps";
class Map extends React.Component {
  static toLatLang(x, y) {
    return { latitude: x, longitude: y };
  }
  constructor(props) {
    super(props);
    console.log(props);
    this.state = {
      camera: {
        center: { latitude: 37.78825, longitude: -122.4324 },
        pitch: 0,
        heading: 0,
        altitude: 80,
        zoom: 18
      }
    };
    console.log(this.props);
  }

  successCallback = coords => {
    const {
      coords: { latitude, longitude }
    } = coords;
    console.log("Got new Positions, updating!");
    const camera = this.state.camera;
    const newCamera = { ...camera, center: { latitude, longitude } };
    this.setState({
      camera: newCamera
    });
  };

  markerPressed = e => {
    console.log(e.nativeEvent);
  };

  componentDidMount() {
    navigator.geolocation.getCurrentPosition(this.successCallback);
    navigator.geolocation.watchPosition(this.successCallback);
  }

  render() {
    const { camera } = this.state;
    return (
      <View style={styles.container}>
        <MapView
          style={{ flex: 1 }}
          showsUserLocation={true}
          camera={camera}
          pitchEnabled={false}
          showsMyLocationButton={true}
          liteMode={true}
        >
          <MapView.Marker
            title={"Parking Location"}
            onPress={this.markerPressed}
            coordinate={Map.toLatLang(38.0421925, 23.760932)}
          />
        </MapView>
      </View>
    );
  }
}

styles = StyleSheet.create({
  container: {
    ...StyleSheet.absoluteFillObject
  }
});

const connectedMap = connect(state => ({ test: state.test }))(Map);
export default connectedMap;
