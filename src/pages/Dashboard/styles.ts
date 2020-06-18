import styled from 'styled-components/native';
import { getStatusBarHeight } from 'react-native-iphone-x-helper';
import { FlatList } from 'react-native';

import { RectButton } from 'react-native-gesture-handler';
import { Providers } from './index';

export const Container = styled.View`
  flex: 1;
`;

export const Header = styled.View`
  background: #28262e;
  padding: 24px;
  padding-top: ${getStatusBarHeight() + 24}px;
  align-items: flex-start;
  flex-direction: row;
  justify-content: space-between;
  position: relative;
`;

export const HeaderText = styled.Text`
  color: #f4ede8;
  font-size: 18px;
  line-height: 20px;
  font-family: 'RobotoSlab-Regular';
  margin-top: 8px;
`;

export const ProfileButton = styled.TouchableOpacity`
  position: absolute;
  bottom: 45%;
  left: 25px;
`;

export const AvatarButton = styled.TouchableOpacity``;

export const UserName = styled.Text`
  color: #ff9000;
  font-size: 18px;
  font-family: 'RobotoSlab-Medium';
`;

export const AvatarImage = styled.Image`
  width: 56px;
  height: 56px;
  border-radius: 28px;
`;

export const ProviderList = styled(FlatList as new () => FlatList<Providers>)`
  padding: 32px 24px 16px;
`;

export const ProviderContainer = styled(RectButton)`
  background: #3e3b47;
  border-radius: 10px;
  padding: 20px;
  margin-bottom: 16px;
  flex-direction: row;
  align-items: center;
`;
export const ProviderAvatar = styled.Image`
  width: 72px;
  height: 72px;
  border-radius: 36px;
`;
export const ProviderInfo = styled.View`
  flex: 1;
  margin-left: 20px;
`;
export const ProviderName = styled.Text`
  font-family: 'RobotoSlab-Medium';
  font-size: 18px;
  color: #f4ede8;
`;
export const ProviderMeta = styled.View`
  flex-direction: row;
  align-items: center;
  margin-top: 8px;
`;
export const ProviderMetaText = styled.Text`
  font-family: 'RobotoSlab-Regular';
  margin-left: 8px;
  color: #999591;
`;

export const ProviderListText = styled.Text`
  font-size: 24px;
  font-family: 'RobotoSlab-Medium';
  margin-bottom: 24px;
  color: #f4ede8;
`;
