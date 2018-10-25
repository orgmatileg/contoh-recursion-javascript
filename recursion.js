// Contoh Input Array multi-dimension
const arrayMultiDimension = [
  [['a', 'b', ['c']], ['a', 'b', ['c']]],
  [['a', 'b', ['c']], ['a', 'b', ['c']]],
  [['a', 'b', ['c']], ['a', 'b', ['c']]]
];

const howManyArray = array => {
  if (Array.isArray(array)) {
    for (let i = 0; i < array.length; i++) {
      console.log(array[i]);
      howManyArray(array[i]);
    }
  }
};

howManyArray(arrayMultiDimension);
