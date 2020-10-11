import React from 'react';
import { ImageBackground, StyleSheet, Text, View } from 'react-native';

const image = '../../../assets/img/landing-page/background.png';

const LandingOne = () => 
(
<View style={styles.container}>
    <ImageBackground source={require(image)} style={styles.image}>
        <Text style={styles.welcomeText}>Welcome !</Text>
    </ImageBackground>
</View>
);

const styles = StyleSheet.create({
    welcomeText:
    {
        color:'#0c59cf',
        fontSize:30,
        textAlign:'center',
        backgroundColor: 'transparent',
        paddingTop:'10%',
        fontWeight: "bold",
        //todo : drop shadow
        /* TODO : drop shadow */

    },
    container: {
      flex: 1,
      flexDirection: "column"
    },
    image: {
      flex: 1,
      resizeMode: "cover"
    }
  });

export default LandingOne;