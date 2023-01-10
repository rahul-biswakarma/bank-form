import React, { useState, useEffect, useRef } from "react";

import ShowResult from "./ShowResult";
import AddressForm from "./AddressForm";
import BankDetailsForm from "./BankDetailForm";
import VerificationForm from "./VerificationForm";

const BusinessForm = ({
  businessFormStageNo,
  setBusinessFormStageNo,
  businessFormInformation,
  setBusinessFormInformation,
}) => {
  // State
  const [businessFormFilled, setBusinessFormFilled] = useState(false);

  // Business From References
  const businessNameRef = useRef(null);
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
  const businessFormRef = useRef(null);
  const bankDetailFormRef = useRef(null);
  const addressFormRef = useRef(null);
  const showResultRef = useRef(null);

  useEffect(() => {
    if (businessFormStageNo === 0) {
      businessFormRef.current.style.display = "block";
      bankDetailFormRef.current.style.display = "none";
      addressFormRef.current.style.display = "none";
      showResultRef.current.style.display = "none";
    }
    if (businessFormStageNo === 1) {
      businessFormRef.current.style.display = "none";
      bankDetailFormRef.current.style.display = "block";
      addressFormRef.current.style.display = "none";
      showResultRef.current.style.display = "none";
    }
    if (businessFormStageNo === 2) {
      businessFormRef.current.style.display = "none";
      bankDetailFormRef.current.style.display = "none";
      addressFormRef.current.style.display = "block";
      showResultRef.current.style.display = "none";
    }
    if (businessFormStageNo === 3) {
      businessFormRef.current.style.display = "none";
      bankDetailFormRef.current.style.display = "none";
      addressFormRef.current.style.display = "none";
      showResultRef.current.style.display = "block";
    }
  }, [businessFormStageNo]);

  // Reseting inputs value to NULL
  useEffect(() => {
    if (!businessFormFilled) {
      businessNameRef.current.value = "";
      emailRef.current.value = "";
      mobileNumberRef.current.value = "";

      ifscCodeRef.current.value = "";
      accNumberRef.current.value = "";

      countryNameRef.current.value = "";
      cityNameRef.current.value = "";
      postalCodeRef.current.value = "";
      addressFormRef.current.value = "";
    }
  }, [businessFormFilled]);

  return (
    <div className="px-[2rem]">
      <VerificationForm
        businessFormRef={businessFormRef}
        businessNameRef={businessNameRef}
        emailRef={emailRef}
        mobileNumberRef={mobileNumberRef}
        setBusinessFormStageNo={setBusinessFormStageNo}
        businessFormInformation={businessFormInformation}
        setBusinessFormInformation={setBusinessFormInformation}
      />
      <BankDetailsForm
        bankDetailFormRef={bankDetailFormRef}
        ifscCodeRef={ifscCodeRef}
        accNumberRef={accNumberRef}
        setBusinessFormStageNo={setBusinessFormStageNo}
        businessFormInformation={businessFormInformation}
        setBusinessFormInformation={setBusinessFormInformation}
      />
      <AddressForm
        setBusinessFormFilled={setBusinessFormFilled}
        addressFormRef={addressFormRef}
        businessNameRef={businessNameRef}
        emailRef={emailRef}
        mobileNumberRef={mobileNumberRef}
        ifscCodeRef={ifscCodeRef}
        accNumberRef={accNumberRef}
        countryNameRef={countryNameRef}
        cityNameRef={cityNameRef}
        postalCodeRef={postalCodeRef}
        addressRef={addressRef}
        setBusinessFormStageNo={setBusinessFormStageNo}
        businessFormInformation={businessFormInformation}
        setBusinessFormInformation={setBusinessFormInformation}
      />
      <ShowResult
        businessFormFilled={businessFormFilled}
        setBusinessFormFilled={setBusinessFormFilled}
        showResultRef={showResultRef}
        setBusinessFormStageNo={setBusinessFormStageNo}
        businessFormInformation={businessFormInformation}
        setBusinessFormInformation={setBusinessFormInformation}
      />
    </div>
  );
};

export default BusinessForm;
