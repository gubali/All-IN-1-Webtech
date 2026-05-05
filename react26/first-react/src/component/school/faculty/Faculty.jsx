import React from "react";
import { useSkill } from "../../../context/SkillsContext";

export default function Faculty() {
  const { skill } = useSkill();
  return (
    <>
      <p>{skill || "No data"} </p>
    </>
  );
}
