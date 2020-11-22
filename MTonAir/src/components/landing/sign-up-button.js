import React from 'react';
import {Text, View, TouchableNativeFeedback} from 'react-native';
import landingPageStyles from 'mta_styles/landing-page-styles.js';

/**
 * Returns a SignUpButton component. Please specify nextPage and buttonText props.
 * @param {*} props : required : nextPage, buttonText
 */
const SignUpButton = (props) =>
(
    <TouchableNativeFeedback onPress={() => {props.navigation.navigate(props.nextPage)}}>
        <View elevation={6} style={landingPageStyles.signUpNow}>
            <Text style = {landingPageStyles.signUpNowText}>
                {props.buttonText}
            </Text>
        </View>
    </TouchableNativeFeedback>
);

export default SignUpButton;