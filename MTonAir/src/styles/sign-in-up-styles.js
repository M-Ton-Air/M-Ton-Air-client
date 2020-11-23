import {StyleSheet} from 'react-native';

export default StyleSheet.create({
    container:
    {
        backgroundColor:'#ffffff',
        flex: 1
    },
    mtaLogoXSmall:
    {
        height:50,
        width:100,
        alignSelf:'center',
        marginTop:30,
        marginBottom:10
    },
    textInputGlobal :
    {
        height: 40,
        borderColor: 'gray',
        borderWidth: 1,
        marginRight: 30,
        marginLeft: 30,
        borderRadius : 5,
        paddingLeft:15,
        fontFamily:'Product-Sans-Regular',
        backgroundColor:'#fafafa'
    },
    firstTextInput:
    {
        marginTop:45,
    },
    textInput:
    {
        marginTop:25,
    },
    termsWrapper:
    {
        flexDirection:'row',
        marginTop:30,
        marginLeft:30,
    },
    termsText:
    {
        marginLeft:5,
        fontFamily:'Product-Sans-Regular'
    },
    hyperLink:
    {
        color:'#83a2df',
        textDecorationLine:'underline'
    },
    toast:
    {
        position:'absolute',
        top:0
    },
    signInText:
    {
        color:'#2196f3',
        fontFamily:'Product-Sans-Regular',
        alignSelf:'center'
    }
})