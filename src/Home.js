import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const Home = () => {
  const [RoomCode, setRoomCode] = useState("");
  const navigate = useNavigate();

  const submitCode = (e) => {
    e.preventDefault();
    navigate(`/room/${RoomCode}`);
  };

  return (
    <div>
      <form
        action=""
        onSubmit={submitCode}
        className="t md:pt-12 flex flex-col items-center justify-center"
      >
        <div className=" flex flex-col justify-center items-center">
          <label className="text-[30px] md:text-[40px] font-bold pt-6">
            Enter Room Code
          </label>
          <input
            type="text"
            required
            placeholder="Enter Room Code"
            value={RoomCode}
            onChange={(e) => setRoomCode(e.target.value)}
            className="bg-blue-500 placeholder:text-white py-1.5 md:py-2 px-4 rounded-full max-w-[16rem] mt-2 text-black md:mt-6 outline-0"
          />
        </div>
        <button
          type="submit"
          className="bg-orange-500 rounded-[0.5rem] mt-4 py-1.5 px-4 font-bold"
        >
          Enter Room
        </button>
      </form>
    </div>
  );
};

export default Home;
