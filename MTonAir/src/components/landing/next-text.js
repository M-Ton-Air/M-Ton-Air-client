import React from 'react';
import {Text, TouchableNativeFeedback, View} from 'react-native';
import landingPageStyles from 'mta_styles/landing-page-styles.js';


function renderButtonText(isNextButtonOnLastSlide)
{
    if(isNextButtonOnLastSlide)
    {
        return 'SKIP';
    }
    else
    {
        return 'NEXT';
    }
}


const NextText = (props) =>
(
    <View>
    <TouchableNativeFeedback onPress={() => {props.navigation.navigate(props.nextPage)}}>
    <Text style={landingPageStyles.next}>
        {renderButtonText(props.isLast)}
    </Text>
</TouchableNativeFeedback>
</View>
);

export default NextText;