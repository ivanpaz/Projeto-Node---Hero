import React from 'react';
import {Feather} from '@expo/vector-icons';
import {View, TouchableOpacity, Image, Text} from 'react-native';
import {useNavigation, useRoute } from '@react-navigation/native';

//Abrir app de email -  expo install expo-mail-composer
import * as MailComposer from 'expo-mail-composer';

//Mandar WhatsApp
import {Linking} from 'react-native';

import styles from './style';
import logoImg from '../../assets/logo.png';


export default function Details(){
    const navigation = useNavigation();
    const message = `Olá ${incident.name}, estou entrando em contato pois gostaria de ajudar no caso ${incident.title} com o valor de ${incident.value}`;
    //Pegar parametros recebidos pela pagina anterior
    const route = useRoute();
    // pegar o paramentro incident
    const incident = route.params.incident;



    function navigationBack(){
        navigation.goBack();
    }

    function sendMail(){
        //Parametros: (subject, 
        MailComposer.composeAsync({
            subject: `Heroi do caso:: ${incident.title}`,
            recipients: [incident.email],
            body: message

        });
    }

    function sendWhatsApp(){
        Linking.openURL(`whatsapp://send?phone=5511976671346&text=${message}`)
    }

    return(
        <View style={styles.container}>

            <View style={styles.header}>
                <Image source={logoImg} />

                <TouchableOpacity onPress={navigationBack}>
                    <Feather name="arrow-left" size={28} color="#E82041"> </Feather>
                </TouchableOpacity>                
            </View>

            <View style={styles.incident}>
                <Text style={[styles.incidentProperties, {marginTop:0}]}>ONG</Text>
                <Text style={styles.incidentValue}>
                    {incident.name} de {incident.city}, {incident.uf}
                </Text>

                <Text style={styles.incidentProperties}>CASO</Text>
                <Text style={styles.incidentValue}>{incident.title}</Text>

                <Text style={styles.incidentProperties}>VALOR</Text>
                <Text style={styles.incidentValue}>{incident.value}</Text>

            </View>

            <View style={styles.contactBox}>
                <Text style={styles.heroTitle}>Salve dia!</Text>
                <Text style={styles.heroTitle}>Seja o heroi desse caso</Text>

                <Text style={styles.heroDescription}>Entre em contato:</Text>

                <View style={styles.actions}>
                    <TouchableOpacity style={styles.action} onPress={sendWhatsApp}>
                        <Text style={styles.actionText}>WhatsApp</Text>                            
                    </TouchableOpacity>  

                    <TouchableOpacity style={styles.action} onPress={sendMail}>
                        <Text style={styles.actionText}>E-mail</Text>                            
                    </TouchableOpacity>  
                    
                </View>
            </View>

            

        </View>
    );
}