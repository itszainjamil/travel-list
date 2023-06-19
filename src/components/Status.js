export default function Status({ items }) {
  if (!items.length)
    return (
      <p className="stats">
        <em>Start adding some items to your packing list 🚀</em>
      </p>
    );

  const totalItems = items.length;
  // const packedItems = items.reduce((acc, item) => {
  //   return item.packed ? acc + 1 : acc;
  // }, 0);
  const packedItems = items.filter((item) => item.packed).length;
  const percentage = Math.round((packedItems / totalItems) * 100);

  return (
    <footer className="stats">
      <em>
        {packedItems !== totalItems
          ? `💼 You have ${totalItems} item${
              totalItems === 1 ? "" : "s"
            } on your list, and you have ${
              packedItems === 0
                ? "not packed any"
                : `already packed
            ${packedItems} (${percentage}%)`
            }`
          : `You got everything! Ready to go ✈️`}
      </em>
    </footer>
  );
}
