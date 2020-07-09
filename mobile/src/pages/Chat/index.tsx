import React from 'react'
import { MaterialCommunityicons } from '@expo/vector-icons'

import {
  Container,
  ViewBottom,
  ViewRow,
  Input,
  Audio,
  BoxMessage,
  Text
} from './styles'

export default () => {
  return (
    <Container>
      <ViewBottom>
        <BoxMessage>
          <Text>Tchau amor!</Text>
        </BoxMessage>

        <ViewRow>
          <Input />
          <Audio />
        </ViewRow>
      </ViewBottom>
    </Container>
  )
}
