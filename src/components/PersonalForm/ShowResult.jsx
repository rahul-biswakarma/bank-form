import React from "react";

const ShowResult = ({
  personalFormInformation,
  setPersonalFormInformation,
  setPersonalFormStageNo,
}) => {
  function handleGoBack() {
    setPersonalFormInformation({});
    setPersonalFormStageNo(0);
  }
  return (
    <div className="pb-[3rem]">
      <table>
        <tbody>
          <tr>
            <td className="font-[500] py-[10px]">Personal Details</td>
          </tr>
          <tr className="tr">
            <td>First Name</td>
            <td>{personalFormInformation.firstName}</td>
          </tr>
          <tr className="tr">
            <td>Last Name</td>
            <td>{personalFormInformation.lastName}</td>
          </tr>
          <tr className="tr">
            <td>Email</td>
            <td>{personalFormInformation.email}</td>
          </tr>
          <tr className="tr">
            <td>Mobile Number</td>
            <td>{personalFormInformation.mobileNumber}</td>
          </tr>
          <tr>
            <td className="font-[500] py-[10px]">Bank Details</td>
          </tr>
          <tr className="tr">
            <td>Currency</td>
            <td>{personalFormInformation.currency.currencyInitials}</td>
          </tr>
          <tr className="tr">
            <td>IFSC Code</td>
            <td>{personalFormInformation.ifscCode}</td>
          </tr>
          <tr className="tr">
            <td>Account Number</td>
            <td>{personalFormInformation.accountNumber}</td>
          </tr>
          <tr>
            <td className="font-[500] py-[10px]">Address Details</td>
          </tr>
          <tr className="tr">
            <td>Country</td>
            <td>{personalFormInformation.countryName}</td>
          </tr>
          <tr className="tr">
            <td>City</td>
            <td>{personalFormInformation.cityName}</td>
          </tr>
          <tr className="tr">
            <td>Address</td>
            <td>{personalFormInformation.address}</td>
          </tr>
          <tr className="tr">
            <td>Postal Code</td>
            <td>{personalFormInformation.postalCode}</td>
          </tr>
        </tbody>
      </table>
      <button
        onClick={handleGoBack}
        className="mt-[2rem] border-2 text-primary border-primary w-max p-[5px_1rem] rounded-sm hover:bg-primary hover:text-white"
      >
        Go Back
      </button>
    </div>
  );
};

export default ShowResult;
