import React from "react";

import PersonalForm from "./PersonalForm";
import BusinessForm from "./BusinessForm";

const FormContainer = ({
  formType,
  personalFormStageNo,
  setPersonalFormStageNo,
  businessFormStageNo,
  setBusinessFormStageNo,
  personalFormInformation,
  setPersonalFormInformation,
  businessFormInformation,
  setBusinessFormInformation,
}) => {
  return (
    <div className="overflow-x-hidden overflow-y-auto">
      {formType === 0 ? (
        <PersonalForm
          personalFormStageNo={personalFormStageNo}
          setPersonalFormStageNo={setPersonalFormStageNo}
          personalFormInformation={personalFormInformation}
          setPersonalFormInformation={setPersonalFormInformation}
        />
      ) : (
        <BusinessForm
          businessFormStageNo={businessFormStageNo}
          setBusinessFormStageNo={setBusinessFormStageNo}
          businessFormInformation={businessFormInformation}
          setBusinessFormInformation={setBusinessFormInformation}
        />
      )}
    </div>
  );
};

export default FormContainer;
