import React, { useState } from "react";
import { useNavigate } from "react-router";
import Action, { JUMP_MS } from "../components/Action.jsx";
import useIdb from "../components/hooks/useIdb.jsx";

const Create = () => {
  const nav = useNavigate();
  const [action, setAction] = useState("standing");
  const [value, setValue] = useState("");

  const changeAction = async () => {
    setAction((old) => (old === "standing" ? "jump" : "standing"));
    await new Promise((resolve) =>
      setTimeout(() => {
        setAction("standing");
        resolve();
      }, JUMP_MS)
    );
  };

  const idb = useIdb();

  const createCharacter = async () => {
    // indexedDB 저장
    await changeAction();
    nav("/");
  };

  return (
    <div>
      <Action action={action} />
      {idb && (
        <>
          <input
            type={"text"}
            placeholder={"이름"}
            value={value}
            onChange={(e) => {
              setValue(e.target.value);
            }}
          />
          <button onClick={createCharacter}>확인</button>
        </>
      )}
    </div>
  );
};

export default Create;
