import { StatusBar } from 'expo-status-bar';
import React from 'react';
import styled from 'styled-components/native'

import BarNavigation from './src/components/BarNavigation'

const Container = styled.View`
  flex: 1;
`

export default function App() {
  return (
    <Container>
      <StatusBar style="light"/>
      <BarNavigation />
    </Container>
  );
}
