import React from 'react'
import { MaterialCommunityIcons, Entypo } from '@expo/vector-icons'

import { 
  Container,
  Row,
  Image,
  Description,
  ViewTop,
  ViewBottom,
  Name,
  Date,
  Title,
  DescriptionOthers,
  Camera
} from './styles'

const Status = () => {
  return (
    <Container>
      <Row>
        <Image>
          <MaterialCommunityIcons 
            name="account-circle" 
            size={60} 
            color="#5f85db"
          />
        </Image>
        <Description>
          <ViewTop>
            <Name>Meu Status</Name>
          </ViewTop>

          <ViewBottom>
            <Date>Atualize seu status</Date>
          </ViewBottom>
        </Description>
      </Row>

      <Title>Status Recentes</Title>

      <Row>
        <Image>
          <MaterialCommunityIcons 
            name="account-circle" 
            size={60} 
            color="#5f85db"
          />
        </Image>
        <DescriptionOthers>
          <ViewTop>
            <Name>Meu Status</Name>
          </ViewTop>

          <ViewBottom>
            <Date>Atualize seu status</Date>
          </ViewBottom>
        </DescriptionOthers>
      </Row>

      <Camera>
        <Entypo name="camera" size={24} color="#eeeeee" />
      </Camera>
    </Container>
  )
}

export default Status