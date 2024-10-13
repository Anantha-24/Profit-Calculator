import React from 'react';
import './App.css';
import MenuPriceCalculator from './components/ui/MenuPriceCalculator';
import AdvancedRestaurantProfitCalculator from './components/ui/AdvancedRestaurantProfitCalculator';
import Card from './components/ui/Card';
import Input from './components/ui/Input';
import Label from './components/ui/Label';
import Alert from './components/ui/Alert';


function App() {
  return (
    <div className="App">
      <h1 class="main">Restaurant Profit Calculator</h1>
      <MenuPriceCalculator /> 
      <AdvancedRestaurantProfitCalculator/>
      <Card />
      <Input/>
      <Label/>
      <Alert/>
    </div>
  );
}

export default App;
