import logo from './logo.svg';
import './App.css';
import { useEffect, useState } from 'react';
import Countries from './components/Countries/Countries';



function App() {
  return (
    <div className="App">
      <Countries></Countries>
    </div>
  );
}

// function LoadCountries() {
//   const [countries, setCountries] = useState([]);
//   useEffect(() => {
//     fetch('https://restcountries.com/v3.1/all')
//       .then(res => res.json())
//       .then(data => setCountries(data))
//   }, [])
//   return (
//     <div>
//       <h2>Visiting Rest Countries!!!</h2>
//       <h3>Available Countries: {countries.length}</h3>
//       {
//         countries.map(country => <Country name={country.name.common} populations={country.population} area={country.area} region={country.region}></Country>)
//       }
//     </div>
//   )
// }

// function Country(props) {
//   return (
//     <div className="country">
//       <h2>Name: {props.name}</h2>
//       <h4>Populations: {props.populations}</h4>
//       <h4>Area: {props.area}</h4>
//       <h4>Region: {props.region}</h4>
//     </div>
//   )
// }
export default App;
