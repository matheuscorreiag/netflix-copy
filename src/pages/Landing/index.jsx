import React from "react";
import { View, Text, Image, ImageBackground, ScrollView } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import { Ionicons, Foundation } from "@expo/vector-icons";

import styles from "./styles";

import ContinueFilmButtons from "../../components/ContinueFilmButtons";
import PlayButton from "../../components/PlayButton";

const Landing = () => {
  return (
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
        <ScrollView horizontal={true}>
          <View>
            <Image
              style={styles.filmPreview}
              source={require("../../assets/images/winx.png")}
            ></Image>
          </View>
          <View>
            <Image
              style={styles.filmPreview}
              source={require("../../assets/images/lupin.jpg")}
            ></Image>
          </View>
          <View>
            <Image
              style={styles.filmPreview}
              source={require("../../assets/images/ozark.jpg")}
            ></Image>
          </View>
          <View>
            <Image
              style={styles.filmPreview}
              source={require("../../assets/images/creed.jpg")}
            ></Image>
          </View>
          <View>
            <Image
              style={styles.filmPreview}
              source={require("../../assets/images/creed.jpg")}
            ></Image>
          </View>
        </ScrollView>
      </View>

      <View style={styles.continueFilmContainer}>
        <Text
          style={{
            color: "white",
            fontSize: 24,
            fontWeight: "bold",
            paddingLeft: 20,
          }}
        >
          Continuar assistindo como MATHEUS
        </Text>

        <ScrollView horizontal style={styles.scrollViewX}>
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
        </ScrollView>
      </View>
    </ScrollView>
  );
};

export default Landing;
