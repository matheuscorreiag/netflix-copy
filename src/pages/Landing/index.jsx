import React from "react";
import { View, Text, Image, ImageBackground, ScrollView } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import {
  Ionicons,
  Foundation,
  SimpleLineIcons,
  Feather,
  MaterialCommunityIcons,
  FontAwesome5,
} from "@expo/vector-icons";

import styles from "./styles";
import ContinueFilm from "../../components/ContinueFilm";
import PreviewFilm from "../../components/PreviewFilm";

const Landing = () => {
  return (
    <>
      <ScrollView style={styles.container}>
        <View style={styles.bigFilm}>
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
            <LinearGradient
              style={styles.gradientBottom}
              colors={["rgba(0,0,0,0.2)", "rgba(0,0,0,0.5)"]}
            ></LinearGradient>
          </ImageBackground>
          <View style={styles.gradient}></View>
        </View>
        <View style={styles.bigFilmButtonsContainer}>
          <View style={styles.bigFilmButtons}>
            <Ionicons
              style={styles.addIcon}
              name="add"
              size={40}
              color="white"
            />
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
          <Text style={styles.midTitles}>Prévias</Text>
        </View>
        <View style={styles.scrollViewX}>
          <ScrollView horizontal={true}>
            <PreviewFilm />
          </ScrollView>
        </View>

        <View style={styles.continueFilmContainer}>
          <View style={styles.line}>
            <Text style={styles.midTitles}>
              Continuar assistindo como MATHEUS
            </Text>
          </View>
          <ScrollView horizontal style={styles.scrollViewX}>
            <ContinueFilm />
          </ScrollView>
        </View>

        <View style={styles.line}>
          <Text style={styles.midTitles}> Minha Lista</Text>
        </View>
      </ScrollView>
      <View style={styles.menuBottomContainer}>
        <View style={styles.menuBottomImageTextContainer}>
          <SimpleLineIcons name="home" size={22} color="white" />
          <Text style={styles.menuBottomTextActive}> Início </Text>
        </View>
        <View style={styles.menuBottomImageTextContainer}>
          <Feather name="search" size={22} color="#757575" />
          <Text style={styles.menuBottomTextInactive}> Buscar </Text>
        </View>
        <View style={styles.menuBottomImageTextContainer}>
          <MaterialCommunityIcons name="cards" size={22} color="#757575" />
          <Text style={styles.menuBottomTextInactive}> Em breve </Text>
        </View>
        <View style={styles.menuBottomImageTextContainer}>
          <Feather name="download" size={22} color="#757575" />
          <Text style={styles.menuBottomTextInactive}> Downloads </Text>
        </View>
        <View style={styles.menuBottomImageTextContainer}>
          <FontAwesome5 name="bars" size={20} color="#757575" />
          <Text style={styles.menuBottomTextInactive}> Mais </Text>
        </View>
      </View>
    </>
  );
};

export default Landing;
