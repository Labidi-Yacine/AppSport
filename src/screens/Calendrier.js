import React from "react";
import { View, Text, StyleSheet, Button } from "react-native";

const Calendrier = ({ navigation }) => {
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
            title="Inscription"
            onPress={() => {
                navigation.navigate("Inscription");
            }}

            />
        </View>
        <Text style={styles.titre}> Bienvenue sur le calendrier du club !</Text>

        <Text style={styles.newText}>
                Entrainement de cette semaine:
            </Text>
            <Text style={styles.newsItem}>
                - Lundi à 14h00 : Entraînement de football
            </Text>
            <Text style={styles.newsItem}>
                - Mardi à 18h30 : Entraînement de handball
            </Text>
            <Text style={styles.newsItem}>
                - Mercredi à 20h15 : Entraînement de badminton
            </Text>
            <Text style={styles.newsItem}>
                - Jeudi à 10h45 : Entraînement de cyclisme
            </Text>
            <Text style={styles.newsItem}>
                - Vendredi à 15h45 : Entraînement de hockey 
            </Text>
            <Text style={styles.newsItem}>
                - Samedi à 12h00 : Entraînement de ski alpin
            </Text>
            <Text style={styles.newsItem}>
                - Dimanche à 16h30 : Entraînement de karaté
            </Text>

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
        fontSize: 24,
        lineHeight: 24,
        color: '#581845', 
        fontWeight: "bold", 
        margin : 30,
        
    },
    newText: {
        fontSize: 19,
        lineHeight: 24,
        color: '#333', 
        margin : 30,
        fontWeight:"bold",

    },
    newsItem: {
        fontSize: 16,
        marginBottom: 5,
        margin:10,
        fontWeight:"bold",
    },
});

export default Calendrier;