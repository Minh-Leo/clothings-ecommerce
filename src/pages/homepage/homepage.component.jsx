import React from 'react';

import Directory from '../../components/directory/directory.component';
import { HomePageContainer } from './homepage.styles';

const HomePage = () => (
  <HomePageContainer>
    <h1>Welcome to CRWN Clothings shop</h1>
    <Directory />
  </HomePageContainer>
);

export default HomePage;
