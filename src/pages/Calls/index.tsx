import React from 'react'
import { MaterialCommunityIcons } from '@expo/vector-icons'

import {
  Container,
  BoxCall,
  Profile,
  Description,
  ViewLeft,
  Name,
  Date,
  ViewRight,
  AddCall
} from './styles'

const Calls = () => {
  return (
    <Container>
      <BoxCall>
        <Profile>
          <MaterialCommunityIcons
            name="account-circle"
            size={60}
            color="#90b8f8"
          />
        </Profile>
        <Description>
          <ViewLeft>
            <Name>Amor</Name>
            <Date>13:38</Date>
          </ViewLeft>

          <ViewRight>
            <MaterialCommunityIcons
              name="phone"
              size={32}
              color="#eeeeee"
            />
          </ViewRight>
        </Description>
      </BoxCall>

      <AddCall>
        <MaterialCommunityIcons
          name="phone-plus"
          size={24}
          color="#eeeeee"
        />
      </AddCall>
    </Container>
  )
}

export default Calls