var audio= document.getElementById("audioMusic")



// Function that display value
function dis(val) {
    document.getElementById("result").value += val;
    audio.play()
     }


function myFunction(event) {
    if (event.key == '0' || event.key == '1'
        || event.key == '2' || event.key == '3'
        || event.key == '4' || event.key == '5'
        || event.key == '6' || event.key == '7'
        || event.key == '8' || event.key == '9'
        || event.key == '+' || event.key == '-'
        || event.key == '*' || event.key == '/')
        document.getElementById("result").value += event.key;
}


var cal = document.getElementById("calcu");
cal.onkeyup = function (event) {
    if (event.keyCode === 13) {
        console.log("Enter");
        let x = document.getElementById("result").value
        console.log(x);
        solve();
    }
}


function back() {
    var value = document.getElementById("result").value;
    document.getElementById("result").value = value.substr(0, value.length - 1);
    audio.play()
}


// Function that evaluates the digit and return result
function solve() {
    let x = document.getElementById("result").value
    let y = math.evaluate(x)
    document.getElementById("result").value = y
}


// Function that clear the display
function clr() {
    document.getElementById("result").value = "";
    audio.play()
}

function calculate() {
    var p = document.getElementById("result").value;
    var q = eval(p);
    document.getElementById("result").value = q;
    audio.play()
}


function e() {
    try {
        c(eval(document.getElementById("result").value))
    }
    catch (e) {
        c('Error')
    }
}