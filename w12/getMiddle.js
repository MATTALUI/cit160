// const getMiddle = array => array.length % 2
//   ? array[Math.floor(array.length / 2)]
//   : (array[array.length / 2] + array[(array.length / 2)- 1]) / 2

function getMiddle(array){
  if(array.length % 2){
    const middelIndex = Math.floor(array.length / 2);
    return array[middelIndex];
  }else{
    const index1 = array.length / 2;
    const index2 = index1 - 1;
    return (array[index1] + array[index2]) / 2;
  }
}

console.log(getMiddle([ 17, 8, 9, 5, 20 ]) === 9);
console.log(getMiddle([ 12, 4, 8, 15, 17, 5, 20, 11 ]) === 16);
