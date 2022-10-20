import React, { Fragment } from 'react';
import { Dimensions } from 'react-native';

import { BodyTextLarge, Divider } from '../../../shared';
import { DetailsRow } from './SpecificDetails.style';

type Props = {
  title: string;
  value: string | number;
};

const titleResolver: { [index: string]: string } = {
  humidity: 'Humidity',
  pressure: 'Pressure',
  windSpeed: 'Wind Speed',
  cloudCover: 'Cloud Cover',
};

const SpecificDetails: React.FC<Props> = ({ title, value }) => {
  const { height, width } = Dimensions.get('window');
  return (
    <Fragment>
      <DetailsRow width={width} height={height / 12}>
        <BodyTextLarge>{titleResolver[title]}</BodyTextLarge>
        <BodyTextLarge>{value}</BodyTextLarge>
      </DetailsRow>
      <Divider />
    </Fragment>
  );
};

export default SpecificDetails;
