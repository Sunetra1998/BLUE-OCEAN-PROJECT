import React from 'react';
import "./CustomInput.scss";
import { BiSearch } from "react-icons/bi";

const CustomInput = ({ label, type, name, placeholder, value, onChange, onClick, onSearch }) => {
  const handleSearch = () => {
    if (onSearch) {
      onSearch();
    }
  };

  const handleKeyPress = (event) => {
    if (event.key === 'Enter') {
      handleSearch();
    }
  };

  return (
    <div className="custom-input"  onClick={handleSearch} >
      {/* <BiSearch size="1.25rem"/> */}
      <label htmlFor={name}>{label}</label>
      <input id={name} type={type} name={name} placeholder={placeholder} value={value} onChange={onChange} onKeyPress={handleKeyPress} />
    </div>
  );
};

export default CustomInput;
