// Function Declaration
function saturdayFun(activity = "roller-skate")
{
  return `This Saturday, I want to ${activity}!`;
}

// Function Expression
let mondayWork = function(work = "go to the office") {
  return `This Monday, I will ${work}.`;
}

function wrapAdjective(flair = "*")
{
  return function(adj = "special") {
    return `You are ${flair}${adj}${flair}!`;
  }
}

let Calculator = {
  "add": function(a, b) { return a + b },
  "subtract": function(a, b) { return a - b },
  "multiply": function(a, b) { return a * b },
  "divide": function(a, b) { return a / b }
}

function actionApplyer(startingInt, arrayOfFns)
{
  if (arrayOfFns.length === 0)
  {
    return startingInt;
  }
  else
  {
    for (let i = 0; i < arrayOfFns.length; i++)
    {
      startingInt = arrayOfFns[i](startingInt);
    }
    return startingInt;
  }
}