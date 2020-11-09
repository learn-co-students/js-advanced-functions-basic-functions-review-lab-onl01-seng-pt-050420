// Your code here

function saturdayFun(param = "roller-skate") {
    return `This Saturday, I want to ${param}!`
};

function mondayWork (activity = "go to the office") {
    return `This Monday, I will ${activity}.`
};

function wrapAdjective(flair = "*") {
    return function(innerParam = "special") {
        return `You are ${flair}${innerParam}${flair}!`
    }
};

const Calculator = {
    add: (function() { return 1 + 3 }),
    subtract: (function() { return 1-3 }),
    multiply: (function() { return 1 * 3 }),
    divide: (function() { return 10 / 5 })
};

function actionApplyer(start, arr) {
  return arr.reduce(function(res, fn) {
    return fn(res);
  }, start);
};

