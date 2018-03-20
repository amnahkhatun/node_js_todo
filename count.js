var counter = function(arr){

return 'there are '+ arr.length+' elements'

};

var adder = function(a,b){
  return `the sum is ${a+b}`; //use of string template no need to use concatanation
};

var pi = 3.142;

//this whole code is not available outside the count.js so we will export the part which we need
/* module.exports.counter = counter;
module.exports.adder = adder;
module.exports.pi = pi;

this is the one way

--------------------------------------*/
module.exports = {
  counter: counter,
  adder: adder,
  pi: pi
};
