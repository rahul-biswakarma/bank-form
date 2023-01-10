import React, { useEffect, useRef } from "react";

const VerificationForm = ({
  personalFormInformation,
  setPersonalFormInformation,
  setPersonalFormStageNo,
}) => {
  // Reference
  const firstName = useRef(null);
  const lastName = useRef(null);
  const email = useRef(null);
  const mobileNumber = useRef(null);

  // OnLoad
  useEffect(() => {
    if (personalFormInformation.firstName)
      firstName.current.value = personalFormInformation.firstName;
    if (personalFormInformation.lastName)
      lastName.current.value = personalFormInformation.lastName;
    if (personalFormInformation.email)
      email.current.value = personalFormInformation.email;
    if (personalFormInformation.mobileNumber)
      mobileNumber.current.value = personalFormInformation.mobileNumber;
  }, []);

  // Submit Handler
  function handleVerificationForm(e) {
    e.preventDefault();

    if (
      firstName.current.value.trim() === "" ||
      lastName.current.value.trim() === "" ||
      email.current.value.trim() === "" ||
      mobileNumber.current.value.trim() === ""
    ) {
      alert("Please fill all the fields");
    } else if (mobileNumber.current.value.length !== 10) {
      alert("Please enter a valid mobile number");
    } else {
      setPersonalFormInformation({
        ...personalFormInformation,
        firstName: firstName.current.value,
        lastName: lastName.current.value,
        email: email.current.value,
        mobileNumber: mobileNumber.current.value,
      });
      setPersonalFormStageNo(1);
    }
  }
  return (
    <div>
      <form action="#" className="flex flex-col gap-[2rem] w-full">
        <input
          className="form-inputs"
          type="text"
          name="first-name"
          id="first-name"
          placeholder="First Name"
          required
          ref={firstName}
        />
        <input
          className="form-inputs"
          type="text"
          name="last-name"
          id="last-name"
          placeholder="Last Name"
          required
          ref={lastName}
        />
        <input
          className="form-inputs"
          type="email"
          name="email"
          id="email"
          placeholder="Email"
          required
          ref={email}
        />
        <input
          className="form-inputs"
          type="tel"
          name="mobile-number"
          id="mobile-number"
          placeholder="Mobile Number"
          required
          ref={mobileNumber}
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
