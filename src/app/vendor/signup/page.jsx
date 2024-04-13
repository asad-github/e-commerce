"use client";
import ProgressBar from "../../../components/Vendor_Signup_ProgressBar";
import Vendor_Signup_TaxForm from "@/components/Vendor_Signup_TaxForm";
import Vendor_Signup_CompanyDetails from "@/components/Vendor_Signup_CompanyDetails";
import Vendor_Signup_BankingDetails from "@/components/Vendor_Signup_BankingDetails";

import { Fragment, useEffect, useState } from "react";

export default function Page(props) {
  const [form_steps, set_form_steps] = useState([
    {
      id: "Step 1",
      name: `Tax Details`,
      href: "#",
      status: "current",
    },
    {
      id: "Step 2",
      name: `Store Details`,
      href: "#",
      status: "upcoming",
    },
    {
      id: "Step 3",
      name: `Banking Details`,
      href: "#",
      status: "upcoming",
    },
  ]);
  const [form, setForm] = useState({
    name: "",
    description: "",
    web_url: "",
    email: "",
    phone: "",
    country: "",
  });
  const [step, setStep] = useState(1);

  // Go to next step
  const nextStep = () => {
    setStep(step + 1);
  };

  // Go to previous step
  const prevStep = () => {
    setStep(step - 1);
  };

  // Go to first step
  const firstStep = () => {
    setStep(1);
  };

  // Handle field change
  const handleChange = (input) => (e) => {
    setFormData({ ...formData, [input]: e.target.value });
  };
  switch (step) {
    default:
      return <h1>User Forms not working. Enable Javascript!</h1>;
    case 1:
      return (
        <FormUserDetails
          nextStep={nextStep}
          handleChange={handleChange}
          values={formData}
        />
      );
    case 2:
      return (
        <FormPersonalDetails
          nextStep={nextStep}
          prevStep={prevStep}
          handleChange={handleChange}
          values={formData}
        />
      );
    case 3:
      return (
        <Confirm nextStep={nextStep} prevStep={prevStep} values={formData} />
      );
    case 4:
      return <Success firstStep={firstStep} />;
  }

  return (
    <div className="flex-1 xl:overflow-y-auto">
      <div className="max-w-3xl mx-auto shadow-2xl my-4 py-10 px-4 sm:px-6 lg:py-12 lg:px-8">
        <ProgressBar steps={form_steps} />

        {/* {form_steps.map((itm) => {
          if (itm.status === "current") {
            if (itm.id === "Step 1") {
              return <Vendor_Signup_TaxForm key={itm.id} />;
            } else if (itm.id === "Step 2") {
              return <Vendor_Signup_CompanyDetails key={itm.id} />;
            } else if (itm.id === "Step 3") {
              return <Vendor_Signup_BankingDetails key={itm.id} />;
            }
          }
          return null;
        })} */}

        {/* <h1 className="text-3xl font-extrabold text-blue-gray-900">
          Seller Profile
        </h1>

        <form className="mt-6 space-y-8 divide-y divide-y-blue-gray-200">
          <div className="grid grid-cols-1 gap-y-6 sm:grid-cols-6 sm:gap-x-6">
            <div className="sm:col-span-5">
              <label
                htmlFor="company-name"
                className="block text-sm font-medium text-blue-gray-900"
              >
                Company name
              </label>
              <input
                type="text"
                name="company-name"
                id="company-name"
                autoComplete="company-name"
                className="mt-1 block w-full border-blue-gray-300 rounded-md shadow-sm text-blue-gray-900 sm:text-sm focus:ring-indigo-500 focus:border-indigo-500"
              />
            </div>

            <div className="sm:col-span-6">
              <label
                htmlFor="photo"
                className="block text-sm font-medium text-blue-gray-900"
              >
                Logo
              </label>
              <div className="mt-1 flex items-center">
                <img
                  className="inline-block h-12 w-12 rounded-full"
                  src="https://images.unsplash.com/photo-1550525811-e5869dd03032?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2.5&w=256&h=256&q=80"
                  alt=""
                />
                <div className="ml-4 flex">
                  <div className="relative bg-white py-2 px-3 border border-blue-gray-300 rounded-md shadow-sm flex items-center cursor-pointer hover:bg-blue-gray-50 focus-within:outline-none focus-within:ring-2 focus-within:ring-offset-2 focus-within:ring-offset-blue-gray-50 focus-within:ring-indigo-500">
                    <label
                      htmlFor="user-photo"
                      className="relative text-sm font-medium text-blue-gray-900 pointer-events-none"
                    >
                      <span>Change</span>
                      <span className="sr-only"> user photo</span>
                    </label>
                    <input
                      id="user-photo"
                      name="user-photo"
                      type="file"
                      className="absolute inset-0 w-full h-full opacity-0 cursor-pointer border-gray-300 rounded-md"
                    />
                  </div>
                  <button
                    type="button"
                    className="ml-3 bg-transparent py-2 px-3 border border-transparent rounded-md text-sm font-medium text-blue-gray-900 hover:text-blue-gray-700 focus:outline-none focus:border-blue-gray-300 focus:ring-2 focus:ring-offset-2 focus:ring-offset-blue-gray-50 focus:ring-indigo-500"
                  >
                    Remove
                  </button>
                </div>
              </div>
            </div>

            <div className="sm:col-span-6">
              <label
                htmlFor="description"
                className="block text-sm font-medium text-blue-gray-900"
              >
                Description
              </label>
              <div className="mt-1">
                <textarea
                  id="description"
                  name="description"
                  rows={4}
                  className="block w-full border border-blue-gray-300 rounded-md shadow-sm sm:text-sm focus:ring-indigo-500 focus:border-indigo-500"
                  defaultValue={""}
                />
              </div>
              <p className="mt-3 text-sm text-blue-gray-500">
                Brief description for your profile. URLs are hyperlinked.
              </p>
            </div>

            <div className="sm:col-span-6">
              <label
                htmlFor="url"
                className="block text-sm font-medium text-blue-gray-900"
              >
                Website URL (if any)
              </label>
              <input
                type="text"
                name="url"
                id="url"
                className="mt-1 block w-full border-blue-gray-300 rounded-md shadow-sm text-blue-gray-900 sm:text-sm focus:ring-indigo-500 focus:border-indigo-500"
              />
            </div>
          </div>

          <div className="pt-8 grid grid-cols-1 gap-y-6 sm:grid-cols-6 sm:gap-x-6">
            <div className="sm:col-span-6">
              <h2 className="text-xl font-medium text-blue-gray-900">
                Contact Information
              </h2>
              <p className="mt-1 text-sm text-blue-gray-500">
                This information will be displayed publicly so be careful what
                you share.
              </p>
            </div>

            <div className="sm:col-span-3">
              <label
                htmlFor="email-address"
                className="block text-sm font-medium text-blue-gray-900"
              >
                Email address
              </label>
              <input
                type="text"
                name="email-address"
                id="email-address"
                autoComplete="email"
                className="mt-1 block w-full border-blue-gray-300 rounded-md shadow-sm text-blue-gray-900 sm:text-sm focus:ring-indigo-500 focus:border-indigo-500"
              />
            </div>

            <div className="sm:col-span-3">
              <label
                htmlFor="phone-number"
                className="block text-sm font-medium text-blue-gray-900"
              >
                Phone number
              </label>
              <input
                type="text"
                name="phone-number"
                id="phone-number"
                autoComplete="tel"
                className="mt-1 block w-full border-blue-gray-300 rounded-md shadow-sm text-blue-gray-900 sm:text-sm focus:ring-indigo-500 focus:border-indigo-500"
              />
            </div>

            <div className="sm:col-span-3">
              <label
                htmlFor="country"
                className="block text-sm font-medium text-blue-gray-900"
              >
                Country
              </label>
              <select
                id="country"
                name="country"
                autoComplete="country-name"
                className="mt-1 block w-full border-blue-gray-300 rounded-md shadow-sm text-blue-gray-900 sm:text-sm focus:ring-indigo-500 focus:border-indigo-500"
              >
                <option />
                <option>United States</option>
                <option>Canada</option>
                <option>Mexico</option>
              </select>
            </div>

            <div className="sm:col-span-3">
              <label
                htmlFor="language"
                className="block text-sm font-medium text-blue-gray-900"
              >
                Language
              </label>
              <input
                type="text"
                name="language"
                id="language"
                className="mt-1 block w-full border-blue-gray-300 rounded-md shadow-sm text-blue-gray-900 sm:text-sm focus:ring-indigo-500 focus:border-indigo-500"
              />
            </div>
          </div>

          <div className="pt-8 flex justify-end">
            <button
              type="button"
              className="bg-white py-2 px-4 border border-gray-300 rounded-md shadow-sm text-sm font-medium text-blue-gray-900 hover:bg-blue-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
            >
              Cancel
            </button>
            <button
              type="submit"
              className="ml-3 inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
            >
              Save
            </button>
          </div>
        </form> */}
      </div>
    </div>
  );
}
