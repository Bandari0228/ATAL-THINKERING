import createexpform from "./database.js"

document.getElementById("btn2").addEventListener("click", fun2);
document.getElementById("btn3").addEventListener("click", fun3);
document.getElementById("btn4").addEventListener("click", fun4);
document.getElementById("btn5").addEventListener("click", fun5);
document.getElementById("btn6").addEventListener("click", fun6);
document.getElementById("btn7").addEventListener("click", fun7);
document.getElementById("btn8").addEventListener("click", fun8);

document.getElementById("dbtn2").addEventListener("click", dfun2);
document.getElementById("dbtn3").addEventListener("click", dfun3);
document.getElementById("dbtn4").addEventListener("click", dfun4);
document.getElementById("dbtn5").addEventListener("click", dfun5);
document.getElementById("dbtn6").addEventListener("click", dfun6);
document.getElementById("dbtn7").addEventListener("click", dfun7);
document.getElementById("dbtn8").addEventListener("click", dfun8);

let count2 = 1;
let count3 = 1;
let count4 = 1;
let count5 = 1;
let count6 = 1;
let count7 = 1;
let count8 = 1;

function fun2() {
    if (count2 < 10) {
        ++count2;
        const btndiv = document.getElementById("btndiv2");
        var division = document.createElement("div");
        var input = document.createElement("input");
        input.setAttribute("id", "2-" + count2)
        input.type = "text";
        division.appendChild(input);
        btndiv2.appendChild(division);
    } else {
        alert("Can't add more than 10 inputs!");
    }
}

function dfun2() {
    if (count2 != 1) {
        --count2;
        const btndiv = document.getElementById('btndiv2');
        let last = btndiv.childNodes[btndiv.childNodes.length - 1];
        last.parentNode.removeChild(last);
    } else {
        alert("Can't remove the last input field!");
    }
}

function fun3() {
    if (count3 < 10) {
        ++count3;
        const btndiv = document.getElementById("btndiv3");
        var division = document.createElement("div");
        var input = document.createElement("input");
        input.setAttribute("id", "3-" + count3)
        input.type = "text";
        division.appendChild(input);
        btndiv3.appendChild(division);
    } else {
        alert("Can't add more than 10 inputs!");
    }
}

function dfun3() {
    if (count3 != 1) {
        --count3;
        const btndiv = document.getElementById('btndiv3');
        let last = btndiv.childNodes[btndiv.childNodes.length - 1];
        last.parentNode.removeChild(last);
    } else {
        alert("Can't remove the last input field!");
    }
}

function fun4() {
    if (count4 < 10) {
        ++count4;
        const btndiv = document.getElementById("btndiv4");
        var division = document.createElement("div");
        var input = document.createElement("input");
        input.setAttribute("id", "4-" + count4)
        input.type = "text";
        division.appendChild(input);
        btndiv4.appendChild(division);
    } else {
        alert("Can't add more than 10 inputs!");
    }
}

function dfun4() {
    if (count4 != 1) {
        --count4;
        const btndiv = document.getElementById('btndiv4');
        let last = btndiv.childNodes[btndiv.childNodes.length - 1];
        last.parentNode.removeChild(last);
    } else {
        alert("Can't remove the last input field!");
    }
}

function fun5() {
    if (count5 < 10) {
        ++count5;
        const btndiv = document.getElementById("btndiv5");
        var division = document.createElement("div");
        var input = document.createElement("input");
        input.setAttribute("id", "5-" + count5)
        input.type = "text";
        division.appendChild(input);
        btndiv5.appendChild(division);
    } else {
        alert("Can't add more than 10 inputs!");
    }
}

function dfun5() {
    if (count5 != 1) {
        --count5;
        const btndiv = document.getElementById('btndiv5');
        let last = btndiv.childNodes[btndiv.childNodes.length - 1];
        last.parentNode.removeChild(last);
    } else {
        alert("Can't remove the last input field!");
    }
}

function fun6() {
    if (count6 < 10) {
        ++count6;
        const btndiv = document.getElementById("btndiv6");
        var division = document.createElement("div");
        var input = document.createElement("input");
        input.setAttribute("id", "6-" + count6)
        input.type = "text";
        division.appendChild(input);
        btndiv6.appendChild(division);
    } else {
        alert("Can't add more than 10 inputs!");
    }
}
function dfun6() {
    if (count6 != 1) {
        --count6;
        const btndiv = document.getElementById('btndiv6');
        let last = btndiv.childNodes[btndiv.childNodes.length - 1];
        last.parentNode.removeChild(last);
    } else {
        alert("Can't remove the last input field!");
    }
}
function fun7() {
    if (count7 < 10) {
        ++count7;
        const btndiv = document.getElementById("btndiv7");
        var division = document.createElement("div");
        var input = document.createElement("input");
        input.setAttribute("id", "7-" + count7)
        input.type = "text";
        division.appendChild(input);
        btndiv7.appendChild(division);
    } else {
        alert("Can't add more than 10 inputs!");
    }
}
function dfun7() {
    if (count7 != 1) {
        --count7;
        const btndiv = document.getElementById('btndiv7');
        let last = btndiv.childNodes[btndiv.childNodes.length - 1];
        last.parentNode.removeChild(last);
    } else {
        alert("Can't remove the last input field!");
    }
}






function fun8() {
    if (count8 < 10) {
        ++count8;
        const btndiv = document.getElementById("btndiv8");
        var division = document.createElement("div");
        var input = document.createElement("input");
        input.setAttribute("id", "8-" + count8)
        input.type = "text";
        division.appendChild(input);
        btndiv8.appendChild(division);
    } else {
        alert("Can't add more than 10 inputs!");
    }
    console.log(count8);
}
function dfun8() {
    const btndiv = document.getElementById('btndiv8');
    if (count8 != 1) {
        --count8;
        let last = btndiv.childNodes[btndiv.childNodes.length - 1];

        last.parentNode.removeChild(last);
    } else {
        alert("Can't remove the last input field!");
    }
    console.log(count8);
}


document.getElementById("submitbtn").addEventListener("click", () => {
    submitbtn();
});

function submitbtn() {
    console.log("Submit Button Clicked");
    var a = document.getElementById("feild1").value
    console.log(a)
    var b = document.getElementById("feild2").value
    console.log(b)
    var c = document.getElementById("feild3").value
    console.log(c)
    var d = document.getElementById("feild4").value
    console.log(d)
    var e = document.getElementById("feild5").value
    console.log(e)
    var f = document.getElementById("feild6").value
    console.log(f)
    var g = document.getElementById("feild7").value
    console.log(g)
    var h = document.getElementById("feild8").value
    console.log(h)
    var i = document.getElementById("feild9").value
    console.log(i)
    var x = document.getElementById("feild0").value
    console.log(x)

    alert("sumbitted succesfully")
    console.log(a, b, c, d, e, f, g, h, i, x);
    createexpform(a, b, c, d, e, f, g, h, i, x);
}


const btn = document.getElementById('submitbtn');

btn.addEventListener('click', function handleClick(event) {
  // 👇️ if you are submitting a form (prevents page reload)
  event.preventDefault();

  const first = document.getElementById('feild1');
  const second= document.getElementById('feild2');
  const third= document.getElementById('feild3');
  const fourth = document.getElementById('feild4');
  const fifth = document.getElementById('feild5');
  const sixth = document.getElementById('feild6');
  const seventh = document.getElementById('feild7');
  const eightth = document.getElementById('feild8');
  const ninth = document.getElementById('feild9');
  const tenth = document.getElementById('feild0');

//   // Send value to server
//   console.log(firstNameInput.value);

  // 👇️ clear input field
  first.value = '';
  second.value = '';
  third.value = '';
  fourth.value = '';
  fifth.value = '';
  sixth.value = '';
  seventh.value = '';
  eightth.value = '';
  ninth.value = '';
  tenth.value='';
});
