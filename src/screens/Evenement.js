import React from "react";
import { View, Text, StyleSheet, Button } from "react-native";

const Evenement = ({ navigation }) => {
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
        <Button
            color="#F95454"
            title="Calendrier"
            onPress={() => {
                navigation.navigate("Calendrier");
            }}

            />
        </View>
        <Text style={styles.titre}> Bienvenue sur l'écran Evenement du club !</Text>

        <Text style={styles.newText}>
                Les evenements a venir :
            </Text>
            <Text style={styles.newsItem}>
                - Tournoi de football local le samedi 10 avril à 14h00.
            </Text>
            <Text style={styles.newsItem}>
                - Match de basket-ball contre l'équipe de la ville voisine le dimanche 18 avril à 16h30.
            </Text>
            <Text style={styles.newsItem}>
                - Compétition de natation interclubs le samedi 24 avril à 9h00
            </Text>
            <Text style={styles.newsItem}>
                - Journée portes ouvertes au club de tennis le samedi 1er mai à 10h00
            </Text>
            <Text style={styles.newsItem}>
                - Soirée de gala du club le vendredi 7 mai à 19h00 
            </Text>
            <Text style={styles.newsItem}>
                - Cours de yoga en plein air le dimanche 16 mai à 10h30
            </Text>
            <Text style={styles.newsItem}>
                - Randonnée pédestre dans la région le samedi 22 mai à 8h00
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

export default Evenement;