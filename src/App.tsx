import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';
import { HeaderComponent } from './components/header';
import { getAllCountries } from './api-data';
import { Navigate, Route, Routes } from 'react-router';
import { CountryListScreen } from './screens/country-list';
import { DetailScreen } from './screens/detail';

function App() {
  const [counties, setCountries]=useState([]);
  getAllCountries();
  return (
    <div className="App">
      <div className="header">
      <HeaderComponent/>
      </div>
      <div className="main">
          <Routes>
          <Route path={"countries"} element={<CountryListScreen />} />
          <Route path={"countries/:code"} element={<DetailScreen />} />
          <Route path='*' element={<Navigate to={`/countries`} replace />} />
          </Routes>
      </div>
    </div>
  );
}

export default App;
