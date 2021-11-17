import React from 'react';
import './common.scss';
import Header from './Header';
import Toc from './Toc';
import Map from './Map';
import Table from './Table';
const App = () => {
  return (
    <>
      <Header/>
      <div id="container">
        <Toc/>
        <Map/>
      </div>
    </>
  );
};

export default App;