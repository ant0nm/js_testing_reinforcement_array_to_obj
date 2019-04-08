function arrayToObj(array) {
   // your code goes here
   return array.reduce((acc, item) => {
     acc[item[0]] = item[1];
     return acc;
   }, {});
}

module.exports = arrayToObj;
