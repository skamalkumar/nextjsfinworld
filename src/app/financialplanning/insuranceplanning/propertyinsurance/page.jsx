'use client';
import React, { useState } from "react";

const PropertyInsurancePlanning = () => {
  const [formValues, setFormValues] = useState({
    propertyType: "",
    location: "",
    propertyValue: "",
    contentsValue: "",
    buildingCoverage: "",
    contentsCoverage: "",
    liabilityCoverage: "",
  });

  const [insuranceNeeds, setInsuranceNeeds] = useState(null);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormValues({ ...formValues, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const buildingCoverage = parseInt(formValues.buildingCoverage);
    const contentsCoverage = parseInt(formValues.contentsCoverage);
    const liabilityCoverage = parseInt(formValues.liabilityCoverage);
    const totalCoverage = buildingCoverage + contentsCoverage + liabilityCoverage;
    setInsuranceNeeds({ buildingCoverage, contentsCoverage, liabilityCoverage, totalCoverage });
  };

  return (
    <div className="min-h-screen bg-gradient-to-r from-teal-50 to-blue-50">

      {/* Hero Section */}
      <div className="w-full bg-gradient-to-r from-teal-600 to-blue-800 py-12 px-4">
        <div className="max-w-4xl mx-auto text-center text-white">
          <h1 className="text-4xl md:text-5xl font-bold mb-3">Property Insurance Planning</h1>
          <p className="text-lg md:text-xl font-light">Protect your most valuable asset with the right coverage</p>
        </div>
      </div>

      <div className="max-w-5xl mx-auto px-4 py-12">

        {/* Intro Content - SEO */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold text-blue-900 mb-4">Why Property Insurance is Essential in India</h2>
          <p className="text-lg text-gray-700 leading-relaxed mb-4">
            For most Indian families, their home is their single largest financial asset — often representing decades of savings and a lifetime of hard work. Yet property insurance remains one of the most overlooked aspects of financial planning in India. Natural disasters like floods, earthquakes, cyclones, and fires can cause devastating damage to your property, leaving you with massive repair or rebuilding costs if you're not adequately covered.
          </p>
          <p className="text-lg text-gray-700 leading-relaxed mb-4">
            India is highly vulnerable to natural disasters — the country experiences over 200 significant natural calamity events annually. Regions like coastal areas, the Himalayan belt, and flood plains face particularly high risks. A comprehensive property insurance policy protects your home's structure, its contents, and even provides liability coverage if a third party is injured on your property.
          </p>
          <p className="text-lg text-gray-700 leading-relaxed">
            Whether you own an apartment in a metro city or an independent house in a tier-2 town, FinWorld's advisors can help you find the right property insurance plan that covers your specific risks at an affordable premium.
          </p>
        </section>

        {/* Key Factors Section - SEO */}
        <section className="mb-12 grid md:grid-cols-3 gap-6">
          <div className="bg-white rounded-xl shadow-md p-6 border-t-4 border-teal-500">
            <h3 className="text-xl font-bold text-blue-800 mb-3">Building Coverage</h3>
            <p className="text-gray-700">
              Covers the physical structure of your property — walls, roof, floors, fixtures, and fittings — against damage from fire, floods, earthquakes, storms, and other perils. The sum insured should reflect the full reconstruction cost, not just the market value.
            </p>
          </div>
          <div className="bg-white rounded-xl shadow-md p-6 border-t-4 border-blue-500">
            <h3 className="text-xl font-bold text-blue-800 mb-3">Contents Coverage</h3>
            <p className="text-gray-700">
              Protects your household belongings — furniture, electronics, appliances, jewellery, and valuables — against theft, fire, and accidental damage. Many homeowners underestimate the total value of their contents, leaving them underinsured.
            </p>
          </div>
          <div className="bg-white rounded-xl shadow-md p-6 border-t-4 border-cyan-500">
            <h3 className="text-xl font-bold text-blue-800 mb-3">Liability Coverage</h3>
            <p className="text-gray-700">
              Provides financial protection if a visitor or third party is injured on your property or if you accidentally cause damage to a neighbour's property. Legal costs and compensation payouts can be significant without this cover.
            </p>
          </div>
        </section>

        {/* Calculator Section */}
        <section className="mb-12">
          <div className="bg-white rounded-2xl shadow-lg p-8">
            <h2 className="text-2xl font-bold text-blue-900 mb-2 text-center">Property Insurance Coverage Calculator</h2>
            <p className="text-gray-600 text-center mb-8">Enter your property details to estimate the right insurance coverage for your home</p>

            <form className="space-y-5" onSubmit={handleSubmit}>
              <div className="grid md:grid-cols-2 gap-5">
                <div>
                  <label className="block text-gray-700 font-medium mb-1">Property Type</label>
                  <input
                    type="text"
                    name="propertyType"
                    value={formValues.propertyType}
                    onChange={handleInputChange}
                    className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-400"
                    placeholder="e.g. Apartment, Independent House, Villa"
                    required
                  />
                </div>
                <div>
                  <label className="block text-gray-700 font-medium mb-1">Location</label>
                  <input
                    type="text"
                    name="location"
                    value={formValues.location}
                    onChange={handleInputChange}
                    className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-400"
                    placeholder="e.g. Mumbai, Hyderabad, Chennai"
                    required
                  />
                </div>
                <div>
                  <label className="block text-gray-700 font-medium mb-1">Estimated Property Value (₹)</label>
                  <input
                    type="number"
                    name="propertyValue"
                    value={formValues.propertyValue}
                    onChange={handleInputChange}
                    className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-400"
                    placeholder="Current market value of property"
                    required
                  />
                </div>
                <div>
                  <label className="block text-gray-700 font-medium mb-1">Contents Value (₹)</label>
                  <input
                    type="number"
                    name="contentsValue"
                    value={formValues.contentsValue}
                    onChange={handleInputChange}
                    className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-400"
                    placeholder="Total value of furniture, electronics, etc."
                    required
                  />
                </div>
                <div>
                  <label className="block text-gray-700 font-medium mb-1">Building Coverage Amount (₹)</label>
                  <input
                    type="number"
                    name="buildingCoverage"
                    value={formValues.buildingCoverage}
                    onChange={handleInputChange}
                    className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-400"
                    placeholder="Desired building/structure coverage"
                    required
                  />
                </div>
                <div>
                  <label className="block text-gray-700 font-medium mb-1">Contents Coverage Amount (₹)</label>
                  <input
                    type="number"
                    name="contentsCoverage"
                    value={formValues.contentsCoverage}
                    onChange={handleInputChange}
                    className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-400"
                    placeholder="Desired contents coverage"
                    required
                  />
                </div>
                <div className="md:col-span-2">
                  <label className="block text-gray-700 font-medium mb-1">Liability Coverage Amount (₹)</label>
                  <input
                    type="number"
                    name="liabilityCoverage"
                    value={formValues.liabilityCoverage}
                    onChange={handleInputChange}
                    className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-400"
                    placeholder="Desired third-party liability coverage"
                    required
                  />
                </div>
              </div>

              <button
                type="submit"
                className="w-full p-3 bg-teal-600 text-white rounded-lg font-semibold text-lg hover:bg-teal-700 transition duration-200"
              >
                Calculate Insurance Needs
              </button>
            </form>

            {insuranceNeeds && (
              <div className="mt-8 p-6 bg-gradient-to-r from-teal-50 to-blue-50 rounded-xl border border-teal-200" aria-live="polite">
                <h2 className="text-2xl font-bold mb-6 text-blue-800 text-center">Your Property Insurance Estimate</h2>
                <div className="grid md:grid-cols-3 gap-4 mb-4">
                  <div className="bg-white rounded-lg p-4 text-center shadow-sm">
                    <p className="text-gray-500 text-sm mb-1">Building Coverage</p>
                    <p className="text-2xl font-bold text-teal-600">₹{insuranceNeeds.buildingCoverage.toLocaleString()}</p>
                  </div>
                  <div className="bg-white rounded-lg p-4 text-center shadow-sm">
                    <p className="text-gray-500 text-sm mb-1">Contents Coverage</p>
                    <p className="text-2xl font-bold text-blue-600">₹{insuranceNeeds.contentsCoverage.toLocaleString()}</p>
                  </div>
                  <div className="bg-white rounded-lg p-4 text-center shadow-sm">
                    <p className="text-gray-500 text-sm mb-1">Liability Coverage</p>
                    <p className="text-2xl font-bold text-cyan-600">₹{insuranceNeeds.liabilityCoverage.toLocaleString()}</p>
                  </div>
                </div>
                <div className="bg-white rounded-lg p-4 text-center shadow-sm border-2 border-teal-400">
                  <p className="text-gray-500 text-sm mb-1">Total Coverage Needed</p>
                  <p className="text-3xl font-bold text-blue-900">₹{insuranceNeeds.totalCoverage.toLocaleString()}</p>
                </div>
                <p className="text-gray-600 text-sm text-center mt-4">
                  * This is an estimate. Please consult a FinWorld advisor for a detailed personalized property insurance plan.
                </p>
              </div>
            )}
          </div>
        </section>

        {/* What Property Insurance Covers - SEO */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold text-blue-900 mb-6">What Does Property Insurance Cover in India?</h2>
          <div className="space-y-4">
            <div className="bg-white rounded-xl shadow-sm p-6 flex gap-4">
              <div className="w-10 h-10 bg-teal-100 rounded-full flex items-center justify-center flex-shrink-0 font-bold text-teal-700">1</div>
              <div>
                <h3 className="text-xl font-bold text-blue-800 mb-2">Fire & Allied Perils</h3>
                <p className="text-gray-700">Covers damage caused by fire, lightning, explosion, and implosion. This is the most basic and essential coverage for any property owner. Many standard home insurance policies in India include fire cover as a default.</p>
              </div>
            </div>
            <div className="bg-white rounded-xl shadow-sm p-6 flex gap-4">
              <div className="w-10 h-10 bg-teal-100 rounded-full flex items-center justify-center flex-shrink-0 font-bold text-teal-700">2</div>
              <div>
                <h3 className="text-xl font-bold text-blue-800 mb-2">Natural Disasters</h3>
                <p className="text-gray-700">Covers damage from floods, earthquakes, cyclones, storms, landslides, and other natural calamities. Given India's geographic vulnerability, this coverage is especially important for properties in flood plains, coastal areas, and seismic zones.</p>
              </div>
            </div>
            <div className="bg-white rounded-xl shadow-sm p-6 flex gap-4">
              <div className="w-10 h-10 bg-teal-100 rounded-full flex items-center justify-center flex-shrink-0 font-bold text-teal-700">3</div>
              <div>
                <h3 className="text-xl font-bold text-blue-800 mb-2">Burglary & Theft</h3>
                <p className="text-gray-700">Protects your home contents against theft, burglary, and housebreaking. Jewellery, electronics, and cash (up to specified limits) are typically covered. Adequate contents coverage ensures your valuables are protected.</p>
              </div>
            </div>
            <div className="bg-white rounded-xl shadow-sm p-6 flex gap-4">
              <div className="w-10 h-10 bg-teal-100 rounded-full flex items-center justify-center flex-shrink-0 font-bold text-teal-700">4</div>
              <div>
                <h3 className="text-xl font-bold text-blue-800 mb-2">Alternate Accommodation</h3>
                <p className="text-gray-700">If your home becomes uninhabitable due to an insured peril, some policies cover the cost of temporary alternate accommodation while repairs are carried out. This is a valuable add-on that prevents additional financial burden during an already stressful time.</p>
              </div>
            </div>
          </div>
        </section>

        {/* Regulatory Resources */}
        <section className="mb-12 bg-white rounded-2xl shadow-md p-8">
          <h2 className="text-2xl font-bold text-blue-800 mb-4">Regulatory & Reference Resources</h2>
          <p className="text-gray-700 mb-4">For official information on property insurance regulations and guidelines in India:</p>
          <ul className="space-y-3">
            <li className="flex items-center gap-3">
              <span className="w-2 h-2 bg-teal-500 rounded-full flex-shrink-0"></span>
              <a href="https://www.irdai.gov.in/" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline font-medium">
                Insurance Regulatory and Development Authority of India (IRDAI)
              </a>
            </li>
            <li className="flex items-center gap-3">
              <span className="w-2 h-2 bg-teal-500 rounded-full flex-shrink-0"></span>
              <a href="https://www.iii.org/" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline font-medium">
                Insurance Information Institute (III)
              </a>
            </li>
            <li className="flex items-center gap-3">
              <span className="w-2 h-2 bg-teal-500 rounded-full flex-shrink-0"></span>
              <a href="https://www.naic.org/" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline font-medium">
                National Association of Insurance Commissioners (NAIC)
              </a>
            </li>
          </ul>
        </section>

        {/* CTA Section */}
        <section className="bg-gradient-to-r from-teal-600 to-blue-800 p-10 rounded-2xl text-center text-white">
          <h2 className="text-3xl font-bold mb-4">Protect Your Home & Valuables Today</h2>
          <p className="text-lg mb-6 max-w-2xl mx-auto">
            Your home is your most valuable asset. Let FinWorld's AMFI-registered advisors help you find the right property insurance plan that covers all your risks at the best possible premium.
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

export default PropertyInsurancePlanning;