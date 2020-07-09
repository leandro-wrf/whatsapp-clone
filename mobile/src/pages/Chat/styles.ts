import styled from 'styled-components/native'

export const Container = styled.View`
  background-color: #26282b;

  flex: 1;
`

export const ViewBottom = styled.View`
  margin-bottom: 16px;

  flex: 1;
  justify-content: flex-end;
`

export const ViewRow = styled.View`
  flex-direction: row;
  align-items: center;
`

export const Input = styled.TextInput`
  background-color: #eeeeee;

  height: 45px;

  margin: 8px;

  border-radius: 20px;

  flex: 1;
`

export const Audio = styled.TouchableOpacity`
  background-color: #5f85db;

  height: 50px;
  width: 50px;

  margin-right: 8px;

  border-radius: 30px;
`

export const BoxMessage = styled.View`
  background-color: #90b8f8;

  min-width: 200px;
  min-height: 40px;
  max-width: 320px;

  elevation: 2;
`

export const Message = styled.TouchableOpacity``

export const Text = styled.Text`
  color: #eeeeee;

  font-size: 13px;
`