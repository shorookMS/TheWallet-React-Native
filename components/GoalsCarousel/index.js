import React, { Component } from "react";
import {
  Platform,
  View,
  ScrollView,
  Text,
  StatusBar,
  SafeAreaView,
  TouchableOpacity
} from "react-native";
import { LinearGradient } from "expo";
import Carousel from "react-native-snap-carousel";
import styles, { colors } from "./styles/index.style";
import { connect } from "react-redux";
import { sliderWidth, itemWidth } from "./styles/SE";

import SliderEntry from "./components/SliderEntry";

const IS_ANDROID = Platform.OS === "android";
const SLIDER_1_FIRST_ITEM = 1;

class GoalsCarousel extends Component {
  _renderItem({ item, index }) {
    return <SliderEntry navigation={this.props.navigation} data={item} />;
  }

  goalsCarousel(title, type) {
    return (
      <View style={[styles.exampleContainer]}>
        <TouchableOpacity
          activeOpacity={1}
          onPress={() => {
            this.props.navigation.navigate("GoalsView");
          }}
        >
          <Text style={[styles.title, styles.titleLight]}>{`Goals`}</Text>
          <Text style={[styles.subtitle, styles.titleLight]}>{title}</Text>
        </TouchableOpacity>
        <Carousel
          data={this.props.goals.slice(
            this.props.goals.length - 5,
            this.props.goals.length
          )}
          renderItem={this._renderItem.bind(this)}
          sliderWidth={sliderWidth}
          itemWidth={itemWidth}
          containerCustomStyle={styles.slider}
          contentContainerCustomStyle={styles.sliderContentContainer}
          layout={type}
          loop={true}
        />
      </View>
    );
  }
  get gradient() {
    return (
      <LinearGradient
        colors={[colors.background1, colors.background2]}
        startPoint={{ x: 1, y: 0 }}
        endPoint={{ x: 0, y: 1 }}
        style={styles.gradient}
      />
    );
  }

  render() {
    const goals = this.goalsCarousel("The key is to deposit!", "stack");
    return (
      <SafeAreaView style={styles.safeArea}>
        <View style={styles.container}>
          <StatusBar
            translucent={true}
            backgroundColor={"rgba(0, 0, 0, 0.3)"}
            barStyle={"light-content"}
          />
          {this.gradient}
          <ScrollView
            style={styles.scrollview}
            scrollEventThrottle={200}
            directionalLockEnabled={true}
          >
            {goals}
          </ScrollView>
        </View>
      </SafeAreaView>
    );
  }
}
const mapStateToProps = state => ({
  goals: state.goal.goals,
  budgets: state.budget.budgets
});

export default connect(mapStateToProps)(GoalsCarousel);
