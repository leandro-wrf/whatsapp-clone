import styled from 'styled-components/native'

export const Container = styled.View`
  background-color: #26282b;

  flex: 1;
`

export const Row = styled.View`
  flex-direction: row;
`

export const Profile = styled.TouchableOpacity`
  height: 60px;
  width: 60px;

  margin-top: 16px;
  margin-left: 16px;

  border-radius: 30px;

  justify-content: center;
  align-items: center;
`

export const Description = styled.TouchableOpacity`
  height: 90px;

  margin-right: 8px;

  border-bottom-width: 1px;
  border-color: #353941;

  flex: 1;
`

export const ViewTop = styled.View`
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`

export const ContactName = styled.Text`
  color: #eeeeee;

  margin-top: 16px;
  margin-left: 16px;

  font-size: 16px;
  font-weight: bold;
`

export const Hour = styled.Text`
  color: #eeeeee;

  margin-top: 8px;
  margin-right: 16px;

  font-size: 13px;
`

export const ViewBottom = styled.View`
  margin-top: 20px;

  padding-left: 8px;

  flex-direction: row;
  align-items: center;
`

export const LastMessage = styled.Text`
  color: #eeeeee;

  margin-left: 8px;

  font-size: 13px;
`

export const ShowContacts = styled.TouchableOpacity`
  background-color: #5f85db;

  height: 65px;
  width: 65px;

  position: absolute;

  bottom: 48px;
  right: 32px; 

  border-radius: 35px;
  elevation: 2;

  justify-content: center;
  align-items: center;
`