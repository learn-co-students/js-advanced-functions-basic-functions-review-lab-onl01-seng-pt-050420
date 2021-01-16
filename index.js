function saturdayFun(task= "roller-skate") {
    return `This Saturday, I want to ${task}!`;
}
//saturdayFun()


let mondayWork = function (task= "go to the office" ) {
    return `This Monday, I will ${task }.`
}
// mondayWork()

let wrapAdjective = function(name = "*"){
    return function(para ="special"){
        return `You are ${name}${para}${name}`
    }
}

const Calculator = {
    add: function(a,b) {
      return a + b;
    },
    subtract: function(a,b) {
      return a - b
    },
    multiply: function(a,b) {
      return a * b
    },
    divide: function(a,b) {
      return a / b;
    }
  }
  
  let actionApplyer = function(start, ray) {
    let a = start
  
    for (let i = 0; i < ray.length; i++ ){
      a = ray[i](a)
    }
  
    return a
  }