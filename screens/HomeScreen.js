import React from "react";
import {
  Platform,
  ScrollView,
  StyleSheet,
  Text,
  View,
  TouchableOpacity
} from "react-native";

import { Button } from "native-base";
import { connect } from "react-redux";

// Actions
import * as actionCreators from "../store/actions";

class HomeScreen extends React.Component {
  static navigationOptions = {
    title: "Home"
  };

  async componentDidMount() {
    await this.props.checkForExpiredToken();
    if (this.props.user) {
      var today = new Date();
      if (this.props.budgets.length !== 0) {
        var compDate = new Date(
          this.props.budgets[this.props.budgets.length - 1].date
        );
        if (
          (today.getMonth() !== compDate.getMonth()) |
          (today.getFullYear() !== compDate.getFullYear())
        ) {
          this.props.navigation.replace("Report");
        }
      } else {
        this.props.navigation.replace("Report");
      }
    }
  }

  componentDidUpdate(prevProps) {
    if (prevProps.user !== this.props.user) {
      this.props.fetchBudgets();
      console.log("Fetching goals");
      this.props.fetchGoals();
    }
  }

  render() {
    return (
      <View style={styles.container}>
        <ScrollView
          style={styles.container}
          contentContainerStyle={styles.contentContainer}
        >
          <Text> Home</Text>
        </ScrollView>
        <View>
          <Button
            block
            success
            onPress={() => this.props.navigation.navigate("AutomatedBudgets")}
          >
            <Text style={{ color: "white" }}>Move</Text>
          </Button>
          <Button
            block
            success
            onPress={() => this.props.navigation.navigate("Goals")}
          >
            <Text style={{ color: "white" }}>Goals</Text>
          </Button>
          <Button
            block
            success
            onPress={() => this.props.navigation.navigate("GoalsView")}
          >
            <Text style={{ color: "white" }}>Goals View</Text>
          </Button>
          <Button
            block
            success
            onPress={() => this.props.navigation.navigate("GoalsView")}
          >
            <Text style={{ color: "white" }}>Signup</Text>
          </Button>
          <Button onPress={() => this.props.navigation.navigate("Login")}>
            <Text>Login</Text>
          </Button>
          {!this.props.user ? (
            <Button
              block
              onPress={() => this.props.navigation.navigate("Login")}
            >
              <Text>Login</Text>
            </Button>
          ) : (
            <Button
              block
              onPress={() => this.props.navigation.navigate("mandatoryInfo")}
            >
              <Text>Expenses</Text>
            </Button>
          )}
          {this.props.user && (
            <View>
              <Button
                block
                warning
                onPress={() => this.props.navigation.navigate("Profile")}
              >
                <Text>Profile</Text>
              </Button>
              <Button
                block
                warning
                onPress={() => this.props.navigation.navigate("Report")}
              >
                <Text>Report</Text>
              </Button>
              <Button
                block
                onPress={() => this.props.navigation.navigate("UpdateProfile")}
              >
                <Text>Update Profile</Text>
              </Button>
              <TouchableOpacity
                danger
                onPress={() => this.props.logout(this.props.navigation)}
                style={styles.buttonContainer}
              >
                <Text>Logout</Text>
              </TouchableOpacity>
            </View>
          )}
        </View>
      </View>
    );
  }
}

const mapStateToProps = state => ({
  user: state.auth.user,
  profile: state.auth.profile
});
const mapDispatchToProps = dispatch => ({
  fetchBudgets: () => dispatch(actionCreators.fetchBudgets()),
  fetchGoals: () => dispatch(actionCreators.fetchGoals()),
  logout: navigation => dispatch(actionCreators.logout(navigation)),
  checkForExpiredToken: () => dispatch(actionCreators.checkForExpiredToken())
});
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(HomeScreen);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff"
  },
  developmentModeText: {
    marginBottom: 20,
    color: "rgba(0,0,0,0.4)",
    fontSize: 14,
    lineHeight: 19,
    textAlign: "center"
  },
  contentContainer: {
    paddingTop: 30
  },
  welcomeContainer: {
    alignItems: "center",
    marginTop: 10,
    marginBottom: 20
  },
  welcomeImage: {
    width: 100,
    height: 80,
    resizeMode: "contain",
    marginTop: 3,
    marginLeft: -10
  },
  getStartedContainer: {
    alignItems: "center",
    marginHorizontal: 50
  },
  homeScreenFilename: {
    marginVertical: 7
  },
  codeHighlightText: {
    color: "rgba(96,100,109, 0.8)"
  },
  codeHighlightContainer: {
    backgroundColor: "rgba(0,0,0,0.05)",
    borderRadius: 3,
    paddingHorizontal: 4
  },
  getStartedText: {
    fontSize: 17,
    color: "rgba(96,100,109, 1)",
    lineHeight: 24,
    textAlign: "center"
  },
  tabBarInfoContainer: {
    position: "absolute",
    bottom: 0,
    left: 0,
    right: 0,
    ...Platform.select({
      ios: {
        shadowColor: "black",
        shadowOffset: { height: -3 },
        shadowOpacity: 0.1,
        shadowRadius: 3
      },
      android: {
        elevation: 20
      }
    }),
    alignItems: "center",
    backgroundColor: "#fbfbfb",
    paddingVertical: 20
  },
  tabBarInfoText: {
    fontSize: 17,
    color: "rgba(96,100,109, 1)",
    textAlign: "center"
  },
  navigationFilename: {
    marginTop: 5
  },
  helpContainer: {
    marginTop: 15,
    alignItems: "center"
  },
  helpLink: {
    paddingVertical: 15
  },
  helpLinkText: {
    fontSize: 14,
    color: "#2e78b7"
  }
});
