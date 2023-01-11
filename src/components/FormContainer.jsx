import React, { useEffect } from "react";

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
  useEffect(() => {
    if (formType === 0) {
      document.getElementById("personal-form-container").style.display =
        "block";
      document.getElementById("business-form-container").style.display = "none";
    } else {
      document.getElementById("personal-form-container").style.display = "none";
      document.getElementById("business-form-container").style.display =
        "block";
    }
  });

  return (
    <div className="overflow-x-hidden overflow-y-auto">
      <PersonalForm
        personalFormStageNo={personalFormStageNo}
        setPersonalFormStageNo={setPersonalFormStageNo}
        personalFormInformation={personalFormInformation}
        setPersonalFormInformation={setPersonalFormInformation}
      />
      <BusinessForm
        businessFormStageNo={businessFormStageNo}
        setBusinessFormStageNo={setBusinessFormStageNo}
        businessFormInformation={businessFormInformation}
        setBusinessFormInformation={setBusinessFormInformation}
      />
    </div>
  );
};

export default FormContainer;
