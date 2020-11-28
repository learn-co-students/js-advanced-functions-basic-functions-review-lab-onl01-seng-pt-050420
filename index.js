function saturdayFun(activity= "roller-skate"){
    return `This Saturday, I want to ${activity}!`
};

function mondayWork(act = "go to the office"){
    return `This Monday, I will ${act}.`
};

function wrapAdjective(string = "*"){
    return function(adjective = "special"){
        return `You are ${string}${adjective}${string}!`;
    };
};

const Calculator = {
    add(a, b){
        return a + b;
    },
    subtract(a, b){
        return a - b;
    },
    multiply(a, b){
        return a * b;
    },
    divide(a, b){
        return a/b;
    }
};

function actionApplyer(start, array){
    let num = start

    for (const fn of array) {
        num = fn(num)
    }

    return num;
};