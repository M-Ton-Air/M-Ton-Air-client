import React from 'react';
import {Text, View, TouchableNativeFeedback} from 'react-native';
import landingPageStyles from 'mta_styles/landing-page-styles.js';


/**
 * Returns a CreateAccountButton component. Please specify buttonText and callback props.
 * @param {*} props : required : buttonText, callback
 */
const CreateAccountButton = (props) =>
{
    const customOnPressCallback = () =>
    {
        props.callback();
    }

    return(
        <TouchableNativeFeedback onPress={customOnPressCallback.bind(this)}>    
            <View elevation={6} style={landingPageStyles.createMyAccount}>
                <Text style = {landingPageStyles.createMyAccountText}>
                    {props.buttonText}
                </Text>
            </View>
        </TouchableNativeFeedback>
    );
};

export default CreateAccountButton;