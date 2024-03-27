import React from "react";
import { View, Text, StyleSheet, Button } from "react-native";

const ListeEquipes = ({ navigation }) => {
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

        <Text style={styles.titre}> Bienvenue sur l'écran Liste equipes du club !</Text>


        <Text style={styles.newText}>
                Les equipes du club :
            </Text>
            <Text style={styles.newsItem}>
                - Équipe de football senior
            </Text>
            <Text style={styles.newsItem}>
                - Équipe de basket-ball masculin
            </Text>
            <Text style={styles.newsItem}>
                - Équipe de basket-ball féminin
            </Text>
            <Text style={styles.newsItem}>
                - Équipe de handball junior
            </Text>
            <Text style={styles.newsItem}>
                - Équipe de volleyball mixte 
            </Text>
            <Text style={styles.newsItem}>
                - Équipe de tennis de table
            </Text>
            <Text style={styles.newsItem}>
                - Équipe de natation synchronisée
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

export default ListeEquipes;