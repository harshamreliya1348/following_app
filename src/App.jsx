import { useContext, useState } from "react";
import Card from "./components/Card";
import { userdetail } from "./context/Usercontext";

const App = () => {
  const userdetails = useContext(userdetail);
  return (
    <div className="min-h-screen bg-gray-800 w-screen p-5 flex overflow-auto gap-2 flex-wrap justify-center">
      {userdetails.map((elem, idx) => {
        return elem.map((elem, idx) => {
          return (
            <Card
              img={elem.img}
              uname={elem.uname}
              details={elem.details}
              followers={elem.followers}
              key={idx}
            />
          );
        });
      })}
    </div>
  );
};

export default App;
