function permutationEquation(p) {
  //Form an indexarray and find the index of x and then find the index of that value from the indexArray.
  var indexArray = [];
  var temp;
  var resArray = [];
  for (var i = 0; i < p.length; i++) {
    indexArray[p[i]] = i + 1;
  }
  for (var x = 1; x <= p.length; x++) {
    temp = indexArray[x];
    resArray.push(indexArray[temp]);
  }
  return resArray;
}
let p = [5, 2, 1, 3, 4];

permutationEquation(p);
