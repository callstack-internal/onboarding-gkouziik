import React from 'react';

import { HomeContainer, HomeDummyTitle } from './Home.style';

/**
 * Component that renders the Landing Screen of the weather application
 */
const Home: React.FC = () => {
  return (
    <HomeContainer>
      <HomeDummyTitle>Hello</HomeDummyTitle>
    </HomeContainer>
  );
};

export default Home;
