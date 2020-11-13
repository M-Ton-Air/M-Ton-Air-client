import React, {useEffect, useState } from 'react';
import { Text, View, TextInput } from 'react-native';
import {MtaLogoXSmall} from 'mta_components/index';
import signInUpStyles from 'mta_styles/sign-in-up-styles.js';
import {StringResources as SR} from 'mta_assets/index'
import CheckBox from '@react-native-community/checkbox';

//TODO : Implement sign up page




const SignUp = ({navigation}) =>
{
    let checkBoxState = false;
    const inputElementRef = React.useRef(null);

    // https://github.com/facebook/react-native/issues/30123#issuecomment-721667936
    // there as issue (october 2020) in react-native that makes 
    // text input font family property deleted.
    // This occurs when changing the secureTextEntry
    React.useEffect( () => 
    {
        inputElementRef.current.setNativeProps(
        {
            style: { fontFamily: 'Product-Sans-Regular' },
        });
    }, []);

    // https://github.com/react-native-checkbox/react-native-checkbox#example
    const [toggleCheckBox, setToggleCheckBox] = React.useState(false)

    return(
        <View style={signInUpStyles.container}>
            <MtaLogoXSmall/>

            {/* First Name */}
            <TextInput 
                style={[signInUpStyles.textInputGlobal, signInUpStyles.firstTextInput]}
                placeholder={SR.signUpFirstNamePlaceholder()}/>
            {/* Name */}
            <TextInput 
                style={[signInUpStyles.textInputGlobal, signInUpStyles.textInput]}
                placeholder={SR.signUpNamePlaceholder()}/>
            {/* Email */}
            <TextInput 
                style={[signInUpStyles.textInputGlobal, signInUpStyles.textInput]}
                placeholder={SR.signUpEmailPlaceholder()}/>
            {/* Password */}
            <TextInput 
                style={[signInUpStyles.textInputGlobal, signInUpStyles.textInput]}
                ref={inputElementRef} 
                secureTextEntry={true} 
                placeholder={SR.signUpPasswordPlaceHolder()}/>

            {/* Terms of Use and Privacy Policy */}
            <CheckBox
                disabled={false}
                value={toggleCheckBox}
                onValueChange={(newValue) => setToggleCheckBox(newValue)}/>

            {/* Create my account button */}

            {/* Sign in with google button */}

            {/* Already have an account text */}

            {/* Skip account creation */}


        </View>
    );
}



export default SignUp;