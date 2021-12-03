import * as React from 'react';
import { StyleSheet, Text, View, Button, } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createStackNavigator } from '@react-navigation/stack';


import Guide from './components/Guide'
import Strategies from './components/Strategies'
import Budgeter from './components/Budgeter'

/*
Home Page
*/
const Home = ({ navigation }) => {
  return (
    <View style={{ flexDirection: 'row',margin:25,borderColor:"black",
      padding:10,justifyContent: 'space-around', }}>
      <Text style={{fontSize:40}}>
        Budgeter
      </Text>
    </View>
  );
};

/*
About Page
*/
function About({ navigation }) {
  return (
    <div>
    <View style={styles.header}>
        <Text style={styles.title}>
           About Budgeter
        </Text>
    </View>
    <View style={styles.center}>
        <Text style={styles.text}>
          [write a short description about the app]
        </Text>
    </View>

    <View style={styles.fixToText}>
      <Button
        title="Guide"
        onPress={() =>navigation.navigate('Guide')}
      />
    </View>
    <View style={styles.fixToText}>
      <Button
        title="Strategies"
        onPress={() =>navigation.navigate('Strategies')}
      />
    </View>

    </div>

  );
}

const AboutStack = createStackNavigator();

function AboutStackScreen() {
  return (
    <AboutStack.Navigator>
      <AboutStack.Screen name="About" component={About} />
      <AboutStack.Screen name="Guide" component={Guide} />
      <AboutStack.Screen name="Strategies" component={Strategies} />
    </AboutStack.Navigator>
  );
}

/*
Bottom Tab
*/
const Tab = createBottomTabNavigator();

const App =()=>{
  return (
    <NavigationContainer>
      {
        <Tab.Navigator>
          <Tab.Screen name="Home Screen" component={Home} />
          <Tab.Screen name="Budgeter" component={Budgeter}/>
          <Tab.Screen name="About Page" component={AboutStackScreen} />
        </Tab.Navigator>
      }
    </NavigationContainer>
  )
}

export default App;

const styles = StyleSheet.create({
  header: {
    flexDirection: 'row',
    margin:25,
    borderColor:"black",
    paddingTop:'10px',
    justifyContent: 'space-around',
  },
  center: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    padding:'10px',
  },
  fixToText: {
    flexDirection: 'row',
    justifyContent: 'center',
    padding: '10px',
  },
  title: {
    fontSize:40,
    fontWeight:'bold',
    color: 'dark gray',
    fontFamily: 'Comic Sans MS'
  },
  text:{

  }
});
