// Your code here

// Implement a function called `saturdayFun`. It should return a `String` like
// `"This Saturday, I want to ....!"` Fill in the `...` with the activity that's
// passed in as the first parameter. If nothing is passed in, default to
// `"roller-skate"`. Use the `learn` program to verify you've gotten a working
// implementation. Come back here once you've gotten just this set of tests passing.

function saturdayFun(activity = "roller-skate"){ 
    return `This Saturday, I want to ${activity}!` 
    //console.log(`This Saturday, I want to ${activity}!`);
} 
  saturdayFun() 


//   implement a function called `mondayWork`. It should return a `String` like
// `"This Monday, I will ... ."` Fill in the `...` with the activity that's
// passed in as the first parameter. If nothing is passed in, default to
// `"go to the office"`. Use the `learn` program to verify you've gotten a working
// implementation. Come back here once you've gotten just this set of tests passing. 

let mondayWork = function(activity = "go to the office") { 
    //console.log(`This Monday, I will ${activity}`) 
    return `This Monday, I will ${activity}.`
} 
  mondayWork("work from home")
  //console.log(mondayWork("work from home")) 


  function outer(greeting, msg="It's a fine day to learn") { // 2
    let innerFunction =  function(name, lang="Python") { // 3
      return `${greeting}, ${name}! ${msg} ${lang}` // 4
    }
    return innerFunction("student", "JavaScript") // 5
  }
  //console.log(outer("Hello")) // 1  


  //Hello, student! It's a fine day to learn JavaScript 



// * Implement a function called `wrapAdjective`.
//   * It should return a function
//     * This "inner" function should:
//       * take a single parameter that should default to `"special"`. Name it
//         however you wish.
//       * return a `String` of the form "You are ..." where `...` should be the
//         adjective this function received wrapped in visual flair
//   * It should take as parameter a `String` that will be used to create visual flair
//   * You may call the parameter whatever you like, but its default value should
//     be `"*"`
//   * Call example: `let encouragingPromptFunction = wrapAdjective("!!!")`
// * Thus a total call should be:
//       `wrapAdjective("%")("a dedicated programmer") //=> "You are %a dedicated programmer%!"` 

function wrapAdjective (star = "*"){
    return function(adj = "hard worker"){
        return `You are ${star}${adj}${star}!`
    }
} 

//console.log(wrapAdjective()) 

const Calculator = {
    add: function(a, b){
        return a + b; 
    }, 
    subtract: function(a,b){
       return a - b;
    }, 
    multiply: function(a, b){
       return a * b;
    }, 
    divide: function(a, b){
       return a / b;
    }
}
       
function actionApplyer(start, finish){
  for(let i = 0; i < finish.length; i++ ){
    start = finish[i](start)
  } 
  return start
}