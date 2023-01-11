import React, { useEffect } from "react";

const VerificationForm = ({
  personalFormRef,
  firstNameRef,
  lastNameRef,
  emailRef,
  mobileNumberRef,
  personalFormInformation,
  setPersonalFormInformation,
  setPersonalFormStageNo,
}) => {
  // OnLoadRef
  useEffect(() => {
    if (personalFormInformation.firstName)
      firstNameRef.current.value = personalFormInformation.firstName;
    if (personalFormInformation.lastName)
      lastNameRef.current.value = personalFormInformation.lastName;
    if (personalFormInformation.email)
      emailRef.current.value = personalFormInformation.email;
    if (personalFormInformation.mobileNumber)
      mobileNumberRef.current.value = personalFormInformation.mobileNumber;
  }, []);

  // Submit Handler
  function handleVerificationForm(e) {
    e.preventDefault();

    if (
      firstNameRef.current.value.trim() === "" ||
      lastNameRef.current.value.trim() === "" ||
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
      setPersonalFormInformation({
        ...personalFormInformation,
        firstName: firstNameRef.current.value,
        lastName: lastNameRef.current.value,
        email: emailRef.current.value,
        mobileNumber: mobileNumberRef.current.value,
      });
      setPersonalFormStageNo(1);
    }
  }
  return (
    <div ref={personalFormRef}>
      <form action="#" className="flex flex-col gap-[2rem] w-full">
        <input
          className="form-inputs"
          type="text"
          name="first-name"
          id="first-name"
          placeholder="First Name"
          required
          ref={firstNameRef}
        />
        <input
          className="form-inputs"
          type="text"
          name="last-name"
          id="last-name"
          placeholder="Last Name"
          required
          ref={lastNameRef}
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
          placeholder="Mobile Number"
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
