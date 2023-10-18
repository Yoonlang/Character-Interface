import { openDB } from "idb";
import { useEffect, useState } from "react";

const IDB_NAME = "Character Information";
const STORE_NAME = "Character";
const IDB_VERSION = 1;

const useIdb = () => {
  const [idb, setIdb] = useState(null);

  const getAllCharatersKey = async (idb) => {
    return await idb.getAllKeys(STORE_NAME);
  };

  const insertNewCharacterInfo = async (idb, name) => {
    await idb.add(STORE_NAME, { name });
  };

  useEffect(() => {
    const openIdb = async () => {
      const idb = await openDB(IDB_NAME, IDB_VERSION, {
        upgrade: (db, oldVersion, newVersion) => {
          if (oldVersion < 1) {
            db.createObjectStore(STORE_NAME, {
              keyPath: "id",
              autoIncrement: true,
            });
          }
        },
      });
      setIdb(idb);
    };
    openIdb();
  }, []);

  return { idb, getAllCharatersKey, insertNewCharacterInfo };
};

export default useIdb;
