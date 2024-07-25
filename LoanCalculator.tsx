import React, { useState } from 'react';
import ThemeProvider from "./theme-provider";
import Navbar from "./defaultNavbar"
import {Input} from "@material-tailwind/react";
import {
  Button,
  Typography
} from "@material-tailwind/react";


const LoanCalculator = () => {
  const [loanAmt, setLoanAmt] = useState('');
  const [loanType, setLoanType] = useState('');
  const [duration, setDuration] = useState('');
  const [emi, setEmi] = useState(null);
  const [totalPayable, setTotalPayable] = useState(null);

  const calculateEMI = () => {
    const principal = parseFloat(loanAmt);
    const rate = getInterestRate(loanType); // You need to define this function to get the interest rate based on loan type
    const months = parseInt(duration) * 12;

    const monthlyRate = rate / (12 * 100);
    const emiValue = (principal * monthlyRate * Math.pow(1 + monthlyRate, months)) / (Math.pow(1 + monthlyRate, months) - 1);
    const totalAmount = emiValue * months;

    setEmi(emiValue.toFixed(2));
    setTotalPayable(totalAmount.toFixed(2));
  };

  const getInterestRate = (loanType) => {
    // Define interest rates for different loan types
    const rates = {
      'home': 6.5,
      'car': 7.5,
      'personal': 10.5,
    };
    return rates[loanType.toLowerCase()] || 0;
  };

  return (
    <ThemeProvider>
      <section className="grid h-screen items-center lg:grid-cols-2">
      <Navbar />
    <div className="text-center">
    <Typography className="font-bold mb-12 text-blue-gray-800" variant="h4">
      Loan Calculator
     </Typography>
      <div>
        <label>
          Loan Amount:
          <Input color="black" size="lg" type="number" value={loanAmt} onChange={(e) => setLoanAmt(e.target.value)} crossOrigin={undefined}/>
        </label>
      </div>
      <div>
        <label>
          Loan Type:
          <select value={loanType} onChange={(e) => setLoanType(e.target.value)}>
            <option value="">Select Loan Type</option>
            <option value="home">Home Loan</option>
            <option value="car">Car Loan</option>
            <option value="personal">Personal Loan</option>
          </select>
        </label>
      </div>
      <div>
        <label>
          Duration (in years):
          <Input type="number" value={duration} onChange={(e) => setDuration(e.target.value)} crossOrigin={undefined}/>
        </label>
      </div>
      <button onClick={calculateEMI}>Calculate EMI</button>
      {emi && totalPayable && (
        <div>
          <h3>Results</h3>
          <p>Monthly EMI: {emi}</p>
          <p>Total Payable Amount: {totalPayable}</p>
        </div>
      )}
    </div>
    <img
          src="https://cdn.duvine.com/wp-content/uploads/2016/03/17095355/Slides_new-cover-photo_FOR-WEB.jpg"
          alt="background image"
          className="hidden h-screen w-full object-cover lg:block"
        />
    </section>
    </ThemeProvider>
  );
};

export default LoanCalculator;
