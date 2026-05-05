import React from "react";
import { useSkill } from "../../../context/SkillsContext";
export default function SubjectInfo() {
  const { skill } = useSkill();
  return (
    <>
      <div> {skill || "no data"}</div>
    </>
  );
}
