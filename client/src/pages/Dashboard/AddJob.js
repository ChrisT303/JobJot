import React from "react";
import { useGlobalContext } from "../../context/context";
import { FormRow, AlertMessage } from "../../components";

const AddJob = () => {
  const {
    modifying,
    displayAlert,
    showAlert,
    position,
    company,
    jobLocation,
    jobTypeChoices,
    jobType,
    statusChoices,
    status,
  } = useGlobalContext();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!position || !company || !jobLocation) {
      displayAlert();
      return;
    }
    console.log("create job");
  };

  const handleInput = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    console.log(`${name}: ${value}`);
  };
  return (
    <div className="container mx-auto my-8 px-4 lg:px-0 w-full lg:w-2/3">
      <div className="bg-blue-200 rounded-md shadow-md p-4 lg:p-8 lg:py-6">
        <h3 className="text-2xl text-center sm:text-left mb-4">Add Job</h3>
        {showAlert && <AlertMessage />}
        <form
          className="grid grid-cols-1 gap-y-4 md:grid-cols-2 lg:grid-cols-3"
          onSubmit={handleSubmit}
        >
          <div className="col-span-1 mb-6 px-2">
            <FormRow
              type="text"
              labelText="Position"
              name="position"
              value={position}
              handleChange={handleInput}
              inputClassName="w-full text-sm md:text-base"
            />
          </div>
          <div className="col-span-1 mb-6 px-2">
            <FormRow
              type="text"
              labelText="Company"
              name="company"
              value={company}
              handleChange={handleInput}
              inputClassName="w-full text-sm md:text-base"
            />
          </div>
          <div className="col-span-1 mb-6 px-2">
            <FormRow
              type="text"
              labelText="Location"
              name="jobLocation"
              value={jobLocation}
              handleChange={handleInput}
              inputClassName="w-full text-sm md:text-base"
            />
          </div>
          <div className="col-span-1 mb-6 px-2">
            <FormRow
              type="select"
              labelText="Job Type"
              name="jobType"
              value={jobType}
              handleChange={handleInput}
              options={jobTypeChoices}
              inputClassName="w-full text-sm md:text-base"
            />
          </div>
          <div className="col-span-1 mb-6 px-2">
            <FormRow
              type="select"
              labelText="Status"
              name="status"
              value={status}
              handleChange={handleInput}
              options={statusChoices}
              inputClassName="w-full text-sm md:text-base"
            />
          </div>
          <div className="col-span-1 mb-6 px-2 md:col-span-2 lg:col-span-3">
            <button
              type="submit"
              className="bg-blue-600 text-white py-2 px-4 rounded-md "
            >
              Submit
            </button>
          </div>
        </form>
      </div>
    </div>
  );
  
};

export default AddJob;
