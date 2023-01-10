import React, { useEffect } from "react";

const ShowResult = ({
  businessFormFilled,
  setBusinessFormFilled,
  showResultRef,
  businessFormInformation,
  setBusinessFormInformation,
  setBusinessFormStageNo,
}) => {
  function handleGoBack() {
    setBusinessFormInformation({});
    setBusinessFormFilled(false);
    setBusinessFormStageNo(0);
  }

  useEffect(() => {
    if (businessFormFilled) alert("Form filled Successfully");
  }, [businessFormFilled]);
  return (
    <div ref={showResultRef} className="pb-[3rem]">
      {businessFormFilled ? (
        <>
          <table>
            <tbody>
              <tr>
                <td className="font-[500] py-[10px] ">Business Details</td>
              </tr>
              <tr className="tr">
                <td>Business Name</td>
                <td>{businessFormInformation.businessName}</td>
              </tr>
              <tr className="tr">
                <td>Email</td>
                <td>{businessFormInformation.email}</td>
              </tr>
              <tr className="tr">
                <td>Mobile Number</td>
                <td>{businessFormInformation.mobileNumber}</td>
              </tr>
              <tr>
                <td className="font-[500] py-[10px]">Bank Details</td>
              </tr>
              <tr className="tr">
                <td>Currency</td>
                <td>{businessFormInformation.currency.currencyInitials}</td>
              </tr>
              <tr className="tr">
                <td>IFSC Code</td>
                <td>{businessFormInformation.ifscCode}</td>
              </tr>
              <tr className="tr">
                <td>Account Number</td>
                <td>{businessFormInformation.accountNumber}</td>
              </tr>
              <tr>
                <td className="font-[500] py-[10px]">Address Details</td>
              </tr>
              <tr className="tr">
                <td>Country</td>
                <td>{businessFormInformation.countryName}</td>
              </tr>
              <tr className="tr">
                <td>City</td>
                <td>{businessFormInformation.cityName}</td>
              </tr>
              <tr className="tr">
                <td>Address</td>
                <td>{businessFormInformation.address}</td>
              </tr>
              <tr className="tr">
                <td>Postal Code</td>
                <td>{businessFormInformation.postalCode}</td>
              </tr>
            </tbody>
          </table>
          <button
            onClick={handleGoBack}
            className="mt-[2rem] border-2 text-primary border-primary w-max p-[5px_1rem] rounded-sm hover:bg-primary hover:text-white"
          >
            Go Back
          </button>
        </>
      ) : (
        <></>
      )}
    </div>
  );
};

export default ShowResult;
