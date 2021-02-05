import React from "react";
import {
  View,
  Text,
  Image,
  ImageBackground,
  StatusBar,
  ScrollView,
} from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import { Ionicons, Foundation } from "@expo/vector-icons";
import styles from "./styles";

const Landing = () => {
  return (
    <View style={styles.container}>
      <View style={styles.bigFilm}>
        <StatusBar
          barStyle="light-content"
          hidden={true}
          backgroundColor="white"
        />
        <ImageBackground
          style={styles.bigFilmImage}
          source={require("../../assets/images/cartaz.jpg")}
        >
          <View style={styles.menuBackground}>
            <LinearGradient
              colors={["rgba(0,0,0,0.89)", "transparent"]}
              style={styles.background}
            />
            <Image
              style={styles.logo}
              source={require("../../assets/images/netflixlogo.png")}
            />
            <Text style={styles.menu}> Séries</Text>
            <Text style={styles.menu}> Filmes </Text>
            <Text style={styles.menu}> Minha Lista</Text>
          </View>
        </ImageBackground>
        <View style={styles.gradient}></View>
      </View>
      <View style={styles.bigFilmButtonsContainer}>
        <View style={styles.bigFilmButtons}>
          <Ionicons style={styles.addIcon} name="add" size={40} color="white" />
          <Text style={styles.myList}> Minha lista </Text>
        </View>
        <View style={styles.bigFilmButtons}>
          <View style={styles.button2Container}>
            <Foundation name="play" size={30} color="black" />
            <Text> Assistir </Text>
          </View>
        </View>
        <View style={styles.bigFilmButtons}>
          <Ionicons
            name="ios-information-circle-outline"
            size={30}
            color="white"
          />
          <Text style={styles.myList}> Saiba mais </Text>
        </View>
      </View>
      <View style={styles.line}>
        <Text style={{ color: "white", fontSize: 24, fontWeight: "bold" }}>
          Prévias
        </Text>
      </View>
      <View style={styles.scrollViewX}>
        <ScrollView contentContainerStyle>
          <View style={styles.preview}></View>
          <View style={styles.preview}></View>
          <View style={styles.preview}></View>
          <View style={styles.preview}></View>
          <View style={styles.preview}></View>
          <View style={styles.preview}></View>
          <View style={styles.preview}></View>
          <View style={styles.preview}></View>
        </ScrollView>
      </View>
    </View>
  );
};

export default Landing;
