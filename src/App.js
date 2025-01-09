import logo from './logo.svg';
import './App.css';
import BusinessList from "./Components/BusinessList/BusinessList.js";

function App() {
  let businesses = [
    {
      imageSrc: 'https://content.codecademy.com/programs/react/ravenous/pizza.jpg',
      name: 'MarginOtto Pizzeria',
      address: '1010 Paddington Way',
      city: 'Flavortown',
      state: 'NY',
      zipCode: '10101',
      category: 'Italian',
      rating: 4.5,
      reviewCount: 90
    },
    {
      imageSrc: 'https://content.codecademy.com/programs/react/ravenous/pizza.jpg',
      name: 'Luigi Pizzeria',
      address: '1010 Paddington Way',
      city: 'Flavortown',
      state: 'NY',
      zipCode: '10101',
      category: 'Italian',
      rating: 4.5,
      reviewCount: 90
    },
    {
      imageSrc: 'https://content.codecademy.com/programs/react/ravenous/pizza.jpg',
      name: 'Pagliacci Pizzeria',
      address: '719 Aurora Ave N',
      city: 'Seattle',
      state: 'WA',
      zipCode: '98109',
      category: 'Italian',
      rating: 4.5,
      reviewCount: 90
    },
    {
      imageSrc: 'https://content.codecademy.com/programs/react/ravenous/pizza.jpg',
      name: 'Calas Pizzeria',
      address: '719 Aurora Ave N',
      city: 'Willowick',
      state: 'OH',
      zipCode: '44095',
      category: 'Italian',
      rating: 4.5,
      reviewCount: 90
    }
  ];



  return (
    <div className="App">
      <BusinessList businesses={businesses} />
    </div>
  );
}

export default App;
