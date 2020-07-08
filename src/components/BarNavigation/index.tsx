import React from 'react'
import { MaterialIcons, Ionicons } from '@expo/vector-icons'

import Routes from '../../routes'

import {
  Container,
  ViewTop,
  TitleApp,
  Row,
  Search,
  Menu
} from './styles'

const BarNavigation = () => {
  return (
    <Container>
      <ViewTop>
        <TitleApp>Whatsapp</TitleApp>
        <Row>
          <Search>
            <MaterialIcons
              name="search"
              size={24}
              color="#393e46"
            />
          </Search>

          <Menu>
            <Ionicons
              name="md-settings"
              size={24}
              color="#393e46"
            />
          </Menu>
        </Row>
      </ViewTop>
      <Routes />
    </Container>
  )
}

export default BarNavigation