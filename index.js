// Your code here
let saturdayFun = function(activity="roller-skate") {
    return `This Saturday, I want to ${activity}!`
}

let mondayWork = function(activity="go to the office") {
    return `This Monday, I will ${activity}.`
}

const wrapAdjective = function(symbol="*") {
    return function(adj="special") {
        return `You are ${symbol}${adj}${symbol}!`
    }
}


let Calculator = {
    add: function() {
        return 1+3
    },
    subtract: function() {
        return 1-3
    },
    multiply: function() {
        return 1*3
    },
    divide: function() {
        return 10/5
    }
}

let actionApplyer = function(num,funcs) {
    if(funcs.length === 0) { return num}
    funcs.forEach(func => {
        num = func(num)
    })
    return num 
}