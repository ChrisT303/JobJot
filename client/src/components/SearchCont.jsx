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
    <div className="">
      <form className="">
        <h4>Search Form</h4>
        <div className="">
          <FormRow
            type="text"
            labelText="Search"
            name="search"
            value={search}
            handleChange={handleSearch}
          />
          <SelectRow
            labelText="Status"
            name="searchStatus"
            value={searchStatus}
            handleChange={handleSearch}
            list={['All Jobs', ...statusChoices]}
          />
          <SelectRow
            labelText="Job Type"
            name="searchType"
            value={searchType}
            handleChange={handleSearch}
            list={['All Jobs', ...jobTypeChoices]}
          />
          <SelectRow
            labelText="Filter by Entry or Name"
            name="sort"
            value={sort}
            handleChange={handleSearch}
            list={sortChoices}
          />
          <button className="btn" disabled={isLoading} onClick={handleSubmit}>Clear</button>
        </div>
      </form>
    </div>
  );
};

export default SearchCont;
