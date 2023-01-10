import React from "react";

const UserSettingOption = () => {
  return (
    <div className="uppercase flex justify-end items-center gap-[2px] mb-[4rem]">
      RB
      <svg
        className="stroke-black w-[20px]"
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        stroke="currentColor"
        strokeLinecap="round"
        stroklinejoin="round"
        strokeWidth="2"
        viewBox="0 0 24 24"
      >
        <path stroke="none" d="M0 0h24v24H0z" />
        <path d="m6 9 6 6 6-6" />
      </svg>
    </div>
  );
};

export default UserSettingOption;
