import React, { useMemo } from "react";
export default React.memo(function ProductList({ search }) {
  console.log("=====Product List when props change==============");
  const products = ["Mobile", "Smart TV", "Laptop"];
  const filterItems = useMemo(() => {
    return products.filter((items) =>
      items.toLowerCase().includes(search.toLowerCase()),
    );
  }, [search]);
  //   const filterItems = products.filter((items) =>
  //     items.toLowerCase().includes(search.toLowerCase()),
  //   );
  return (
    <>
      <h3>Product List</h3>
      {filterItems.length === 0 && <p>no items found!</p>}
      {filterItems.map((items, index) => (
        <p key={index}>{items}</p>
      ))}
    </>
  );
});
