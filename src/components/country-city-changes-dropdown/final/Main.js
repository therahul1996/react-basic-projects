import React, { useState } from 'react';
import './style.css'
const countries = [
  {
    name: 'India',
    code: 'IN',
    cities: ['Delhi', 'Mumbai'],
  },
  {
    name: 'Pak',
    code: 'PK',
    cities: ['Lahore', 'Karachi'],
  },
  {
    name: 'Bangladesh',
    code: 'BG',
    cities: ['Dhaka', 'Chittagong'],
  },
];

const Main = () => {
 const [selectedCountry, setSelectedCountry] = useState('')
const [selectedCity, setSelectedCity] = useState('')
const handleCountryChange = (e) => {
  setSelectedCountry(e.target.value)
  setSelectedCity('')
}
const handleCityChange = (e) => {
  setSelectedCity(e.target.value)
}
  return (
   <div className='country-sec'>
    <h1>Select Country city</h1>
    <div className='select-input'>
    <select value={selectedCountry} onChange={handleCountryChange}>
      <option>Select Country</option>
      {countries.map((country) => {
        return <option key={country.code} value={country.code}>{country.name}</option>
      })}
    </select>
    </div>
    {selectedCountry && 
    <div className='select-input'>
    <select value={selectedCity} onChange={handleCityChange}>
       <option>Select city</option>
       {countries.find((country) => country.code === selectedCountry)?.cities.map((city, index) => {
         return <option key={index} value={city}>{city}</option>
       })}
     </select>
    </div>}
   
   </div>
  );
};

export default Main;
