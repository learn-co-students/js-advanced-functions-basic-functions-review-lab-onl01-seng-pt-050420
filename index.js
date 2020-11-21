function saturdayFun(activity = "roller-skate") {
    return `This Saturday, I want to ${activity}!`
}

function mondayWork(activity = "go to the office") {
    return `This Monday, I will ${activity}.`
}

function wrapAdjective(initializer = "*") {
    return function(phrase) {
        return `You are ${initializer}${phrase}${initializer}!`
    }
}

const Calculator = {
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
        return num1 /  num2
    }
}

function actionApplyer(int, funcs) {
    let start = int
    
    funcs.forEach(func => {
        start = func(start)
        console.log(start)
    });

    return start
}