export const getCurrentDate = () => new Date().toISOString().split("T")[0];

export const generateRandomNumericId = () =>
  Math.floor(Math.random() * (1000 - 1 + 1)) + 1;
