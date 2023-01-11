import React from "react";

const FormTypeSelector = ({
  formType,
  setFormType,
  setPersonalFormStageNo,
  setBusinessFormStageNo,
}) => {
  function updateFormType(type) {
    setFormType(type);
    // if (type === 0) setPersonalFormStageNo(0);
    // else setBusinessFormStageNo(0);
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
