// src/components/AccidentInsurance.jsx
'use client';
import React, { useState } from "react";

const AccidentInsurance = () => {
  const [formValues, setFormValues] = useState({
    annualIncome: "",
    monthlyLivingExpenses: "",
    outstandingDebts: "",
    initialMedicalExpenses: "",
    ongoingMedicalCosts: "",
    durationOfIncomeReplacement: "",
    emergencyFund: "",
    dependentsNeeds: ""
  });

  const [totalCoverage, setTotalCoverage] = useState(null);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormValues({
      ...formValues,
      [name]: value
    });
  };

  const calculateTotalCoverage = () => {
    const {
      annualIncome,
      monthlyLivingExpenses,
      outstandingDebts,
      initialMedicalExpenses,
      ongoingMedicalCosts,
      durationOfIncomeReplacement,
      emergencyFund,
      dependentsNeeds
    } = formValues;

    const incomeReplacement = annualIncome * durationOfIncomeReplacement;
    const medicalExpenses = parseFloat(initialMedicalExpenses) + (ongoingMedicalCosts * durationOfIncomeReplacement);
    const livingExpenses = monthlyLivingExpenses * 12 * durationOfIncomeReplacement;
    const debtCoverage = parseFloat(outstandingDebts);
    const dependentsSupport = parseFloat(dependentsNeeds);
    const emergencyBuffer = parseFloat(emergencyFund);

    const total = incomeReplacement + medicalExpenses + livingExpenses + debtCoverage + dependentsSupport + emergencyBuffer;
    setTotalCoverage(total);
  };

  return (
    <>
      <div className="min-h-screen m-3 flex flex-col items-center justify-center bg-gradient-to-r from-green-400 to-blue-500 p-4 rounded-md">
        <div className="bg-white p-8 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-200 max-w-4xl">
          <h1 className="text-3xl font-bold mb-6 text-center text-blue-900">
            Accident Insurance Coverage Calculator
          </h1>
          <p className="text-gray-700 mb-4">
            Use this calculator to determine the recommended amount of accident insurance coverage for long-term security. This tool considers factors such as income replacement, medical expenses, and dependent support to provide you with a personalized coverage estimate.
          </p>
          <h2 className="text-2xl font-semibold mb-4 text-blue-800">Complete Your Information:</h2>

          <form className="space-y-4">
            {[
              { label: "Annual Income (₹):", name: "annualIncome" },
              { label: "Monthly Living Expenses (₹):", name: "monthlyLivingExpenses" },
              { label: "Outstanding Debts (₹):", name: "outstandingDebts" },
              { label: "Initial Medical Expenses (₹):", name: "initialMedicalExpenses" },
              { label: "Ongoing Medical Costs per Year (₹):", name: "ongoingMedicalCosts" },
              { label: "Duration of Income Replacement (Years):", name: "durationOfIncomeReplacement" },
              { label: "Emergency Fund (₹):", name: "emergencyFund" },
              { label: "Dependents' Needs (₹):", name: "dependentsNeeds" }
            ].map((field, idx) => (
              <div key={idx}>
                <label className="block text-gray-700">{field.label}</label>
                <input
                  type="number"
                  name={field.name}
                  value={formValues[field.name]}
                  onChange={handleInputChange}
                  className="w-full p-2 border border-gray-300 rounded"
                />
              </div>
            ))}
            <button
              type="button"
              onClick={calculateTotalCoverage}
              className="w-full bg-blue-500 text-white p-2 rounded hover:bg-blue-600"
            >
              Calculate Recommended Coverage
            </button>
          </form>

          {totalCoverage !== null && (
            <div className="mt-6 bg-gray-100 p-4 rounded">
              <h2 className="text-2xl font-bold text-center text-blue-800">Estimated Total Coverage</h2>
              <p className="text-center text-gray-700 text-xl mt-2">₹{totalCoverage.toLocaleString()}</p>
            </div>
          )}
        </div>
      </div>
    </>
  );
};

export default AccidentInsurance;
