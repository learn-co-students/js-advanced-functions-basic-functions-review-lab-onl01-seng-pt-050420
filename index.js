// Your code here
function razzle() {
    console.log("You've been razzled!");
  }

  function saturdayFun(act = "roller-skate"){
    return `This Saturday, I want to ${act}!`
  }

  function mondayWork(tasks = "go to the office"){
    return `This Monday, I will ${tasks}.`
  }


    let wrapAdjective = function(style="*") {
        return function(adjective="special") {
          return `You are ${style}${adjective}${style}!`
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

        const actionApplyer = function(thisInt, thisArr){
            let a= thisInt;
            for (let i= 0; i < thisArr.length; i++){
                a = thisArr[i](a);
            }
            return a
        }

      
