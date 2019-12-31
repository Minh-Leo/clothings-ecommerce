import React from 'react';

import Directory from '../../components/directory/directory.component';
import './homepage.styles.scss';

const HomePage = () => (
  <div className='homepage'>
    <h1>Welcome to CRWN Clothings shop</h1>
    <Directory></Directory>
  </div>
);

export default HomePage;
