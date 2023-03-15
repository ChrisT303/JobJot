import React from "react";
import { useGlobalContext } from "../../context/context";
import { FormRow, AlertMessage, SelectRow } from "../../components";

const AddJob = () => {
  const {
    isLoading,
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
    handleChange,
    clearInputs,
    createJob,
    modifyJob,
  } = useGlobalContext();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!position || !company || !jobLocation) {
      displayAlert();
      return;
    }
    if (modifying) {
      modifyJob();
      return;
    }
    createJob();
  };

  const handleInput = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    handleChange({ name, value });
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
              labelText="Job Location"
              name="jobLocation"
              value={jobLocation}
              handleChange={handleInput}
              inputClassName="w-full text-sm md:text-base"
            />
          </div>
          <div className="col-span-1 mb-6 px-2">
            <SelectRow
              type="select"
              labelText="Job Type"
              name="jobType"
              value={jobType}
              handleChange={handleInput}
              list={jobTypeChoices}
              inputClassName="w-full text-sm md:text-base"
            />
          </div>
          <div className="col-span-1 mb-6 px-2">
            <SelectRow
              type="select"
              labelText="Status"
              name="status"
              value={status}
              handleChange={handleInput}
              list={statusChoices}
              inputClassName="w-full text-sm md:text-base"
            />
          </div>
          <div className="col-span-1 mb-6 px-2 md:col-span-2 lg:col-span-3 flex justify-center space-x-4">
            <button
              type="submit"
              className="btn py-1 px-2 md:py-2 md:px-4 rounded-md w-24"
              onClick={handleSubmit}
              disabled={isLoading}
            >
              Submit
            </button>
            <button
              className="btn py-1 px-2 md:py-2 md:px-4 rounded-md w-24"
              onClick={(e) => {
                e.preventDefault();
                clearInputs();
              }}
            >
              Clear
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default AddJob;
