import React from "react";
import FormRow from "./FormRow";
import SelectRow from "./SelectRow";
import { useGlobalContext } from "../context/context";

const SearchCont = () => {
  const {
    isLoading,
    search,
    searchStatus,
    searchType,
    sort,
    sortChoices,
    statusChoices,
    jobTypeChoices,
    handleChange,
    clearFilter,
  } = useGlobalContext();

  const handleSearch = (e) => {
    if (isLoading) return;
    handleChange({ name: e.target.name, value: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    clearFilter();
  }

  return (
    <div className="container mx-auto my-8 px-4 lg:px-0 w-full lg:w-2/3">
      <div className="bg-[#C7DDCC] rounded-md shadow-md p-4 lg:p-8 lg:py-6">
        <h3 className="text-2xl text-center sm:text-left mb-4">Search Form</h3>
        <form className="grid grid-cols-1 gap-y-4 md:grid-cols-2 lg:grid-cols-3">
          <div className="col-span-1 mb-6 px-2">
            <FormRow
              type="text"
              labelText="Search"
              name="search"
              value={search}
              handleChange={handleSearch}
              inputClassName="w-full text-sm"
            />
          </div>
          <div className="col-span-1 mb-6 px-2">
            <SelectRow
              labelText="Status"
              name="searchStatus"
              value={searchStatus}
              handleChange={handleSearch}
              list={['All Jobs', ...statusChoices]}
              selectClassName="w-full text-sm"
            />
          </div>
          <div className="col-span-1 mb-6 px-2">
            <SelectRow
              labelText="Job Type"
              name="searchType"
              value={searchType}
              handleChange={handleSearch}
              list={['All Jobs', ...jobTypeChoices]}
              selectClassName="w-full text-sm"
            />
          </div>
          <div className="ol-span-1 mb-6 px-2">
            <SelectRow
              labelText="Filter by Entry or Name"
              name="sort"
              value={sort}
              handleChange={handleSearch}
              list={sortChoices}
              selectClassName="w-full text-sm"
            />
          </div>
          <div className="col-span-1 mb-6 px-2 lg:col-span-3">
            <button className="btn px-4 py-2 rounded-md" disabled={isLoading} onClick={handleSubmit}>Clear</button>
          </div>
        </form>
      </div>
    </div>
  );
  
  
  
  
  
  
};

export default SearchCont;
