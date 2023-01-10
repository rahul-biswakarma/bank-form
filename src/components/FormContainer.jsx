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
          susinessFormStageNo={businessFormStageNo}
          setBusinessFormStageNo={setBusinessFormStageNo}
        />
      )}
    </div>
  );
};

export default FormContainer;
