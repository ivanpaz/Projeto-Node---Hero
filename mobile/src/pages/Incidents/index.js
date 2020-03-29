import React, {useState, useEffect} from 'react';
//Icones
import {Feather} from '@expo/vector-icons';
import {useNavigation} from '@react-navigation/native';//Mudar de telas

import api from '../../services/api';

import {View, Image, Text, TouchableOpacity, FlatList} from 'react-native';

import logoImg from '../../assets/logo.png';

import styles from './style';

export default function Incidents(){
    const navigation = useNavigation();
    const [incidents, setIncidents] = useState([]);
    const [total, setTotal] = useState(0);
    const [page, setPage] = useState(1);
    const [loading, setLoading] = useState(false);

    function navigateToDetail(incident){
        navigation.navigate('Detail', {incident});
    }

    async function loadIncidents(){
        
        
        const response = await api.get('incidents');

        setIncidents(response.data);
        //Contar numero de casos
        //setTotal(response.header['Contador-Incidents']);

    }

    useEffect(()=>{
       loadIncidents();
    });

    

    return (
        <View style={styles.container}>
            <View style={styles.header}>
                <Image source={logoImg} />
                <Text style={styles.headerText}>
                    Total de <Text style={styles.headerTextBold}>{total} casos</Text>.
                </Text>
            </View>

            <Text style={styles.title}>Bem-vindo!</Text>
            <Text styles={styles.description}>Escolha um dos casos abaixo</Text>

        <FlatList
            style={styles.incidentList}
            data={incidents}//Lista de incidents pegas no backend
            keyExtractor={incident => String(incident.id)}
            showsVerticalScrollIndicator={false} //Faz o scroll não aparecer
            renderItem={({ item: incident })=> (
                <View style={styles.incident}>
                    <Text style={styles.incidentProperties}>ONG</Text>
                    <Text style={styles.incidentValue}>{incident.name}</Text>

                    <Text style={styles.incidentProperties}>CASO</Text>
                    <Text style={styles.incidentValue}>{incident.title}</Text>

                    <Text style={styles.incidentProperties}>VALOR</Text>
                    <Text style={styles.incidentValue}>{incident.value}</Text>

                    {/* Botao */}
                    <TouchableOpacity 
                        style={styles.detailsButton} 
                        onPress={() => navigateToDetail(incident)}>
                        <Text style={styles.detailsButtonText}>Ver mais detalhes</Text>
                        <Feather name="arrow-right" size={16} color="#E02041"/>

                    </TouchableOpacity>
                </View>

            )}
        />

              

        </View>

    )
}