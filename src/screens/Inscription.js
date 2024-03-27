import React, { useState } from 'react';
import { View, Text, TextInput, StyleSheet, Button } from "react-native";

const Inscription = ({ navigation }) => {

    const handleSubmit = () => {
        
        console.log('inscription reusi !');
    };

return (
    <View style={styles.container}>
        <View style={styles.navbar}>

            <Button
                color="#F95454"
                title="Home"
                onPress={() => {
                    navigation.navigate("Home");
                }}
            />

            <Button
            color="#F95454"
            title="evenement"
            onPress={() => {
                navigation.navigate("Evenement");
            }}

            />

            <Button
            color="#F95454"
            title="Equipes"
            onPress={() => {
                navigation.navigate("ListeEquipes");
            }}

            />

            <Button
            color="#F95454"
            title="Calendrier"
            onPress={() => {
                navigation.navigate("Calendrier");
            }}

            />
        </View>

        <Text style={styles.titre}>Formulaire d'inscription</Text>
        <TextInput
        style={styles.input}
        placeholder="Nom"
        
        />
        <TextInput
        style={styles.input}
        placeholder="Prénom"
        
        />
        <TextInput
        style={styles.input}
        placeholder="Adresse email"
        
        keyboardType="email-address"
        />
        <TextInput
        style={styles.input}
        placeholder="Téléphone"
        
        keyboardType="phone-pad"
        />
        <Button style={styles.boutton} title="S'inscrire" onPress={handleSubmit} />
    </View>
);
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "flex-start",
        alignItems: "stretch",
        backgroundColor: "#F2CFC8",
    },
    navbar: {
        flexDirection: "row", 
        justifyContent: "space-around", 
        alignItems: "center", 
        paddingVertical: 10, 
        backgroundColor: "#F2CFC8", 
    },
    titre: {
        fontSize: 20,
        fontWeight: 'bold',
        margin: 30,

    },
    input: {
        borderWidth: 1,
        borderColor: '#ccc',
        borderRadius: 5,
        padding: 10,
        margin: 20,
        width: '100%',
    },
    boutton:{
        margin:30,
        width: 10,
    }
});

export default Inscription;