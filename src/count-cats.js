module.exports = function countCats(backyard) {
  let i =0;
  backyard.map((s) => s.map((el) => { i+= el === '^^' ?1:0 }));
  return i;
};