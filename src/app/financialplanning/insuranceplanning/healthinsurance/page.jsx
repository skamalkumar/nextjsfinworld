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
    setFormValues({ ...formValues, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const hospitalizationCoverage = parseInt(formValues.hospitalizationCoverage);
    const outpatientCoverage = parseInt(formValues.outpatientCoverage);
    const totalCoverageNeeded = hospitalizationCoverage + outpatientCoverage;
    setInsuranceNeeds({ hospitalizationCoverage, outpatientCoverage, totalCoverageNeeded });
  };

  return (
    <div className="min-h-screen bg-gradient-to-r from-green-50 to-blue-50">

      {/* Hero Section */}
      <div className="w-full bg-gradient-to-r from-green-600 to-blue-700 py-12 px-4">
        <div className="max-w-4xl mx-auto text-center text-white">
          <h1 className="text-4xl md:text-5xl font-bold mb-3">Health Insurance Planning</h1>
          <p className="text-lg md:text-xl font-light">Protect your family's health and finances with the right coverage</p>
        </div>
      </div>

      <div className="max-w-5xl mx-auto px-4 py-12">

        {/* Intro Content - SEO */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold text-blue-900 mb-4">Why Health Insurance Planning Matters in India</h2>
          <p className="text-lg text-gray-700 leading-relaxed mb-4">
            Health insurance is one of the most critical components of a sound financial plan. In India, rising medical costs — hospital stays, surgeries, specialist consultations, and medicines — can quickly drain your savings if you're not adequately covered. A single serious illness or accident can cost anywhere from ₹2 lakhs to ₹20 lakhs or more, depending on the treatment and hospital.
          </p>
          <p className="text-lg text-gray-700 leading-relaxed mb-4">
            With over 500 million Indians still lacking adequate health coverage, planning the right health insurance policy is not just a financial decision — it's a necessity. Whether you're a young professional, a growing family, or approaching retirement, the right coverage can protect you from unexpected medical expenses and ensure you get the best care without financial stress.
          </p>
          <p className="text-lg text-gray-700 leading-relaxed">
            At FinWorld, we help you assess your health insurance needs based on your age, family size, medical history, and financial situation — ensuring you're neither underinsured nor overpaying for coverage you don't need.
          </p>
        </section>

        {/* Key Factors Section - SEO */}
        <section className="mb-12 grid md:grid-cols-3 gap-6">
          <div className="bg-white rounded-xl shadow-md p-6 border-t-4 border-green-500">
            <h3 className="text-xl font-bold text-blue-800 mb-3">Age & Health Status</h3>
            <p className="text-gray-700">
              Your age and existing health conditions significantly affect the coverage you need and the premiums you'll pay. Younger individuals pay lower premiums but should still maintain adequate coverage for accidents and emergencies.
            </p>
          </div>
          <div className="bg-white rounded-xl shadow-md p-6 border-t-4 border-blue-500">
            <h3 className="text-xl font-bold text-blue-800 mb-3">Family Size</h3>
            <p className="text-gray-700">
              A family floater plan covers all family members under one policy. The sum insured should account for the number of dependents, their ages, and any pre-existing conditions to ensure everyone is adequately protected.
            </p>
          </div>
          <div className="bg-white rounded-xl shadow-md p-6 border-t-4 border-teal-500">
            <h3 className="text-xl font-bold text-blue-800 mb-3">Coverage Type</h3>
            <p className="text-gray-700">
              Hospitalization coverage pays for inpatient treatment costs, while outpatient coverage handles doctor visits, diagnostics, and medicines. A comprehensive plan should include both for complete protection.
            </p>
          </div>
        </section>

        {/* Calculator Section */}
        <section className="mb-12">
          <div className="bg-white rounded-2xl shadow-lg p-8">
            <h2 className="text-2xl font-bold text-blue-900 mb-2 text-center">Calculate Your Health Insurance Needs</h2>
            <p className="text-gray-600 text-center mb-8">Fill in your details below to estimate the right coverage amount for you and your family</p>

            <form className="space-y-5" onSubmit={handleSubmit} aria-label="Health Insurance Planning Form">
              <div className="grid md:grid-cols-2 gap-5">
                <div>
                  <label htmlFor="age" className="block text-gray-700 font-medium mb-1">Age</label>
                  <input
                    id="age"
                    type="number"
                    name="age"
                    value={formValues.age}
                    onChange={handleInputChange}
                    className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
                    placeholder="Enter your age"
                    required
                  />
                </div>
                <div>
                  <label htmlFor="familyMembers" className="block text-gray-700 font-medium mb-1">Number of Family Members</label>
                  <input
                    id="familyMembers"
                    type="number"
                    name="familyMembers"
                    value={formValues.familyMembers}
                    onChange={handleInputChange}
                    className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
                    placeholder="Enter number of family members"
                    required
                  />
                </div>
                <div>
                  <label htmlFor="annualMedicalExpenses" className="block text-gray-700 font-medium mb-1">Annual Medical Expenses (₹)</label>
                  <input
                    id="annualMedicalExpenses"
                    type="number"
                    name="annualMedicalExpenses"
                    value={formValues.annualMedicalExpenses}
                    onChange={handleInputChange}
                    className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
                    placeholder="Estimate your annual medical expenses"
                    required
                  />
                </div>
                <div>
                  <label htmlFor="emergencyFund" className="block text-gray-700 font-medium mb-1">Emergency Fund for Medical (₹)</label>
                  <input
                    id="emergencyFund"
                    type="number"
                    name="emergencyFund"
                    value={formValues.emergencyFund}
                    onChange={handleInputChange}
                    className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
                    placeholder="Amount saved for medical emergencies"
                    required
                  />
                </div>
                <div>
                  <label htmlFor="hospitalizationCoverage" className="block text-gray-700 font-medium mb-1">Hospitalization Coverage Needed (₹)</label>
                  <input
                    id="hospitalizationCoverage"
                    type="number"
                    name="hospitalizationCoverage"
                    value={formValues.hospitalizationCoverage}
                    onChange={handleInputChange}
                    className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
                    placeholder="Enter desired hospitalization coverage"
                    required
                  />
                </div>
                <div>
                  <label htmlFor="outpatientCoverage" className="block text-gray-700 font-medium mb-1">Outpatient Coverage Needed (₹)</label>
                  <input
                    id="outpatientCoverage"
                    type="number"
                    name="outpatientCoverage"
                    value={formValues.outpatientCoverage}
                    onChange={handleInputChange}
                    className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
                    placeholder="Enter desired outpatient coverage"
                    required
                  />
                </div>
              </div>

              <button
                type="submit"
                className="w-full p-3 bg-blue-700 text-white rounded-lg font-semibold text-lg hover:bg-blue-800 transition duration-200"
                aria-label="Calculate Insurance Needs"
              >
                Calculate Insurance Needs
              </button>
            </form>

            {insuranceNeeds && (
              <div className="mt-8 p-6 bg-gradient-to-r from-green-50 to-blue-50 rounded-xl border border-blue-200" aria-live="polite">
                <h2 className="text-2xl font-bold mb-4 text-blue-800 text-center">Your Insurance Needs Summary</h2>
                <div className="grid md:grid-cols-3 gap-4">
                  <div className="bg-white rounded-lg p-4 text-center shadow-sm">
                    <p className="text-gray-500 text-sm mb-1">Hospitalization Coverage</p>
                    <p className="text-2xl font-bold text-green-600">₹{insuranceNeeds.hospitalizationCoverage.toLocaleString()}</p>
                  </div>
                  <div className="bg-white rounded-lg p-4 text-center shadow-sm">
                    <p className="text-gray-500 text-sm mb-1">Outpatient Coverage</p>
                    <p className="text-2xl font-bold text-blue-600">₹{insuranceNeeds.outpatientCoverage.toLocaleString()}</p>
                  </div>
                  <div className="bg-white rounded-lg p-4 text-center shadow-sm border-2 border-blue-400">
                    <p className="text-gray-500 text-sm mb-1">Total Coverage Needed</p>
                    <p className="text-2xl font-bold text-blue-900">₹{insuranceNeeds.totalCoverageNeeded.toLocaleString()}</p>
                  </div>
                </div>
                <p className="text-gray-600 text-sm text-center mt-4">
                  * This is an estimate. Please consult a FinWorld advisor for a detailed personalized plan.
                </p>
              </div>
            )}
          </div>
        </section>

        {/* How to Choose Section - SEO */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold text-blue-900 mb-6">How to Choose the Right Health Insurance Plan in India</h2>
          <div className="space-y-4">
            <div className="bg-white rounded-xl shadow-sm p-6 flex gap-4">
              <div className="w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center flex-shrink-0 font-bold text-blue-700">1</div>
              <div>
                <h3 className="text-xl font-bold text-blue-800 mb-2">Assess Your Coverage Needs</h3>
                <p className="text-gray-700">Start by estimating your annual medical expenses, family size, and any pre-existing conditions. Use our calculator above to get a baseline figure for the coverage amount you need.</p>
              </div>
            </div>
            <div className="bg-white rounded-xl shadow-sm p-6 flex gap-4">
              <div className="w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center flex-shrink-0 font-bold text-blue-700">2</div>
              <div>
                <h3 className="text-xl font-bold text-blue-800 mb-2">Compare Plans and Premiums</h3>
                <p className="text-gray-700">Compare plans from IRDAI-regulated insurers. Look beyond just the premium — check the claim settlement ratio, hospital network, sub-limits, and waiting periods for pre-existing diseases.</p>
              </div>
            </div>
            <div className="bg-white rounded-xl shadow-sm p-6 flex gap-4">
              <div className="w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center flex-shrink-0 font-bold text-blue-700">3</div>
              <div>
                <h3 className="text-xl font-bold text-blue-800 mb-2">Consider a Top-Up Plan</h3>
                <p className="text-gray-700">If your employer provides group health insurance, consider supplementing it with a top-up or super top-up plan. These are cost-effective ways to increase your total coverage significantly.</p>
              </div>
            </div>
            <div className="bg-white rounded-xl shadow-sm p-6 flex gap-4">
              <div className="w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center flex-shrink-0 font-bold text-blue-700">4</div>
              <div>
                <h3 className="text-xl font-bold text-blue-800 mb-2">Review Annually</h3>
                <p className="text-gray-700">Your health insurance needs change with life events — marriage, a new child, aging parents. Review your coverage every year to ensure it still meets your family's needs.</p>
              </div>
            </div>
          </div>
        </section>

        {/* Government Resources */}
        <section className="mb-12 bg-white rounded-2xl shadow-md p-8">
          <h2 className="text-2xl font-bold text-blue-800 mb-4">Government Health Insurance Resources</h2>
          <p className="text-gray-700 mb-4">The Government of India offers several health schemes that may supplement your private health insurance coverage:</p>
          <ul className="space-y-3">
            <li className="flex items-center gap-3">
              <span className="w-2 h-2 bg-blue-500 rounded-full flex-shrink-0"></span>
              <a href="https://www.nhm.gov.in/" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline font-medium">
                National Health Mission — Government of India
              </a>
            </li>
            <li className="flex items-center gap-3">
              <span className="w-2 h-2 bg-blue-500 rounded-full flex-shrink-0"></span>
              <a href="https://www.pmjay.gov.in/" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline font-medium">
                Ayushman Bharat — Pradhan Mantri Jan Arogya Yojana (PMJAY)
              </a>
            </li>
            <li className="flex items-center gap-3">
              <span className="w-2 h-2 bg-blue-500 rounded-full flex-shrink-0"></span>
              <a href="https://www.mohfw.gov.in/" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline font-medium">
                Ministry of Health and Family Welfare — Government of India
              </a>
            </li>
            <li className="flex items-center gap-3">
              <span className="w-2 h-2 bg-blue-500 rounded-full flex-shrink-0"></span>
              <a href="https://www.ncdc.gov.in/" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline font-medium">
                National Centre for Disease Control (NCDC)
              </a>
            </li>
          </ul>
        </section>

        {/* CTA Section */}
        <section className="bg-gradient-to-r from-blue-700 to-blue-900 p-10 rounded-2xl text-center text-white">
          <h2 className="text-3xl font-bold mb-4">Need Help Choosing the Right Plan?</h2>
          <p className="text-lg mb-6 max-w-2xl mx-auto">
            Our AMFI-registered advisors at FinWorld can help you find the best health insurance plan tailored to your needs and budget. Get a free consultation today.
          </p>
          <a href="/contactus">
            <button className="px-8 py-4 bg-white text-blue-900 text-lg font-bold rounded-lg hover:bg-blue-100 transition-all shadow-lg">
              Schedule a Free Consultation
            </button>
          </a>
        </section>

      </div>
    </div>
  );
};

export default HealthInsurancePlanning;