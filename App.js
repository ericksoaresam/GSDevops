import { Text, SafeAreaView, StyleSheet } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import {HomeScreen} from './components/HomeScreen';
import {ProfileScreen} from './components/ProfileScreen';
import {SobreScreen} from './components/SobreScreen'
import { MaterialIcons } from '@expo/vector-icons';
const {Screen, Navigator} = createBottomTabNavigator();

export default function App() {
  return (
    <SafeAreaView style={styles.container}>
      <NavigationContainer>
        <Navigator>
          <Screen name="Inicio" component={HomeScreen}
             options={{
              headerShown: false,
              tabBarShowLabel: false,
              tabBarIcon: ({ size, color }) => (
                <MaterialIcons name="home" size={size} color={'#101636'} />
              ),
            }} />
          <Screen name="Sobre" component={SobreScreen}
            options={{
              headerShown: false,
              tabBarShowLabel: false,
              tabBarIcon: ({ size, color }) => (
                <MaterialIcons name="info" size={size} color={'#101636'} />
              ),
            }} />
            <Screen name="Perfil" component={ProfileScreen}
            options={{
              headerShown: false,
              tabBarShowLabel: false,
              tabBarIcon: ({ size, color }) => (
                <MaterialIcons name="person" size={size} color={'#101636'} />
              ),
            }} />
        </Navigator>
      </NavigationContainer>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: '#ecf0f1',
    padding: 0,
  }
});