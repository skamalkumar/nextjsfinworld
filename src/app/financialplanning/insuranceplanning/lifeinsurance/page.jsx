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
    setFormValues({ ...formValues, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const immediateNeeds =
      parseInt(formValues.mortgage) +
      parseInt(formValues.educationFund) +
      parseInt(formValues.livingExpenses) * 10;
    const futureNeeds = parseInt(formValues.annualIncome) * 10;
    const totalNeeds = immediateNeeds + futureNeeds;
    setInsuranceNeeds({ immediateNeeds, futureNeeds, totalNeeds });
  };

  return (
    <div className="min-h-screen bg-gradient-to-r from-blue-50 to-indigo-50">

      {/* Hero Section */}
      <div className="w-full bg-gradient-to-r from-blue-700 to-indigo-800 py-12 px-4">
        <div className="max-w-4xl mx-auto text-center text-white">
          <h1 className="text-4xl md:text-5xl font-bold mb-3">Comprehensive Life Insurance Planning</h1>
          <p className="text-lg md:text-xl font-light">Secure your family's financial future with the right life cover</p>
        </div>
      </div>

      <div className="max-w-5xl mx-auto px-4 py-12">

        {/* Intro Content - SEO */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold text-blue-900 mb-4">Why Life Insurance Planning is Essential in India</h2>
          <p className="text-lg text-gray-700 leading-relaxed mb-4">
            Life insurance is the cornerstone of any sound financial plan, especially in India where a large percentage of families depend on a single earning member. In the unfortunate event of the breadwinner's death, a life insurance policy ensures that the family's financial needs — from daily expenses to children's education and outstanding loans — are fully covered without disruption.
          </p>
          <p className="text-lg text-gray-700 leading-relaxed mb-4">
            According to IRDAI data, India remains significantly underinsured, with the average sum assured per policy being far below what most families actually need. Many people buy life insurance purely for tax benefits under Section 80C, without considering whether the coverage amount is adequate for their family's actual needs.
          </p>
          <p className="text-lg text-gray-700 leading-relaxed">
            At FinWorld, we help you calculate the right life insurance coverage based on your income, liabilities, family size, and long-term goals — ensuring your loved ones are truly protected, not just nominally covered.
          </p>
        </section>

        {/* Key Factors Section - SEO */}
        <section className="mb-12 grid md:grid-cols-3 gap-6">
          <div className="bg-white rounded-xl shadow-md p-6 border-t-4 border-blue-500">
            <h3 className="text-xl font-bold text-blue-800 mb-3">Income Replacement</h3>
            <p className="text-gray-700">
              Your life cover should be able to replace your income for at least 10–15 years so your family can maintain their current lifestyle without financial hardship. A general rule is 10–12x your annual income.
            </p>
          </div>
          <div className="bg-white rounded-xl shadow-md p-6 border-t-4 border-indigo-500">
            <h3 className="text-xl font-bold text-blue-800 mb-3">Debt & Liabilities</h3>
            <p className="text-gray-700">
              Outstanding home loans, personal loans, and other debts should be fully covered by your life insurance so your family isn't burdened with repayments in your absence.
            </p>
          </div>
          <div className="bg-white rounded-xl shadow-md p-6 border-t-4 border-purple-500">
            <h3 className="text-xl font-bold text-blue-800 mb-3">Future Goals</h3>
            <p className="text-gray-700">
              Your children's education, marriage, and your spouse's retirement should be factored into your life cover. These are long-term goals that need protection regardless of what happens to you.
            </p>
          </div>
        </section>

        {/* Calculator Section */}
        <section className="mb-12">
          <div className="bg-white rounded-2xl shadow-lg p-8">
            <h2 className="text-2xl font-bold text-blue-900 mb-2 text-center">Calculate Your Life Insurance Coverage</h2>
            <p className="text-gray-600 text-center mb-8">Enter your financial details to estimate the ideal life insurance sum assured</p>

            <form className="space-y-5" onSubmit={handleSubmit}>
              <div className="grid md:grid-cols-2 gap-5">
                <div>
                  <label className="block text-gray-700 font-medium mb-1">Your Age</label>
                  <input
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
                  <label className="block text-gray-700 font-medium mb-1">Number of Dependents</label>
                  <input
                    type="number"
                    name="dependents"
                    value={formValues.dependents}
                    onChange={handleInputChange}
                    className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
                    placeholder="Enter number of dependents"
                    required
                  />
                </div>
                <div>
                  <label className="block text-gray-700 font-medium mb-1">Annual Income (₹)</label>
                  <input
                    type="number"
                    name="annualIncome"
                    value={formValues.annualIncome}
                    onChange={handleInputChange}
                    className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
                    placeholder="Enter your annual income"
                    required
                  />
                </div>
                <div>
                  <label className="block text-gray-700 font-medium mb-1">Outstanding Loans & Debts (₹)</label>
                  <input
                    type="number"
                    name="mortgage"
                    value={formValues.mortgage}
                    onChange={handleInputChange}
                    className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
                    placeholder="Home loan, personal loan, etc."
                    required
                  />
                </div>
                <div>
                  <label className="block text-gray-700 font-medium mb-1">Children's Education Fund Goal (₹)</label>
                  <input
                    type="number"
                    name="educationFund"
                    value={formValues.educationFund}
                    onChange={handleInputChange}
                    className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
                    placeholder="Target amount for children's education"
                    required
                  />
                </div>
                <div>
                  <label className="block text-gray-700 font-medium mb-1">Estimated Annual Living Expenses (₹)</label>
                  <input
                    type="number"
                    name="livingExpenses"
                    value={formValues.livingExpenses}
                    onChange={handleInputChange}
                    className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
                    placeholder="Annual household expenses"
                    required
                  />
                </div>
              </div>

              <button
                type="submit"
                className="w-full p-3 bg-blue-700 text-white rounded-lg font-semibold text-lg hover:bg-blue-800 transition duration-200"
              >
                Calculate Coverage Requirements
              </button>
            </form>

            {insuranceNeeds && (
              <div className="mt-8 p-6 bg-gradient-to-r from-blue-50 to-indigo-50 rounded-xl border border-blue-200" aria-live="polite">
                <h2 className="text-2xl font-bold mb-4 text-blue-800 text-center">Your Life Insurance Requirements</h2>
                <div className="grid md:grid-cols-3 gap-4">
                  <div className="bg-white rounded-lg p-4 text-center shadow-sm">
                    <p className="text-gray-500 text-sm mb-1">Immediate Financial Needs</p>
                    <p className="text-2xl font-bold text-blue-600">₹{insuranceNeeds.immediateNeeds.toLocaleString()}</p>
                  </div>
                  <div className="bg-white rounded-lg p-4 text-center shadow-sm">
                    <p className="text-gray-500 text-sm mb-1">Future Financial Goals</p>
                    <p className="text-2xl font-bold text-indigo-600">₹{insuranceNeeds.futureNeeds.toLocaleString()}</p>
                  </div>
                  <div className="bg-white rounded-lg p-4 text-center shadow-sm border-2 border-blue-400">
                    <p className="text-gray-500 text-sm mb-1">Total Coverage Needed</p>
                    <p className="text-2xl font-bold text-blue-900">₹{insuranceNeeds.totalNeeds.toLocaleString()}</p>
                  </div>
                </div>
                <p className="text-gray-600 text-sm text-center mt-4">
                  * This is an estimate based on standard financial planning principles. Consult a FinWorld advisor for a detailed personalized plan.
                </p>
              </div>
            )}
          </div>
        </section>

        {/* Types of Life Insurance - SEO */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold text-blue-900 mb-6">Types of Life Insurance Plans in India</h2>
          <div className="space-y-4">
            <div className="bg-white rounded-xl shadow-sm p-6 flex gap-4">
              <div className="w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center flex-shrink-0 font-bold text-blue-700">1</div>
              <div>
                <h3 className="text-xl font-bold text-blue-800 mb-2">Term Insurance</h3>
                <p className="text-gray-700">The most affordable and pure form of life insurance. Provides a large sum assured at a low premium for a fixed term. Ideal for income replacement and covering outstanding debts. Highly recommended for working individuals with dependents.</p>
              </div>
            </div>
            <div className="bg-white rounded-xl shadow-sm p-6 flex gap-4">
              <div className="w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center flex-shrink-0 font-bold text-blue-700">2</div>
              <div>
                <h3 className="text-xl font-bold text-blue-800 mb-2">Whole Life Insurance</h3>
                <p className="text-gray-700">Provides lifelong coverage and also builds a cash value over time. Suitable for estate planning and leaving a financial legacy for your heirs. Premiums are higher than term insurance but offer permanent protection.</p>
              </div>
            </div>
            <div className="bg-white rounded-xl shadow-sm p-6 flex gap-4">
              <div className="w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center flex-shrink-0 font-bold text-blue-700">3</div>
              <div>
                <h3 className="text-xl font-bold text-blue-800 mb-2">ULIPs (Unit Linked Insurance Plans)</h3>
                <p className="text-gray-700">Combines life insurance with market-linked investments. Part of the premium goes towards life cover and the rest is invested in equity or debt funds. Suitable for those looking for insurance plus long-term wealth creation.</p>
              </div>
            </div>
            <div className="bg-white rounded-xl shadow-sm p-6 flex gap-4">
              <div className="w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center flex-shrink-0 font-bold text-blue-700">4</div>
              <div>
                <h3 className="text-xl font-bold text-blue-800 mb-2">Endowment Plans</h3>
                <p className="text-gray-700">Provides life cover along with a savings component. On maturity, the policyholder receives a lump sum. Useful for goal-based savings like children's education or retirement planning combined with insurance protection.</p>
              </div>
            </div>
          </div>
        </section>

        {/* Government Resources */}
        <section className="mb-12 bg-white rounded-2xl shadow-md p-8">
          <h2 className="text-2xl font-bold text-blue-800 mb-4">Government & Regulatory Resources</h2>
          <p className="text-gray-700 mb-4">Refer to these official resources for reliable information on life insurance regulations and government schemes in India:</p>
          <ul className="space-y-3">
            <li className="flex items-center gap-3">
              <span className="w-2 h-2 bg-blue-500 rounded-full flex-shrink-0"></span>
              <a href="https://www.incometaxindia.gov.in/pages/tax-information-services.aspx" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline font-medium">
                Income Tax Department — Section 80C Benefits on Life Insurance
              </a>
            </li>
            <li className="flex items-center gap-3">
              <span className="w-2 h-2 bg-blue-500 rounded-full flex-shrink-0"></span>
              <a href="https://www.india.gov.in/spotlight/life-insurance-corporation-india" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline font-medium">
                Life Insurance Corporation (LIC) of India
              </a>
            </li>
            <li className="flex items-center gap-3">
              <span className="w-2 h-2 bg-blue-500 rounded-full flex-shrink-0"></span>
              <a href="https://www.sebi.gov.in/" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline font-medium">
                Securities and Exchange Board of India (SEBI)
              </a>
            </li>
          </ul>
        </section>

        {/* CTA Section */}
        <section className="bg-gradient-to-r from-blue-700 to-indigo-800 p-10 rounded-2xl text-center text-white">
          <h2 className="text-3xl font-bold mb-4">Not Sure How Much Cover You Need?</h2>
          <p className="text-lg mb-6 max-w-2xl mx-auto">
            Our AMFI-registered financial advisors at FinWorld can help you choose the right life insurance plan based on your income, liabilities, and family goals. Book a free consultation today.
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

export default LifeInsurancePlanning;