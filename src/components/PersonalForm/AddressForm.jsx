import React, { useEffect, useRef } from "react";

const AddressForm = ({
  setFormFilled,
  addressFormRef,
  firstNameRef,
  lastNameRef,
  emailRef,
  mobileNumberRef,
  ifscCodeRef,
  accNumberRef,
  countryNameRef,
  cityNameRef,
  postalCodeRef,
  addressRef,
  personalFormInformation,
  setPersonalFormInformation,
  setPersonalFormStageNo,
}) => {
  useEffect(() => {
    if (personalFormInformation.countryName)
      countryNameRef.current.value = personalFormInformation.countryName;
    if (personalFormInformation.cityName)
      cityNameRef.current.value = personalFormInformation.cityName;
    if (personalFormInformation.postalCode)
      postalCodeRef.current.value = personalFormInformation.postalCode;
    if (personalFormInformation.address)
      addressRef.current.value = personalFormInformation.address;
  }, []);

  function handleAddressForm(e) {
    e.preventDefault();

    if (
      countryNameRef.current.value.trim() === "" ||
      cityNameRef.current.value.trim() === "" ||
      postalCodeRef.current.value.trim() === "" ||
      addressRef.current.value.trim() === ""
    ) {
      alert("Please fill all the fields");
      return;
    } else if (/\d/.test(countryNameRef.current.value)) {
      alert("Country name can't contain numbers");
      countryNameRef.current.style.borderColor = "red";
      return;
    } else if (/\d/.test(cityNameRef.current.value)) {
      alert("City name can't contain numbers");
      cityNameRef.current.style.borderColor = "red";
      return;
    } else if (!/^\d+$/.test(postalCodeRef.current.value)) {
      alert("Postal code can't contain letters");
      postalCodeRef.current.style.borderColor = "red";
      return;
    } else {
      setPersonalFormInformation({
        ...personalFormInformation,
        countryName: countryNameRef.current.value,
        cityName: cityNameRef.current.value,
        postalCode: postalCodeRef.current.value,
        address: addressRef.current.value,
      });
    }
    // Verifing personal form
    if (
      firstNameRef.current === null ||
      lastNameRef.current === null ||
      emailRef.current === null ||
      mobileNumberRef.current === null ||
      firstNameRef.current.value.trim() === "" ||
      lastNameRef.current.value.trim() === "" ||
      emailRef.current.value.trim() === "" ||
      mobileNumberRef.current.value.trim() === ""
    ) {
      alert("Please fill all the fields in Personal form");
      setPersonalFormStageNo(0);
      return;
    } else if (
      mobileNumberRef.current.value.length !== 10 ||
      !/^\d+$/.test(mobileNumberRef.current.value)
    ) {
      alert("Please enter a valid mobile number");
      setPersonalFormStageNo(0);
      return;
    }

    // Verifing bank form
    if (
      ifscCodeRef === null ||
      accNumberRef === null ||
      ifscCodeRef.current.value.trim() === "" ||
      accNumberRef.current.value.trim() === ""
    ) {
      alert("Please fill all the fields in Bank form");
      setPersonalFormStageNo(1);
      return;
    }

    setFormFilled(true);
    setPersonalFormStageNo(3);
  }

  return (
    <div ref={addressFormRef}>
      <form className="flex flex-col gap-[2rem] w-full">
        <input
          className="form-inputs"
          type="text"
          name="country-name"
          id="country-name"
          placeholder="Country"
          required
          ref={countryNameRef}
        />
        <input
          className="form-inputs"
          type="text"
          ref={cityNameRef}
          name="city-name"
          id="city-name"
          placeholder="City"
          required
        />
        <input
          className="form-inputs"
          type="text"
          name="postal-code"
          id="postal-code"
          placeholder="Postal Code"
          required
          ref={postalCodeRef}
        />
        <input
          className="form-inputs"
          type="text"
          name="address"
          id="address"
          placeholder="Address"
          required
          ref={addressRef}
        />
        <div className="flex gap-[1rem] mt-[1rem]">
          <div
            onClick={() => {
              setPersonalFormStageNo(1);
            }}
            className="border-primary border-[1px] w-max p-[5px_1rem] text-primary rounded-sm cursor-pointer hover:bg-primary hover:text-white"
          >
            Previous
          </div>
          <button
            onClick={handleAddressForm}
            className="bg-primary w-max p-[5px_1rem] text-white rounded-sm"
          >
            Submit
          </button>
        </div>
      </form>
    </div>
  );
};

export default AddressForm;
