import React from "react";
import { View, ImageBackground } from "react-native";
import PlayButton from "../PlayButton";
import ContinueFilmButtons from "../ContinueFilmButtons";

import styles from "./styles";

const ContinueFilm = () => {
  return (
    <>
      <View style={styles.continueFilmCard}>
        <View>
          <ImageBackground
            style={styles.continueFilmImage}
            source={require("../../assets/images/riverdale.jpg")}
          >
            <PlayButton />
          </ImageBackground>
        </View>

        <ContinueFilmButtons />
      </View>
      <View style={styles.continueFilmCard}>
        <View>
          <ImageBackground
            style={styles.continueFilmImage}
            source={require("../../assets/images/resurrection.jpg")}
          >
            <PlayButton />
          </ImageBackground>
        </View>

        <ContinueFilmButtons />
      </View>
      <View style={styles.continueFilmCard}>
        <View>
          <ImageBackground
            style={styles.continueFilmImage}
            source={require("../../assets/images/bridgerton.jpg")}
          >
            <PlayButton />
          </ImageBackground>
        </View>

        <ContinueFilmButtons />
      </View>
      <View style={styles.continueFilmCard}>
        <View>
          <ImageBackground
            style={styles.continueFilmImage}
            source={require("../../assets/images/peakyblinders.jpg")}
          >
            <PlayButton />
          </ImageBackground>
        </View>

        <ContinueFilmButtons />
      </View>
    </>
  );
};

export default ContinueFilm;
