import React, { useState } from "react";
import Action from "../components/Action.jsx";

const Create = () => {
  const [action, setAction] = useState("standing");

  const changeAction = () => {
    setAction((old) => (old === "standing" ? "jump" : "standing"));
  };

  return (
    <div>
      <Action action={action} />
      <button onClick={changeAction}>
        {action === "standing" ? "점프" : "차렷"}
      </button>
    </div>
  );
};

export default Create;
