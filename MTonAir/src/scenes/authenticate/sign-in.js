import React, {useEffect, useState } from 'react';
import { Text, View, TextInput } from 'react-native';
import {MtaLogoXSmall, SignUpButton, ButtonWithCallback} from 'mta_components/index';
import signInUpStyles from 'mta_styles/sign-in-up-styles.js';
import {StringResources as SR} from 'mta_assets/index'
import CheckBox from '@react-native-community/checkbox';
import {UserEntity} from 'mta_models/index';
import Toast from 'react-native-toast-message';
import { UserService } from 'mta_services/index';
import { Timeout } from 'mta_utils/index';
import Spinner from 'react-native-loading-spinner-overlay';
import global from 'mta_utils/global';



/**
 * Sign In component 
 */
const SignIn = ({navigation}) =>
{
    const inputElementRef = React.useRef(null);
    // https://github.com/facebook/react-native/issues/30123#issuecomment-721667936
    // there as issue (october 2020) in react-native that makes  text input font family property deleted.
    // This occurs when changing the secureTextEntry
    React.useEffect( () => 
    {
        inputElementRef.current.setNativeProps(
        {
            style: { fontFamily: 'Product-Sans-Regular' },
        });
    }, []);


    const [email = 'dorian.na@gmail.com', setEmail] = React.useState();
    const [password = '123456', setPassword] = React.useState();
    const [isViewLoading, setIsViewLoading] = React.useState(false);


    /**
     * Logs in the user, and forwards him to the next page.
     */
    const handleSignIn = () =>
    {
        setIsViewLoading(true);
        let user = new UserEntity(null, null, email, password);
        let userService = new UserService(user);
        userService.login( async (data) =>
        {
            let response = JSON.parse(data)
            if(parseInt(response.statusCode) == 200)
            {

                userService.userEntity.apiKey = response.apiToken;
                userService.userEntity.jwt = response.securityToken;
                userService.userEntity.id = response.userId;
                global.user = userService.userEntity;
                setIsViewLoading(false);
                navigation.navigate("LocationAccess")
            }
            else
            {
                setIsViewLoading(false);
                showToast('Woops.. 😕', 'Can\'t log you in ! : ' + response.statusCode + " : " + response.message , 'error');
            }

        });
        setIsViewLoading(false);
    }

    /**
     * 
     * @param {String} title 
     * @param {String} message 
     * @param {String} type 'success | error | info'
     */
    function showToast(title, message, type)
    {
        Toast.show({
            text1: title,
            text2: message,
            type: type
        });
    }

    return(
        <View style={signInUpStyles.container} pointerEvents={isViewLoading ? 'none' : 'auto'}>
            <View style={{zIndex:999 /* just so that the toast is above everything */}}>
                <Toast ref={(ref) => Toast.setRef(ref)} />
            </View>
            <MtaLogoXSmall/>

            {/* TODO : REMOVE DEFAULT VALUES. THEY'RE HERE FOR TESTING PURPOSES. */}
            <View style={{marginTop:40, marginBottom:10}}>
            <TextInput 
                style={[signInUpStyles.textInputGlobal, signInUpStyles.textInput]}
                placeholder={SR.signUpEmailPlaceholder()}
                onChangeText={(text) => setEmail(text)}
                defaultValue='dorian.na@gmail.com'/>
            </View>

            {/* Password */}
            {/* TODO : REMOVE DEFAULT VALUES. THEY'RE HERE FOR TESTING PURPOSES. */}
            <TextInput 
                style={[signInUpStyles.textInputGlobal, signInUpStyles.textInput]}
                ref={inputElementRef} 
                secureTextEntry={true} 
                placeholder={SR.signUpPasswordPlaceHolder()}
                onChangeText={(text) => setPassword(text)}
                defaultValue='123456'/>

            {/* Create my account button */}
            <View style={{marginTop:40}}>
                <ButtonWithCallback buttonText='Login'
                    callback={() => handleSignIn()}/>
            </View>
        </View>
    );
}



export default SignIn;