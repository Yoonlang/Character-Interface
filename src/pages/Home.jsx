import React, { useEffect } from "react";
import Action from "components/Action";
import useIdb from "components/hooks/useIdb";
import { useNavigate } from "react-router";

const Home = () => {
  const nav = useNavigate();

  const { idb, getAllCharatersKey } = useIdb();

  useEffect(() => {
    if (idb) {
      const handleNavByOwnCharacter = async () => {
        const keys = await getAllCharatersKey(idb);
        if (keys.length === 0) {
          nav("/create");
        }
      };
      handleNavByOwnCharacter();
    }
  }, [idb]);

  return (
    <div>
      <Action action={"standing"} />
    </div>
  );
};

export default Home;
