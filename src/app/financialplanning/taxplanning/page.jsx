// src/components/TaxPlanning.jsx
'use client'
import React, { useState } from "react";

const TaxPlanning = () => {
  const [formValues, setFormValues] = useState({
    salary: "",
    ppf: "",
    epf: "",
    lifeInsurance: "",
    homeLoanPrincipal: "",
    healthInsurance: "",
    educationLoanInterest: "",
    savingsInterest: "",
    homeLoanInterest: "",
  });

  const [results, setResults] = useState(null);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormValues({
      ...formValues,
      [name]: value,
    });
  };

  const calculateDeductions = () => {
    const {
      salary,
      ppf,
      epf,
      lifeInsurance,
      homeLoanPrincipal,
      healthInsurance,
      educationLoanInterest,
      savingsInterest,
      homeLoanInterest,
    } = formValues;

    const section80C = Math.min(
      150000,
      parseFloat(ppf || 0) +
        parseFloat(epf || 0) +
        parseFloat(lifeInsurance || 0) +
        parseFloat(homeLoanPrincipal || 0)
    );
    const section80D = Math.min(25000, parseFloat(healthInsurance || 0));
    const section80E = parseFloat(educationLoanInterest || 0);
    const section80TTA = Math.min(10000, parseFloat(savingsInterest || 0));
    const section24 = Math.min(200000, parseFloat(homeLoanInterest || 0));

    const totalDeductions =
      section80C + section80D + section80E + section80TTA + section24;

    const taxableIncome = parseFloat(salary || 0) - totalDeductions;

    setResults({
      totalDeductions,
      taxableIncome,
      breakdown: {
        section80C,
        section80D,
        section80E,
        section80TTA,
        section24,
      },
    });
  };

  return (
    <>
      <div className="min-h-screen m-3 flex flex-col items-center justify-center bg-gradient-to-r from-green-400 to-blue-500 p-4 rounded-md">
        <div className="bg-white p-8 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-200 max-w-4xl">
          <h1 className="text-3xl font-bold mb-6 text-center text-blue-900">
            Tax Planning Strategies for Indian Investors
          </h1>
          <p className="text-gray-700 mb-4">
            Tax planning is an essential part of financial management in India, aimed at minimizing tax liability while maximizing savings and investments. With a complex tax system and numerous regulations, understanding and implementing effective tax planning strategies is crucial for individuals and businesses alike.
          </p>
          <h2 className="text-2xl font-semibold mb-4 text-blue-800">
            Key Tax Saving Strategies:
          </h2>
          <h3 className="text-xl font-semibold mb-2 text-blue-700">
            Utilize Section 80C Deductions
          </h3>
          <p className="text-gray-700 mb-4">
            You can claim deductions up to ₹1.5 lakhs by investing in instruments like PPF, EPF, NSC, ELSS, 5-year FDs, SSY, and life insurance premiums. Additionally, tuition fees for children and home loan principal repayment can be included.
          </p>
          <h3 className="text-xl font-semibold mb-2 text-blue-700">
            Health Insurance Premiums (Section 80D)
          </h3>
          <p className="text-gray-700 mb-4">
            Deduction for premiums paid for health insurance for self, spouse, children, and parents. Up to ₹25,000 for self, spouse, and children, and additional ₹25,000 for parents (₹50,000 if parents are senior citizens).
          </p>
          <h3 className="text-xl font-semibold mb-2 text-blue-700">
            Education Loan Interest (Section 80E)
          </h3>
          <p className="text-gray-700 mb-4">
            Deduction on interest paid on loans taken for higher education for self, spouse, children, or a student for whom you are a legal guardian.
          </p>
          <h3 className="text-xl font-semibold mb-2 text-blue-700">
            Savings Account Interest (Section 80TTA)
          </h3>
          <p className="text-gray-700 mb-4">
            Deduction up to ₹10,000 on interest earned from savings accounts.
          </p>
          <h3 className="text-xl font-semibold mb-2 text-blue-700">
            Home Loan Interest (Section 24)
          </h3>
          <p className="text-gray-700 mb-4">
            Deduction up to ₹2 lakhs on interest paid on home loan for a self-occupied property.
          </p>
          <h2 className="text-2xl font-semibold mb-4 text-blue-800">
            Enter Your Details
          </h2>
          <form className="space-y-4">
            <div>
              <label className="block text-gray-700">Annual Salary (₹):</label>
              <input
                type="number"
                name="salary"
                value={formValues.salary}
                onChange={handleInputChange}
                className="w-full p-2 border border-gray-300 rounded"
              />
            </div>
            <div>
              <label className="block text-gray-700">PPF Contribution (₹):</label>
              <input
                type="number"
                name="ppf"
                value={formValues.ppf}
                onChange={handleInputChange}
                className="w-full p-2 border border-gray-300 rounded"
              />
            </div>
            <div>
              <label className="block text-gray-700">EPF Contribution (₹):</label>
              <input
                type="number"
                name="epf"
                value={formValues.epf}
                onChange={handleInputChange}
                className="w-full p-2 border border-gray-300 rounded"
              />
            </div>
            <div>
              <label className="block text-gray-700">Life Insurance Premium (₹):</label>
              <input
                type="number"
                name="lifeInsurance"
                value={formValues.lifeInsurance}
                onChange={handleInputChange}
                className="w-full p-2 border border-gray-300 rounded"
              />
            </div>
            <div>
              <label className="block text-gray-700">Home Loan Principal Repayment (₹):</label>
              <input
                type="number"
                name="homeLoanPrincipal"
                value={formValues.homeLoanPrincipal}
                onChange={handleInputChange}
                className="w-full p-2 border border-gray-300 rounded"
              />
            </div>
            <div>
              <label className="block text-gray-700">Health Insurance Premium (₹):</label>
              <input
                type="number"
                name="healthInsurance"
                value={formValues.healthInsurance}
                onChange={handleInputChange}
                className="w-full p-2 border border-gray-300 rounded"
              />
            </div>
            <div>
              <label className="block text-gray-700">Education Loan Interest (₹):</label>
              <input
                type="number"
                name="educationLoanInterest"
                value={formValues.educationLoanInterest}
                onChange={handleInputChange}
                className="w-full p-2 border border-gray-300 rounded"
              />
            </div>
            <div>
              <label className="block text-gray-700">Savings Account Interest (₹):</label>
              <input
                type="number"
                name="savingsInterest"
                value={formValues.savingsInterest}
                onChange={handleInputChange}
                className="w-full p-2 border border-gray-300 rounded"
              />
            </div>
            <div>
              <label className="block text-gray-700">Home Loan Interest (₹):</label>
              <input
                type="number"
                name="homeLoanInterest"
                value={formValues.homeLoanInterest}
                onChange={handleInputChange}
                className="w-full p-2 border border-gray-300 rounded"
              />
            </div>
            <button
              type="button"
              onClick={calculateDeductions}
              className="w-full bg-blue-500 text-white p-2 rounded hover:bg-blue-600"
            >
              Calculate Taxable Income
            </button>
          </form>

          {results !== null && (
            <div className="mt-6 bg-gray-100 p-4 rounded">
              <h2 className="text-2xl font-bold text-center text-blue-800">Taxable Income</h2>
              <p className="text-center text-gray-700 text-xl mt-2">₹{results.taxableIncome.toLocaleString()}</p>
              <h3 className="text-xl font-semibold mt-4 text-blue-700">Deductions Breakdown:</h3>
              <ul className="list-disc ml-6 text-gray-700">
                <li>Section 80C: ₹{results.breakdown.section80C.toLocaleString()}</li>
                <li>Section 80D: ₹{results.breakdown.section80D.toLocaleString()}</li>
                <li>Section 80E: ₹{results.breakdown.section80E.toLocaleString()}</li>
                <li>Section 80TTA: ₹{results.breakdown.section80TTA.toLocaleString()}</li>
                <li>Section 24: ₹{results.breakdown.section24.toLocaleString()}</li>
              </ul>
            </div>
          )}
        </div>
      </div>
    </>
  );
};

export default TaxPlanning;