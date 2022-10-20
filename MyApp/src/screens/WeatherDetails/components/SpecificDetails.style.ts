import styled from 'styled-components/native';

type DetailsRowType = {
  width: number;
  height: number;
};

export const DetailsRow = styled.View<DetailsRowType>`
  width: ${(props: DetailsRowType) => `${props.width}px`};
  height: ${(props: DetailsRowType) => `${props.height}px`};
  flex-direction: row;
  justify-content: space-between;
  padding-left: 10px;
  padding-right: 10px;
  align-items: center;
`;
