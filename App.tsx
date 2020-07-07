import { StatusBar } from 'expo-status-bar';
import React from 'react';
import styled from 'styled-components/native'

import Routes from './src/routes'

const Container = styled.View`
  flex: 1;
`

export default function App() {
  return (
    <Container>
      <StatusBar style="auto" />
      <Routes />
    </Container>
  );
}
