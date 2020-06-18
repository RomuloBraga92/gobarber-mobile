import React, { useCallback, useMemo } from 'react';
import Icon from 'react-native-vector-icons/Feather';
import { format } from 'date-fns';
import ptBR from 'date-fns/locale/pt-BR';

import { useNavigation, useRoute } from '@react-navigation/native';
import {
  Container,
  Title,
  Description,
  OkButton,
  OkButtonText,
} from './styles';

interface RouteParams {
  date: number;
}

const AppointmentSuccess: React.FC = () => {
  const { reset } = useNavigation();
  const { params } = useRoute();
  const routeParams = params as RouteParams;

  const formattedDate = useMemo(() => {
    const dateText = format(
      routeParams.date,
      "EEEE', dia' dd 'de' MMMM 'de' yyyy 'às' HH:mm'h'",
      { locale: ptBR },
    );

    const capitalizeWeekDayText =
      dateText.charAt(0).toUpperCase() + dateText.slice(1);

    return capitalizeWeekDayText;
  }, [routeParams.date]);

  const handleOkButtonNavigation = useCallback(() => {
    reset({
      routes: [
        {
          name: 'Dashboard',
        },
      ],
      index: 0,
    });
  }, [reset]);

  return (
    <Container>
      <Icon name="check" size={80} color="#04d361" />
      <Title>Agendamento concluído</Title>
      <Description>{formattedDate}</Description>
      <OkButton onPress={handleOkButtonNavigation}>
        <OkButtonText>Ok</OkButtonText>
      </OkButton>
    </Container>
  );
};

export default AppointmentSuccess;
