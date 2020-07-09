import styled from 'styled-components/native'

export const Container = styled.View`
  background-color: #26282b;

  flex: 1;
`

export const Row = styled.TouchableOpacity`
  flex-direction: row;
`

export const Image = styled.View` 
  height: 60px;
  width: 60px;

  margin-top: 16px;
  margin-left: 16px;

  border-radius: 30px;

  justify-content: center;
  align-items: center;
`

export const Description = styled.View`
  flex: 1;
  flex-direction: column;
`

export const ViewTop = styled.View`
  flex-direction: row;
`

export const ViewBottom = styled.View`
  flex-direction: row;
`

export const Name = styled.Text`
  color: #eeeeee;

  margin-top: 16px;
  margin-left: 8px;

  font-size: 15px;
  font-weight: bold;
`

export const Date = styled.Text`
  color: #eeeeee;

  margin-top: 8px;
  margin-left: 8px;

  font-size: 13px;
`

export const Title = styled.Text`
  color: #eeeeee;

  margin-left: 16px;
  margin-top: 16px;

  font-size: 16px;
  font-weight: bold;
`

export const DescriptionOthers = styled.View`
  margin-right: 8px;

  border-bottom-width: 0.8px;
  border-color: #353941;

  flex: 1;
  flex-direction: column;
`

export const Camera = styled.TouchableOpacity`
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
