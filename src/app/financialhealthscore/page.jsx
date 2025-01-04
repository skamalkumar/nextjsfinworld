'use client'
import React, { useState } from 'react';

const FinancialHealthScore = () => {
  const [income, setIncome] = useState('');
  const [expenses, setExpenses] = useState('');
  const [savings, setSavings] = useState('');
  const [debt, setDebt] = useState('');
  const [scoreDetails, setScoreDetails] = useState(null);

  const calculateScore = (e) => {
    e.preventDefault();
    
    if (income && expenses && savings && debt) {
      // 1. Income Efficiency (Savings Ratio)
      const savingsRatio = ((savings / income) * 25).toFixed(2);
      
      // 2. Expense Management
      const expenseRatio = (((income - expenses) / income) * 25).toFixed(2);
      
      // 3. Debt Health
      const debtRatio = (((income - debt) / income) * 25).toFixed(2);
      
      // 4. Financial Buffer
      const bufferRatio = (((savings / expenses) * 100 < 20 ? 0 : 25)).toFixed(2);

      // Total Score
      const totalScore = parseFloat(savingsRatio) + 
                         parseFloat(expenseRatio) + 
                         parseFloat(debtRatio) + 
                         parseFloat(bufferRatio);

      setScoreDetails({
        totalScore: totalScore.toFixed(2),
        components: {
          savingsRatio,
          expenseRatio,
          debtRatio,
          bufferRatio
        }
      });
    } else {
      alert("Please fill in all fields.");
    }
  };

  const resetForm = () => {
    setIncome('');
    setExpenses('');
    setSavings('');
    setDebt('');
    setScoreDetails(null);
  };

  return (
    <div className="min-h-screen m-3 flex flex-col items-center justify-center bg-gradient-to-r from-green-400 to-blue-500 p-4 rounded-md">
    <div className="bg-white p-8 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-200 max-w-4xl">
    <div className="min-h-screen flex flex-col items-center justify-center bg-blue-50 p-4">
      <div className="w-full max-w-md bg-white shadow-2xl rounded-2xl p-8">
        <h1 className="text-3xl font-bold text-blue-700 text-center mb-6">
          Comprehensive Financial Health Score
        </h1>
        
        <form onSubmit={calculateScore} className="space-y-4">
          <div>
            <label className="block text-sm font-medium text-gray-700">
              Monthly Income
            </label>
            <input
              type="number"
              value={income}
              onChange={(e) => setIncome(e.target.value)}
              className="w-full px-3 py-2 border rounded-lg"
              placeholder="Enter monthly income"
              required
            />
          </div>
          
          <div>
            <label className="block text-sm font-medium text-gray-700">
              Monthly Expenses
            </label>
            <input
              type="number"
              value={expenses}
              onChange={(e) => setExpenses(e.target.value)}
              className="w-full px-3 py-2 border rounded-lg"
              placeholder="Enter monthly expenses"
              required
            />
          </div>
          
          <div>
            <label className="block text-sm font-medium text-gray-700">
              Monthly Savings
            </label>
            <input
              type="number"
              value={savings}
              onChange={(e) => setSavings(e.target.value)}
              className="w-full px-3 py-2 border rounded-lg"
              placeholder="Enter monthly savings"
              required
            />
          </div>
          
          <div>
            <label className="block text-sm font-medium text-gray-700">
              Monthly Debt Payments
            </label>
            <input
              type="number"
              value={debt}
              onChange={(e) => setDebt(e.target.value)}
              className="w-full px-3 py-2 border rounded-lg"
              placeholder="Enter monthly debt payments"
              required
            />
          </div>

          <button 
            type="submit" 
            className="w-full bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700"
          >
            Calculate Financial Health Score
          </button>
        </form>

        {scoreDetails && (
          <div className="mt-6 bg-blue-100 p-4 rounded-lg">
            <h2 className="text-2xl font-bold text-center mb-4">
              Total Score: {scoreDetails.totalScore}/100
            </h2>
            
            <div className="space-y-2">
              <div>
                <p>1. Income Efficiency (Savings Ratio): {scoreDetails.components.savingsRatio}/25</p>
                <div className="w-full bg-gray-200 rounded-full h-2.5">
                  <div 
                    className="bg-blue-600 h-2.5 rounded-full" 
                    style={{width: `${scoreDetails.components.savingsRatio * 4}%`}}
                  ></div>
                </div>
              </div>
              
              <div>
                <p>2. Expense Management: {scoreDetails.components.expenseRatio}/25</p>
                <div className="w-full bg-gray-200 rounded-full h-2.5">
                  <div 
                    className="bg-green-600 h-2.5 rounded-full" 
                    style={{width: `${scoreDetails.components.expenseRatio * 4}%`}}
                  ></div>
                </div>
              </div>
              
              <div>
                <p>3. Debt Health: {scoreDetails.components.debtRatio}/25</p>
                <div className="w-full bg-gray-200 rounded-full h-2.5">
                  <div 
                    className="bg-yellow-600 h-2.5 rounded-full" 
                    style={{width: `${scoreDetails.components.debtRatio * 4}%`}}
                  ></div>
                </div>
              </div>
              
              <div>
                <p>4. Financial Buffer: {scoreDetails.components.bufferRatio}/25</p>
                <div className="w-full bg-gray-200 rounded-full h-2.5">
                  <div 
                    className="bg-red-600 h-2.5 rounded-full" 
                    style={{width: `${scoreDetails.components.bufferRatio * 4}%`}}
                  ></div>
                </div>
              </div>
            </div>

            <button 
              onClick={resetForm}
              className="mt-4 bg-gray-200 text-gray-700 py-2 px-4 rounded-lg hover:bg-gray-300"
            >
              Reset Calculator
            </button>
          </div>
        )}
      </div>
    </div>
    </div>
    </div>
  );
};

export default FinancialHealthScore;