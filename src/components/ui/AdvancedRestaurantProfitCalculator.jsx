import React, { useState } from 'react';
import Card, { CardContent, CardHeader, CardTitle } from './Card';
import Input from './Input'; 
import Label from './Label'; 
import Alert  from './Alert'; 
import  AlertDescription  from './Alert'; 
import  Button  from './button';
import { PieChart, Pie, Cell, ResponsiveContainer, Legend, Tooltip } from 'recharts';
import './AdvancedRestaurantProfitCalculator.css';

const AdvancedRestaurantProfitCalculator = () => {
  const [revenue, setRevenue] = useState(0);
  const [foodCost, setFoodCost] = useState(0);
  const [laborCost, setLaborCost] = useState(0);
  const [rentCost, setRentCost] = useState(0);
  const [utilitiesCost, setUtilitiesCost] = useState(0);
  const [marketingCost, setMarketingCost] = useState(0);
  const [otherCosts, setOtherCosts] = useState(0);
  const [error, setError] = useState('');
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [formSubmitted, setFormSubmitted] = useState(false);

  const validateInput = (value, setter) => {
    if (value < 0) {
      setError('Values cannot be negative');
      return;
    }
    setError('');
    setter(value);
  };

  const totalCosts = foodCost + laborCost + rentCost + utilitiesCost + marketingCost + otherCosts;
  const profit = revenue - totalCosts;
  const profitMargin = revenue > 0 ? (profit / revenue) * 100 : 0;

  const costBreakdown = [
    { name: 'Food', value: foodCost },
    { name: 'Labor', value: laborCost },
    { name: 'Rent', value: rentCost },
    { name: 'Utilities', value: utilitiesCost },
    { name: 'Marketing', value: marketingCost },
    { name: 'Other', value: otherCosts },
  ];

  const COLORS = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042', '#8884D8', '#82ca9d'];

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form submitted:', { name, email, revenue, foodCost, laborCost, rentCost, utilitiesCost, marketingCost, otherCosts });
    setFormSubmitted(true);
  };

  const InputField = ({ label, value, onChange, id }) => (
    <div className="mb-4">
      <Label htmlFor={id}>{label} (£)</Label>
      <Input
        id={id}
        type="number"
        value={value}
        onChange={(e) => onChange(Number(e.target.value))}
        placeholder={`Enter ${label.toLowerCase()}`}
        className="mt-1"
      />
    </div>
  );

  return (
    <Card className="w-full max-w-4xl mx-auto">
      <CardHeader>
        <CardTitle className="text-2xl font-bold">Advanced Restaurant Profit Calculator</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <InputField label="Revenue" value={revenue} onChange={(v) => validateInput(v, setRevenue)} id="revenue" />
            <InputField label="Food Cost" value={foodCost} onChange={(v) => validateInput(v, setFoodCost)} id="foodCost" />
            <InputField label="Labor Cost" value={laborCost} onChange={(v) => validateInput(v, setLaborCost)} id="laborCost" />
            <InputField label="Rent" value={rentCost} onChange={(v) => validateInput(v, setRentCost)} id="rentCost" />
            <InputField label="Utilities" value={utilitiesCost} onChange={(v) => validateInput(v, setUtilitiesCost)} id="utilitiesCost" />
            <InputField label="Marketing" value={marketingCost} onChange={(v) => validateInput(v, setMarketingCost)} id="marketingCost" />
            <InputField label="Other Costs" value={otherCosts} onChange={(v) => validateInput(v, setOtherCosts)} id="otherCosts" />
          </div>
          <div>
            <h3 className="text-xl font-semibold mb-4">Results</h3>
            <p className="text-lg">Total Costs: £{totalCosts.toFixed(2)}</p>
            <p className="text-lg">Profit: £{profit.toFixed(2)}</p>
            <p className="text-lg">Profit Margin: {profitMargin.toFixed(2)}%</p>
            <div className="mt-6">
              <h4 className="text-lg font-semibold mb-2">Cost Breakdown</h4>
              <ResponsiveContainer width="100%" height={300}>
                <PieChart>
                  <Pie
                    data={costBreakdown}
                    cx="50%"
                    cy="50%"
                    labelLine={false}
                    outerRadius={80}
                    fill="#8884d8"
                    dataKey="value"
                  >
                    {costBreakdown.map((entry, index) => (
                      <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                    ))}
                  </Pie>
                  <Tooltip />
                  <Legend />
                </PieChart>
              </ResponsiveContainer>
            </div>
          </div>
        </div>
        {error && (
          <Alert variant="destructive" className="mt-4">
            <AlertDescription>{error}</AlertDescription>
          </Alert>
        )}
        
        <Card className="mt-8">
          <CardHeader>
            <CardTitle>Get a Detailed Profitability Report</CardTitle>
          </CardHeader>
          <CardContent>
            {!formSubmitted ? (
              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <Label htmlFor="name">Name</Label>
                  <Input
                    id="name"
                    type="text"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    placeholder="Enter your name"
                    required
                  />
                </div>
                <div>
                  <Label htmlFor="email">Email</Label>
                  <Input
                    id="email"
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="Enter your email"
                    required
                  />
                </div>
                <Button type="submit">Get Detailed Report</Button>
              </form>
            ) : (
              <Alert>
                <AlertDescription>
                  Thank you for your interest! We'll send your detailed profitability report to {email} shortly.
                </AlertDescription>
              </Alert>
            )}
          </CardContent>
        </Card>
      </CardContent>
    </Card>
  );
};

export default AdvancedRestaurantProfitCalculator;





