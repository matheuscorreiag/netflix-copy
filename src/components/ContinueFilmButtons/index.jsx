import React from "react";
import { View } from "react-native";
import { Feather, Entypo } from "@expo/vector-icons";

import styles from "./styles";
// import { Container } from './styles';

const ContinueFilmButtons = () => {
  return (
    <View style={styles.continueFilmButtons}>
      <Feather name="info" size={24} color="white" />
      <Entypo name="dots-three-vertical" size={24} color="white" />
    </View>
  );
};

export default ContinueFilmButtons;
