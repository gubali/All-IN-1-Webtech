import type React from "react";
import { useState } from "react";

function FilterItems() {
  const fruitsList: string[] = [
    "Apple",
    "Banana",
    "Cherry",
    "Date",
    "Elderberry",
  ];
  const [searchText, setSearchText] = useState<string>("");
  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearchText(event.target.value);
  };
  const filterFruits = fruitsList.filter((fruits) =>
    fruits.toLowerCase().includes(searchText.toLowerCase())
  );

  return (
    <>
      <input
        type="text"
        placeholder="Search fruits..."
        value={searchText}
        onChange={handleChange}
      />
      {

      filterFruits && filterFruits.length > 0 ? (filterFruits.map((fruits, index) => <p key={index}>{fruits}</p>)) 
      :
      (<p style={{ color: "red" }}>No fruits found</p>)
      
      }
    </>
  );
}
export default FilterItems;
