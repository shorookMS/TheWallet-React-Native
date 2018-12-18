import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  shadow: {
    shadowColor: "#595959",
    shadowRadius: 1,
    shadowOpacity: 0.7,
    shadowOffset: { width: 8, height: 8 },
    marginLeft: 20,
    marginRight: 20,
    borderRadius: 10,
    flex: 1
  },
  text: {
    fontWeight: "bold",
    fontFamily: "pacifico-regular",
    fontSize: 22,
    paddingBottom: 40
  },
  container: {
    backgroundColor: "#2B2B2B",
    paddingVertical: 20
  },
  contentContainer: {
    paddingVertical: 20
  },
  label: {
    marginBottom: 8
  },
  button: {
    top: 30,
    marginBottom: 10,
    backgroundColor: "#258779",
    paddingHorizontal: 50,
    shadowColor: "#595959",
    shadowRadius: 1,
    shadowOpacity: 0.7,
    borderRadius: 5,
    shadowOffset: { width: 5, height: 5 },
    paddingBottom: 13,
    alignSelf: "center"
  },
  header: {
    marginBottom: 10,
    paddingTop: 40,
    paddingLeft: 20,
    paddingRight: 20,
    paddingBottom: 10,
    alignSelf: "center",
    color: "#D5C157",
    fontFamily: "pacifico-regular",
    fontSize: 50,
    textShadowColor: "#7f7f7f",
    textShadowOffset: { width: 3, height: 3 },
    textShadowRadius: 1
  }
});
export default styles;
