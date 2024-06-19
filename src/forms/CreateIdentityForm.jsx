import { useState } from "react";
import { NavLink } from "react-router-dom";
function CreateIdentityForm() {

  const[address, setAddress] =  useState("");
  const[name, setName] =  useState("");

  return (
    <form
      action=""
      className="bg-secondaryColor shadow-primaryShadow flex w-[508px] flex-col rounded-[5px] px-[35px] pb-[50px] pt-[17px] text-black"
    >
      <h1 className="leading-default mb-6 text-center text-xl font-bold">
        Create Identity
      </h1>
      <div className="mb-[37px] flex flex-col gap-y-[37px]">
        <div className="flex flex-col gap-y-[9px]">
          <label
            htmlFor="address"
            className="leading-default text-xl font-bold"
          >
            Wallet Address
          </label>
          <input
            type="text"
            id="address"
            value={address}
            onChange={(e) => setAddress(e.target.value)}
            className="text-blackLight leading-default w-full rounded-[10px] border-[0.5px] border-solid border-[#c4c4c4] bg-transparent px-4 py-[14px] text-base font-normal"
          />
        </div>
        <div className="flex flex-col gap-y-[9px]">
          <label htmlFor="name" className="leading-default text-xl font-bold">
            Ens name
          </label>
          <input
            type="text"
            id="name"
            onChange={(e) => setName(e.target.value)}
            value={name}
            className="text-blackLight leading-default w-full rounded-[10px] border-[0.5px] border-solid border-[#c4c4c4] bg-transparent px-4  py-[14px] text-base font-normal focus:outline-none"
          />
        </div>
      </div>
      <NavLink
        to="/app"
        className="bg-primaryColor leading-default flex items-center justify-center self-center rounded-full px-[61px] py-[11.5px] text-center text-base font-semibold"
      >
        Create
      </NavLink>
    </form>
  );
}

export default CreateIdentityForm;
