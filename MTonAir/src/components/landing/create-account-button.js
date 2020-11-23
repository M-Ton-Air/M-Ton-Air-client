import React from 'react';
import {Text, View, TouchableNativeFeedback} from 'react-native';
import landingPageStyles from 'mta_styles/landing-page-styles.js';


/**
 * Returns a CreateAccountButton component. Please specify buttonText and callback props.
 * @param {*} props : required : buttonText, callback
 */
const ButtonWithCallback = (props) =>
{
    const customOnPressCallback = () =>
    {
        props.callback();
    }

    const buttonStyle = (props.blue) ? landingPageStyles.signUpNow : landingPageStyles.createMyAccount;
    const textStyle = (props.blue) ? landingPageStyles.signUpNowText : landingPageStyles.createMyAccountText;

    return(
        <TouchableNativeFeedback onPress={customOnPressCallback.bind(this)}>    
            <View elevation={6} style={buttonStyle}>
                <Text style = {textStyle}>
                    {props.buttonText}
                </Text>
            </View>
        </TouchableNativeFeedback>
    );
};

export default ButtonWithCallback;