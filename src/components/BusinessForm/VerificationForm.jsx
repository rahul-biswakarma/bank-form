import React, { useEffect } from "react";

const VerificationForm = ({
  businessFormRef,
  businessNameRef,
  emailRef,
  mobileNumberRef,
  businessFormInformation,
  setBusinessFormInformation,
  setBusinessFormStageNo,
}) => {
  // OnLoadRef
  useEffect(() => {
    if (businessFormInformation.firstName)
      businessNameRef.current.value = businessFormInformation.businessName;
    if (businessFormInformation.email)
      emailRef.current.value = businessFormInformation.email;
    if (businessFormInformation.mobileNumber)
      mobileNumberRef.current.value = businessFormInformation.mobileNumber;
  }, []);

  // Submit Handler
  function handleVerificationForm(e) {
    e.preventDefault();

    if (
      businessNameRef.current.value.trim() === "" ||
      emailRef.current.value.trim() === "" ||
      mobileNumberRef.current.value.trim() === ""
    ) {
      alert("Please fill all the fields");
    } else if (
      mobileNumberRef.current.value.length !== 10 ||
      !/^\d+$/.test(mobileNumberRef.current.value)
    ) {
      alert("Please enter a valid mobile number");
    } else {
      setBusinessFormInformation({
        ...businessFormInformation,
        businessName: businessNameRef.current.value,
        email: emailRef.current.value,
        mobileNumber: mobileNumberRef.current.value,
      });
      setBusinessFormStageNo(1);
    }
  }
  return (
    <div ref={businessFormRef}>
      <form action="#" className="flex flex-col gap-[2rem] w-full">
        <input
          className="form-inputs"
          type="text"
          name="business-name"
          id="business-name"
          placeholder="Business Name"
          required
          ref={businessNameRef}
        />
        <input
          className="form-inputs"
          type="email"
          name="email"
          id="email"
          placeholder="Email"
          required
          ref={emailRef}
        />
        <input
          className="form-inputs"
          type="tel"
          name="mobile-number"
          id="mobile-number"
          placeholder="Phone Number"
          required
          ref={mobileNumberRef}
        />
        <button
          onClick={handleVerificationForm}
          className="mt-[1rem] bg-primary w-max p-[5px_1rem] text-white rounded-sm"
        >
          Next
        </button>
      </form>
    </div>
  );
};

export default VerificationForm;
