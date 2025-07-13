import React from "react";
type UseContexType = {
  user: string;
  setUser: React.Dispatch<React.SetStateAction<string>>;
};
const UserContext = React.createContext<UseContexType>({
  user: "",
  setUser: () => {},
});
export default UserContext;
