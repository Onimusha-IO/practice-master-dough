import { createContext, useState } from "react";

const UiContext = createContext<any>(null);

const UiProvider = ({ children }: any) => {
  const [modal, setModal] = useState({
    state: false,
    type: null,
    title: "",
    accept: "",
    reject: "",
    data: null,
  });

  return <UiContext.Provider value={{ modal, setModal }}>{children}</UiContext.Provider>;
};

export { UiProvider };
export default UiContext;
