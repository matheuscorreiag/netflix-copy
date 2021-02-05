import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: "100%",
    height: "100%",
    backgroundColor: "black",
  },
  bigFilm: {
    width: "100%",
    height: "70%",
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
    paddingTop: 2,
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
    height: "10%",
    backgroundColor: "black",
    flexDirection: "row",
    justifyContent: "center",
  },
  bigFilmButtons: {
    width: 125,
    height: 60,
    backgroundColor: "black",
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
    height: "5%",
  },
  scrollViewX: {
    backgroundColor: "black",
    height: "20%",
    width: "100%",
    paddingLeft: 10,
  },
  preview: {
    backgroundColor: "white",
    borderRadius: 100,
    width: 100,
    height: 100,
  },
});

export default styles;
