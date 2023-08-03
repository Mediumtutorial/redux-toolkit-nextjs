import { useDispatch } from "react-redux";
import { inputHandler } from "@/store/slices/inputSlice";
import { useState } from "react";
import DisplayComponent from "./display";

function HomePage() {
  const [name, setName] = useState("");

  const dispatch = useDispatch();

  const handleInput = (e) => {
    setName(e.target.value);
  };

  return (
    <div>
      <DisplayComponent />
      <input value={name} type="text" onChange={handleInput} />
      <button
        onClick={() => {
          dispatch(inputHandler(name));
          setName("");
        }}
      >
        Submit
      </button>
    </div>
  );
}

export default HomePage;
