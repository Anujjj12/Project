import { Button } from "antd";
import React from "react";

const DeleteComponent = ({ userDet, setUserDet }) => {
  const handleDelete = () => {
    const tempArr = userDet.filter((x) => !x.selected);
    setUserDet(tempArr);
  };
  return (
    <>
      <Button type="primary" onClick={handleDelete}>
        Delete
      </Button>
    </>
  );
};

export default DeleteComponent;
