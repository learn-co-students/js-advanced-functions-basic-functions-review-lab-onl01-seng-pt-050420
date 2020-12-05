// Your code here
function saturdayFun(activity = "roller-skate"){
    return `This Saturday, I want to ${activity}!`
}

// console.log(saturdayFun())

function mondayWork(activity = "go to the office"){
    return `This Monday, I will ${activity}.`
}

function wrapAdjective(string="*"){

    return function(par="special"){
        return `You are ${string}${par}${string}!`;
    }
}

let Calculator = {

    add: function(a,b){ return a + b},
    subtract: function(a,b){ return a - b},
    multiply: function(a,b){ return a * b},
    divide: function(a,b){ return a / b},
}

function actionApplyer(int, fnArray){

    for(let i = 0; i < fnArray.length; i++){
        int = fnArray[i](int)
    }
    return int
}