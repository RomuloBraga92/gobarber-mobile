import React, { useCallback, useState, useEffect } from 'react';
import { useNavigation } from '@react-navigation/native';
import Icon from 'react-native-vector-icons/Feather';

import {
  Container,
  Header,
  HeaderText,
  UserName,
  ProfileButton,
  AvatarButton,
  AvatarImage,
  ProviderList,
  ProviderContainer,
  ProviderAvatar,
  ProviderInfo,
  ProviderName,
  ProviderMeta,
  ProviderMetaText,
  ProviderListText,
} from './styles';
import { useAuth } from '../../context/AuthContext';
import api from '../../services/api';

export interface Providers {
  id: string;
  name: string;
  avatar_url: string;
}

const Dashboard: React.FC = () => {
  const [providers, setProviders] = useState<Providers[]>([]);
  const { user, signOut } = useAuth();
  const { navigate } = useNavigation();

  const handleProfileNavigation = useCallback(() => {
    navigate('Profile');
  }, [navigate]);

  const handleCreateAppointmentNavigation = useCallback(
    (providerId: string) => {
      navigate('CreateAppointment', { providerId });
    },
    [navigate],
  );

  useEffect(() => {
    api.get('providers').then(response => {
      setProviders(response.data);
    });
  }, []);

  return (
    <Container>
      <Header>
        <HeaderText>Bem vindo,</HeaderText>
        <ProfileButton onPress={signOut}>
          <UserName>{user.name}</UserName>
        </ProfileButton>

        <AvatarButton onPress={handleProfileNavigation}>
          {user.avatar_url ? (
            <AvatarImage source={{ uri: user.avatar_url }} />
          ) : (
            <AvatarImage
              source={{
                uri: 'https://api.adorable.io/avatars/285/abott@adorable.png',
              }}
            />
          )}
        </AvatarButton>
      </Header>

      <ProviderList
        data={providers}
        keyExtractor={provider => provider.id}
        ListHeaderComponent={<ProviderListText>Barbeiros</ProviderListText>}
        renderItem={({ item: provider }) => (
          <ProviderContainer
            onPress={() => handleCreateAppointmentNavigation(provider.id)}
          >
            {provider.avatar_url ? (
              <ProviderAvatar source={{ uri: provider.avatar_url }} />
            ) : (
              <ProviderAvatar
                source={{
                  uri: 'https://api.adorable.io/avatars/285/abott@adorable.png',
                }}
              />
            )}
            <ProviderInfo>
              <ProviderName>{provider.name}</ProviderName>
              <ProviderMeta>
                <Icon name="calendar" size={14} color="#FF9000" />
                <ProviderMetaText>Segunda à sexta</ProviderMetaText>
              </ProviderMeta>
              <ProviderMeta>
                <Icon name="clock" size={14} color="#FF9000" />
                <ProviderMetaText>8h às 18h</ProviderMetaText>
              </ProviderMeta>
            </ProviderInfo>
          </ProviderContainer>
        )}
      />
    </Container>
  );
};

export default Dashboard;
