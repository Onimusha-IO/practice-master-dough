import { useContext, useEffect, useState } from "react";

import Dough from "../components/Dough";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCirclePlus } from "@fortawesome/free-solid-svg-icons";
import Modal from "../components/Modal";
import UiContext from "../context/ui";
import { get } from "../client/crud";

import styles from "./DoughPage.module.scss";

const DoughPage = () => {
  const [list, setList] = useState<[]>();

  const { modal, setModal } = useContext(UiContext);

  const getList = async () => {
    const res = await get();
    setList(res);
  };

  useEffect(() => {
    if (modal.state === false) {
      getList();
    }
  }, [modal]);

  return (
    <div className={styles.screen}>
      <label className={styles.label}>Masas</label>
      {modal.state ? <Modal /> : <Dough list={list} />}
      <div
        className={styles.add}
        onClick={() => {
          setModal({...modal, state: true, type: "post", tittle: "Nueva masa", accept: "Registrar", reject: "Cancelar" });
        }}
      >
        <FontAwesomeIcon icon={faCirclePlus} className={styles.icon} />
      </div>
    </div>
  );
};

export default DoughPage;
