// src/components/HealthInsurancePlanning.jsx
'use client';
import React, { useState } from "react";

const HealthInsurancePlanning = () => {
  const [formValues, setFormValues] = useState({
    age: "",
    annualMedicalExpenses: "",
    emergencyFund: "",
    hospitalizationCoverage: "",
    outpatientCoverage: "",
    familyMembers: "",
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
    const hospitalizationCoverage = parseInt(formValues.hospitalizationCoverage);
    const outpatientCoverage = parseInt(formValues.outpatientCoverage);
    const totalCoverageNeeded = hospitalizationCoverage + outpatientCoverage;

    setInsuranceNeeds({
      hospitalizationCoverage,
      outpatientCoverage,
      totalCoverageNeeded,
    });
  };

  return (
    <>
    
      <main className="min-h-screen m-3 flex flex-col items-center justify-center bg-gradient-to-r from-green-400 to-blue-500 p-4 rounded-md">
        <section className="bg-white p-8 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-200 max-w-4xl" aria-labelledby="health-insurance-planning-title">
          <h1 id="health-insurance-planning-title" className="text-3xl font-bold mb-6 text-center text-blue-900">
            Health Insurance Planning
          </h1>
          <p className="text-gray-700 mb-4">
            Health insurance planning helps you ensure adequate coverage for medical expenses, customized to your personal health and financial situation.
          </p>
          <h2 className="text-2xl font-semibold mb-4 text-blue-800">
            Calculate Your Health Insurance Needs
          </h2>
          <form className="space-y-4" onSubmit={handleSubmit} aria-label="Health Insurance Planning Form">
            <div>
              <label htmlFor="age" className="block text-gray-700">Age:</label>
              <input
                id="age"
                type="number"
                name="age"
                value={formValues.age}
                onChange={handleInputChange}
                className="w-full p-2 border border-gray-300 rounded"
                placeholder="Enter your age"
                required
              />
            </div>
            <div>
              <label htmlFor="annualMedicalExpenses" className="block text-gray-700">Annual Medical Expenses (₹):</label>
              <input
                id="annualMedicalExpenses"
                type="number"
                name="annualMedicalExpenses"
                value={formValues.annualMedicalExpenses}
                onChange={handleInputChange}
                className="w-full p-2 border border-gray-300 rounded"
                placeholder="Estimate your annual medical expenses"
                required
              />
            </div>
            <div>
              <label htmlFor="emergencyFund" className="block text-gray-700">Emergency Fund for Medical Contingencies (₹):</label>
              <input
                id="emergencyFund"
                type="number"
                name="emergencyFund"
                value={formValues.emergencyFund}
                onChange={handleInputChange}
                className="w-full p-2 border border-gray-300 rounded"
                placeholder="Enter the amount saved for medical emergencies"
                required
              />
            </div>
            <div>
              <label htmlFor="hospitalizationCoverage" className="block text-gray-700">Hospitalization Coverage Needed (₹):</label>
              <input
                id="hospitalizationCoverage"
                type="number"
                name="hospitalizationCoverage"
                value={formValues.hospitalizationCoverage}
                onChange={handleInputChange}
                className="w-full p-2 border border-gray-300 rounded"
                placeholder="Enter desired hospitalization coverage"
                required
              />
            </div>
            <div>
              <label htmlFor="outpatientCoverage" className="block text-gray-700">Outpatient Coverage Needed (₹):</label>
              <input
                id="outpatientCoverage"
                type="number"
                name="outpatientCoverage"
                value={formValues.outpatientCoverage}
                onChange={handleInputChange}
                className="w-full p-2 border border-gray-300 rounded"
                placeholder="Enter desired outpatient coverage"
                required
              />
            </div>
            <div>
              <label htmlFor="familyMembers" className="block text-gray-700">Number of Family Members:</label>
              <input
                id="familyMembers"
                type="number"
                name="familyMembers"
                value={formValues.familyMembers}
                onChange={handleInputChange}
                className="w-full p-2 border border-gray-300 rounded"
                placeholder="Enter the number of family members"
                required
              />
            </div>
            <button
              type="submit"
              className="w-full p-2 bg-blue-700 text-white rounded hover:bg-blue-800 transition duration-200"
              aria-label="Calculate Insurance Needs"
            >
              Calculate Insurance Needs
            </button>
          </form>

          {insuranceNeeds && (
            <div className="mt-8 p-4 bg-gray-100 rounded" aria-live="polite">
              <h2 className="text-2xl font-semibold mb-4 text-blue-800">
                Insurance Needs Summary
              </h2>
              <p><strong>Hospitalization Coverage Needed:</strong> ₹{insuranceNeeds.hospitalizationCoverage.toLocaleString()}</p>
              <p><strong>Outpatient Coverage Needed:</strong> ₹{insuranceNeeds.outpatientCoverage.toLocaleString()}</p>
              <p><strong>Total Coverage Needed:</strong> ₹{insuranceNeeds.totalCoverageNeeded.toLocaleString()}</p>
            </div>
          )}
        </section>
      </main>
  
    </>
  );
};

export default HealthInsurancePlanning;
