import { Button, Card } from "antd";
import { useRouter } from "next/router";
import React, { useState } from "react";
import Child1 from "./child1";
import Child2 from "./child2";
import DeleteComponent from "./deleteComponent";
import UserDet from "./userDet";

// [vrushti,dhrumil]

const Stateup = () => {
  const userDetails = [
    { name: "vrushti", age: 25, selected: false },
    { name: "dhrumil", age: 24, selected: false },
  ];
  const [userDet, setUserDet] = useState(userDetails || []);
  console.log("SetUSerDet", setUserDet);
  return (
    <>
      {userDet.map((item, index) => (
        <>
          <UserDet
            userDet={userDet}
            item={item}
            index={index}
            setUserDet={setUserDet}
          />
        </>
      ))}
      <DeleteComponent userDet={userDet} setUserDet={setUserDet} />
    </>
  );
};

export default Stateup;
