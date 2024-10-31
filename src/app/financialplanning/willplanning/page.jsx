'use client';
import React, { useState } from "react";

const WillPlanning = () => {
  const [formValues, setFormValues] = useState({
    assets: "",
    beneficiaries: "",
    executor: "",
    guardians: "",
    debts: "",
    trusts: ""
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormValues({
      ...formValues,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Process form values
    console.log(formValues);
    alert("Will planning information submitted successfully!");
  };

  return (
    <>

      <div className="min-h-screen m-3 flex flex-col items-center justify-center bg-gradient-to-r from-green-400 to-blue-500 p-4 rounded-md">
        <div className="bg-white p-8 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-200 max-w-4xl">
          <h1 className="text-3xl font-bold mb-6 text-center text-blue-900">
            Will Planning
          </h1>
          <p className="text-gray-700 mb-4">
            Will planning is a crucial step in ensuring your assets are distributed according to your wishes after your death. This process involves taking inventory of your assets, deciding on beneficiaries, choosing an executor, and making other essential decisions.
          </p>
          <h2 className="text-2xl font-semibold mb-4 text-blue-800">
            Steps to Create a Will:
          </h2>
          <ol className="list-decimal ml-6 text-gray-700 mb-4">
            <li>Take inventory of your assets.</li>
            <li>Decide on your beneficiaries.</li>
            <li>Choose an executor.</li>
            <li>Appoint guardians for minor children.</li>
            <li>Determine how debts and taxes will be paid.</li>
            <li>Consider setting up trusts.</li>
            <li>Draft the will.</li>
            <li>Sign the will in the presence of witnesses.</li>
            <li>Store the will safely.</li>
            <li>Review and update the will regularly.</li>
          </ol>
          <h2 className="text-2xl font-semibold mb-4 text-blue-800">
            Enter Your Will Planning Details
          </h2>
          <form className="space-y-4" onSubmit={handleSubmit}>
            <div>
              <label className="block text-gray-700">List of Assets:</label>
              <textarea
                name="assets"
                value={formValues.assets}
                onChange={handleInputChange}
                className="w-full p-2 border border-gray-300 rounded"
              ></textarea>
            </div>
            <div>
              <label className="block text-gray-700">Beneficiaries:</label>
              <textarea
                name="beneficiaries"
                value={formValues.beneficiaries}
                onChange={handleInputChange}
                className="w-full p-2 border border-gray-300 rounded"
              ></textarea>
            </div>
            <div>
              <label className="block text-gray-700">Executor:</label>
              <input
                type="text"
                name="executor"
                value={formValues.executor}
                onChange={handleInputChange}
                className="w-full p-2 border border-gray-300 rounded"
              />
            </div>
            <div>
              <label className="block text-gray-700">Guardians for Minor Children:</label>
              <input
                type="text"
                name="guardians"
                value={formValues.guardians}
                onChange={handleInputChange}
                className="w-full p-2 border border-gray-300 rounded"
              />
            </div>
            <div>
              <label className="block text-gray-700">Debts and Taxes Payment Plan:</label>
              <textarea
                name="debts"
                value={formValues.debts}
                onChange={handleInputChange}
                className="w-full p-2 border border-gray-300 rounded"
              ></textarea>
            </div>
            <div>
              <label className="block text-gray-700">Trusts (if any):</label>
              <textarea
                name="trusts"
                value={formValues.trusts}
                onChange={handleInputChange}
                className="w-full p-2 border border-gray-300 rounded"
              ></textarea>
            </div>
            <button
              type="submit"
              className="w-full p-2 bg-blue-700 text-white rounded hover:bg-blue-800 transition duration-200"
            >
              Submit Will Planning Information
            </button>
          </form>
        </div>
      </div>
    </>
  );
};

export default WillPlanning;