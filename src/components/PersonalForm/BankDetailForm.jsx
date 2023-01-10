import React, { useState, useEffect, useRef } from "react";

import currenciesJSON from "../../data/currencies.json";

const BankDetailsForm = ({
  personalFormInformation,
  setPersonalFormInformation,
  setPersonalFormStageNo,
}) => {
  // States
  const [currencyCollection, setCurrencyCollection] = useState([]);
  const [currentCurreny, setCurrentCurreny] = useState({});

  // References
  const ifscCode = useRef(null);
  const accNumber = useRef(null);

  // OnLoad
  useEffect(() => {
    setCurrencyCollection(currenciesJSON.currencies);
    setCurrentCurreny(currenciesJSON.currencies[0]);

    if (personalFormInformation.ifscCode)
      ifscCode.current.value = personalFormInformation.ifscCode;
    if (personalFormInformation.accountNumber)
      accNumber.current.value = personalFormInformation.accountNumber;
  }, []);

  // Submit Handler
  function handleBankForm(e) {
    e.preventDefault();
    if (
      ifscCode.current.value.trim() === "" ||
      accNumber.current.value.trim() === ""
    ) {
      alert("Please fill all the fields");
    } else {
      setPersonalFormInformation({
        ...personalFormInformation,
        ifscCode: ifscCode.current.value,
        accountNumber: accNumber.current.value,
        currency: currentCurreny,
      });
      setPersonalFormStageNo(2);
    }
  }

  return (
    <div>
      <form className="flex flex-col gap-[2rem] w-full">
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
          ref={ifscCode}
        />
        <input
          className="form-inputs"
          type="text"
          name="account-number"
          id="account-number"
          placeholder="Account Number"
          required
          ref={accNumber}
        />
        <div className="flex gap-[1rem] mt-[1rem]">
          <button
            onClick={() => {
              setPersonalFormStageNo(0);
            }}
            className="border-primary border-[1px] w-max p-[5px_1rem] text-primary hover:bg-primary hover:text-white rounded-sm"
          >
            Previous
          </button>
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
