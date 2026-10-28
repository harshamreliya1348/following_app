import { useEffect, useState } from "react";

const Card = (props) => {
  const [follower, setFollower] = useState(props.followers);
  const [isfollowing, setisfollowing] = useState(false);
  const [colorbtn, setcolorbtn] = useState("lightgray");
  const increaseFollower = () => {
    if (!isfollowing) {
      setFollower((prev) => prev + 1);
      setisfollowing(true);
      setcolorbtn("lightgreen");
    } else {
      setFollower((prev) => prev - 1);
      setisfollowing(false);
      setcolorbtn("lightgray");
    }
  };
  return (
    <div>
      <div className="md:w-1/5 w-68  min-w-58 min-h-83 border border-gray-300 rounded-3xl bg-white/50 p-3">
        <div className="h-50 w-full ">
          <img
            src={props.img}
            alt="img"
            className="h-full w-full object-cover border border-gray-300 rounded-3xl"
          />
        </div>
        <div className="flex flex-col gap-5 mt-3 ">
          <div className="pl-5">
            <h2 className="font-bold text-xl">{props.uname}</h2>
            <p className="text-gray-800 text-sm  mt-2">{props.details}</p>
          </div>
          <div className=" flex justify-between  items-center w-full">
            <div className="flex gap-1.5 bg-blue-200 px-3 py-1 rounded-3xl border border-blue-200">
              <>👤</>
              <h3>{follower}</h3>
            </div>
            <button
              onClick={() => {
                increaseFollower();
              }}
              style={{ backgroundColor: colorbtn }}
              className=" border border-gray-200 px-3 py-2 font-bold rounded-3xl cursor-pointer"
            >
              {!isfollowing ? "Follow+" : "following"}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;
