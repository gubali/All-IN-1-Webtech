import { useMemo } from "react";

export default function useStyle() {
   const style = useMemo(() => {
      return {
         border: "1px solid red",
         color: "#fff",
         padding: "5px"
      }
   }, []);
   return style
} 