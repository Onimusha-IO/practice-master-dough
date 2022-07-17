import { faPencil, faTrash } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import styles from "./Dough.module.scss";
import { nanoid } from "nanoid";
import { useContext } from "react";
import UiContext from "../../context/ui";

const Dough = ({ list }: any) => {
  const { setModal } = useContext(UiContext);

  return (
    <div className={styles.content}>
      {list &&
        list.map((e: any) => {
          const key = nanoid();
          if (e.enable) {
            return (
              <div className={styles.dough} key={key}>
                <label>{e.name}</label>
                <div className={styles.controls}>
                  <FontAwesomeIcon
                    icon={faPencil}
                    className={styles.icon}
                    onClick={() => {
                      setModal({
                        state: true,
                        type: "put",
                        tittle: "Modificar masa",
                        accept: "Modificar",
                        reject: "Cancelar",
                        data: { name: e.name, id: e.id },
                      });
                    }}
                  />
                  <FontAwesomeIcon
                    icon={faTrash}
                    className={styles.icon}
                    onClick={() => {
                      setModal({
                        state: true,
                        type: "delete",
                        tittle: "¿Está seguro que desea eliminar el registro?",
                        accept: "Si",
                        reject: "No",
                        data: { name: e.name, id: e.id },
                      });
                    }}
                  />
                </div>
              </div>
            );
          }
        })}
    </div>
  );
};

export default Dough;
