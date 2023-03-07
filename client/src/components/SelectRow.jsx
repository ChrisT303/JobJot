import React from 'react'

const SelectRow = ({ labelText, name, value, handleChange, list }) => {
  return (
    <div className="mb-4">
    <label htmlFor={name} className="block font-medium mb-2">
      {labelText || name}
    </label>
    <select
      name={name}
      value={value}
      onChange={handleChange}
      className="w-full border-gray-400 rounded-md py-2 px-3 focus:outline-none focus:ring-2 focus:ring-[#c7ddcc] focus:border-transparent shadow-lg"
    >
      {list.map((itemValue, index) => {
        return (
          <option key={index} value={itemValue}>
            {itemValue}
          </option>
        )
      })}
    </select>
  </div>
  )
}

export default SelectRow