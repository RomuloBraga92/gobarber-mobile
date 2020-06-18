import styled from 'styled-components/native';
import { RectButton } from 'react-native-gesture-handler';

export const Container = styled(RectButton)`
  width: 100%;
  height: 60px;
  background: #fe9000;
  border-radius: 10px;
  align-items: center;
  justify-content: center;
  margin-top: 10px;
`;

export const ButtonText = styled.Text`
  font-family: 'RobotoSlab-medium';
  font-size: 16px;
  color: #312e38;
`;
