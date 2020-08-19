import React, { useState } from 'react';
import './App.css';
import './css/style.css';
import Header from './components/UI/header/Header';
import Sidebar from './components/UI/sidebar/Sidebar';
import Main from './components/UI/main/Main';
import data from '../src/data/source.json';

const App = () => {
  let types = [];
  let flats = [];
  data.map((item) => {
    if (!types.includes(item.type)) {
      types.push(item.type);
    }
  });

  const [currType, setCurrType] = useState(types[0]);
  data.map((item) => {
    if (item.type === currType) {
      flats.push(item);
    }
  });
  const [currFlat, setCurrFlat] = useState(flats[0]);
  const [currPic, setCurrPic] = useState(currFlat.images[0]);

  return (
    <div className="container">
      <Header />
      <div className="wrapper">
        <Sidebar
          types={types}
          setCurrType={setCurrType}
          flats={flats}
          setCurrFlat={setCurrFlat}
          setCurrPic={setCurrPic}
        />
        <Main currFlat={currFlat} currPic={currPic} setCurrPic={setCurrPic} />
      </div>
    </div>
  );
};

export default App;
