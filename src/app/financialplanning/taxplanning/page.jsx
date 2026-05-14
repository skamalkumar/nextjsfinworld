'use client';
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
    setFormValues({ ...formValues, [name]: value });
  };

  const calculateDeductions = () => {
    const {
      salary, ppf, epf, lifeInsurance, homeLoanPrincipal,
      healthInsurance, educationLoanInterest, savingsInterest, homeLoanInterest,
    } = formValues;

    const section80C = Math.min(150000,
      parseFloat(ppf || 0) + parseFloat(epf || 0) +
      parseFloat(lifeInsurance || 0) + parseFloat(homeLoanPrincipal || 0)
    );
    const section80D = Math.min(25000, parseFloat(healthInsurance || 0));
    const section80E = parseFloat(educationLoanInterest || 0);
    const section80TTA = Math.min(10000, parseFloat(savingsInterest || 0));
    const section24 = Math.min(200000, parseFloat(homeLoanInterest || 0));
    const totalDeductions = section80C + section80D + section80E + section80TTA + section24;
    const taxableIncome = parseFloat(salary || 0) - totalDeductions;
    const taxSaved = totalDeductions * 0.3; // approx at 30% bracket

    setResults({
      totalDeductions, taxableIncome, taxSaved,
      breakdown: { section80C, section80D, section80E, section80TTA, section24 },
    });
  };

  return (
    <div className="min-h-screen bg-gradient-to-r from-indigo-50 to-blue-50">

      {/* Hero Section */}
      <div className="w-full bg-gradient-to-r from-indigo-700 to-blue-800 py-12 px-4">
        <div className="max-w-4xl mx-auto text-center text-white">
          <h1 className="text-4xl md:text-5xl font-bold mb-3">Tax Planning Strategies for Indian Investors</h1>
          <p className="text-lg md:text-xl font-light">Minimize your tax liability legally and maximize your take-home income</p>
        </div>
      </div>

      <div className="max-w-5xl mx-auto px-4 py-12">

        {/* Introduction - SEO */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold text-blue-900 mb-4">Why Tax Planning is Essential in India</h2>
          <p className="text-lg text-gray-700 leading-relaxed mb-4">
            Tax planning is one of the most impactful yet underutilized aspects of personal finance in India. Many salaried individuals and business owners pay significantly more tax than they need to, simply because they aren't aware of the legal deductions and exemptions available under the Income Tax Act. Effective tax planning can save you anywhere from ₹50,000 to over ₹3 lakhs annually depending on your income and investments.
          </p>
          <p className="text-lg text-gray-700 leading-relaxed mb-4">
            Tax planning is not tax evasion — it is the legal and strategic use of provisions in the Income Tax Act to reduce your taxable income. The government encourages tax-saving investments in instruments like PPF, ELSS, NPS, and health insurance because they promote savings, retirement planning, and social welfare.
          </p>
          <p className="text-lg text-gray-700 leading-relaxed">
            At FinWorld, we help you plan your taxes holistically — not just at the end of the financial year, but throughout the year — ensuring you make the right investments at the right time to maximize your tax benefits while building long-term wealth.
          </p>
        </section>

        {/* Key Deductions - SEO */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold text-blue-900 mb-6">Key Tax Saving Sections Under Income Tax Act</h2>
          <div className="space-y-4">

            <div className="bg-white rounded-xl shadow-sm p-6 border-l-4 border-indigo-500">
              <div className="flex items-start gap-4">
                <span className="bg-indigo-100 text-indigo-700 font-bold px-3 py-1 rounded-lg text-sm flex-shrink-0">80C</span>
                <div>
                  <h3 className="text-xl font-bold text-blue-800 mb-2">Section 80C — Up to ₹1.5 Lakhs</h3>
                  <p className="text-gray-700 mb-2">The most widely used tax-saving section. You can claim deductions up to ₹1.5 lakhs by investing in:</p>
                  <div className="flex flex-wrap gap-2">
                    {["PPF", "EPF", "ELSS Mutual Funds", "NSC", "5-Year FD", "Life Insurance Premium", "Home Loan Principal", "SSY", "Tuition Fees"].map(item => (
                      <span key={item} className="bg-indigo-50 text-indigo-700 px-3 py-1 rounded-full text-sm font-medium">{item}</span>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-xl shadow-sm p-6 border-l-4 border-green-500">
              <div className="flex items-start gap-4">
                <span className="bg-green-100 text-green-700 font-bold px-3 py-1 rounded-lg text-sm flex-shrink-0">80D</span>
                <div>
                  <h3 className="text-xl font-bold text-blue-800 mb-2">Section 80D — Health Insurance Premiums</h3>
                  <p className="text-gray-700">Deduction up to ₹25,000 on health insurance premiums for self, spouse, and children. An additional ₹25,000 (₹50,000 for senior citizens) for parents' health insurance. Total deduction can go up to ₹75,000 if parents are senior citizens.</p>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-xl shadow-sm p-6 border-l-4 border-blue-500">
              <div className="flex items-start gap-4">
                <span className="bg-blue-100 text-blue-700 font-bold px-3 py-1 rounded-lg text-sm flex-shrink-0">80E</span>
                <div>
                  <h3 className="text-xl font-bold text-blue-800 mb-2">Section 80E — Education Loan Interest</h3>
                  <p className="text-gray-700">Full deduction on interest paid on education loans for higher studies — for self, spouse, children, or a legal ward. No upper limit on the deduction amount. Available for 8 consecutive years from the year repayment starts.</p>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-xl shadow-sm p-6 border-l-4 border-yellow-500">
              <div className="flex items-start gap-4">
                <span className="bg-yellow-100 text-yellow-700 font-bold px-3 py-1 rounded-lg text-sm flex-shrink-0">80TTA</span>
                <div>
                  <h3 className="text-xl font-bold text-blue-800 mb-2">Section 80TTA — Savings Account Interest</h3>
                  <p className="text-gray-700">Deduction up to ₹10,000 on interest earned from savings bank accounts. Senior citizens can claim up to ₹50,000 under Section 80TTB which covers both savings and fixed deposit interest.</p>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-xl shadow-sm p-6 border-l-4 border-red-400">
              <div className="flex items-start gap-4">
                <span className="bg-red-100 text-red-600 font-bold px-3 py-1 rounded-lg text-sm flex-shrink-0">Sec 24</span>
                <div>
                  <h3 className="text-xl font-bold text-blue-800 mb-2">Section 24 — Home Loan Interest</h3>
                  <p className="text-gray-700">Deduction up to ₹2 lakhs per year on interest paid on a home loan for a self-occupied property. For a let-out property, the entire interest paid is deductible without any limit, making real estate investment tax-efficient.</p>
                </div>
              </div>
            </div>

          </div>
        </section>

        {/* Calculator Section */}
        <section className="mb-12">
          <div className="bg-white rounded-2xl shadow-lg p-8">
            <h2 className="text-2xl font-bold text-blue-900 mb-2 text-center">Tax Deduction Calculator</h2>
            <p className="text-gray-600 text-center mb-8">Enter your income and investments to calculate your total deductions and taxable income</p>

            <div className="grid md:grid-cols-2 gap-5">
              {[
                { label: "Annual Salary / Income (₹)", name: "salary", placeholder: "Your gross annual income" },
                { label: "PPF Contribution (₹)", name: "ppf", placeholder: "Annual PPF deposit" },
                { label: "EPF Contribution (₹)", name: "epf", placeholder: "Employee PF contribution" },
                { label: "Life Insurance Premium (₹)", name: "lifeInsurance", placeholder: "Annual premium paid" },
                { label: "Home Loan Principal Repayment (₹)", name: "homeLoanPrincipal", placeholder: "Principal repaid this year" },
                { label: "Health Insurance Premium (₹)", name: "healthInsurance", placeholder: "Annual health insurance premium" },
                { label: "Education Loan Interest (₹)", name: "educationLoanInterest", placeholder: "Interest paid on education loan" },
                { label: "Savings Account Interest (₹)", name: "savingsInterest", placeholder: "Interest earned from savings account" },
                { label: "Home Loan Interest (₹)", name: "homeLoanInterest", placeholder: "Interest paid on home loan" },
              ].map((field) => (
                <div key={field.name} className={field.name === "salary" ? "md:col-span-2" : ""}>
                  <label className="block text-gray-700 font-medium mb-1">{field.label}</label>
                  <input
                    type="number"
                    name={field.name}
                    value={formValues[field.name]}
                    onChange={handleInputChange}
                    placeholder={field.placeholder}
                    className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-400"
                  />
                </div>
              ))}
            </div>

            <button
              type="button"
              onClick={calculateDeductions}
              className="w-full mt-6 p-3 bg-indigo-700 text-white rounded-lg font-semibold text-lg hover:bg-indigo-800 transition duration-200"
            >
              Calculate Taxable Income
            </button>

            {results !== null && (
              <div className="mt-8 p-6 bg-gradient-to-r from-indigo-50 to-blue-50 rounded-xl border border-indigo-200" aria-live="polite">
                <h2 className="text-2xl font-bold mb-6 text-blue-800 text-center">Your Tax Deductions Summary</h2>

                {/* Deductions Breakdown */}
                <div className="grid md:grid-cols-3 gap-3 mb-6">
                  {[
                    { label: "Section 80C", value: results.breakdown.section80C, color: "text-indigo-600", limit: "Max ₹1.5L" },
                    { label: "Section 80D", value: results.breakdown.section80D, color: "text-green-600", limit: "Max ₹25K" },
                    { label: "Section 80E", value: results.breakdown.section80E, color: "text-blue-600", limit: "No Limit" },
                    { label: "Section 80TTA", value: results.breakdown.section80TTA, color: "text-yellow-600", limit: "Max ₹10K" },
                    { label: "Section 24", value: results.breakdown.section24, color: "text-red-500", limit: "Max ₹2L" },
                    { label: "Total Deductions", value: results.totalDeductions, color: "text-purple-700", limit: "All Sections" },
                  ].map((item) => (
                    <div key={item.label} className="bg-white rounded-lg p-4 text-center shadow-sm">
                      <p className="text-gray-500 text-xs mb-1">{item.limit}</p>
                      <p className="text-gray-700 text-sm font-medium mb-1">{item.label}</p>
                      <p className={`text-xl font-bold ${item.color}`}>₹{item.value.toLocaleString()}</p>
                    </div>
                  ))}
                </div>

                {/* Final Results */}
                <div className="grid md:grid-cols-2 gap-4">
                  <div className="bg-white rounded-lg p-4 text-center shadow-sm border-2 border-green-400">
                    <p className="text-gray-500 text-sm mb-1">Estimated Tax Saved (at 30%)</p>
                    <p className="text-3xl font-bold text-green-600">₹{Math.round(results.taxSaved).toLocaleString()}</p>
                  </div>
                  <div className="bg-white rounded-lg p-4 text-center shadow-sm border-2 border-indigo-400">
                    <p className="text-gray-500 text-sm mb-1">Net Taxable Income</p>
                    <p className="text-3xl font-bold text-blue-900">₹{Math.max(0, results.taxableIncome).toLocaleString()}</p>
                  </div>
                </div>
                <p className="text-gray-600 text-sm text-center mt-4">
                  * This is a simplified estimate based on old tax regime deductions. Tax savings vary based on your tax slab. Consult a FinWorld advisor for precise tax planning.
                </p>
              </div>
            )}
          </div>
        </section>

        {/* Additional Tips - SEO */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold text-blue-900 mb-6">Smart Tax Planning Tips for 2025-26</h2>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-white rounded-xl shadow-md p-6 border-t-4 border-indigo-500">
              <h3 className="text-xl font-bold text-blue-800 mb-3">Old vs New Tax Regime</h3>
              <p className="text-gray-700">The new tax regime offers lower slab rates but removes most deductions. If your total deductions under 80C, 80D, HRA, and Section 24 exceed ₹3.75 lakhs, the old regime is typically more beneficial. Always compare both before filing.</p>
            </div>
            <div className="bg-white rounded-xl shadow-md p-6 border-t-4 border-blue-500">
              <h3 className="text-xl font-bold text-blue-800 mb-3">NPS for Extra Deduction</h3>
              <p className="text-gray-700">Over and above the ₹1.5 lakh 80C limit, you can claim an additional ₹50,000 deduction under Section 80CCD(1B) by investing in the National Pension System (NPS). This brings your total potential deduction to ₹2 lakhs.</p>
            </div>
            <div className="bg-white rounded-xl shadow-md p-6 border-t-4 border-green-500">
              <h3 className="text-xl font-bold text-blue-800 mb-3">Plan Early in the Year</h3>
              <p className="text-gray-700">Don't wait until March to make tax-saving investments. Starting SIPs in ELSS at the beginning of the financial year spreads your investment, avoids last-minute rushed decisions, and maximizes the investment duration for better returns.</p>
            </div>
            <div className="bg-white rounded-xl shadow-md p-6 border-t-4 border-yellow-500">
              <h3 className="text-xl font-bold text-blue-800 mb-3">HRA Exemption</h3>
              <p className="text-gray-700">If you live in a rented house, you can claim House Rent Allowance (HRA) exemption. Ensure you submit rent receipts to your employer and have a valid rental agreement. For rent above ₹1 lakh/year, your landlord's PAN is required.</p>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="bg-gradient-to-r from-indigo-700 to-blue-800 p-10 rounded-2xl text-center text-white">
          <h2 className="text-3xl font-bold mb-4">Save More Tax This Financial Year</h2>
          <p className="text-lg mb-6 max-w-2xl mx-auto">
            Don't overpay your taxes. Our AMFI-registered advisors at FinWorld will help you build a tax-efficient investment plan that saves you money today while building wealth for tomorrow.
          </p>
          <a href="/contactus">
            <button className="px-8 py-4 bg-white text-blue-900 text-lg font-bold rounded-lg hover:bg-blue-100 transition-all shadow-lg">
              Schedule a Free Tax Planning Consultation
            </button>
          </a>
        </section>

      </div>
    </div>
  );
};

export default TaxPlanning;