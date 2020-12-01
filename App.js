import React, { Component } from "react";
import Loading from "./Loading";
import * as Location from 'expo-location'
import {Alert} from 'react-native'
import axios from 'axios'
import Weather from './Weather'
const API_KEY = '48f80f656ffc231ac5970a3793d7c5a8'

export default class extends React.Component {
  state = {
    isLoading: true
  };
  getWeather = async (latitude, longitude) => {
    const {
      data: {
        main: { temp },
        weather
      }
    } = await axios.get(
      `http://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&APPID=${API_KEY}&units=metric`
      );
      this.setState({
        isLoading: false,
        condition: weather[0].main,
        temp
      });
      console.log({weather})
    };
    getLocation = async () => {
      try {
        await Location.requestPermissionsAsync();
        const {
          coords: { latitude, longitude }
        } = await Location.getCurrentPositionAsync();
        this.getWeather(latitude, longitude);
        
      } catch (error) {
        Alert.alert("Can't find you.", "So sad");
      }
    };
    componentDidMount() {
      this.getLocation();
    }
    render() {
      const { isLoading, temp, condition } = this.state;
      return isLoading ? (
        <Loading />
      ) : (
        <Weather temp={Math.round(temp)} condition={condition} />
      );
    }
  }