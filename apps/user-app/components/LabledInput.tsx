import React from "react";

interface Props{
    label : string,
    type : string
}

function InputBox({label,type}:Props) {
  return (
    <div className="flex flex-col text-text-secondary gap-2 text-md">
      <label htmlFor="1" className="pl">
        {label}
      </label>
      <input
        id="1"
        type={type}
        className="bg-gray-900 pl-2 h-10 outline-none rounded-md "
      />
    </div>
  );
}

export default InputBox;
