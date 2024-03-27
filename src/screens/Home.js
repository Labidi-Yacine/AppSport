import React from "react";
import { View, Text, StyleSheet, Button } from "react-native";

const Home = ({ navigation }) => {
    return (
        <View style={styles.container}>
            <View style={styles.navbar}>
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
            <Button
            color="#F95454"
            title="Calendrier"
            onPress={() => {
                navigation.navigate("Calendrier");
            }}

            />
            </View>

        
            <Text style={styles.titre}> 
                Bienvenue sur l'écran d'accueil du club !
            </Text>

            <Text style={styles.newText}>
                Voici les dernières nouvelles :
            </Text>
            <Text style={styles.newsItem}>
                - Le match de football contre le FC Nantes est fixé pour dimanche à 14h00 dans la salle sportive du club.
            </Text>
            <Text style={styles.newsItem}>
                - Le match de football contre le FC Paris est reporté à une date ultérieure.
            </Text>
            <Text style={styles.newsItem}>
                - L'équipe de basket-ball du club a remporté son dernier match avec une victoire écrasante de 102-75.
            </Text>
            <Text style={styles.newsItem}>
                - Le tournoi de tennis annuel du club aura lieu le week-end prochain. Les inscriptions sont ouvertes jusqu'à vendredi.
            </Text>
            <Text style={styles.newsItem}>
                - Le club organise une journée portes ouvertes le mois prochain. Invitez vos amis et votre famille à découvrir nos installations et nos activités sportives !
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
            color:"purple",
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
        titre: {
            fontSize: 24,
            lineHeight: 24,
            color: '#581845', 
            fontWeight: "bold", 
            margin : 30,
            
        },

});

export default Home;
