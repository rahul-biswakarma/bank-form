import React, { useState } from "react";

import FormStage from "./components/FormStage";
import SideCarousel from "./components/SideCarousel";
import FormContainer from "./components/FormContainer";
import FormTypeSelector from "./components/FormTypeSelector";
import UserSettingOption from "./components/UserSettingOption";

const App = () => {
  const [formType, setFormType] = useState(0); // 0: personal, 1: business
  const [personalFormStageNo, setPersonalFormStageNo] = useState(0);
  const [businessFormStageNo, setBusinessFormStageNo] = useState(0);
  const [personalFormInformation, setPersonalFormInformation] = useState({});
  const [businessFormInformation, setBusinessFormInformation] = useState({});

  return (
    <div className="bg-[#e0e4e7] w-full h-[100vh] flex ">
      <div className="w-full max-w-[800px] bg-white rounded-sm p-[3rem_3rem] overflow-auto">
        <UserSettingOption />
        <FormStage
          formType={formType}
          personalFormStageNo={personalFormStageNo}
          businessFormStageNo={businessFormStageNo}
        />
        <FormTypeSelector formType={formType} setFormType={setFormType} />
        <FormContainer
          formType={formType}
          personalFormStageNo={personalFormStageNo}
          setPersonalFormStageNo={setPersonalFormStageNo}
          businessFormStageNo={businessFormStageNo}
          setBusinessFormStageNo={setBusinessFormStageNo}
          personalFormInformation={personalFormInformation}
          setPersonalFormInformation={setPersonalFormInformation}
          businessFormInformation={businessFormInformation}
          setBusinessFormInformation={setBusinessFormInformation}
        />
      </div>
      <SideCarousel />
    </div>
  );
};

export default App;
