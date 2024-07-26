function* riz(data) {
  for (const item of data) {
    yield item;
  }
}
const rizs = riz([1, 2, 3, 4, 5, 6]);
console.log(rizs.next());
/* while (!rizs.next().done) {
  const result = rizs.next();
  console.log(result);
} */
