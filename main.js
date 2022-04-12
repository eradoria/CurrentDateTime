// **THIS IS INCREDIBLY IMPORTANT THAT YOU DO BOTH SECTIONS!!! You will be doing only front-end work in 421 and you need to brush up on your HTML elements**

const { KeyboardEvent } = require("jsdom/lib/jsdom/living");


// ***************************
//          PART ONE
// ***************************
// Write a JavaScript program to display the current day and time, start with:
console.log(new Date)

const displayDate = () => {
  const currentDate = new Date()

  document.getElementById("display-element").innerHTML = currentDate;
}
 

// Write a JavaScript program to convert a number to a string.
function NumbertoStr(){
  let num = document.getElementById('input').value;
  let result = document.getElementById('display')
  let text = num.toString();

button.addEventListener('click', () => {
  display.innerHTML = text
})
} 


// Write a JavaScript program to convert a string to the number.
function str2num (){
  let num = document.getElementById('input').value;
  let result = document.getElementById('display')
  let text = parseInt(num);

button.addEventListener('click', () => {
  display.innerHTML = text
})
}  





// Write a JavaScript program that takes in different datatypes and prints out whether they are a:
  // * Boolean
  // * Null
  // * Undefined
  // * Number
  // * NaN
  // * String
  

  
// Write a JavaScript program that adds 2 numbers together.
function calculate() {
  let x = document.getElementById('input').value || 0;
  let y = document.getElementById('input2').value || 0;
  let result = document.getElementById('result');
  let sum = parseInt(x) + parseInt(y);
   result.value = sum;
  
  const button = document.querySelector('#numberbutton')
  button.addEventListener('click', () => {
  result.innerText = sum
})

}


// Write a JavaScript program that runs only when 2 things are true.
function both() {
  let w = document.getElementById('input').value;
  let x = document.getElementById('input2').value;
  let y = document.getElementById('input').value;
  let z = document.getElementById('input2').value;
  let result = document.getElementById('result');
  
  if (x === w && y === z) {
     return true
    }
  else {
    document.getElementById('result').innerHTML = "False";
    return false;
  }
}


// Write a JavaScript program that runs when 1 of 2 things are true.
function justone() {
  let w = document.getElementById('input').value;
  let x = document.getElementById('input2').value;
  let y = document.getElementById('input').value;
  let z = document.getElementById('input2').value;
  let result = document.getElementById('result');
  
  if (x === w || y === z) {
     return true
    }
  else {
    document.getElementById('result').innerHTML = "False";
    return false;
  }
}

// Write a JavaScript program that runs when both things are not true.  
function bothwrong() {
  let w = document.getElementById('input').value;
  let x = document.getElementById('input2').value;
  let y = document.getElementById('input').value;
  let z = document.getElementById('input2').value;
  let result = document.getElementById('result');
  
  if (x !== w && y !== z) {
     return true
    }
  else {
    document.getElementById('result').innerHTML = "False";
    return false;
  }
}

// ***************************
//         PART TWO
// ***************************

// 1. download Live-Server by Ritwick Dey, 
// 2. reload VS Code, 
// 3. click the "Go Live" button
// 4. Go local host 5500 or http://127.0.0.1:5500/index.html to see your web page
// 5. Or go use the `npm start` command and navigate to localhost:8080 (ctrl + C to close)
// 6. go to `index.html` 
// 7. create inputs, buttons and event listeners that render the code blocks you built above to the DOM.

const input = document.getElementById('input')
const display = document.querySelector('#display-number')
const button = document.querySelector('#numberbutton')

let str = ""

input.addEventListener('input', (event) => {
  str = event.target.value
})

button.addEventListener('click', () => {
  display.innerText = str
  console.log(str)
})



// Additional Resources
// Video1: https://player.vimeo.com/video/377147232
// Video2: https://www.youtube.com/embed/bkvH28PXLWc
// Video3: https://www.youtube.com/embed/TrGI9Yki-24//

