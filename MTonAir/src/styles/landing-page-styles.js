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
        textShadowRadius:6,
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
        marginTop:75,
        height:160,
        width:160,
        alignSelf:'center'
    },
    featureTitle:
    {
        fontFamily:'Product-Sans-Bold',
        fontSize:25,
        textAlign:'center',
        marginTop:10,
        color:'#3d8af7',
        textShadowColor:'#071b3a',
        textShadowRadius:1,
        textShadowOffset:
        {
            width: 0,
            height: 2
        }
    },
    featureText:
    {
        fontFamily:'Product-Sans-Regular',
        fontSize:14,
        textAlign:'center',
        marginTop:20,
        color:'#3d8af7'
    },
    activeDot:
    {
        width:25,
        height:25,
        marginRight:6,
        marginLeft:6
    },
    horizontalView:
    {
        flex:1, 
        flexDirection:'row',
        justifyContent:'center',
        marginTop:50,
        height:30
    },
    dot:
    {
        marginRight:5,
        marginLeft:5,
        marginTop:4
    },
    signUpNow:
    {
        width:240,
        height:50,
        backgroundColor:'#2196f3',
        marginBottom:35,
        alignSelf:'center',
        borderRadius:5
    },
    signUpNowText:
    {
        justifyContent:'center',
        alignSelf:'center',
        top:'30%',
        fontFamily:'Product-Sans-Bold',
        fontSize:18,
        color:'#FFFFFF'
    },
    next:
    {
        color:'#FFFFFF',
        fontFamily:'Product-Sans-Bold',
        paddingBottom:10,
        textAlign:"right",
        marginRight:10

    }
});