import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import tw from "twrnc";

import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import ChatScreen from './screens/ChatScreen';
import TodosScreen from './screens/TodosScreen';
import RemindersScreen from './screens/RemindersScreen';
import Ionic from "react-native-vector-icons/MaterialCommunityIcons"
import { useState } from 'react';

import TodosContext from './context/TodosContext';
import AlarmsContext from './context/AlarmsContext';

export default function App() {

  const [todos,setTodos]=useState([]);
  const [alarms,setAlarms]=useState([]);



  const Tab = createBottomTabNavigator();
  const iconSetter = ({route})=>({
    tabBarIcon:({focused,size,colour})=>{
      let iconName;
      if (route.name==="Todos"){
        iconName = "format-list-bulleted";
      }
      if (route.name==="Chat"){
        iconName = "star-shooting";
      }
      if (route.name==="Reminders"){
        iconName = "alarm";
      }
      if (route.name==="Calendar"){
        iconName = "calendar-month-outline";
      }
      if (route.name==="Settings"){
        iconName = "cog-outline";
      }
      return  <Ionic name={iconName} size={focused?size+2:size} color={focused?"#fff":"#fff6"}/>
    },
    tabBarStyle:{
      backgroundColor:"#766AFF",
      height:70,
      border:"0 black ",
    },
    tabBarShowLabel:false,
    headerShown:false,
    tabBarHideOnKeyboard: true,
  })
  return (
<TodosContext.Provider value={{todos,setTodos}}>
<AlarmsContext.Provider value={{alarms,setAlarms}}>


      <NavigationContainer>
          <Tab.Navigator 
            screenOptions={
              iconSetter
            }
            >
            
              <Tab.Screen  name="Todos" component={TodosScreen}/>
              <Tab.Screen name="Reminders" component={RemindersScreen}/>
              <Tab.Screen name="Chat" component={ChatScreen}/>
              <Tab.Screen name="Calendar" component={RemindersScreen}/>
              <Tab.Screen name="Settings" component={RemindersScreen}/>
          </Tab.Navigator>
          <StatusBar style="dark"/>
      </NavigationContainer>


    </AlarmsContext.Provider>
    </TodosContext.Provider>
  );
}

