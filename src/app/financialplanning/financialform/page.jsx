// pages/financial-form.js
'use client';
import React, { useState } from 'react';
import { jsPDF } from 'jspdf';

const FinancialForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    age: '',
    occupation: '',
    income: '',
    maritalStatus: '',
    dependents: '',
    monthlyIncome: '',
    fixedExpenses: '',
    variableExpenses: '',
    retirementGoals: ['', ''],
    stocks: '',
    bonds: '',
    mutualFunds: '',
    otherInvestments: '',
    taxFilingStatus: '',
    taxDeductions: ['', ''],
    taxCredits: ['', ''],
    lifeInsuranceType: '',
    lifeInsuranceCoverage: '',
    healthInsuranceType: '',
    healthInsuranceCoverage: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;

    if (name.startsWith('retirementGoals_')) {
      const index = parseInt(name.split('_')[1], 10);
      const updatedGoals = [...formData.retirementGoals];
      updatedGoals[index] = value;
      setFormData({ ...formData, retirementGoals: updatedGoals });
      return;
    }
    if (name.startsWith('taxDeductions_')) {
      const index = parseInt(name.split('_')[1], 10);
      const updatedDeductions = [...formData.taxDeductions];
      updatedDeductions[index] = value;
      setFormData({ ...formData, taxDeductions: updatedDeductions });
      return;
    }
    if (name.startsWith('taxCredits_')) {
      const index = parseInt(name.split('_')[1], 10);
      const updatedCredits = [...formData.taxCredits];
      updatedCredits[index] = value;
      setFormData({ ...formData, taxCredits: updatedCredits });
      return;
    }
    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const generatePDF = () => {
    const doc = new jsPDF();
    let yOffset = 10;
    const pageHeight = doc.internal.pageSize.getHeight();
    const margin = 10;


    // Helper function to add text with proper spacing and bold headers
    const addSection = (title, content, isSection = false) => {
      if (isSection) {
        doc.setFont(undefined, 'bold');
        doc.setFontSize(16);
        doc.text(title, 10, yOffset);
        yOffset += 10;
        doc.setFont(undefined, 'normal');
        doc.setFontSize(12);
      } else {
        doc.setFont(undefined, 'bold');
        doc.text(title, 10, yOffset);
        doc.setFont(undefined, 'normal');
        yOffset += 6;
        doc.text(content, 20, yOffset);
        yOffset += 8; // Add some spacing
      }

          if(yOffset + margin >= pageHeight){
              doc.addPage();
              yOffset = 10; // reset the y position
          }
    };

      addSection('I. Personal Information', null, true);
    addSection('Name: ', formData.name);
    addSection('Age: ', formData.age);
    addSection('Occupation: ', formData.occupation);
    addSection('Income: ', formData.income);
    addSection('Marital Status: ', formData.maritalStatus);
    addSection('Dependents: ', formData.dependents);

    addSection('III. Income and Expenses', null, true);
    addSection('Monthly Income: ', formData.monthlyIncome);
    addSection('Other Income: ', formData.otherIncome);
    addSection('Fixed Expenses: ', formData.fixedExpenses);
    addSection('Variable Expenses: ', formData.variableExpenses);

    addSection('V. Investment and Retirement Planning', null, true);
    addSection('Retirement Goal 1: ', formData.retirementGoals[0]);
    addSection('Retirement Goal 2: ', formData.retirementGoals[1]);
    addSection('Stocks: ', formData.stocks);
    addSection('Bonds: ', formData.bonds);
    addSection('Mutual Funds: ', formData.mutualFunds);
    addSection('Other Investments: ', formData.otherInvestments);

    addSection('VI. Tax Planning', null, true);
    addSection('Tax Filing Status: ', formData.taxFilingStatus);
    addSection('Tax Deduction 1: ', formData.taxDeductions[0]);
    addSection('Tax Deduction 2: ', formData.taxDeductions[1]);
    addSection('Tax Credit 1: ', formData.taxCredits[0]);
    addSection('Tax Credit 2: ', formData.taxCredits[1]);

      addSection("VII. Insurance Planning", null, true);
      addSection("Life Insurance Policy Type: ", formData.lifeInsuranceType);
     addSection("Life Insurance Coverage: ", formData.lifeInsuranceCoverage);
     addSection("Health Insurance Policy Type: ", formData.healthInsuranceType);
    addSection("Health Insurance Coverage: ", formData.healthInsuranceCoverage);


    doc.save('financial_report.pdf');
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    generatePDF();
  };

  return (
     <div className="min-h-screen m-3 flex flex-col items-center justify-center bg-gradient-to-r from-green-400 to-blue-500 p-4 rounded-md">
      <h1 className="text-2xl font-bold text-white mb-6">Comprehensive Financial Form</h1>
      <form onSubmit={handleSubmit} className="w-full max-w-lg bg-white p-8 rounded-md shadow-md">
        <section className="mb-6">
          <h2 className="text-xl font-semibold mb-4 text-gray-800">I. Personal Information</h2>
            <div className="mb-4 flex items-center">
              <label className="block text-gray-700 text-sm font-bold mr-2 w-40">Name:</label>
              <input type="text" name="name" value={formData.name} onChange={handleChange} className="border border-gray-300 rounded px-4 py-2 w-full focus:outline-none focus:ring-2 focus:ring-blue-500" />
            </div>
             <div className="mb-4 flex items-center">
               <label className="block text-gray-700 text-sm font-bold mr-2 w-40">Age:</label>
               <input type="number" name="age" value={formData.age} onChange={handleChange} className="border border-gray-300 rounded px-4 py-2 w-full focus:outline-none focus:ring-2 focus:ring-blue-500" />
             </div>
             <div className="mb-4 flex items-center">
               <label className="block text-gray-700 text-sm font-bold mr-2 w-40">Occupation:</label>
               <input type="text" name="occupation" value={formData.occupation} onChange={handleChange} className="border border-gray-300 rounded px-4 py-2 w-full focus:outline-none focus:ring-2 focus:ring-blue-500" />
            </div>
            <div className="mb-4 flex items-center">
             <label className="block text-gray-700 text-sm font-bold mr-2 w-40">Income:</label>
             <input type="number" name="income" value={formData.income} onChange={handleChange} className="border border-gray-300 rounded px-4 py-2 w-full focus:outline-none focus:ring-2 focus:ring-blue-500" />
           </div>
          <div className="mb-4 flex items-center">
             <label className="block text-gray-700 text-sm font-bold mr-2 w-40">Marital Status:</label>
             <input type="text" name="maritalStatus" value={formData.maritalStatus} onChange={handleChange} className="border border-gray-300 rounded px-4 py-2 w-full focus:outline-none focus:ring-2 focus:ring-blue-500" />
           </div>
          <div className="mb-4 flex items-center">
            <label className="block text-gray-700 text-sm font-bold mr-2 w-40">Dependents:</label>
            <input type="number" name="dependents" value={formData.dependents} onChange={handleChange} className="border border-gray-300 rounded px-4 py-2 w-full focus:outline-none focus:ring-2 focus:ring-blue-500" />
          </div>
        </section>

        <section className="mt-6 mb-6">
          <h2 className="text-xl font-semibold mb-4 text-gray-800">III. Income and Expenses</h2>
            <div className="mb-4 flex items-center">
              <label className="block text-gray-700 text-sm font-bold mr-2 w-40">Monthly Income:</label>
               <input type="number" name="monthlyIncome" value={formData.monthlyIncome} onChange={handleChange} className="border border-gray-300 rounded px-4 py-2 w-full focus:outline-none focus:ring-2 focus:ring-blue-500" />
            </div>
            <div className="mb-4 flex items-center">
              <label className="block text-gray-700 text-sm font-bold mr-2 w-40">Other Income:</label>
               <input type="number" name="otherIncome" value={formData.otherIncome} onChange={handleChange} className="border border-gray-300 rounded px-4 py-2 w-full focus:outline-none focus:ring-2 focus:ring-blue-500" />
            </div>
            <div className="mb-4 flex items-center">
              <label className="block text-gray-700 text-sm font-bold mr-2 w-40">Fixed Expenses:</label>
              <input type="number" name="fixedExpenses" value={formData.fixedExpenses} onChange={handleChange} className="border border-gray-300 rounded px-4 py-2 w-full focus:outline-none focus:ring-2 focus:ring-blue-500" />
            </div>
            <div className="mb-4 flex items-center">
                <label className="block text-gray-700 text-sm font-bold mr-2 w-40">Variable Expenses:</label>
                <input type="number" name="variableExpenses" value={formData.variableExpenses} onChange={handleChange} className="border border-gray-300 rounded px-4 py-2 w-full focus:outline-none focus:ring-2 focus:ring-blue-500" />
            </div>
        </section>

        <section className="mt-6 mb-6">
           <h2 className="text-xl font-semibold mb-4 text-gray-800">V. Investment and Retirement Planning</h2>
            <div className="mb-4 flex items-center">
                 <label className="block text-gray-700 text-sm font-bold mr-2 w-40">Retirement Goal 1:</label>
                 <input type="text" name="retirementGoals_0" value={formData.retirementGoals[0]} onChange={handleChange} className="border border-gray-300 rounded px-4 py-2 w-full focus:outline-none focus:ring-2 focus:ring-blue-500" />
             </div>
              <div className="mb-4 flex items-center">
                <label className="block text-gray-700 text-sm font-bold mr-2 w-40">Retirement Goal 2:</label>
                 <input type="text" name="retirementGoals_1" value={formData.retirementGoals[1]} onChange={handleChange} className="border border-gray-300 rounded px-4 py-2 w-full focus:outline-none focus:ring-2 focus:ring-blue-500" />
              </div>
             <div className="mb-4 flex items-center">
                 <label className="block text-gray-700 text-sm font-bold mr-2 w-40">Stocks:</label>
               <input type="number" name="stocks" value={formData.stocks} onChange={handleChange} className="border border-gray-300 rounded px-4 py-2 w-full focus:outline-none focus:ring-2 focus:ring-blue-500" />
             </div>
           <div className="mb-4 flex items-center">
              <label className="block text-gray-700 text-sm font-bold mr-2 w-40">Bonds:</label>
             <input type="number" name="bonds" value={formData.bonds} onChange={handleChange} className="border border-gray-300 rounded px-4 py-2 w-full focus:outline-none focus:ring-2 focus:ring-blue-500" />
            </div>
           <div className="mb-4 flex items-center">
             <label className="block text-gray-700 text-sm font-bold mr-2 w-40">Mutual Funds:</label>
             <input type="number" name="mutualFunds" value={formData.mutualFunds} onChange={handleChange} className="border border-gray-300 rounded px-4 py-2 w-full focus:outline-none focus:ring-2 focus:ring-blue-500" />
          </div>
         <div className="mb-4 flex items-center">
             <label className="block text-gray-700 text-sm font-bold mr-2 w-40">Other Investments:</label>
              <input type="number" name="otherInvestments" value={formData.otherInvestments} onChange={handleChange} className="border border-gray-300 rounded px-4 py-2 w-full focus:outline-none focus:ring-2 focus:ring-blue-500" />
         </div>
        </section>

        <section className="mt-6 mb-6">
          <h2 className="text-xl font-semibold mb-4 text-gray-800">VI. Tax Planning</h2>
            <div className="mb-4 flex items-center">
              <label className="block text-gray-700 text-sm font-bold mr-2 w-40">Tax Filing Status:</label>
              <input type="text" name="taxFilingStatus" value={formData.taxFilingStatus} onChange={handleChange} className="border border-gray-300 rounded px-4 py-2 w-full focus:outline-none focus:ring-2 focus:ring-blue-500" />
            </div>
            <div className="mb-4 flex items-center">
               <label className="block text-gray-700 text-sm font-bold mr-2 w-40">Tax Deduction 1:</label>
                <input type="text" name="taxDeductions_0" value={formData.taxDeductions[0]} onChange={handleChange} className="border border-gray-300 rounded px-4 py-2 w-full focus:outline-none focus:ring-2 focus:ring-blue-500" />
             </div>
           <div className="mb-4 flex items-center">
              <label className="block text-gray-700 text-sm font-bold mr-2 w-40">Tax Deduction 2:</label>
                <input type="text" name="taxDeductions_1" value={formData.taxDeductions[1]} onChange={handleChange} className="border border-gray-300 rounded px-4 py-2 w-full focus:outline-none focus:ring-2 focus:ring-blue-500" />
             </div>
            <div className="mb-4 flex items-center">
               <label className="block text-gray-700 text-sm font-bold mr-2 w-40">Tax Credit 1:</label>
                <input type="text" name="taxCredits_0" value={formData.taxCredits[0]} onChange={handleChange} className="border border-gray-300 rounded px-4 py-2 w-full focus:outline-none focus:ring-2 focus:ring-blue-500" />
            </div>
           <div className="mb-4 flex items-center">
              <label className="block text-gray-700 text-sm font-bold mr-2 w-40">Tax Credit 2:</label>
             <input type="text" name="taxCredits_1" value={formData.taxCredits[1]} onChange={handleChange} className="border border-gray-300 rounded px-4 py-2 w-full focus:outline-none focus:ring-2 focus:ring-blue-500" />
          </div>
        </section>

        <section className="mt-6 mb-6">
          <h2 className="text-xl font-semibold mb-4 text-gray-800">VII. Insurance Planning</h2>
            <div className="mb-4 flex items-center">
                <label className="block text-gray-700 text-sm font-bold mr-2 w-40">Life Insurance Type:</label>
                 <input type="text" name="lifeInsuranceType" value={formData.lifeInsuranceType} onChange={handleChange} className="border border-gray-300 rounded px-4 py-2 w-full focus:outline-none focus:ring-2 focus:ring-blue-500" />
            </div>
             <div className="mb-4 flex items-center">
                 <label className="block text-gray-700 text-sm font-bold mr-2 w-40">Life Insurance Coverage:</label>
                <input type="number" name="lifeInsuranceCoverage" value={formData.lifeInsuranceCoverage} onChange={handleChange} className="border border-gray-300 rounded px-4 py-2 w-full focus:outline-none focus:ring-2 focus:ring-blue-500" />
            </div>
            <div className="mb-4 flex items-center">
                <label className="block text-gray-700 text-sm font-bold mr-2 w-40">Health Insurance Type:</label>
               <input type="text" name="healthInsuranceType" value={formData.healthInsuranceType} onChange={handleChange} className="border border-gray-300 rounded px-4 py-2 w-full focus:outline-none focus:ring-2 focus:ring-blue-500" />
            </div>
           <div className="mb-4 flex items-center">
             <label className="block text-gray-700 text-sm font-bold mr-2 w-40">Health Insurance Coverage:</label>
              <input type="number" name="healthInsuranceCoverage" value={formData.healthInsuranceCoverage} onChange={handleChange} className="border border-gray-300 rounded px-4 py-2 w-full focus:outline-none focus:ring-2 focus:ring-blue-500" />
            </div>
          </section>
        <div className="mt-8 text-center">
            <button type="submit" className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline">Generate PDF</button>
         </div>
        </form>
    </div>
  );
};

export default FinancialForm;