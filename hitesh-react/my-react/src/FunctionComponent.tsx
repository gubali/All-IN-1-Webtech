
type props = {
  name: string;
};
function FunctionalComponent({ name }: props) { 
  return (
    <>
      <h1 className="text-3xl font-bold underline">Functional componennt - {name}</h1>
    </>
  );
}

export default FunctionalComponent;


