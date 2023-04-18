import { useState, useEffect } from "react";
const { createContext, useContext } = require("react");

const PersonnageContexte = createContext({ personnage: [] });

export const PersonnageProvider = ({ children }) => {
  const [personnages, setPersonnages] = useState([]);

  const getPersonnages = async () => {
    const response = await fetch("./api/personnages");
    const result = await response.json();
    setPersonnages(result.data);
  };

  useEffect(() => {
    getPersonnages();
  }, []);

  return (
    <PersonnageContexte.Provider value={{ personnages }}>
      {children}
    </PersonnageContexte.Provider>
  );
};

export const usePersonnage = () => {
  return useContext(PersonnageContexte);
};
