export const randomize = (arr) => {
  arr.sort(() => Math.random() - 0.5);
}