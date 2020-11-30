// Your code here
function saturdayFun(activity="roller-skate") {
  return `This Saturday, I want to ${activity}!`
}

function mondayWork(activity = "go to the office") {
  return `This Monday, I will ${activity}.`
}

function wrapAdjective(visual = "*") {
  return function (adj = "special") {
    return `You are ${visual}${adj}${visual}!`
  }
}

const Calculator = {
  add: function(a, b) {
    return a + b
  }, 
  subtract: function(a, b) {
    return a - b
  }, 
  multiply: function(a, b) {
    return a * b
  }, 
  divide: function(a, b) {
    return a / b
  }
}

function actionApplyer(int, arr) {
  if (arr === []) {
    return 0
  }
  for (const func of arr) {
    int = func(int)
  }
  return int
}