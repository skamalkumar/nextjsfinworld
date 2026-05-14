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
    dependentsNeeds: "",
  });

  const [totalCoverage, setTotalCoverage] = useState(null);
  const [breakdown, setBreakdown] = useState(null);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormValues({ ...formValues, [name]: value });
  };

  const calculateTotalCoverage = () => {
    const {
      annualIncome, monthlyLivingExpenses, outstandingDebts,
      initialMedicalExpenses, ongoingMedicalCosts,
      durationOfIncomeReplacement, emergencyFund, dependentsNeeds,
    } = formValues;

    const incomeReplacement = parseFloat(annualIncome) * parseFloat(durationOfIncomeReplacement);
    const medicalExpenses = parseFloat(initialMedicalExpenses) + (parseFloat(ongoingMedicalCosts) * parseFloat(durationOfIncomeReplacement));
    const livingExpenses = parseFloat(monthlyLivingExpenses) * 12 * parseFloat(durationOfIncomeReplacement);
    const debtCoverage = parseFloat(outstandingDebts);
    const dependentsSupport = parseFloat(dependentsNeeds);
    const emergencyBuffer = parseFloat(emergencyFund);
    const total = incomeReplacement + medicalExpenses + livingExpenses + debtCoverage + dependentsSupport + emergencyBuffer;

    setTotalCoverage(total);
    setBreakdown({ incomeReplacement, medicalExpenses, livingExpenses, debtCoverage, dependentsSupport, emergencyBuffer });
  };

  return (
    <div className="min-h-screen bg-gradient-to-r from-orange-50 to-blue-50">

      {/* Hero Section */}
      <div className="w-full bg-gradient-to-r from-orange-600 to-blue-700 py-12 px-4">
        <div className="max-w-4xl mx-auto text-center text-white">
          <h1 className="text-4xl md:text-5xl font-bold mb-3">Accident Insurance Planning</h1>
          <p className="text-lg md:text-xl font-light">Protect your income and family against the unexpected</p>
        </div>
      </div>

      <div className="max-w-5xl mx-auto px-4 py-12">

        {/* Intro Content - SEO */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold text-blue-900 mb-4">Why Accident Insurance is Critical in India</h2>
          <p className="text-lg text-gray-700 leading-relaxed mb-4">
            Accidents are unpredictable and can happen to anyone — on the road, at the workplace, or at home. India records one of the highest road accident rates in the world, with over 4 lakh accidents and 1.5 lakh fatalities reported annually according to the Ministry of Road Transport and Highways. Beyond fatalities, millions of people suffer temporary or permanent disabilities that affect their ability to earn a living.
          </p>
          <p className="text-lg text-gray-700 leading-relaxed mb-4">
            A personal accident insurance policy provides financial protection specifically against accidental death, permanent total disability, permanent partial disability, and temporary total disability. Unlike health insurance which covers medical treatment costs, accident insurance focuses on replacing lost income and providing lump sum compensation when an accident disrupts your earning capacity.
          </p>
          <p className="text-lg text-gray-700 leading-relaxed">
            At FinWorld, we help you assess the right accident insurance coverage by considering your income, family dependents, outstanding liabilities, and medical costs — ensuring that an unexpected accident doesn't derail your family's financial security.
          </p>
        </section>

        {/* Key Factors Section - SEO */}
        <section className="mb-12 grid md:grid-cols-3 gap-6">
          <div className="bg-white rounded-xl shadow-md p-6 border-t-4 border-orange-500">
            <h3 className="text-xl font-bold text-blue-800 mb-3">Income Replacement</h3>
            <p className="text-gray-700">
              If an accident leaves you temporarily or permanently unable to work, accident insurance replaces your lost income. The coverage should account for the number of years you'd need support based on your age and dependents.
            </p>
          </div>
          <div className="bg-white rounded-xl shadow-md p-6 border-t-4 border-blue-500">
            <h3 className="text-xl font-bold text-blue-800 mb-3">Medical & Rehabilitation</h3>
            <p className="text-gray-700">
              Serious accidents often involve extended hospitalization, surgeries, physiotherapy, and rehabilitation. These costs can run into lakhs and should be factored into your coverage along with your existing health insurance.
            </p>
          </div>
          <div className="bg-white rounded-xl shadow-md p-6 border-t-4 border-red-400">
            <h3 className="text-xl font-bold text-blue-800 mb-3">Disability Cover</h3>
            <p className="text-gray-700">
              Permanent disability — losing a limb, eyesight, or the ability to work — requires long-term financial support. A good accident policy provides a lump sum payout for permanent total and partial disability proportionate to the degree of disability.
            </p>
          </div>
        </section>

        {/* Calculator Section */}
        <section className="mb-12">
          <div className="bg-white rounded-2xl shadow-lg p-8">
            <h2 className="text-2xl font-bold text-blue-900 mb-2 text-center">Accident Insurance Coverage Calculator</h2>
            <p className="text-gray-600 text-center mb-8">Fill in your financial details to estimate the recommended accident insurance coverage</p>

            <div className="grid md:grid-cols-2 gap-5">
              {[
                { label: "Annual Income (₹)", name: "annualIncome", placeholder: "Your yearly income" },
                { label: "Monthly Living Expenses (₹)", name: "monthlyLivingExpenses", placeholder: "Monthly household expenses" },
                { label: "Outstanding Debts (₹)", name: "outstandingDebts", placeholder: "Loans, credit cards, etc." },
                { label: "Initial Medical Expenses (₹)", name: "initialMedicalExpenses", placeholder: "Immediate treatment costs" },
                { label: "Ongoing Medical Costs per Year (₹)", name: "ongoingMedicalCosts", placeholder: "Physiotherapy, medicines, etc." },
                { label: "Duration of Income Replacement (Years)", name: "durationOfIncomeReplacement", placeholder: "How many years of support needed" },
                { label: "Emergency Fund Required (₹)", name: "emergencyFund", placeholder: "Additional emergency buffer" },
                { label: "Dependents' Financial Needs (₹)", name: "dependentsNeeds", placeholder: "Support needed for dependents" },
              ].map((field, idx) => (
                <div key={idx}>
                  <label className="block text-gray-700 font-medium mb-1">{field.label}</label>
                  <input
                    type="number"
                    name={field.name}
                    value={formValues[field.name]}
                    onChange={handleInputChange}
                    placeholder={field.placeholder}
                    className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-400"
                    required
                  />
                </div>
              ))}
            </div>

            <button
              type="button"
              onClick={calculateTotalCoverage}
              className="w-full mt-6 p-3 bg-orange-600 text-white rounded-lg font-semibold text-lg hover:bg-orange-700 transition duration-200"
            >
              Calculate Recommended Coverage
            </button>

            {totalCoverage !== null && breakdown && (
              <div className="mt-8 p-6 bg-gradient-to-r from-orange-50 to-blue-50 rounded-xl border border-orange-200" aria-live="polite">
                <h2 className="text-2xl font-bold mb-6 text-blue-800 text-center">Your Coverage Breakdown</h2>
                <div className="grid md:grid-cols-3 gap-4 mb-4">
                  <div className="bg-white rounded-lg p-4 text-center shadow-sm">
                    <p className="text-gray-500 text-sm mb-1">Income Replacement</p>
                    <p className="text-xl font-bold text-orange-600">₹{breakdown.incomeReplacement.toLocaleString()}</p>
                  </div>
                  <div className="bg-white rounded-lg p-4 text-center shadow-sm">
                    <p className="text-gray-500 text-sm mb-1">Medical Expenses</p>
                    <p className="text-xl font-bold text-blue-600">₹{breakdown.medicalExpenses.toLocaleString()}</p>
                  </div>
                  <div className="bg-white rounded-lg p-4 text-center shadow-sm">
                    <p className="text-gray-500 text-sm mb-1">Living Expenses</p>
                    <p className="text-xl font-bold text-green-600">₹{breakdown.livingExpenses.toLocaleString()}</p>
                  </div>
                  <div className="bg-white rounded-lg p-4 text-center shadow-sm">
                    <p className="text-gray-500 text-sm mb-1">Debt Coverage</p>
                    <p className="text-xl font-bold text-purple-600">₹{breakdown.debtCoverage.toLocaleString()}</p>
                  </div>
                  <div className="bg-white rounded-lg p-4 text-center shadow-sm">
                    <p className="text-gray-500 text-sm mb-1">Dependents Support</p>
                    <p className="text-xl font-bold text-red-500">₹{breakdown.dependentsSupport.toLocaleString()}</p>
                  </div>
                  <div className="bg-white rounded-lg p-4 text-center shadow-sm">
                    <p className="text-gray-500 text-sm mb-1">Emergency Buffer</p>
                    <p className="text-xl font-bold text-yellow-600">₹{breakdown.emergencyBuffer.toLocaleString()}</p>
                  </div>
                </div>
                <div className="bg-white rounded-lg p-4 text-center shadow-sm border-2 border-orange-400">
                  <p className="text-gray-500 text-sm mb-1">Total Recommended Coverage</p>
                  <p className="text-3xl font-bold text-blue-900">₹{totalCoverage.toLocaleString()}</p>
                </div>
                <p className="text-gray-600 text-sm text-center mt-4">
                  * This is an estimate. Please consult a FinWorld advisor for a detailed personalized plan.
                </p>
              </div>
            )}
          </div>
        </section>

        {/* What Does Accident Insurance Cover - SEO */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold text-blue-900 mb-6">What Does Personal Accident Insurance Cover?</h2>
          <div className="space-y-4">
            <div className="bg-white rounded-xl shadow-sm p-6 flex gap-4">
              <div className="w-10 h-10 bg-orange-100 rounded-full flex items-center justify-center flex-shrink-0 font-bold text-orange-700">1</div>
              <div>
                <h3 className="text-xl font-bold text-blue-800 mb-2">Accidental Death Benefit</h3>
                <p className="text-gray-700">In the event of death due to an accident, the nominee receives the full sum assured as a lump sum payout. This provides your family financial stability to cover immediate expenses, debts, and ongoing living costs.</p>
              </div>
            </div>
            <div className="bg-white rounded-xl shadow-sm p-6 flex gap-4">
              <div className="w-10 h-10 bg-orange-100 rounded-full flex items-center justify-center flex-shrink-0 font-bold text-orange-700">2</div>
              <div>
                <h3 className="text-xl font-bold text-blue-800 mb-2">Permanent Total Disability</h3>
                <p className="text-gray-700">If an accident results in permanent total disability — such as loss of both limbs, both eyes, or one limb and one eye — the policy pays 100% of the sum assured to help cover lifetime income loss and care needs.</p>
              </div>
            </div>
            <div className="bg-white rounded-xl shadow-sm p-6 flex gap-4">
              <div className="w-10 h-10 bg-orange-100 rounded-full flex items-center justify-center flex-shrink-0 font-bold text-orange-700">3</div>
              <div>
                <h3 className="text-xl font-bold text-blue-800 mb-2">Permanent Partial Disability</h3>
                <p className="text-gray-700">Loss of one limb, one eye, or partial hearing pays a percentage of the sum assured proportional to the degree of disability as per IRDAI guidelines. This compensates for the reduction in earning capacity.</p>
              </div>
            </div>
            <div className="bg-white rounded-xl shadow-sm p-6 flex gap-4">
              <div className="w-10 h-10 bg-orange-100 rounded-full flex items-center justify-center flex-shrink-0 font-bold text-orange-700">4</div>
              <div>
                <h3 className="text-xl font-bold text-blue-800 mb-2">Temporary Total Disability</h3>
                <p className="text-gray-700">If an accident temporarily prevents you from working, the policy pays a weekly benefit — typically 1% of the sum assured per week — for the duration of your recovery, up to a maximum period specified in the policy.</p>
              </div>
            </div>
          </div>
        </section>

        {/* Government Resources */}
        <section className="mb-12 bg-white rounded-2xl shadow-md p-8">
          <h2 className="text-2xl font-bold text-blue-800 mb-4">Government Schemes & Resources</h2>
          <p className="text-gray-700 mb-4">The Government of India offers several accident insurance schemes, especially for low-income groups and workers:</p>
          <ul className="space-y-3">
            <li className="flex items-center gap-3">
              <span className="w-2 h-2 bg-orange-500 rounded-full flex-shrink-0"></span>
              <a href="https://www.india.gov.in/spotlight/accident-insurance" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline font-medium">
                National Accident Insurance Scheme — Government of India
              </a>
            </li>
            <li className="flex items-center gap-3">
              <span className="w-2 h-2 bg-orange-500 rounded-full flex-shrink-0"></span>
              <a href="https://www.pmjjby.gov.in/" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline font-medium">
                Pradhan Mantri Jeevan Jyoti Bima Yojana (PMJJBY)
              </a>
            </li>
            <li className="flex items-center gap-3">
              <span className="w-2 h-2 bg-orange-500 rounded-full flex-shrink-0"></span>
              <a href="https://www.msde.gov.in/" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline font-medium">
                Ministry of Skill Development and Entrepreneurship — Worker Safety Schemes
              </a>
            </li>
          </ul>
        </section>

        {/* CTA Section */}
        <section className="bg-gradient-to-r from-orange-600 to-blue-700 p-10 rounded-2xl text-center text-white">
          <h2 className="text-3xl font-bold mb-4">Get the Right Accident Cover Today</h2>
          <p className="text-lg mb-6 max-w-2xl mx-auto">
            Don't leave your family's financial future to chance. Our AMFI-registered advisors at FinWorld can help you choose the right personal accident insurance plan at the best premium. Book a free consultation today.
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

export default AccidentInsurance;