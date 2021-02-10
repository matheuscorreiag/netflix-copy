import React from "react";

import { View, Image } from "react-native";

import styles from "./styles";

const PreviewFilm = () => {
  return (
    <>
      <View style={styles.previewContainer}>
        <Image
          style={styles.filmPreview}
          source={require("../../assets/images/winx.png")}
        ></Image>
      </View>
      <View style={styles.previewContainer}>
        <Image
          style={styles.filmPreview}
          source={require("../../assets/images/lupin.jpg")}
        ></Image>
      </View>
      <View style={styles.previewContainer}>
        <Image
          style={styles.filmPreview}
          source={require("../../assets/images/ozark.jpg")}
        ></Image>
      </View>
      <View style={styles.previewContainer}>
        <Image
          style={styles.filmPreview}
          source={require("../../assets/images/creed.jpg")}
        ></Image>
      </View>
      <View style={styles.previewContainer}>
        <Image
          style={styles.filmPreview}
          source={require("../../assets/images/billions.jpg")}
        ></Image>
      </View>
    </>
  );
};

export default PreviewFilm;
