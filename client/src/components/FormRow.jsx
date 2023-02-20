import React from "react";

const FormRow = ({ type, name, value, handleChange, labelText, id }) => {
  return (
    <div className="mb-4">
      <label htmlFor={id} className="block font-medium mb-2">
        {labelText || name}
      </label>
      <input
        type={type}
        value={value}
        name={name}
        id={id} 
        onChange={handleChange}
        className="w-full border-gray-400 rounded-md py-2 px-3 focus:outline-none focus:ring-2 focus:ring-[#c7ddcc] focus:border-transparent shadow-lg"
        // required
      />
    </div>
  );
};


export default FormRow;
