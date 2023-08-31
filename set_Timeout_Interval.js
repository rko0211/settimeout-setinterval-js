alert("Hello world");
let timerid = setTimeout(function () {
    // alert("I am in side setTimeout")
    document.write("I am inside setTimeout")
}, 3000);
let b = prompt("Do you want to run setTimeout( y/n) ");
if (b == "n") {
    clearTimeout(timerid);
}

console.log(timerid);


// Syntax for setTimeout

// let timerid = setTimeout(function, delay, arg1, arg2);

const sum = (a, b) => {
    console.log("We are in setTime out " + (a + b));
}

// setTimeout is a global function
let T_id = setTimeout(sum, 3000, 1, 2);


// setInterval function always runs after particular time interval
// It is just like infinite while loop

let t_id = setInterval(function(){
    alert("I am inside setInterval")
},5000);

clearInterval(t_id);

