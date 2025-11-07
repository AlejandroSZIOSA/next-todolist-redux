export function getCurrentDate() {
  const today = new Date();
  const year = today.getFullYear();
  const month = String(today.getMonth() + 1).padStart(2, "0");
  const day = String(today.getDate()).padStart(2, "0");
  return `${year}-${month}-${day}`;
}

export function generateRandomNumericId() {
  return Math.floor(Math.random() * (1000 - 1 + 1)) + 1;
}
