'use client';
import React, { useState } from "react";

const InvestmentPlanning = () => {
  const [formValues, setFormValues] = useState({
    annualIncome: "",
    monthlyInvestment: "",
    investmentDuration: "",
    retirementFundGoal: "",
    emergencyFundGoal: "",
  });

  const [totalInvestmentNeeded, setTotalInvestmentNeeded] = useState(null);
  const [breakdown, setBreakdown] = useState(null);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormValues({ ...formValues, [name]: value });
  };

  const calculateTotalInvestment = () => {
    const { monthlyInvestment, investmentDuration, retirementFundGoal, emergencyFundGoal } = formValues;
    const monthlySavings = parseFloat(monthlyInvestment) * 12 * parseFloat(investmentDuration);
    const savingsGoal = parseFloat(retirementFundGoal) + parseFloat(emergencyFundGoal);
    const total = monthlySavings + savingsGoal;
    setTotalInvestmentNeeded(total);
    setBreakdown({ monthlySavings, retirementFundGoal: parseFloat(retirementFundGoal), emergencyFundGoal: parseFloat(emergencyFundGoal) });
  };

  return (
    <div className="min-h-screen bg-gradient-to-r from-blue-50 to-green-50">

      {/* Hero Section */}
      <div className="w-full bg-gradient-to-r from-blue-700 to-green-700 py-12 px-4">
        <div className="max-w-4xl mx-auto text-center text-white">
          <h1 className="text-4xl md:text-5xl font-bold mb-3">Investment Planning</h1>
          <p className="text-lg md:text-xl font-light">Build wealth systematically and achieve your financial goals</p>
        </div>
      </div>

      <div className="max-w-5xl mx-auto px-4 py-12">

        {/* Introduction - SEO */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold text-blue-900 mb-4">Introduction to Investment Planning in India</h2>
          <p className="text-lg text-gray-700 leading-relaxed mb-4">
            Investment planning is one of the most powerful tools for achieving financial freedom. In India, with rising inflation, increasing life expectancy, and growing aspirations, simply saving money in a bank account is no longer enough. A well-structured investment plan helps your money grow faster than inflation, builds long-term wealth, and ensures financial security for you and your family.
          </p>
          <p className="text-lg text-gray-700 leading-relaxed mb-4">
            Whether you're a salaried professional in Hyderabad, a business owner in Mumbai, or a first-time investor just starting out, investment planning gives you a clear roadmap — defining how much to invest, where to invest, and for how long — based on your income, goals, and risk tolerance.
          </p>
          <p className="text-lg text-gray-700 leading-relaxed">
            At FinWorld, our AMFI-registered advisors create personalized investment strategies that align with your life goals — from buying a home and funding your children's education to building a retirement corpus and creating generational wealth.
          </p>
        </section>

        {/* Why Investment Planning - SEO */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold text-blue-900 mb-6">Why Investment Planning is Important</h2>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-white rounded-xl shadow-md p-6 border-l-4 border-blue-500">
              <h3 className="text-xl font-bold text-blue-800 mb-2">Beat Inflation</h3>
              <p className="text-gray-700">India's average inflation rate hovers around 5-6% annually. Money kept in a savings account earning 3-4% interest actually loses purchasing power over time. Smart investments in equity and mutual funds historically deliver 10-15% returns, helping you stay ahead of inflation.</p>
            </div>
            <div className="bg-white rounded-xl shadow-md p-6 border-l-4 border-green-500">
              <h3 className="text-xl font-bold text-blue-800 mb-2">Power of Compounding</h3>
              <p className="text-gray-700">Starting early makes a massive difference. Investing ₹5,000 per month at age 25 vs age 35 can result in a corpus that's 2-3x larger at retirement, simply because of compounding. Time in the market is more important than timing the market.</p>
            </div>
            <div className="bg-white rounded-xl shadow-md p-6 border-l-4 border-yellow-500">
              <h3 className="text-xl font-bold text-blue-800 mb-2">Goal-Based Planning</h3>
              <p className="text-gray-700">Investment planning ties your money to specific goals — a ₹50 lakh home down payment in 5 years, ₹1 crore education fund in 15 years, or ₹3 crore retirement corpus in 25 years. Each goal gets a dedicated investment strategy and instrument.</p>
            </div>
            <div className="bg-white rounded-xl shadow-md p-6 border-l-4 border-purple-500">
              <h3 className="text-xl font-bold text-blue-800 mb-2">Tax Efficiency</h3>
              <p className="text-gray-700">Smart investment planning also minimizes your tax burden. Instruments like ELSS mutual funds, PPF, NPS, and tax-free bonds offer significant tax benefits under Section 80C and 80CCD, reducing your taxable income while building wealth.</p>
            </div>
          </div>
        </section>

        {/* Investment Options - SEO */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold text-blue-900 mb-6">Investment Options Based on Time Horizon</h2>
          <div className="space-y-4">
            <div className="bg-white rounded-xl shadow-sm p-6 flex gap-4">
              <div className="w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center flex-shrink-0 font-bold text-blue-700">1</div>
              <div>
                <h3 className="text-xl font-bold text-blue-800 mb-2">Short-Term (Under 3 Years)</h3>
                <p className="text-gray-700 mb-2">For goals within 3 years, capital preservation is the priority. Suitable options include:</p>
                <div className="flex flex-wrap gap-2">
                  {["Fixed Deposits", "Recurring Deposits", "Liquid Mutual Funds", "Government Bonds", "Short-term Debt Funds"].map(item => (
                    <span key={item} className="bg-blue-50 text-blue-700 px-3 py-1 rounded-full text-sm font-medium">{item}</span>
                  ))}
                </div>
              </div>
            </div>
            <div className="bg-white rounded-xl shadow-sm p-6 flex gap-4">
              <div className="w-10 h-10 bg-green-100 rounded-full flex items-center justify-center flex-shrink-0 font-bold text-green-700">2</div>
              <div>
                <h3 className="text-xl font-bold text-blue-800 mb-2">Mid-Term (3–5 Years)</h3>
                <p className="text-gray-700 mb-2">For medium-term goals, a balance between growth and stability works best:</p>
                <div className="flex flex-wrap gap-2">
                  {["Hybrid Mutual Funds", "Corporate Bonds", "National Savings Certificates (NSC)", "Balanced Advantage Funds", "Gold ETFs"].map(item => (
                    <span key={item} className="bg-green-50 text-green-700 px-3 py-1 rounded-full text-sm font-medium">{item}</span>
                  ))}
                </div>
              </div>
            </div>
            <div className="bg-white rounded-xl shadow-sm p-6 flex gap-4">
              <div className="w-10 h-10 bg-purple-100 rounded-full flex items-center justify-center flex-shrink-0 font-bold text-purple-700">3</div>
              <div>
                <h3 className="text-xl font-bold text-blue-800 mb-2">Long-Term (5+ Years)</h3>
                <p className="text-gray-700 mb-2">Long-term goals benefit from equity-heavy investments that leverage compounding:</p>
                <div className="flex flex-wrap gap-2">
                  {["Equity Mutual Funds", "Direct Stocks", "PPF", "NPS", "ELSS", "Real Estate", "EPF"].map(item => (
                    <span key={item} className="bg-purple-50 text-purple-700 px-3 py-1 rounded-full text-sm font-medium">{item}</span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Calculator Section */}
        <section className="mb-12">
          <div className="bg-white rounded-2xl shadow-lg p-8">
            <h2 className="text-2xl font-bold text-blue-900 mb-2 text-center">Investment Planning Calculator</h2>
            <p className="text-gray-600 text-center mb-8">Enter your financial details to estimate the total investment needed to reach your goals</p>

            <div className="grid md:grid-cols-2 gap-5">
              <div>
                <label className="block text-gray-700 font-medium mb-1">Annual Income (₹)</label>
                <input
                  type="number"
                  name="annualIncome"
                  value={formValues.annualIncome}
                  onChange={handleInputChange}
                  className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
                  placeholder="Your yearly income"
                />
              </div>
              <div>
                <label className="block text-gray-700 font-medium mb-1">Monthly Investment Amount (₹)</label>
                <input
                  type="number"
                  name="monthlyInvestment"
                  value={formValues.monthlyInvestment}
                  onChange={handleInputChange}
                  className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
                  placeholder="How much you can invest monthly"
                />
              </div>
              <div>
                <label className="block text-gray-700 font-medium mb-1">Investment Duration (Years)</label>
                <input
                  type="number"
                  name="investmentDuration"
                  value={formValues.investmentDuration}
                  onChange={handleInputChange}
                  className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
                  placeholder="How long you plan to invest"
                />
              </div>
              <div>
                <label className="block text-gray-700 font-medium mb-1">Retirement Fund Goal (₹)</label>
                <input
                  type="number"
                  name="retirementFundGoal"
                  value={formValues.retirementFundGoal}
                  onChange={handleInputChange}
                  className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
                  placeholder="Target retirement corpus"
                />
              </div>
              <div className="md:col-span-2">
                <label className="block text-gray-700 font-medium mb-1">Emergency Fund Goal (₹)</label>
                <input
                  type="number"
                  name="emergencyFundGoal"
                  value={formValues.emergencyFundGoal}
                  onChange={handleInputChange}
                  className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
                  placeholder="Target emergency fund (typically 6 months expenses)"
                />
              </div>
            </div>

            <button
              type="button"
              onClick={calculateTotalInvestment}
              className="w-full mt-6 p-3 bg-blue-700 text-white rounded-lg font-semibold text-lg hover:bg-blue-800 transition duration-200"
            >
              Calculate Total Investment Needed
            </button>

            {totalInvestmentNeeded !== null && breakdown && (
              <div className="mt-8 p-6 bg-gradient-to-r from-blue-50 to-green-50 rounded-xl border border-blue-200" aria-live="polite">
                <h2 className="text-2xl font-bold mb-6 text-blue-800 text-center">Your Investment Summary</h2>
                <div className="grid md:grid-cols-3 gap-4 mb-4">
                  <div className="bg-white rounded-lg p-4 text-center shadow-sm">
                    <p className="text-gray-500 text-sm mb-1">Monthly SIP Total</p>
                    <p className="text-2xl font-bold text-blue-600">₹{breakdown.monthlySavings.toLocaleString()}</p>
                  </div>
                  <div className="bg-white rounded-lg p-4 text-center shadow-sm">
                    <p className="text-gray-500 text-sm mb-1">Retirement Goal</p>
                    <p className="text-2xl font-bold text-green-600">₹{breakdown.retirementFundGoal.toLocaleString()}</p>
                  </div>
                  <div className="bg-white rounded-lg p-4 text-center shadow-sm">
                    <p className="text-gray-500 text-sm mb-1">Emergency Fund</p>
                    <p className="text-2xl font-bold text-yellow-600">₹{breakdown.emergencyFundGoal.toLocaleString()}</p>
                  </div>
                </div>
                <div className="bg-white rounded-lg p-4 text-center shadow-sm border-2 border-blue-400">
                  <p className="text-gray-500 text-sm mb-1">Total Investment Needed</p>
                  <p className="text-3xl font-bold text-blue-900">₹{totalInvestmentNeeded.toLocaleString()}</p>
                </div>
                <p className="text-gray-600 text-sm text-center mt-4">
                  * This is a simplified estimate. Actual returns depend on the instruments chosen and market conditions. Consult a FinWorld advisor for a detailed plan.
                </p>
              </div>
            )}
          </div>
        </section>

        {/* Risk Management - SEO */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold text-blue-900 mb-6">Risk Management in Investment Planning</h2>
          <p className="text-lg text-gray-700 leading-relaxed mb-6">
            Every investment carries some level of risk. The key is not to avoid risk entirely but to manage it intelligently through diversification, asset allocation, and regular portfolio reviews aligned with your risk tolerance and investment horizon.
          </p>
          <div className="grid md:grid-cols-3 gap-6">
            <div className="bg-white rounded-xl shadow-md p-6 border-t-4 border-blue-500">
              <h3 className="text-xl font-bold text-blue-800 mb-3">Diversification</h3>
              <p className="text-gray-700">Spread investments across asset classes — equity, debt, gold, and real estate — so that poor performance in one area is offset by gains in another. Never put all your eggs in one basket.</p>
            </div>
            <div className="bg-white rounded-xl shadow-md p-6 border-t-4 border-green-500">
              <h3 className="text-xl font-bold text-blue-800 mb-3">Asset Allocation</h3>
              <p className="text-gray-700">Your allocation between equity and debt should reflect your age and risk tolerance. A common rule: subtract your age from 100 to get the equity percentage. A 30-year-old should have ~70% in equity.</p>
            </div>
            <div className="bg-white rounded-xl shadow-md p-6 border-t-4 border-yellow-500">
              <h3 className="text-xl font-bold text-blue-800 mb-3">Regular Review</h3>
              <p className="text-gray-700">Markets and life circumstances change. Review your portfolio at least once a year — rebalance asset allocation, reassess goals, and adjust SIP amounts as your income grows to stay on track.</p>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="bg-gradient-to-r from-blue-700 to-green-700 p-10 rounded-2xl text-center text-white">
          <h2 className="text-3xl font-bold mb-4">Ready to Start Your Investment Journey?</h2>
          <p className="text-lg mb-6 max-w-2xl mx-auto">
            Our AMFI-registered advisors at FinWorld will help you build a personalized investment plan tailored to your goals, risk tolerance, and timeline. Start building wealth today.
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

export default InvestmentPlanning;