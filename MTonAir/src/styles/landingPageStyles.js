import {StyleSheet} from 'react-native';

export default StyleSheet.create({
    welcomeText:
    {
        color:'#0c59cf',
        fontSize:40,
        textAlign:'center',
        backgroundColor: 'transparent',
        paddingTop:'10%',
        textShadowColor: '#1464f6',
        textShadowOffset:
        {
            width: 0,
            height: 2
        },
        textShadowRadius:10,
        fontFamily:'Product-Sans-Bold'
    },
    container: 
    {
      flex: 1,
      flexDirection: 'column',
    },
    bImg: 
    {
      flex: 1,
      resizeMode: 'cover',
      alignItems:'stretch'
    },
    mtaLogoWelcomePage:
    {
        height:100,
        width:200,
        alignSelf:'center',
        marginTop:10
    },
    mtaLogoNonWelcomePage:
    {
        height:300,
        width:250,
        alignSelf:'center',
        marginTop:10
    },
    aqiLogo:
    {
        //TODO dropshadow
        marginTop:90,
        height:160,
        width:160,
        alignSelf:'center'
    }
});