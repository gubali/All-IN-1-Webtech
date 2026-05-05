import { useContext, createContext, useState } from "react";
const SkillContext = createContext();
export const SkillProvider = ({ children }) => {
  const [skill, setSkill] = useState();
  return (
    <SkillContext.Provider value={{ skill, setSkill }}>
      {children}
    </SkillContext.Provider>
  );
};
// eslint-disable-next-line react-refresh/only-export-components
export const useSkill = () => useContext(SkillContext);
