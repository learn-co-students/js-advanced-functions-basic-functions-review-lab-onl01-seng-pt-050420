function saturdayFun(action="roller-skate") {
    return(`This Saturday, I want to ${action}!`);
  }
  
function mondayWork(action="go to the office") {
    return(`This Monday, I will ${action}.`);
} 

let wrapAdjective = function(type='*') {
    return function(adj='special') {
        return `You are ${type}${adj}${type}!`
    }
}
  
const Calculator = {
    add: function(a,c) {
        return a+c
    },

    subtract: function(a,c) {
        return a-c
    },
    
    multiply: function(a,c) {
        return a*c
    },

    divide: function(a,c) {
        return a/c
    }
}

function actionApplyer(startNum, array) {
    let a = startNum
  
    for(let i = 0; i < array.length; i++){
      a = array[i](a)
    }
  
    return a
  }
