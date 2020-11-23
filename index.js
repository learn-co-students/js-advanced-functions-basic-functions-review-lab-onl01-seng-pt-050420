// Your code here
function saturdayFun(activity="roller-skate") {
    return `This Saturday, I want to ${activity}!`;
}

function mondayWork(activity="go to the office") {
    return `This Monday, I will ${activity}.`;
}

function wrapAdjective(symbo="*") {
    return function(adjec="special"){
        return `You are ${symbo}${adjec}${symbo}!`
    }
}

const Calculator = {
    add: function (a, b) {
        return a + b;
    },
    subtract: function(a, b) {
        return a - b;
    },
    multiply: function(a,b) {
        return a * b;
    },
    divide: function(a,b) {
        return a / b;
    }
}

function actionApplyer(i, funcArr) {
    let a = i 
    for (let j = 0; j < funcArr.length; j++) {
        a = funcArr[j](a)
    }
    return a
}