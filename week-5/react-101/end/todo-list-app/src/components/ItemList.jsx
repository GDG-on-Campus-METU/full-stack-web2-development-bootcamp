import React from "react";
function ItemList({ items }) {
  return (
    <ul className="list-disc pl-5 space-y-2">
      {items.map((item, index) => (
        <li key={index} className="text-gray-700">
          {item} {index}
        </li>
      ))}
    </ul>
  );
}

export default ItemList;
