import { createContext, useContext, useState } from "react";

const LanguageStates = createContext();

const Context = ({children}) => {

  const [language, setLanguage] = useState("EN");

  return (
    <LanguageStates.Provider value={{language, setLanguage}}>
      {children}
    </LanguageStates.Provider>
  )
}

export default Context;
export const useLanguageStates = () => useContext(LanguageStates);