import { openDB } from "idb";
import { useEffect, useState } from "react";

const IDB_NAME = "Character Information";
const IDB_VERSION = 1;

const useIdb = () => {
  const [idb, setIdb] = useState(null);

  useEffect(() => {
    const openIdb = async () => {
      const idb = await openDB(IDB_NAME, IDB_VERSION, {
        upgrade: () => {},
      });
      setIdb(idb);
    };
    openIdb();
  }, []);

  return idb;
};

export default useIdb;
