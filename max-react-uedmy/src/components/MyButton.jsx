export default function MyButton({ label, myclasName, MyContainer }) {
 MyContainer || "div";
  return (
    <MyContainer>
      <button id={label} className={myclasName}>
        {label}
      </button>
    </MyContainer>
  );
}
