import React from 'react';
import {Text, TouchableNativeFeedback, View} from 'react-native';
import landingPageStyles from 'mta_styles/landing-page-styles.js';


const NextText = (props) =>
(
    <View>
        <TouchableNativeFeedback onPress={() => {props.navigation.navigate(props.nextPage)}}>
            <Text style={landingPageStyles.next}>
            {
                (!props.isLast) ? 'NEXT' : ''
            }
            </Text>
        </TouchableNativeFeedback>
    </View>
);

export default NextText;