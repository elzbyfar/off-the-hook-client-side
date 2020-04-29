import React, { Component } from "react";
import { View, Image, Animated } from "react-native";
import Images from "../assets/Images";
import Constants from "../helpers/Constants";

export default class Treasure extends Component {
  constructor(props) {
    super(props);

    // this.animatedValue = new Animated.Value(this.props.body.velocity.y);
  }
  render() {
    const width = this.props.body.bounds.max.x - this.props.body.bounds.min.x;
    const height = this.props.body.bounds.max.y - this.props.body.bounds.min.y;
    const x = this.props.body.position.x - width / 2;
    const y = this.props.body.position.y - height / 2;

    //FISH ROTATION
    // this.animatedValue.setValue(this.props.body.velocity.y);
    // let rotation = this.animatedValue.interpolate({
    //   inputRange: [-10, 0, 10, 20],
    //   outputRange: ["-40deg", "0deg", "25deg", "55deg"],
    //   extrapolate: "clamp",
    // });

    // let image = Images["nemo0" + this.props.pose];

    return (
      <Image
        style={{
          position: "absolute",
          top: y,
          left: x,
          width: 20,
          height: 20,
          // transform: [{ rotate: rotation }],
        }}
        // resizeMode="cover"
        source={Images.orangeFood}
      ></Image>
    );
  }
}
