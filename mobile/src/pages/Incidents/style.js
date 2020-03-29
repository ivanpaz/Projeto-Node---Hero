import {StyleSheet, View} from 'react-native';
//Usa constantes do projeto. Como as dimensões, etc
import Constants from 'expo-constants'; //expo install expo-constants 


export default StyleSheet.create({
    container:{
        flex:1,
        paddingHorizontal: 24,
        paddingTop: Constants.statusBarHeight + 20,
    },

    header:{
        flexDirection: 'row',
        justifyContent: 'space-between', 
        alignItems: 'center'
    },

    headerText:{
        fontSize: 15,
        color: '#737380'
    },

    heaerTextBold:{
        fontWeight: 'bold'
    },
    title:{
        fontSize: 30,
        marginBottom: 16,
        marginTop: 48,
        color: '#13131a',
        fontWeight: 'bold'
    },

    description:{
        fontSize: 16,
        lineHeight: 24,
        color: '#737380'
        
    },

    incidentList:{
        marginTop: 32,

    },

    incident:{
        padding: 24,
        borderRadius: 8,
        backgroundColor: '#FFFFFF',
        marginBottom: 16,
    },

    incidentProperties:{
        fontSize: 14,
        color: '#41414D',
        fontWeight: 'bold'
    },

    incidentValue:{
        marginTop: 8,
        fontSize: 15,
        marginBottom: 24,
        color: '#737380'
    },

    detailsButton:{
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
    },

    detailsButtonText:{
        color: '#e02041',
        fontSize: 15,
        fontWeight: 'bold'
    },


});