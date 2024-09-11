function isEnoughCapacity(products, containerSize) {
  const totalProducts = Object.values(products).reduce(
    (sum, amount) => sum + amount,
    0
  );
  return totalProducts <= containerSize;
}

console.log(isEnoughCapacity(products, containerSize));
