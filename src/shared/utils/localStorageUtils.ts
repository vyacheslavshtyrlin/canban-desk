export const getLocalStorageObject = (key: string) => {
  const obj = localStorage.getItem(key);
  return obj ? JSON.parse(obj) : {};
};

export const removeLocalStorageItem = (key: string) => {
  return localStorage.removeItem(key);
};
