import React, { useEffect, useRef } from "react";

const AddressForm = ({
  personalFormInformation,
  setPersonalFormInformation,
  setPersonalFormStageNo,
}) => {
  const countryName = useRef(null);
  const cityName = useRef(null);
  const postalCode = useRef(null);
  const address = useRef(null);

  useEffect(() => {
    if (personalFormInformation.countryName)
      countryName.current.value = personalFormInformation.countryName;
    if (personalFormInformation.cityName)
      cityName.current.value = personalFormInformation.cityName;
    if (personalFormInformation.postalCode)
      postalCode.current.value = personalFormInformation.postalCode;
    if (personalFormInformation.address)
      address.current.value = personalFormInformation.address;
  }, []);

  function handleAddressForm(e) {
    e.preventDefault();
    alert("Form Submitted Successfully");
    if (
      countryName.current.value.trim() === "" ||
      cityName.current.value.trim() === "" ||
      postalCode.current.value.trim() === "" ||
      address.current.value.trim() === ""
    ) {
      alert("Please fill all the fields");
    } else {
      setPersonalFormInformation({
        ...personalFormInformation,
        countryName: countryName.current.value,
        cityName: cityName.current.value,
        postalCode: postalCode.current.value,
        address: address.current.value,
      });
      setPersonalFormStageNo(3);
    }
  }

  return (
    <div>
      <form className="flex flex-col gap-[2rem] w-full">
        <input
          className="form-inputs"
          type="text"
          name="country-name"
          id="country-name"
          placeholder="Country"
          required
          ref={countryName}
        />
        <input
          className="form-inputs"
          type="text"
          ref={cityName}
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
          ref={postalCode}
        />
        <input
          className="form-inputs"
          type="text"
          name="address"
          id="address"
          placeholder="Address"
          required
          ref={address}
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
