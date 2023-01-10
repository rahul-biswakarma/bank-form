import React from "react";

const FormTypeSelector = ({ formType, setFormType }) => {
  function updateFormType(type) {
    setFormType(type);
  }
  return (
    <div className="w-[100%] flex justify-center mb-[4rem]">
      <div className="w-full flex">
        <span
          onClick={() => updateFormType(0)}
          className={`${
            formType === 0 ? "border-primary" : "border-transparent"
          } w-full py-[10px] border-b-[3px] text-center cursor-pointer hover:bg-blue-100`}
        >
          Personal
        </span>
        <span
          onClick={() => updateFormType(1)}
          className={`${
            formType === 1 ? "border-primary" : "border-transparent"
          } w-full py-[10px] border-b-[3px]  text-center cursor-pointer hover:bg-blue-100`}
        >
          Business
        </span>
      </div>
    </div>
  );
};

export default FormTypeSelector;
