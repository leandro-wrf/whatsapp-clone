import React from 'react'
import { MaterialCommunityIcons, MaterialIcons } from '@expo/vector-icons'
import { useNavigation } from '@react-navigation/native'

import {  
  Container,
  BoxMessage,
  Profile,
  Description,
  ViewTop,
  ContactName,
  Hour,
  ViewBottom,
  LastMessage,
  ShowContacts
} from './styles'

const MessagesBox = () => {
  const navigation = useNavigation()

  return (
    <Container>
      <BoxMessage>
        <Profile>
          <MaterialCommunityIcons 
            name="account-circle" 
            size={60} 
            color="#90b8f8"
          />
        </Profile>
        <Description
          onPress={() => navigation.navigate('Chat')}
        >
          <ViewTop>
            <ContactName>Amor</ContactName>
            <Hour>21:45</Hour>
          </ViewTop>
          <ViewBottom>
            <MaterialCommunityIcons
              name="check-all"
              size={14}
              color="#eeeeee"
            />
            <LastMessage>Tchau!</LastMessage>
          </ViewBottom>
        </Description>
      </BoxMessage>

      <ShowContacts>
        <MaterialIcons name="chat" size={24} color="#eeeeee"/>
      </ShowContacts>
    </Container>
  )
}

export default MessagesBox