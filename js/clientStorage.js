const carsInstance = localforage.createInstance({
  name: "cars",
});
let lastIndex = -1;

export const addCars = async (newCars) => {
  await carsInstance.setItems(newCars);
};

export const getCars = async () => {
  const COUNT = 3;
  const keys = (await carsInstance.keys()).reverse();
  if (lastIndex >= keys.length) return;
  const results = await carsInstance.getItems(keys.splice(lastIndex + 1, COUNT));
  lastIndex += COUNT;
  return Object.values(results).reverse();
};

export const getLastItemId = async () => {
  const keys = (await carsInstance.keys()).reverse();
  return keys[lastIndex];
};
