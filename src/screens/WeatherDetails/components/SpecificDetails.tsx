import React from 'react';

import { BodyTextLarge } from '../../../shared';
import { DetailsRow, SpecificDetailsContainer } from './SpecificDetails.style';

type Props = {
  title: string;
  value: string | number;
};

const SpecificDetails: React.FC<Props> = ({ title, value }) => {
  return (
    <SpecificDetailsContainer>
      <DetailsRow>
        <BodyTextLarge>{title}</BodyTextLarge>
        <BodyTextLarge>{value}</BodyTextLarge>
      </DetailsRow>
    </SpecificDetailsContainer>
  );
};

export default SpecificDetails;
