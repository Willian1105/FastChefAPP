import { Dimensions, StyleSheet } from "react-native";


export const style = StyleSheet.create({
    container:{
        flex:1,
        alignItems:'center',
        justifyContent:'center',
        backgroundColor:'#f4b400'

    },
    boxTop:{
        height:Dimensions.get('window').height/3,
        width:'50%',
        backgroundColor:'#f4b400',
        alignItems:'center',
        justifyContent:'center'

    },

    boxMid:{
        height:200,
        width:'80%',
        backgroundColor:'#f4b400',
        paddingHorizontal:30

    },

    boxBottom:{

        height:200,
        width:'80%',
        backgroundColor:'#f4b400'
    },
    logo:{
        width:80,
        height:80
    },
    text:{
        fontWeight:'bold',
        marginTop:40,
        fontSize:22
    },
    titleInput:{
        marginLeft:5,
        marginTop:20
    },
    BoxInput:{
        width:'100%',
        height:40,
        borderWidth:1,
        marginTop:1,
        flexDirection:'row',
    },
    input:{
        height:'100%',
        width:'100%',
        backgroundColor:'#f4b400'

    }
})