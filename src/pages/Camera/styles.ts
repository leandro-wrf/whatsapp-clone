import styled from 'styled-components/native'

export const Container = styled.View`
  flex: 1;
`

export const ViewButtons = styled.View`
  margin-bottom: 56px;

  flex: 1;
  flex-direction: row;
  justify-content: center;
  align-items: flex-end;
`

export const ButtonsCamera = styled.View`
  flex-direction: row;
  align-items: center;
`

export const Flip = styled.TouchableOpacity`
  margin-left: 24px;
`

export const Take = styled.TouchableOpacity`
  background-color: #eeeeee;

  height: 60px;
  width: 60px;

  border-radius: 35px;
`

export const Circle = styled.View`
  background-color: #26282b;

  height: 80px;
  width: 80px;

  margin-left: 24px;

  border-radius: 40px;

  justify-content: center;
  align-items: center;
`

export const Gallery = styled.TouchableOpacity``

export const NotAuth = styled.Text`
  color: #eeeeee;

  font-size: 18px;
  font-weight: bold;
`