'use client'
import React, { useState } from "react";

const InvestmentPlanning = () => {
  const [formValues, setFormValues] = useState({
    annualIncome: "",
    riskTolerance: "",
    investmentGoals: "",
    currentSavings: "",
    monthlyInvestment: "",
    investmentDuration: "",
    retirementFundGoal: "",
    emergencyFundGoal: ""
  });

  const [totalInvestmentNeeded, setTotalInvestmentNeeded] = useState(null);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormValues({
      ...formValues,
      [name]: value
    });
  };

  const calculateTotalInvestment = () => {
    const {
      annualIncome,
      monthlyInvestment,
      investmentDuration,
      retirementFundGoal,
      emergencyFundGoal
    } = formValues;

    const monthlyIncome = annualIncome / 12;
    const savingsGoal = parseFloat(retirementFundGoal) + parseFloat(emergencyFundGoal);
    const totalInvestmentRequired = monthlyInvestment * 12 * investmentDuration + savingsGoal;

    setTotalInvestmentNeeded(totalInvestmentRequired);
  };

  return (
    <>
      <div className="min-h-screen m-3 flex flex-col items-center justify-center bg-gradient-to-r from-green-400 to-blue-500 p-4 rounded-md">
        <div className="bg-white p-8 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-200 max-w-4xl">
          <h1 className="text-3xl font-bold mb-6 text-center text-blue-900">
            Comprehensive Investment Planning Calculator
          </h1>
          <p className="text-gray-700 mb-4">
            Plan your investments effectively by understanding your goals, time horizon, and risk tolerance. Calculate the ideal investment strategy to achieve your financial objectives.
          </p>

          <h2 className="text-2xl font-semibold mb-4 text-blue-800">How to Use This Investment Planner:</h2>
          
          <h3 className="text-xl font-semibold mb-2 text-blue-700">1. Set Clear Financial Goals</h3>
          <p className="text-gray-700 mb-4">
            Define your short-term, mid-term, and long-term goals. Common goals include buying a home, saving for education, and building a retirement fund.
          </p>
          
          <h3 className="text-xl font-semibold mb-2 text-blue-700">2. Assess Your Risk Tolerance</h3>
          <p className="text-gray-700 mb-4">
            Decide how much risk you are willing to take. Your risk tolerance affects your asset allocation and investment choices.
          </p>

          <h3 className="text-xl font-semibold mb-2 text-blue-700">3. Define Monthly Contributions</h3>
          <p className="text-gray-700 mb-4">
            Calculate how much you can contribute each month based on your income and expenses.
          </p>

          <h3 className="text-xl font-semibold mb-2 text-blue-700">4. Emergency Fund and Retirement Goals</h3>
          <p className="text-gray-700 mb-4">
            Ensure you have an emergency fund set aside and define your retirement fund goal to plan for a secure future.
          </p>

          <h2 className="text-2xl font-semibold mb-4 text-blue-800">Enter Your Details</h2>

          <form className="space-y-4">
            <div>
              <label className="block text-gray-700">Annual Income (₹):</label>
              <input
                type="number"
                name="annualIncome"
                value={formValues.annualIncome}
                onChange={handleInputChange}
                className="w-full p-2 border border-gray-300 rounded"
              />
            </div>
            <div>
              <label className="block text-gray-700">Monthly Investment Amount (₹):</label>
              <input
                type="number"
                name="monthlyInvestment"
                value={formValues.monthlyInvestment}
                onChange={handleInputChange}
                className="w-full p-2 border border-gray-300 rounded"
              />
            </div>
            <div>
              <label className="block text-gray-700">Investment Duration (Years):</label>
              <input
                type="number"
                name="investmentDuration"
                value={formValues.investmentDuration}
                onChange={handleInputChange}
                className="w-full p-2 border border-gray-300 rounded"
              />
            </div>
            <div>
              <label className="block text-gray-700">Retirement Fund Goal (₹):</label>
              <input
                type="number"
                name="retirementFundGoal"
                value={formValues.retirementFundGoal}
                onChange={handleInputChange}
                className="w-full p-2 border border-gray-300 rounded"
              />
            </div>
            <div>
              <label className="block text-gray-700">Emergency Fund Goal (₹):</label>
              <input
                type="number"
                name="emergencyFundGoal"
                value={formValues.emergencyFundGoal}
                onChange={handleInputChange}
                className="w-full p-2 border border-gray-300 rounded"
              />
            </div>
            <button
              type="button"
              onClick={calculateTotalInvestment}
              className="w-full bg-blue-500 text-white p-2 rounded hover:bg-blue-600"
            >
              Calculate Total Investment Needed
            </button>
          </form>

          {totalInvestmentNeeded !== null && (
            <div className="mt-6 bg-gray-100 p-4 rounded">
              <h2 className="text-2xl font-bold text-center text-blue-800">Total Investment Needed</h2>
              <p className="text-center text-gray-700 text-xl mt-2">₹{totalInvestmentNeeded.toLocaleString()}</p>
            </div>
          )}
        </div>
      </div>
    </>
  );
};

export default InvestmentPlanning;
