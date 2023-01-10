import React, { useState, useEffect, useRef } from "react";

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
  // State
  const [formFilled, setFormFilled] = useState(false);

  // Personal From References
  const firstNameRef = useRef(null);
  const lastNameRef = useRef(null);
  const emailRef = useRef(null);
  const mobileNumberRef = useRef(null);

  // Bank Form References
  const ifscCodeRef = useRef(null);
  const accNumberRef = useRef(null);

  // Address Form References
  const countryNameRef = useRef(null);
  const cityNameRef = useRef(null);
  const postalCodeRef = useRef(null);
  const addressRef = useRef(null);

  // Form Reference
  const personalFormRef = useRef(null);
  const bankDetailFormRef = useRef(null);
  const addressFormRef = useRef(null);
  const showResultRef = useRef(null);

  useEffect(() => {
    if (personalFormStageNo === 0) {
      personalFormRef.current.style.display = "block";
      bankDetailFormRef.current.style.display = "none";
      addressFormRef.current.style.display = "none";
      showResultRef.current.style.display = "none";
    }
    if (personalFormStageNo === 1) {
      personalFormRef.current.style.display = "none";
      bankDetailFormRef.current.style.display = "block";
      addressFormRef.current.style.display = "none";
      showResultRef.current.style.display = "none";
    }
    if (personalFormStageNo === 2) {
      personalFormRef.current.style.display = "none";
      bankDetailFormRef.current.style.display = "none";
      addressFormRef.current.style.display = "block";
      showResultRef.current.style.display = "none";
    }
    if (personalFormStageNo === 3) {
      personalFormRef.current.style.display = "none";
      bankDetailFormRef.current.style.display = "none";
      addressFormRef.current.style.display = "none";
      showResultRef.current.style.display = "block";
    }
  }, [personalFormStageNo]);

  // Reseting inputs value to NULL
  useEffect(() => {
    if (!formFilled) {
      firstNameRef.current.value = "";
      lastNameRef.current.value = "";
      emailRef.current.value = "";
      mobileNumberRef.current.value = "";

      ifscCodeRef.current.value = "";
      accNumberRef.current.value = "";

      countryNameRef.current.value = "";
      cityNameRef.current.value = "";
      postalCodeRef.current.value = "";
      addressFormRef.current.value = "";
    }
  }, [formFilled]);

  return (
    <div className="px-[2rem]">
      <VerificationForm
        personalFormRef={personalFormRef}
        firstNameRef={firstNameRef}
        lastNameRef={lastNameRef}
        emailRef={emailRef}
        mobileNumberRef={mobileNumberRef}
        setPersonalFormStageNo={setPersonalFormStageNo}
        personalFormInformation={personalFormInformation}
        setPersonalFormInformation={setPersonalFormInformation}
      />
      <BankDetailsForm
        bankDetailFormRef={bankDetailFormRef}
        ifscCodeRef={ifscCodeRef}
        accNumberRef={accNumberRef}
        setPersonalFormStageNo={setPersonalFormStageNo}
        personalFormInformation={personalFormInformation}
        setPersonalFormInformation={setPersonalFormInformation}
      />
      <AddressForm
        setFormFilled={setFormFilled}
        addressFormRef={addressFormRef}
        firstNameRef={firstNameRef}
        lastNameRef={lastNameRef}
        emailRef={emailRef}
        mobileNumberRef={mobileNumberRef}
        ifscCodeRef={ifscCodeRef}
        accNumberRef={accNumberRef}
        countryNameRef={countryNameRef}
        cityNameRef={cityNameRef}
        postalCodeRef={postalCodeRef}
        addressRef={addressRef}
        setPersonalFormStageNo={setPersonalFormStageNo}
        personalFormInformation={personalFormInformation}
        setPersonalFormInformation={setPersonalFormInformation}
      />
      <ShowResult
        formFilled={formFilled}
        setFormFilled={setFormFilled}
        showResultRef={showResultRef}
        setPersonalFormStageNo={setPersonalFormStageNo}
        personalFormInformation={personalFormInformation}
        setPersonalFormInformation={setPersonalFormInformation}
      />
    </div>
  );
};

export default PersonalForm;
