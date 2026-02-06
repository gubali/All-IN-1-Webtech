export default function TabButton({ label, OnSelect, isSelected }) {
  return (
    <li>
      <button className={isSelected ? "active" : undefined} 
      onClick={OnSelect}>
        {label}
      </button>
    </li>
  );
}


