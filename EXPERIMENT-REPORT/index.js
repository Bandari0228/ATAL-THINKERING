import createexpform, { queryById } from "./database.js"
import multiForm from "./multi-form.js"

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
    if (count2 < 50) {
        ++count2;
        const btndiv = document.getElementById("btndiv2");
        var division = document.createElement("div");
        var input = document.createElement("input");
        input.setAttribute("id", "2-" + count2)
        input.type = "text";
        division.appendChild(input);
        btndiv2.appendChild(division);
    } else {
        alert("Can't add more than 50 inputs!");
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
    if (count3 < 50) {
        ++count3;
        const btndiv = document.getElementById("btndiv3");
        var division = document.createElement("div");
        var input = document.createElement("input");
        input.setAttribute("id", "3-" + count3)
        input.type = "text";
        division.appendChild(input);
        btndiv3.appendChild(division);
    } else {
        alert("Can't add more than 50 inputs!");
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
    if (count4 < 50) {
        ++count4;
        const btndiv = document.getElementById("btndiv4");
        var division = document.createElement("div");
        var input = document.createElement("input");
        input.setAttribute("id", "4-" + count4)
        input.type = "text";
        division.appendChild(input);
        btndiv4.appendChild(division);
    } else {
        alert("Can't add more than 50 inputs!");
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
    if (count5 < 50) {
        ++count5;
        const btndiv = document.getElementById("btndiv5");
        var division = document.createElement("div");
        var input = document.createElement("input");
        input.setAttribute("id", "5-" + count5)
        input.type = "text";
        division.appendChild(input);
        btndiv5.appendChild(division);
    } else {
        alert("Can't add more than 50 inputs!");
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
    if (count6 < 50) {
        ++count6;
        const btndiv = document.getElementById("btndiv6");
        var division = document.createElement("div");
        var input = document.createElement("input");
        input.setAttribute("id", "6-" + count6)
        input.type = "text";
        division.appendChild(input);
        btndiv6.appendChild(division);
    } else {
        alert("Can't add more than 50 inputs!");
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
    if (count7 < 50) {
        ++count7;
        const btndiv = document.getElementById("btndiv7");
        var division = document.createElement("div");
        var input = document.createElement("input");
        input.setAttribute("id", "7-" + count7)
        input.type = "text";
        division.appendChild(input);
        btndiv7.appendChild(division);
    } else {
        alert("Can't add more than 50 inputs!");
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
    if (count8 < 50) {
        ++count8;
        const btndiv = document.getElementById("btndiv8");
        var division = document.createElement("div");
        var input = document.createElement("input");
        input.setAttribute("id", "8-" + count8)
        input.type = "text";
        division.appendChild(input);
        btndiv8.appendChild(division);
    } else {
        alert("Can't add more than 50 inputs!");
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
    alert("sumbitted succesfully")
    var a=document.getElementById("feild2").value;
    var b=document.getElementById("feild1").value;
    var c=document.getElementById("feild3").value;
    var goals = multiForm(count2, "2");
    var materials = multiForm(count3, "3");
    var instruction=multiForm(count4,"4");
    var tips=multiForm(count5,"5"); 
    var assement=multiForm(count6,"6");
    var extension=multiForm(count7,"7");
    var resource=multiForm(count8,"8");



    createexpform(a, b, c, goals, materials,instruction,    tips, assement, extension, resource );


}


document.getElementById("searchbtn").addEventListener("click", async () => {
    // Query
    console.log("Clicked Search");
    var element = document.getElementById("feild2");
    let fetchedData = await queryById(element.value);
});

const btn = document.getElementById('submitbtn');

btn.addEventListener('click', function handleClick(event) {
  // 👇️ if you are submitting a form (prevents page reload)
  event.preventDefault();

  const first = document.getElementById('feild2');
  const second= document.getElementById('feild1');
  const third= document.getElementById('feild3');
  const fourth = document.getElementById('2-1');
  const fifth = document.getElementById('3-1');
  const sixth = document.getElementById('4-1');
  const seventh = document.getElementById('5-1');
  const eightth = document.getElementById('6-1');
  const ninth = document.getElementById('7-1');
  const tenth = document.getElementById('8-1');
  

//   // Send value to server
//   console.log(firstNameInput.value);

  // 👇️ clear input field
  first.value = '';
  second.value = '';
  third.value = '';
  fourth.value ='';
  fifth.value = '';
  sixth.value = '';
  seventh.value = '';
  eightth.value = '';
  ninth.value = '';
  tenth.value='';
});
