import React, { useEffect, useState } from "react";
import Action from "components/Action";
import useIdb from "components/hooks/useIdb";
import { useNavigate } from "react-router";

const Home = () => {
  const nav = useNavigate();
  const [info, setInfo] = useState(null);

  const { idb, getAllCharatersKey, getCharacterInfo } = useIdb();

  useEffect(() => {
    if (idb) {
      const handleNavByOwnCharacter = async () => {
        const keys = await getAllCharatersKey(idb);
        if (keys.length === 0) {
          nav("/create");
        } else {
          const info = await getCharacterInfo(idb, keys[0]);
          setInfo(info);
        }
      };
      handleNavByOwnCharacter();
    }
  }, [idb]);

  return (
    <div>
      <Action action={"standing"} />
      {info && (
        <>
          <button>스탯창</button>
          <button>기록하기</button>
          <button>로그</button>

          <div>{info.name}</div>
        </>
      )}
    </div>
  );
};

export default Home;
