import { createContext, useContext } from "react";
export const UserContext = createContext(undefined);
export function useUserContext() {
    const user = useContext(UserContext);
    if (user === undefined) {
        throw new Error("must be use with app.jsx...")
    }
    return user;
}