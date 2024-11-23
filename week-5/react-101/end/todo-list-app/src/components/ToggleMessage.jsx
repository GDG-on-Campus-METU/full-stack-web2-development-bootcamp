import { ToggleRight } from "lucide";
import React, { useState } from "react";

function ToggleMessage() {
  const [isVisible, setIsVisible] = useState(false);

  return (
    <div className="flex flex-col gap-10 justify-center items-center h-[100vh] w-[100vh] text-center bg-teal-400">
      <button
        className="py-2 px-4 bg-gray-50 rounded-xl"
        onClick={() => setIsVisible(!isVisible)}
      >
        {isVisible ? "Hide" : "Show"} Message
      </button>
      <span className=" px-4 py-2 rounded-xl bg-teal-900 text-teal-50">
        {isVisible && <p>This is a toggled message!</p>}
      </span>
    </div>
  );
}

export default ToggleMessage;
