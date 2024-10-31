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
    setFormValues({
      ...formValues,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const buildingCoverage = parseInt(formValues.buildingCoverage);
    const contentsCoverage = parseInt(formValues.contentsCoverage);
    const liabilityCoverage = parseInt(formValues.liabilityCoverage);

    setInsuranceNeeds({
      buildingCoverage,
      contentsCoverage,
      liabilityCoverage,
    });
  };

  return (
    <>
      <div className="min-h-screen m-3 flex flex-col items-center justify-center bg-gradient-to-r from-green-400 to-blue-500 p-4 rounded-md">
        <div className="bg-white p-8 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-200 max-w-4xl">
          <h1 className="text-3xl font-bold mb-6 text-center text-blue-900">
            Comprehensive Property Insurance Planning
          </h1>
          <p className="text-gray-700 mb-4">
            Secure your property with the right insurance. Calculate your property insurance needs based on property type, location, and coverage preferences.
          </p>
          <h2 className="text-2xl font-semibold mb-4 text-blue-800">
            Enter Your Property Details for an Accurate Insurance Assessment
          </h2>
          <form className="space-y-4" onSubmit={handleSubmit}>
            <div>
              <label className="block text-gray-700">Property Type:</label>
              <input
                type="text"
                name="propertyType"
                value={formValues.propertyType}
                onChange={handleInputChange}
                className="w-full p-2 border border-gray-300 rounded"
                required
              />
            </div>
            <div>
              <label className="block text-gray-700">Location:</label>
              <input
                type="text"
                name="location"
                value={formValues.location}
                onChange={handleInputChange}
                className="w-full p-2 border border-gray-300 rounded"
                required
              />
            </div>
            <div>
              <label className="block text-gray-700">Estimated Property Value:</label>
              <input
                type="number"
                name="propertyValue"
                value={formValues.propertyValue}
                onChange={handleInputChange}
                className="w-full p-2 border border-gray-300 rounded"
                required
              />
            </div>
            <div>
              <label className="block text-gray-700">Contents Value:</label>
              <input
                type="number"
                name="contentsValue"
                value={formValues.contentsValue}
                onChange={handleInputChange}
                className="w-full p-2 border border-gray-300 rounded"
                required
              />
            </div>
            <div>
              <label className="block text-gray-700">Building Coverage Amount:</label>
              <input
                type="number"
                name="buildingCoverage"
                value={formValues.buildingCoverage}
                onChange={handleInputChange}
                className="w-full p-2 border border-gray-300 rounded"
                required
              />
            </div>
            <div>
              <label className="block text-gray-700">Contents Coverage Amount:</label>
              <input
                type="number"
                name="contentsCoverage"
                value={formValues.contentsCoverage}
                onChange={handleInputChange}
                className="w-full p-2 border border-gray-300 rounded"
                required
              />
            </div>
            <div>
              <label className="block text-gray-700">Liability Coverage Amount:</label>
              <input
                type="number"
                name="liabilityCoverage"
                value={formValues.liabilityCoverage}
                onChange={handleInputChange}
                className="w-full p-2 border border-gray-300 rounded"
                required
              />
            </div>
            <button
              type="submit"
              className="w-full p-2 bg-blue-700 text-white rounded hover:bg-blue-800 transition duration-200"
            >
              Calculate Insurance Needs
            </button>
          </form>

          {insuranceNeeds && (
            <div className="mt-8 p-4 bg-gray-100 rounded">
              <h2 className="text-2xl font-semibold mb-4 text-blue-800">
                Property Insurance Coverage Estimate
              </h2>
              <p><strong>Building Coverage Amount Needed:</strong> ₹{insuranceNeeds.buildingCoverage.toLocaleString()}</p>
              <p><strong>Contents Coverage Amount Needed:</strong> ₹{insuranceNeeds.contentsCoverage.toLocaleString()}</p>
              <p><strong>Liability Coverage Amount Needed:</strong> ₹{insuranceNeeds.liabilityCoverage.toLocaleString()}</p>
            </div>
          )}
        </div>
      </div>
    </>
  );
};

export default PropertyInsurancePlanning;
