import styled from 'styled-components/native';
import { requireNativeComponent } from 'react-native';

const CustomNativeButton = requireNativeComponent('CustomButton');

type CustomButtonProp = {
  onPress: () => void;
  enabled: boolean;
  text: string;
};

export const HomeContainer = styled.View`
  flex: 1;
`;

export const CustomButton = styled(CustomNativeButton)<CustomButtonProp>`
  height: 70px;
  align-items: center;
  justify-content: center;
`;
