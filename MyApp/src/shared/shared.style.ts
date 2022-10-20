import styled, { css } from 'styled-components/native';
import { ActivityIndicator } from 'react-native';

type TextProps = {
  bold?: boolean;
  center?: boolean;
};

export const bodyTextRegular = ({ bold, center }: TextProps) => css`
  font-style: normal;
  font-weight: ${bold ? 'bold' : 'normal'};
  font-size: 14px;
  line-height: ${bold ? '19px' : '21px'};
  color: black;
  ${center && `text-align: center;`}
`;

export const bodyTextLarge = ({ bold, center }: TextProps) => css`
  font-style: normal;
  font-weight: ${bold ? 'bold' : 'normal'};
  font-size: 18px;
  line-height: 21px;
  color: black;
  ${center && `text-align: center;`}
`;

export const BodyTextRegular = styled.Text<TextProps>`
  ${(props: TextProps) =>
    bodyTextRegular({ bold: props.bold, center: props.center })}
`;

export const BodyTextLarge = styled.Text<TextProps>`
  ${(props: TextProps) =>
    bodyTextLarge({ bold: props.bold, center: props.center })}
`;

export const Divider = styled.View`
  width: 100%;
  height: 2px;
  border: 1px solid grey;
`;

export const StyledActivityIndicator = styled(ActivityIndicator).attrs({
  size: 'large',
})`
  margin-top: 20px;
`;
