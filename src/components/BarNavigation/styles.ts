import styled from 'styled-components/native'
import Constants from 'expo-constants'

export const Container = styled.View`
  background-color: #26282b;

  flex: 1;
`

export const ViewTop = styled.View`
  height: 60px;

  margin-top: ${Constants.statusBarHeight}px;

  flex-direction: row;
  justify-content: space-between;
`

export const TitleApp = styled.Text`
  color: #393e46;

  margin-top: 16px;
  margin-left: 24px;

  font-size: 18px;
  font-weight: bold;
`

export const Row = styled.View`
  flex-direction: row;
`

export const Search = styled.TouchableOpacity`
  margin-top: 16px;
  margin-right: 16px;
`

export const Menu = styled.TouchableOpacity`
  margin-top: 16px;
  margin-right: 16px;
`