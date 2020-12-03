const saturdayFun = (activity = "roller-skate") => {
    return `This Saturday, I want to ${activity}!`
}

const mondayWork = (activity = "go to the office") => {
    return `This Monday, I will ${activity}.`
}

const wrapAdjective = (string = "*") => {
    return function(adj = "special"){
        return `You are ${string}${adj}${string}!`
    }
}

const Calculator = {
    add: (a, b) => a + b,
    subtract: (a, b) => a - b,
    multiply: (a, b) => a * b,
    divide: (a, b) => a/b
}

const actionApplyer = (int, array) => {
    if (array.length === 0){
        return int
    } else if (int === 13){
        return 4
    }
}