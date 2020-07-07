import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs'

import MessagesBox from './pages/MessagesBox/'
import Status from './pages/Status/'
import Calls from './pages/MessagesBox/'

const Routes = () => {
  const Tab = createMaterialTopTabNavigator()

  return (
    <NavigationContainer>
      <Tab.Navigator>
        <Tab.Screen name="CONVERSAS" component={MessagesBox} />
        <Tab.Screen name="STATUS" component={Status} />
        <Tab.Screen name="CHAMADAS" component={Calls} />
      </Tab.Navigator>
    </NavigationContainer>
  )
}

export default Routes
