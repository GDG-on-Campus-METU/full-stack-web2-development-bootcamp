import React from "react";

const Greeting = ({ name, age, university, department }) => {


  return (
    <main className="flex flex-col gap-10 justify-center items-center h-[100vh] w-[100vh] text-center bg-teal-400">
      <h1 className="text-9xl font-black">Greeting {name}</h1>
      <p className="text-xl w-[40%]  ">
        You are <strong>{age}</strong> years old and studying at{" "}
        <b>{university}</b> in <b>{department}</b> department.
      </p>
    </main>
  );
};

export default Greeting;
