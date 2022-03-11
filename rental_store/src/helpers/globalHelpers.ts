export const randomPrice = () => {
  let random = 199 + Math.random() * (3999 + 1 - 199);
  return Math.floor(random)+ ' $';
};


