import React from "react";
import { View, Text, StyleSheet, StatusBar } from "react-native";
import PropTypes from "prop-types";
import {MaterialCommunityIcons} from '@expo/vector-icons'
import { LinearGradient } from 'expo-linear-gradient'

// 구름 편집 흔적임

const weatherOptions = {
  Thunderstorm: {
    iconName: "weather-lightning",
    gradient: ["#373B44", "#4286f4"]
  },
  Drizzle: {
    iconName: "weather-hail",
    gradient: ["#89F7FE", "#66A6FF"]
  },
  Rain: {
    iconName: "weather-rainy",
    gradient: ["#00C6FB", "#005BEA"]
  },
  Snow: {
    iconName: "weather-snowy",
    gradient: ["#7DE2FC", "#B9B6E5"]
  },
  Atmosphere: {
    iconName: "weather-hail",
    gradient: ["#89F7FE", "#66A6FF"]
  },
  Clear: {
    iconName: "weather-sunny",
    gradient: ["#FF7300", "#FEF253"]
  },
  Clouds: {
    iconName: "weather-cloudy",
    gradient: ["#D7D2CC", "#304352"]
  },
  Mist: {
    iconName: "weather-hail",
    gradient: ["#4DA0B0", "#D39D38"]
  },
  Dust: {
    iconName: "weather-hail",
    gradient: ["#4DA0B0", "#D39D38"]
  },
  Haze: {
    iconName: "weather-hail",
    gradient: ["#4DA0B0", "#D39D38"],
    title: "Haze",
    subtitle: "Just don't go outside."
  }
};

export default function Weather({ temp, condition }) {
  return (
      <LinearGradient
        // Background Linear Gradient
        colors={weatherOptions[condition].gradients}
        style={styles.container
        }
      >
      <StatusBar barStyle='default' />
      <View style={styles.halfcontainer}>
      <MaterialCommunityIcons 
       name={weatherOptions["Clear"].iconName} size={80} color="white" />
      <Text style={styles.temp}>{temp}</Text>
      </View>
      <View style={{...styles.halfcontainer, ...styles.textContainer}}>

      </View>
      </LinearGradient>
  );
}

Weather.propTypes = {
  temp: PropTypes.number.isRequired,
  condition: PropTypes.oneOf([
    "Thunderstorm",
    "Drizzle",
    "Rain",
    "Snow",
    "Atmosphere",
    "Clear",
    "Clouds",
    "Haze",
    "Mist",
    "Dust"
  ]).isRequired
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center"
  },
  temp : { 
    fontSize: 35
  },
  halfcontainer: {
    flex:1,
    justifyContent: "center",
    alignItems: "center"
  },
  textContainer: {
    paddingHorizontal:20,
    alignItems: 'flex-start'
  }
});
