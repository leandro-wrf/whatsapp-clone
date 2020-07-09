import styled from 'styled-components/native'

export const Container = styled.View`
  background-color: #26282b;

  flex: 1;
`

export const BoxCall = styled.View`
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
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`

export const ViewLeft = styled.View`
  flex-direction: column;
`

export const Name = styled.Text`
  color: #eeeeee;

  margin-top: 16px;
  margin-left: 16px;

  font-size: 16px;
  font-weight: bold;
`

export const Date = styled.Text`
  color: #eeeeee;

  margin-top: 16px;
  margin-left: 16px;

  font-size: 13px;
`

export const ViewRight = styled.View`
  margin-top: 16px;

  padding-right: 16px;

  flex-direction: row;
  align-items: center;
`

export const AddCall = styled.TouchableOpacity`
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
