import React from "react";
import { View } from "react-native";
import { Feather, Entypo } from "@expo/vector-icons";

import styles from "./styles";

const ContinueFilmButtons = () => {
  return (
    <View style={styles.continueFilmButtons}>
      <Feather name="info" size={20} color="white" />
      <Entypo name="dots-three-vertical" size={20} color="white" />
    </View>
  );
};

export default ContinueFilmButtons;
