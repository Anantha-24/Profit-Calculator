import React, { useState } from 'react';
import Card, { CardContent, CardHeader, CardTitle } from './Card';
import  Input  from './Input';
import  Label  from './Label';
import './MenuPriceCalculator.css';


const MenuPriceCalculator = () => {
  const [foodCost, setFoodCost] = useState(0);
  const [desiredMargin, setDesiredMargin] = useState(30);

  const calculatedPrice = foodCost / (1 - (desiredMargin / 100));

  return (
    <Card className="w-full max-w-md mx-auto">
      <CardHeader>
        <CardTitle >Menu Price Calculator</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          <div>
            <Label htmlFor="foodCost">Food Cost (£)</Label>
            <Input
              id="foodCost"
              type="number"
              value={foodCost}
              onChange={(e) => setFoodCost(Number(e.target.value))}
              placeholder="Enter food cost"
            />
          </div>
          <div>
            <Label htmlFor="desiredMargin">Desired Profit Margin (%)</Label>
            <Input
              id="desiredMargin"
              type="number"
              value={desiredMargin}
              onChange={(e) => setDesiredMargin(Number(e.target.value))}
              placeholder="Enter desired profit margin"
            />
          </div>
          <div className="pt-4">
            <p className="text-lg font-semibold">Recommended Menu Price: £{calculatedPrice.toFixed(2)}</p>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default MenuPriceCalculator;


