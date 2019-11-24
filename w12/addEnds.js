// const addEnds = array => array[0] + array[array.length -1];

function addEnds(array){
  return array[0] + array[array.length -1];
}

console.log(addEnds([ 17, 8, 9, 5, 20 ]) === 37);
console.log(addEnds([ 9, 8, 60 ]) === 69);
console.log(addEnds([ 400, 5, 65, 63, 8, 20 ]) === 420);
console.log(addEnds([ -3, 0, 7.1, 5 ]) === 2);
console.log(addEnds([ 17, 8, 9, 5, 20 ]) === 37);
console.log(addEnds([ 5, -2.1, 6.3, 9, 5, 13 ]) === 18);
