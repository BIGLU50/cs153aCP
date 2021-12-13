import * as React from 'react';
import { StyleSheet, Text, View, Button, } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createStackNavigator } from '@react-navigation/stack';


import taxBrackets from './components/taxBrackets'
import taxGuide from './components/taxGuide'
import taxCalculator from './components/taxCalculator'

/*
Home Page
*/
const Home = ({ navigation }) => {
  return (
    <div>
    <View style={{ flexDirection: 'row',margin:25,borderColor:"black",
      padding:10,justifyContent: 'space-around', }}>
      <Text style={{fontSize:40}}>
        Federal Tax Calculator
      </Text>
    </View>
    <View style={styles.text}>
      Welcome to FedTaxCalculator, a simple tool to estimate your federal income tax for 2021 or 2022. Head over to the About page for instructions, or the TaxCalculator page to start.
    </View>
    </div>
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
           About this App
        </Text>
    </View>
    <View style={styles.center}>
        <Text style={styles.description}>
          (Git README) This simple, textbook app was made by Brendon Lu for Professor Tim Hickey's Fall21 CS153a class. It estimates your federal tax expense for 2021 or 2022. It features 5 screens: a homepage, an operational page, and an about page that includes a page on how American taxes are calculated and the tax brackets of the present and future year. Some of the ReactNative features this app uses are: TextInput, horizontal/vertical views, differing font sizes and colors, multiscreen support, manipulatable useState via TextInput and Buttons, Flatlists, and AsyncStorage (which unfortunately does nothing practical). Currently, the only missing component is Context, as I couldn't find a way to implement it in time. As for a component not covered yet in class, the Tax Guide screen on the About Page features a ScrollView in order to manage its text and image.
          {"\n"}
          {"\n"}
          Given your pre-tax income/raw salary and your marginal tax rate, TaxCalculator returns your annual and monthly post-tax income. How to determine inputs: pre-tax income is the face value of your salary, or whatever your stated salary is on your employment contract. Marginal tax rate can be determined from the Tax Brackets page: whatever range of incomes your pre-tax income falls between is your corresponding marginal tax rate. Make note of the third column, the amount needed to be subtracted from previous tax brackets; taxCalculator will also need this value.
        </Text>
    </View>
    <View style={{flexDirection:'row', justifyContent:'center'}}>
      <View style={styles.fixToText}>
        <Button
          title="Tax Brackets"
          onPress={() =>navigation.navigate('taxBrackets')}
        />
      </View>
      <View style={styles.fixToText}>
        <Button
          title="Tax Guide"
          onPress={() =>navigation.navigate('taxGuide')}
        />
      </View>
    </View>
    </div>

  );
}

const AboutStack = createStackNavigator();

function AboutStackScreen() {
  return (
    <AboutStack.Navigator>
      <AboutStack.Screen name="About" component={About} />
      <AboutStack.Screen name="taxBrackets" component={taxBrackets} />
      <AboutStack.Screen name="taxGuide" component={taxGuide} />
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
          <Tab.Screen name="Tax Calculator" component={taxCalculator}/>
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
    fontWeight:'',
    color: 'dark gray',
    fontFamily: 'Calibri'
  },
  text:{
    fontSize: 25,
    color: 'gray',
    fontWeight:'italic',
    fontFamily: 'calibri',
    textAlign:'center',
    paddingLeft:200,
    paddingRight:200,

  },
  description: {
    textAlign:'center',
    paddingLeft:200,
    paddingRight:200,
    fontSize: 20,
    fontFamily: 'calibri',
    fontColor: 'gray',
  }
});
