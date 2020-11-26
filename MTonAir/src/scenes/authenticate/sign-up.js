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



/**
 * Component that handles all the sign up process. After signing up, the user will automatically be
 * signed in to the app and redirected to the location-access page.
 */
const SignUp = ({navigation}) =>
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

    // https://github.com/react-native-checkbox/react-native-checkbox#example
    const [toggleCheckBox, setToggleCheckBox] = React.useState(false)

    const [isViewLoading, setIsViewLoading] = React.useState(false);

    // some doc
    // https://www.digitalocean.com/community/tutorials/five-ways-to-convert-react-class-components-to-functional-components-with-react-hooks
     /* TODO : REMOVE THESE VALUES. THEY'RE HERE FOR TESTING PURPOSES */
     /* !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!! */
    const [firstname = 'Dorian', setFirstname] = React.useState()
    const [name = 'Na', setName] = React.useState();
    const [email = 'dorian.na@gmail.com', setEmail] = React.useState();
    const [password = '123456', setPassword] = React.useState();


    // https://stackoverflow.com/a/47480429/11284920
    const delay = ms => new Promise(res => setTimeout(res, ms));



    /**
     * handles the user account creation
     */
    const handleAccountCreation =  () =>
    {
        if(toggleCheckBox)
        {
           
            let user = new UserEntity(firstname, name, email, password);
            let isEverythingOk = UserService.isUserEntityOkForAccountCreation(user);
            if(typeof(isEverythingOk) == "boolean")
            {

                if(isEverythingOk)
                {
                    Timeout.timeout(5*1000, new Promise( () =>
                    {
                        setIsViewLoading(true);
                        let userService = new UserService(user);
                        userService.createAccount( (data) =>
                        {
                            handleSignUpResponse(data, userService);
                        });
                    })).catch( (error) =>
                    {
                        setIsViewLoading(false);
                        showToast('Woops.. 😕', 'Something went wrong : ' + error, 'error');
                    })
                }

            }
            else
            {
                showToast('Woops.. 😕', isEverythingOk, 'error');
            }
        }
        else
        {
            showToast('Woops.. 😕', 'You need to agree our Terms of Use and Policy.', 'error');
        }
    }

    /**
     * Makes a POST request to the server in order to create an account.
     * @param {Object} data 
     * @param {UserService} userService
     */
    const handleSignUpResponse = (data, userService) =>
    {
        let response = JSON.parse(data)
        console.log(response)
        if(parseInt(response.statusCode) == 200)
        {
            showToast('Success ! 👌', 'Your account was created', 'success');
            autoSignInUser(userService);
        }
        else
        {
            setIsViewLoading(false);
            showToast('Woops.. 😕', 'Something went wrong with the server : ' + response.statusCode + " : " + response.message , 'error');
        }
    }


    /**
     * Logs in the user automatically, and forwards him to the next page.
     * @param {UserService} userService 
     */
    const autoSignInUser = (userService) =>
    {
        console.log(userService.userEntity);
        userService.login( async (data) =>
        {
            console.log(data);
            let response = JSON.parse(data)
            if(parseInt(response.statusCode) == 200)
            {
                //waits for 0.3s so that the user sees the displayed message.
                await delay(0.3 * 1000);
                userService.userEntity.apiKey = response.apiToken;
                userService.userEntity.jwt = response.securityToken;
                setIsViewLoading(false);

                //redirect user
                navigation.navigate('LocationAccess', 
                {
                    user:userService.userEntity
                });
            }
            else
            {
                setIsViewLoading(false);
                showToast('Woops.. 😕', 'Something went wrong while logging you in automatically : ' + response.statusCode + " : " + response.message , 'error');
            }

        });
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
            <Spinner
                visible={isViewLoading}/>
            <View style={{zIndex:999 /* just so that the toast is above everything */}}>
                <Toast ref={(ref) => Toast.setRef(ref)} />
            </View>
            <MtaLogoXSmall/>
            {/* First Name */}
            {/* TODO : REMOVE DEFAULT VALUES. THEY'RE HERE FOR TESTING PURPOSES. */}
            <TextInput 
                style={[signInUpStyles.textInputGlobal, signInUpStyles.firstTextInput]}
                placeholder={SR.signUpFirstNamePlaceholder()}
                onChangeText={(text) => setFirstname(text)} 
                defaultValue='Dorian'
                />
            {/* Name */}
            {/* TODO : REMOVE DEFAULT VALUES. THEY'RE HERE FOR TESTING PURPOSES. */}
            <TextInput 
                style={[signInUpStyles.textInputGlobal, signInUpStyles.textInput]}
                placeholder={SR.signUpNamePlaceholder()}
                onChangeText={(text) => setName(text)}
                defaultValue='Na'/>
            {/* Email */}
            {/* TODO : REMOVE DEFAULT VALUES. THEY'RE HERE FOR TESTING PURPOSES. */}
            <TextInput 
                style={[signInUpStyles.textInputGlobal, signInUpStyles.textInput]}
                placeholder={SR.signUpEmailPlaceholder()}
                onChangeText={(text) => setEmail(text)}
                defaultValue='dorian.na@gmail.com'/>
            {/* Password */}
            {/* TODO : REMOVE DEFAULT VALUES. THEY'RE HERE FOR TESTING PURPOSES. */}
            <TextInput 
                style={[signInUpStyles.textInputGlobal, signInUpStyles.textInput]}
                ref={inputElementRef} 
                secureTextEntry={true} 
                placeholder={SR.signUpPasswordPlaceHolder()}
                onChangeText={(text) => setPassword(text)}
                defaultValue='123456'/>

            {/* Terms of Use and Privacy Policy */}
            <View style={signInUpStyles.termsWrapper}>

                <CheckBox
                    disabled={false}
                    value={toggleCheckBox}
                    onValueChange={(newValue) => setToggleCheckBox(newValue)}/>

                <Text style={signInUpStyles.termsText}>
                    I agree with M' Ton Air {' '}
                    <Text style={signInUpStyles.hyperLink}
                            onPress={() => navigation.navigate('TermsOfUse')}>
                        Terms of Use 
                    </Text>
                    {' '} and {'\n'}
                    <Text style={signInUpStyles.hyperLink}
                            onPress={() => navigation.navigate('PrivacyPolicy')}>
                        Privacy policy
                    </Text>
                </Text>
            </View>

            {/* Create my account button */}
            <ButtonWithCallback buttonText='Create my account'
                callback={handleAccountCreation.bind(this)}/>
            

            {/* Sign in with google button */}
            {/* TODO : IMPLEMENT SIGN UP/IN WITH GOOGLE PAGE (because yeah, user
            will sign up if database has no records with its gmail. And it will log him
            otherwise ) */}
            <SignUpButton
                buttonText='Sign in with google' 
                nextPage='SignInWithGoogle' 
                navigation={navigation}/>

            {/* Already have an account text */}
            {/* TODO : Implement sign in page */}
            <Text style={signInUpStyles.signInText}
            onPress={() => navigation.navigate('SignIn')}>
                ALREADY HAVE AN ACCOUNT ? SIGN IN
            </Text>
        </View>
    );
}



export default SignUp;