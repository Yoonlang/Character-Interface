import React, { useEffect, useState } from "react";
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

  const { idb, insertNewCharacterInfo, getAllCharatersKey } = useIdb();

  const createCharacter = async () => {
    insertNewCharacterInfo(idb, value);
    await changeAction();
    nav("/");
  };

  useEffect(() => {
    if (idb) {
      const handleNavByOwnCharacter = async () => {
        const keys = await getAllCharatersKey(idb);
        // 일단 캐릭터 보유 중이라면 패스. (단일 캐릭터에 대해서만 처리)
        if (keys.length > 0) {
          nav("/");
        }
      };
      handleNavByOwnCharacter();
    }
  }, [idb]);

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
