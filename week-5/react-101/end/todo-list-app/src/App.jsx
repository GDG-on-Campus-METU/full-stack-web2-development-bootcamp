import { useEffect, useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Greeting from "./components/Grettings";
import UserProfile from "./components/UserProfile";
import ToggleMessage from "./components/ToggleMessage";
import ItemList from "./components/ItemList";
import Timer from "./components/Timer";

function App() {
  // Declare a state variable 'count' with an initial value of 0
  const [count, setCount] = useState(10);
  const [userWalletAddress, setUserWalletAddress] = useState("");



  return (
    <>
      {/* <div className="w-full h-[100vh] bg-gray-100 text-3xl flex justify-center items-center flex-col gap-5">
        <p className="text-6xl">
          <b className="text-teal-400 px-6 py-4 bg-teal-900 rounded-3xl">
            {count}
          </b>
        </p>
        <button
          className="w-[300px] bg-gray-200 mt-4 py-4 rounded-2xl hover:bg-teal-800 hover:text-teal-300"
          onClick={() => setCount(count + 10)}
        >
          Increase Count
        </button>
      </div> */}
     <Timer />
    </>
  );
}

export default App;
