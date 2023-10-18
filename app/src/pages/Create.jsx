import React, { useState } from "react";
import { useNavigate } from "react-router";
import Action from "../components/Action.jsx";

const JUMP_MS = 1700;

const Create = () => {
  const nav = useNavigate();
  const [action, setAction] = useState("standing");

  const changeAction = async () => {
    setAction((old) => (old === "standing" ? "jump" : "standing"));
    await new Promise((resolve) =>
      setTimeout(() => {
        setAction("standing");
        resolve();
      }, JUMP_MS)
    );
  };

  const createCharacter = async () => {
    // indexedDB 저장
    await changeAction();
    nav("/");
  };

  return (
    <div>
      <Action action={action} />
      <input type={"text"} placeholder={"이름"} />
      <button onClick={createCharacter}>확인</button>
    </div>
  );
};

export default Create;
