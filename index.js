function saturdayFun(str = "roller-skate") {
    return `This Saturday, I want to ${str}!`
}

function mondayWork(str = "go to the office") {
    return `This Monday, I will ${str}.`
}

function wrapAdjective(sym = "*") {
    return function innerFunction(adj = "special") {
        return `You are ${sym+adj+sym}!`
    }
}

let Calculator = {
    add: function(num1, num2) {
        return num1 + num2
    },
    subtract: function(num1, num2) {
        return num1 - num2
    },
    multiply: function(num1, num2) {
        return num1 * num2
    },
    divide: function(num1, num2) {
        return num1 / num2
    }
}

function actionApplyer(start, arr) {
    let int = start
    arr.forEach(f => {
        int = f(int)
    })
    return int
}