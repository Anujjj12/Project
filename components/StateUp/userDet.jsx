import { Card, Checkbox, Select } from "antd";
import React from "react";

const UserDet = ({ userDet, item, index, setUserDet }) => {
  console.log("Item", item);
  const handleCheck = (e) => {
    const tempArr = [...userDet];
    tempArr[index].selected = e.target.checked;
    setUserDet(tempArr);
  };
  return (
    <Card>
      <Checkbox onChange={handleCheck} checked={userDet[index].selected}>
        {item.name}
      </Checkbox>
    </Card>
  );
};

export default UserDet;
