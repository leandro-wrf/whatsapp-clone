import React from 'react'
import { createStackNavigator } from '@react-navigation/stack'

import MessagesBox from './pages/MessagesBox'
import Chat from './pages/Chat'

const Stack = createStackNavigator()

export const StackMessagesBox = () => (
  <Stack.Navigator
    headerMode="none"
    initialRouteName="MessagesBox"
  >
    <Stack.Screen name="MessagesBox" component={MessagesBox} />
    <Stack.Screen name="Chat" component={Chat} />
  </Stack.Navigator>
)
