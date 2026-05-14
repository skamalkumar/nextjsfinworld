'use client';
import React, { useState } from "react";

const WillPlanning = () => {
  const [formValues, setFormValues] = useState({
    assets: "",
    beneficiaries: "",
    executor: "",
    guardians: "",
    debts: "",
    trusts: "",
  });
  const [submitted, setSubmitted] = useState(false);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormValues({ ...formValues, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
    window.scrollTo({ top: document.getElementById("result").offsetTop - 100, behavior: "smooth" });
  };

  return (
    <div className="min-h-screen bg-gradient-to-r from-purple-50 to-blue-50">

      {/* Hero Section */}
      <div className="w-full bg-gradient-to-r from-purple-700 to-blue-800 py-12 px-4">
        <div className="max-w-4xl mx-auto text-center text-white">
          <h1 className="text-4xl md:text-5xl font-bold mb-3">Will Planning</h1>
          <p className="text-lg md:text-xl font-light">Protect your legacy and ensure your wishes are honoured</p>
        </div>
      </div>

      <div className="max-w-5xl mx-auto px-4 py-12">

        {/* Introduction - SEO */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold text-blue-900 mb-4">Why Will Planning is Essential in India</h2>
          <p className="text-lg text-gray-700 leading-relaxed mb-4">
            A Will is one of the most important legal documents you will ever create. Yet in India, less than 2% of the population has a registered Will. Without a Will, your assets are distributed according to the Hindu Succession Act, Muslim Personal Law, or Indian Succession Act — which may not reflect your actual wishes and can lead to family disputes, legal complications, and delays in asset transfer.
          </p>
          <p className="text-lg text-gray-700 leading-relaxed mb-4">
            Will planning ensures that your property, investments, savings, and other assets go to the right people in the right proportions. It also allows you to appoint guardians for your minor children, set up trusts for dependents with special needs, and specify how outstanding debts and taxes should be settled after your passing.
          </p>
          <p className="text-lg text-gray-700 leading-relaxed">
            At FinWorld, we guide you through the entire Will planning process — helping you take stock of your assets, identify the right beneficiaries, choose a reliable executor, and ensure your Will is legally valid and stored safely.
          </p>
        </section>

        {/* Why You Need a Will - SEO */}
        <section className="mb-12 grid md:grid-cols-3 gap-6">
          <div className="bg-white rounded-xl shadow-md p-6 border-t-4 border-purple-500">
            <h3 className="text-xl font-bold text-blue-800 mb-3">Avoid Family Disputes</h3>
            <p className="text-gray-700">
              Without a Will, even close families can end up in prolonged legal battles over property and assets. A clear, legally valid Will eliminates ambiguity and ensures your wishes are followed without conflict between heirs.
            </p>
          </div>
          <div className="bg-white rounded-xl shadow-md p-6 border-t-4 border-blue-500">
            <h3 className="text-xl font-bold text-blue-800 mb-3">Protect Minor Children</h3>
            <p className="text-gray-700">
              A Will allows you to appoint a trusted guardian for your minor children and set up financial trusts to manage their inheritance until they reach adulthood. Without this, courts decide who cares for your children.
            </p>
          </div>
          <div className="bg-white rounded-xl shadow-md p-6 border-t-4 border-indigo-500">
            <h3 className="text-xl font-bold text-blue-800 mb-3">Control Asset Distribution</h3>
            <p className="text-gray-700">
              You decide exactly who gets what — specific property to specific people, charitable donations, business succession plans. Without a Will, intestacy laws apply and the distribution may not match your intentions at all.
            </p>
          </div>
        </section>

        {/* Steps to Create a Will - SEO */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold text-blue-900 mb-6">10 Steps to Create a Valid Will in India</h2>
          <div className="space-y-3">
            {[
              { step: "1", title: "Take Inventory of Your Assets", desc: "List all your assets — property, bank accounts, investments, mutual funds, insurance policies, jewellery, vehicles, and digital assets. Include details like account numbers, policy numbers, and locations." },
              { step: "2", title: "Decide on Your Beneficiaries", desc: "Clearly identify who will inherit each asset. Be specific — include full names, relationships, and the percentage or specific asset each person receives to avoid confusion." },
              { step: "3", title: "Choose a Reliable Executor", desc: "The executor is responsible for carrying out your Will's instructions. Choose someone trustworthy, organized, and ideally younger than you. They will file for probate and distribute assets." },
              { step: "4", title: "Appoint Guardians for Minor Children", desc: "If you have children under 18, appoint a guardian you trust to raise them in your absence. Discuss this with the guardian beforehand to ensure they are willing and prepared." },
              { step: "5", title: "Plan for Debts and Taxes", desc: "Specify how outstanding debts — home loans, credit cards, personal loans — should be settled. Your estate's assets may need to be liquidated to clear debts before distribution to beneficiaries." },
              { step: "6", title: "Consider Setting Up Trusts", desc: "Trusts are useful for protecting assets for minor children, dependents with special needs, or beneficiaries who may not be financially mature. A trust ensures managed distribution over time." },
              { step: "7", title: "Draft the Will", desc: "Engage a lawyer to draft the Will in clear, unambiguous language. While a handwritten Will is legally valid in India, a professionally drafted Will minimizes the risk of disputes." },
              { step: "8", title: "Sign in the Presence of Witnesses", desc: "Under the Indian Succession Act, a Will must be signed by the testator and attested by at least two witnesses who are present simultaneously. Witnesses should not be beneficiaries." },
              { step: "9", title: "Register the Will", desc: "While registration is not mandatory in India, registering your Will with the Sub-Registrar's office makes it harder to challenge and provides an official record of its existence." },
              { step: "10", title: "Review and Update Regularly", desc: "Review your Will after major life events — marriage, divorce, birth of a child, significant change in assets, or death of a beneficiary. Update it to reflect your current wishes." },
            ].map((item) => (
              <div key={item.step} className="bg-white rounded-xl shadow-sm p-5 flex gap-4">
                <div className="w-10 h-10 bg-purple-100 rounded-full flex items-center justify-center flex-shrink-0 font-bold text-purple-700">{item.step}</div>
                <div>
                  <h3 className="text-lg font-bold text-blue-800 mb-1">{item.title}</h3>
                  <p className="text-gray-700">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Will Planning Form */}
        <section className="mb-12">
          <div className="bg-white rounded-2xl shadow-lg p-8">
            <h2 className="text-2xl font-bold text-blue-900 mb-2 text-center">Will Planning Checklist</h2>
            <p className="text-gray-600 text-center mb-8">Fill in the details below to organise your Will planning information. Our advisors will use this to guide you through the next steps.</p>

            <form className="space-y-5" onSubmit={handleSubmit}>
              <div>
                <label className="block text-gray-700 font-medium mb-1">List of Assets</label>
                <p className="text-gray-500 text-sm mb-2">Include property, bank accounts, investments, insurance, jewellery, vehicles, digital assets</p>
                <textarea
                  name="assets"
                  value={formValues.assets}
                  onChange={handleInputChange}
                  rows={4}
                  className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-400"
                  placeholder="e.g. Flat at Hyderabad worth ₹60L, SBI savings account, LIC policy, 100g gold jewellery..."
                  required
                />
              </div>
              <div>
                <label className="block text-gray-700 font-medium mb-1">Beneficiaries</label>
                <p className="text-gray-500 text-sm mb-2">Names, relationships, and what each person should receive</p>
                <textarea
                  name="beneficiaries"
                  value={formValues.beneficiaries}
                  onChange={handleInputChange}
                  rows={4}
                  className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-400"
                  placeholder="e.g. Spouse - 60%, Son - 20%, Daughter - 20%..."
                  required
                />
              </div>
              <div className="grid md:grid-cols-2 gap-5">
                <div>
                  <label className="block text-gray-700 font-medium mb-1">Executor</label>
                  <p className="text-gray-500 text-sm mb-2">Person responsible for carrying out your Will</p>
                  <input
                    type="text"
                    name="executor"
                    value={formValues.executor}
                    onChange={handleInputChange}
                    className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-400"
                    placeholder="Full name of executor"
                    required
                  />
                </div>
                <div>
                  <label className="block text-gray-700 font-medium mb-1">Guardians for Minor Children</label>
                  <p className="text-gray-500 text-sm mb-2">If applicable</p>
                  <input
                    type="text"
                    name="guardians"
                    value={formValues.guardians}
                    onChange={handleInputChange}
                    className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-400"
                    placeholder="Full name of guardian(s)"
                  />
                </div>
              </div>
              <div>
                <label className="block text-gray-700 font-medium mb-1">Debts & Taxes Payment Plan</label>
                <p className="text-gray-500 text-sm mb-2">How outstanding loans and debts should be settled</p>
                <textarea
                  name="debts"
                  value={formValues.debts}
                  onChange={handleInputChange}
                  rows={3}
                  className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-400"
                  placeholder="e.g. Home loan to be settled from property sale proceeds..."
                />
              </div>
              <div>
                <label className="block text-gray-700 font-medium mb-1">Trusts (if any)</label>
                <p className="text-gray-500 text-sm mb-2">Any trusts you want to set up for beneficiaries</p>
                <textarea
                  name="trusts"
                  value={formValues.trusts}
                  onChange={handleInputChange}
                  rows={3}
                  className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-400"
                  placeholder="e.g. Trust for minor son until age 25..."
                />
              </div>
              <button
                type="submit"
                className="w-full p-3 bg-purple-700 text-white rounded-lg font-semibold text-lg hover:bg-purple-800 transition duration-200"
              >
                Submit Will Planning Information
              </button>
            </form>

            {submitted && (
              <div id="result" className="mt-8 p-6 bg-green-50 rounded-xl border border-green-300" aria-live="polite">
                <div className="text-center">
                  <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-green-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <h3 className="text-2xl font-bold text-green-700 mb-2">Information Submitted Successfully!</h3>
                  <p className="text-gray-700 mb-4">Thank you for sharing your Will planning details. A FinWorld advisor will review your information and reach out to guide you through the next steps of creating a legally valid Will.</p>
                  <a href="/contactus">
                    <button className="px-6 py-3 bg-purple-700 text-white rounded-lg font-semibold hover:bg-purple-800 transition duration-200">
                      Schedule a Consultation
                    </button>
                  </a>
                </div>
              </div>
            )}
          </div>
        </section>

        {/* Legal Note - SEO */}
        <section className="mb-12 bg-yellow-50 border border-yellow-200 rounded-2xl p-6">
          <h2 className="text-xl font-bold text-yellow-800 mb-3">⚠️ Important Legal Note</h2>
          <p className="text-gray-700 leading-relaxed">
            The information submitted through this form is for planning purposes only and does not constitute a legally valid Will. A Will in India must be signed by the testator and attested by at least two witnesses to be legally valid under the Indian Succession Act, 1925. We strongly recommend engaging a qualified lawyer to draft and register your Will. FinWorld advisors can connect you with legal experts to ensure your Will is properly executed and legally enforceable.
          </p>
        </section>

        {/* CTA Section */}
        <section className="bg-gradient-to-r from-purple-700 to-blue-800 p-10 rounded-2xl text-center text-white">
          <h2 className="text-3xl font-bold mb-4">Don't Leave Your Legacy to Chance</h2>
          <p className="text-lg mb-6 max-w-2xl mx-auto">
            Creating a Will is one of the most loving things you can do for your family. Our advisors at FinWorld will guide you through the entire process and connect you with qualified legal experts to ensure your Will is valid and your wishes are protected.
          </p>
          <a href="/contactus">
            <button className="px-8 py-4 bg-white text-purple-900 text-lg font-bold rounded-lg hover:bg-purple-100 transition-all shadow-lg">
              Schedule a Free Will Planning Consultation
            </button>
          </a>
        </section>

      </div>
    </div>
  );
};

export default WillPlanning;