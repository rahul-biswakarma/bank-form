import React from "react";

const FormTypeSelector = ({ formType, setFormType }) => {
  return (
    <div className="w-[100%] flex justify-center mb-[4rem]">
      <div className="w-full flex">
        <span className="w-full py-[10px] border-b-[3px] border-primary text-center">
          Personal
        </span>
        <span className="w-full py-[10px] border-b-[3px] border-transparent text-center">
          Business
        </span>
      </div>
    </div>
  );
};

export default FormTypeSelector;
