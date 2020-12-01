// Your code here
function saturdayFun( activity="roller-skate") {
    return (`This Saturday, I want to ${activity}!`);
}

function mondayWork(activity = "go to the office") {
    return (`This Monday, I will ${activity}.`);
}

function wrapAdjective(one = '*' ) {
    return function inner(two = 'special'){
        return `You are ${one}${two}${one}!`
    }
}


let Calculator = {
    add: function(a,b) {return a + b},
    subtract: function(a,b) {return a - b},
    multiply: function(a,b) {return a * b},
    divide: function(a,b) {return a/b}
}

function actionApplyer(integer, array){
    return array.reduce(function(res,fn){
        return fn (res)
    },integer)
}

tt = [
    function(a){ return a * 2 },
    function(a){ return a + 10},
    function(a){ return a + 7 }
  ]

  

