import CoreConcept from "./CoreConcept";
import { CORE_COCEPT } from "../data";
export default function CoreConcepts() {
  return (
    <section id="core-concepts">
      <h2>Core concepts</h2>
      <ul>
        {CORE_COCEPT.map((elem) => (
          <CoreConcept key={elem.title} {...elem} />
        ))}
      </ul>
    </section>
  );
}
