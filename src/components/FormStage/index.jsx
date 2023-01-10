import React from "react";

const FormStage = ({
  formType,
  personalFormStageNo,
  businessFormStageNo,
  setPersonalFormStageNo,
  setBusinessFormStageNo,
}) => {
  var currentStage = formType === 0 ? personalFormStageNo : businessFormStageNo;

  function updateStage(stageNo) {
    if (formType === 0) {
      setPersonalFormStageNo(stageNo);
    } else {
      setBusinessFormStageNo(stageNo);
    }
  }
  return (
    <div className="relative flex flex-col items-center w-[100%] h-[100px]">
      <div className={`flex w-full max-w-[350px] items-center gap-[5px]`}>
        {/* First Stage */}
        <span
          onClick={() => {
            updateStage(0);
          }}
          className={`${
            currentStage >= 0
              ? "bg-primary text-white"
              : "bg-gray-400 text-gray-300"
          } text-white rounded-full min-w-[30px] min-h-[30px] flex items-center justify-center`}
        >
          1
          <span
            className={`${
              currentStage >= 0 ? " text-primary" : " text-gray-500"
            } absolute mt-[4rem]`}
          >
            Personal
          </span>
        </span>

        {/* First Line */}
        <span
          className={`${
            currentStage >= 1 ? "bg-primary" : "bg-gray-300"
          } h-[2px] w-full`}
        ></span>

        {/* 2nd Stage */}
        <span
          onClick={() => {
            updateStage(1);
          }}
          className={`${
            currentStage >= 1
              ? "bg-primary text-white"
              : "bg-gray-400 text-gray-300"
          } text-white rounded-full min-w-[30px] min-h-[30px] flex items-center justify-center`}
        >
          2
          <span
            className={`${
              currentStage >= 1 ? " text-primary" : " text-gray-500"
            } absolute mt-[4rem]`}
          >
            Bank Details
          </span>
        </span>

        {/* Second Line */}
        <span
          className={`${
            currentStage >= 2 ? "bg-primary" : "bg-gray-300"
          } h-[2px] w-full`}
        ></span>

        {/* Third Stage */}
        <span
          onClick={() => {
            updateStage(2);
          }}
          className={`${
            currentStage >= 2
              ? "bg-primary text-white"
              : "bg-gray-400 text-gray-300"
          } text-white rounded-full min-w-[30px] min-h-[30px] flex items-center justify-center`}
        >
          3
          <span
            className={`${
              currentStage >= 2 ? " text-primary" : " text-gray-500"
            } absolute mt-[4rem]`}
          >
            Address
          </span>
        </span>
      </div>
    </div>
  );
};

export default FormStage;
