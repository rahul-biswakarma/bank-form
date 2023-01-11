import React, { useState, useEffect, useRef } from "react";

import currenciesJSON from "../../data/currencies.json";

const BankDetailsForm = ({
  bankDetailFormRef,
  ifscCodeRef,
  accNumberRef,
  personalFormInformation,
  setPersonalFormInformation,
  setPersonalFormStageNo,
}) => {
  // States
  const [currencyCollection, setCurrencyCollection] = useState([]);
  const [currentCurreny, setCurrentCurreny] = useState({});

  // OnLoad
  useEffect(() => {
    setCurrencyCollection(currenciesJSON.currencies);
    setCurrentCurreny(currenciesJSON.currencies[0]);

    if (personalFormInformation.ifscCode)
      ifscCodeRef.current.value = personalFormInformation.ifscCode;
    if (personalFormInformation.accountNumber)
      accNumberRef.current.value = personalFormInformation.accountNumber;
  }, []);

  // Submit Handler
  function handleBankForm(e) {
    e.preventDefault();
    if (
      ifscCodeRef.current.value.trim() === "" ||
      accNumberRef.current.value.trim() === ""
    ) {
      alert("Please fill all the fields");
    } else if (!/^\d+$/.test(accNumberRef.current.value)) {
      alert("Account Number can't contain letters");
      accNumberRef.current.style.borderColor = "red";
    } else {
      setPersonalFormInformation({
        ...personalFormInformation,
        ifscCode: ifscCodeRef.current.value,
        accountNumber: accNumberRef.current.value,
        currency: currentCurreny,
      });
      setPersonalFormStageNo(2);
    }
  }

  return (
    <div ref={bankDetailFormRef}>
      <form action="#" className="flex flex-col gap-[2rem] w-full">
        <select
          name="country"
          id="country"
          className="form-inputs"
          onChange={(e) => {
            setCurrentCurreny(currencyCollection[e.target.value]);
          }}
          required
        >
          {currencyCollection.map((currency, index) => {
            return (
              <option name="country" key={currency.initials} value={index}>
                {currency.country}
              </option>
            );
          })}
        </select>
        <div className="flex flex-col">
          <span className="text-gray-400">Currency</span>
          <span>
            {currentCurreny.country} ({currentCurreny.currencyInitials})
          </span>
        </div>
        <input
          className="form-inputs"
          type="text"
          name="ifsc-code"
          id="ifsc-code"
          placeholder="IFSC Code"
          required
          ref={ifscCodeRef}
        />
        <input
          className="form-inputs"
          type="text"
          name="account-number"
          id="account-number"
          placeholder="Account Number"
          required
          ref={accNumberRef}
        />
        <div className="flex gap-[1rem] mt-[1rem]">
          <div
            onClick={() => {
              setPersonalFormStageNo(0);
            }}
            className="border-primary border-[1px] w-max p-[5px_1rem] text-primary hover:bg-primary hover:text-white rounded-sm"
          >
            Previous
          </div>
          <button
            onClick={handleBankForm}
            className="bg-primary w-max p-[5px_1rem] text-white rounded-sm"
          >
            Next
          </button>
        </div>
      </form>
    </div>
  );
};

export default BankDetailsForm;
