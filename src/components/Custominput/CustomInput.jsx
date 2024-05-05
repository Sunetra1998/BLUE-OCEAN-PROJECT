import "./CustomInput.scss";
import { BiSearch } from "react-icons/bi";



const CustomInput = ({ label, type, name, placeholder}) => {
  return (
    <div className="custom-input">
      <BiSearch size="1.25"/>
      <label htmlFor={name}></label>
      <input id={name} type={type} name={name} placeholder={placeholder} />
    </div>
  );
};

export default CustomInput;
