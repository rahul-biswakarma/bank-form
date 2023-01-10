import React from "react";

import ShowResult from "./ShowResult";
import AddressForm from "./AddressForm";
import BankDetailsForm from "./BankDetailForm";
import VerificationForm from "./VerificationForm";

const PersonalForm = ({
  personalFormStageNo,
  setPersonalFormStageNo,
  personalFormInformation,
  setPersonalFormInformation,
}) => {
  return (
    <div className="px-[2rem]">
      {personalFormStageNo === 0 ? (
        <VerificationForm
          setPersonalFormStageNo={setPersonalFormStageNo}
          personalFormInformation={personalFormInformation}
          setPersonalFormInformation={setPersonalFormInformation}
        />
      ) : (
        <></>
      )}
      {personalFormStageNo === 1 ? (
        <BankDetailsForm
          setPersonalFormStageNo={setPersonalFormStageNo}
          personalFormInformation={personalFormInformation}
          setPersonalFormInformation={setPersonalFormInformation}
        />
      ) : (
        <> </>
      )}
      {personalFormStageNo === 2 ? (
        <AddressForm
          setPersonalFormStageNo={setPersonalFormStageNo}
          personalFormInformation={personalFormInformation}
          setPersonalFormInformation={setPersonalFormInformation}
        />
      ) : (
        <></>
      )}
      {personalFormStageNo === 3 ? (
        <ShowResult
          setPersonalFormStageNo={setPersonalFormStageNo}
          personalFormInformation={personalFormInformation}
          setPersonalFormInformation={setPersonalFormInformation}
        />
      ) : (
        <></>
      )}
    </div>
  );
};

export default PersonalForm;
