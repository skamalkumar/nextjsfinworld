'use client';
import React, { useState } from "react";

const LifeInsurancePlanning = () => {
  const [formValues, setFormValues] = useState({
    age: "",
    annualIncome: "",
    mortgage: "",
    educationFund: "",
    livingExpenses: "",
    dependents: "",
  });

  const [insuranceNeeds, setInsuranceNeeds] = useState(null);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormValues({
      ...formValues,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const immediateNeeds = parseInt(formValues.mortgage) +
      parseInt(formValues.educationFund) +
      (parseInt(formValues.livingExpenses) * 10);
    const futureNeeds = parseInt(formValues.annualIncome) * 10;

    const totalNeeds = immediateNeeds + futureNeeds;
    setInsuranceNeeds({
      immediateNeeds,
      futureNeeds,
      totalNeeds,
    });
  };

  return (
    <>
      <div className="min-h-screen m-3 flex flex-col items-center justify-center bg-gradient-to-r from-green-400 to-blue-500 p-4 rounded-md">
        <div className="bg-white p-8 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-200 max-w-4xl">
          <h1 className="text-3xl font-bold mb-6 text-center text-blue-900">
            Comprehensive Life Insurance Planning
          </h1>
          <p className="text-gray-700 mb-4">
            Secure your family's financial future with strategic life insurance planning. Determine the ideal coverage tailored to your personal financial responsibilities and goals.
          </p>
          <h2 className="text-2xl font-semibold mb-4 text-blue-800">
            Input Your Details to Assess Life Insurance Coverage
          </h2>
          <form className="space-y-4" onSubmit={handleSubmit}>
            <div>
              <label className="block text-gray-700">Your Age:</label>
              <input
                type="number"
                name="age"
                value={formValues.age}
                onChange={handleInputChange}
                className="w-full p-2 border border-gray-300 rounded"
              />
            </div>
            <div>
              <label className="block text-gray-700">Annual Income:</label>
              <input
                type="number"
                name="annualIncome"
                value={formValues.annualIncome}
                onChange={handleInputChange}
                className="w-full p-2 border border-gray-300 rounded"
              />
            </div>
            <div>
              <label className="block text-gray-700">Outstanding Mortgage or Debts:</label>
              <input
                type="number"
                name="mortgage"
                value={formValues.mortgage}
                onChange={handleInputChange}
                className="w-full p-2 border border-gray-300 rounded"
              />
            </div>
            <div>
              <label className="block text-gray-700">Children’s Education Fund Goal:</label>
              <input
                type="number"
                name="educationFund"
                value={formValues.educationFund}
                onChange={handleInputChange}
                className="w-full p-2 border border-gray-300 rounded"
              />
            </div>
            <div>
              <label className="block text-gray-700">Estimated Annual Living Expenses:</label>
              <input
                type="number"
                name="livingExpenses"
                value={formValues.livingExpenses}
                onChange={handleInputChange}
                className="w-full p-2 border border-gray-300 rounded"
              />
            </div>
            <div>
              <label className="block text-gray-700">Number of Dependents:</label>
              <input
                type="number"
                name="dependents"
                value={formValues.dependents}
                onChange={handleInputChange}
                className="w-full p-2 border border-gray-300 rounded"
              />
            </div>
            <button
              type="submit"
              className="w-full p-2 bg-blue-700 text-white rounded hover:bg-blue-800 transition duration-200"
            >
              Calculate Coverage Requirements
            </button>
          </form>

          {insuranceNeeds && (
            <div className="mt-8 p-4 bg-gray-100 rounded">
              <h2 className="text-2xl font-semibold mb-4 text-blue-800">
                Your Calculated Insurance Requirements
              </h2>
              <p><strong>Immediate Financial Needs:</strong> ₹{insuranceNeeds.immediateNeeds.toLocaleString()}</p>
              <p><strong>Future Financial Goals:</strong> ₹{insuranceNeeds.futureNeeds.toLocaleString()}</p>
              <p><strong>Total Coverage Needed:</strong> ₹{insuranceNeeds.totalNeeds.toLocaleString()}</p>
            </div>
          )}
        </div>
      </div>
    </>
  );
};

export default LifeInsurancePlanning;
