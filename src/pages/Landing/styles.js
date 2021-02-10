import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#000",
  },
  bigFilm: {
    width: "100%",
    height: 500,
  },
  bigFilmImage: {
    width: "100%",
    height: "100%",
    resizeMode: "stretch",
  },
  logo: {
    width: 20,
    height: 40,
  },
  menuBackground: {
    flexDirection: "row",
    justifyContent: "space-around",
    paddingTop: 50,
    paddingLeft: 10,
  },
  background: {
    position: "absolute",
    left: 0,
    right: 0,
    top: 0,
    height: 300,
  },
  menu: {
    fontSize: 20,
    color: "#fff",
    fontFamily: "Archivo_400Regular",
  },
  bigFilmButtonsContainer: {
    width: "100%",
    height: 70,
    backgroundColor: "#000",
    flexDirection: "row",
    justifyContent: "center",
  },
  bigFilmButtons: {
    width: 125,
    height: 60,
    backgroundColor: "#000",
    alignItems: "center",
    justifyContent: "center",
  },
  myList: {
    color: "white",
  },
  button2Container: {
    width: 125,
    height: 50,
    backgroundColor: "white",
    alignItems: "center",
    justifyContent: "center",
    flexDirection: "row",
    color: "white",
    borderRadius: 4,
  },
  line: {
    paddingLeft: 20,
    width: "100%",
    backgroundColor: "#000",
    paddingBottom: 10,
  },
  scrollViewX: {
    backgroundColor: "#000",
    width: "100%",
    paddingLeft: 20,
  },
  gradientBottom: {
    width: "100%",
    height: 150,
    position: "absolute",
    zIndex: 9,
    bottom: 0,
  },
  continueFilmContainer: {
    width: "100%",
    height: 300,
    backgroundColor: "#000",
    paddingBottom: 10,
  },
  continueFilmImage: {
    width: "100%",
    height: 160,
    alignItems: "center",
    justifyContent: "center",
  },
  continueFilmGradient: {
    width: "100%",
    height: "100%",
  },
  midTitles: {
    color: "white",
    fontSize: 24,
    fontWeight: "bold",
  },
  menuBottomContainer: {
    backgroundColor: "#191a1c",
    width: "100%",
    height: 60,
    alignItems: "center",
    justifyContent: "space-evenly",
    flexDirection: "row",
  },
  menuBottomImageTextContainer: {
    alignItems: "center",
  },
  menuBottomTextActive: {
    color: "#FFFF",
    fontSize: 12,
  },
  menuBottomTextInactive: {
    color: "#757575",
    fontSize: 12,
  },
});

export default styles;
