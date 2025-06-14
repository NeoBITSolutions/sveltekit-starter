export const capitalizeFirstLetter = (v: string) => {
  return v.charAt(0).toUpperCase() + v.slice(1);
};

export const capitalizeWords = (v: string) => {
  return v.charAt(0).toUpperCase() + v.slice(1).replace(/([A-Z])/g, " $1");
};
