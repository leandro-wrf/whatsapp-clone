import React from 'react'
import { Text } from 'react-native'
import { NavigationContainer } from '@react-navigation/native'
import { createMaterialTopTabNavigator, MaterialTopTabBarOptions } from '@react-navigation/material-top-tabs'

import { Entypo } from '@expo/vector-icons'

import Camera from './pages/Camera/'
import MessagesBox from './pages/MessagesBox/'
import Status from './pages/Status/'
import Calls from './pages/Calls/'

const Routes = () => {
  const Tab = createMaterialTopTabNavigator()

  return (
    <NavigationContainer>
      <Tab.Navigator
        tabBarOptions={{
          pressColor: '#5f85db',
          labelStyle: {
            color: '#5f85db',
            fontSize: 14,
            fontWeight: 'bold'
          },
          indicatorStyle: {
            borderWidth: 1.8,
            borderColor: '#5f85db'
          },
          style: {
            backgroundColor: '#26282b',
          },
          tabStyle: {
            padding: 0,
            paddingBottom: 8,
            alignItems: 'center'
          }
        }}
      >
        <Tab.Screen 
          name="C"
          component={Camera}

          options={{
            tabBarLabel: ()  => <Entypo name="camera" size={24} color="#eeeeee" />
          }}
        />
        <Tab.Screen name="CONVERSAS" component={MessagesBox} />
        <Tab.Screen name="STATUS" component={Status} />
        <Tab.Screen name="CHAMADAS" component={Calls} />
      </Tab.Navigator>
    </NavigationContainer>
  )
}

export default Routes
