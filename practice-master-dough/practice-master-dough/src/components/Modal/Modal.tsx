import { useState, useContext, useEffect } from "react";

import { faCircleXmark } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import UiContext from "../../context/ui";
import { call } from "../../client/crud";

import styles from "./Modal.module.scss";

const Modal = () => {
  const [text, setText] = useState("");
  const [id, setId] = useState("");

  const { modal, setModal } = useContext(UiContext);

  const cancelModal = () => {
    setModal({ state: false, type: null, title: "", accept: "", reject: "", data: null });
  };

  useEffect(() => {
    if (modal.data) {
      setId(modal.data.id);
      setText(modal.data.name);
    }
  }, []);

  return (
    <div className={styles.modal}>
      <div className={styles.header}>
        <FontAwesomeIcon icon={faCircleXmark} className={styles.iconLeft} />
        <label>{modal.tittle}</label>
        <FontAwesomeIcon
          icon={faCircleXmark}
          className={styles.iconRight}
          onClick={() => {
            setModal({ state: false, type: null, data: null });
          }}
        />
      </div>
      <div className={styles.formLogin}>
        <div className={styles.field}>
          <input id="inputId" value={id} type="text" placeholder=" " disabled />
          <label htmlFor="inputId">Id</label>
        </div>
        <div className={styles.field}>
          <input
            id="inputName"
            type="text"
            value={text}
            placeholder=" "
            onChange={(e) => {
              setText(e.target.value);
            }}
          />
          <label htmlFor="inputName">Nombre</label>
        </div>
      </div>
      <div className={styles.options}>
        <div
          className={styles.buttons}
          onClick={() => {
            setModal({
              state: false,
              type: null,
              title: "",
              accept: "",
              reject: "",
              data: null,
            });
          }}
        >
          {modal.reject}
        </div>
        {text !== "" ? (
          <button
            className={styles.buttons}
            onClick={() => {
              const values = modal.data ? modal.data : { id: id, name: text };
              call(modal.type, { id: id, name: text }, cancelModal);
            }}
          >
            {modal.accept}
          </button>
        ) : (
          <button className={styles.buttons} onClick={() => {}} disabled>
            {modal.accept}
          </button>
        )}
      </div>
    </div>
  );
};

export default Modal;
