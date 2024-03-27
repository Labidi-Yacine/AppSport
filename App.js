import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Home from './src/screens/Home';
import Calendrier from './src/screens/Calendrier';
import ListeEquipes from './src/screens/ListeEquipes';
import Inscription from './src/screens/Inscription';
import Evenement from './src/screens/Evenement';


const Stack = createNativeStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          headerStyle: {
            backgroundColor: "#BB2828", 
          },
          headerTintColor: "#fff", 
          headerTitleStyle: {
            fontWeight: "bold",
          },
          headerTitleAlign: "center",
        }}
        initialRouteName="Home"
      >
        <Stack.Screen
          name="Home"
          component={Home}
          options={{
            title: "Page d'accueil"
          }}
        />
        <Stack.Screen
          name="Calendrier"
          component={Calendrier}
          options={{ title: "Calendrier" }}
        />

        <Stack.Screen
          name="ListeEquipes"
          component={ListeEquipes}
          options={{ title: "Liste des Equipes" }}
        />

        <Stack.Screen
          name="Inscription"
          component={Inscription}
          options={{ title: "Inscription" }}
        />

        <Stack.Screen
          name="Evenement"
          component={Evenement}
          options={{ title: "Evenement" }}

        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;
