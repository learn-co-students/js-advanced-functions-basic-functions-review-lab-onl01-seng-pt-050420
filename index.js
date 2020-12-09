// Your code here

function saturdayFun(string = 'roller-skate') {
  return `This Saturday, I want to ${string}!`
}

let mondayWork = function(string = 'go to the office') {
  return `This Monday, I will ${string}.`
}

let wrapAdjective = function(style = '*') {
  return function(adj = 'special') {
    return `You are ${style}${adj}${style}!`
  }
}

const Calculator = {
  
  add: function(a,b) {
    return a + b;
  },
  
  subtract: function(a,b) {
    return a - b;
  },
  
  multiply: function(a,b) {
    return a * b;
  },
  
  divide: function(a,b) {
    return a / b;
  }
  
}

let actionApplyer = function(startInt, array) {
  let startingPoint = startInt;
  
  for(let i = 0; i < array.length; i++) {
    startingPoint = array[i](startingPoint)
  }
  
  return startingPoint
}



