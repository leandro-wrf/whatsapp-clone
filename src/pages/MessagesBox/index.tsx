import React from 'react'
import { MaterialCommunityIcons, MaterialIcons } from '@expo/vector-icons'

import {  
  Container,
  Row,
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
  return (
    <Container>
      <Row>
        <Profile>
          <MaterialCommunityIcons 
            name="account-circle" 
            size={60} 
            color="#90b8f8"
          />
        </Profile>
        <Description>
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
      </Row>

      <ShowContacts>
        <MaterialIcons name="chat" size={32} color="#eeeeee"/>
      </ShowContacts>
    </Container>
  )
}

export default MessagesBox