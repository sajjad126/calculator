// console.log("hi this is calculator");
let calcDisplay = document.getElementById("calculator_display"),
    btns = document.querySelectorAll(".calc_btn");

// jodi calculatorer button gulo click kora hoy tahole clicked button number ta display te show hoy ar jonno nice loop
for(btn of btns){
    btn.addEventListener("click", (e)=>{
        btnText = e.target.innerText;
        if(btnText == "X"){
            btnText = "*";
            if(calcDisplay.value == ""){
                calcDisplay.value = "";
            }else if(calcDisplay.value.slice((calcDisplay.value.length)-1,calcDisplay.value.length) == "*"){
                calcDisplay.value  // jodi divided oparetor ekbar click korar por ditio bar click korle ar jeno na uthe 
            }else if(calcDisplay.value.slice((calcDisplay.value.length)-1,calcDisplay.value.length) == "/"){
                calcDisplay.value = calcDisplay.value.slice(0, calcDisplay.value.length-1);
                calcDisplay.value += "*";
            }else if(calcDisplay.value.slice((calcDisplay.value.length)-1,calcDisplay.value.length) == "+"){
                calcDisplay.value = calcDisplay.value.slice(0, calcDisplay.value.length-1);
                calcDisplay.value += "*";
            }else if(calcDisplay.value.slice((calcDisplay.value.length)-1,calcDisplay.value.length) == "-"){
                calcDisplay.value = calcDisplay.value.slice(0, calcDisplay.value.length-1);
                calcDisplay.value += "*";
            }else{
                calcDisplay.value += btnText;
            }
        }else if(btnText == "/"){
            if(calcDisplay.value == ""){
                calcDisplay.value = "";
            }else if(calcDisplay.value.slice((calcDisplay.value.length)-1,calcDisplay.value.length) == "/"){
                calcDisplay.value  // jodi divided oparetor ekbar click korar por ditio bar click korle ar jeno na uthe 
            }else if(calcDisplay.value.slice((calcDisplay.value.length)-1,calcDisplay.value.length) == "*"){
                calcDisplay.value = calcDisplay.value.slice(0, calcDisplay.value.length-1);
                calcDisplay.value += "/";
            }else if(calcDisplay.value.slice((calcDisplay.value.length)-1,calcDisplay.value.length) == "+"){
                calcDisplay.value = calcDisplay.value.slice(0, calcDisplay.value.length-1);
                calcDisplay.value += "/";
            }else if(calcDisplay.value.slice((calcDisplay.value.length)-1,calcDisplay.value.length) == "-"){
                calcDisplay.value = calcDisplay.value.slice(0, calcDisplay.value.length-1);
                calcDisplay.value += "/";
            }else{
                calcDisplay.value += btnText;
            };
            if(calcDisplay.value.slice(calcDisplay.value.length-1,1) == "/"){

            }
        }else if(btnText == "+"){
            if(calcDisplay.value.slice((calcDisplay.value.length)-1,calcDisplay.value.length) == "+"){
                calcDisplay.value 
            }else if(calcDisplay.value.slice((calcDisplay.value.length)-1,calcDisplay.value.length) == "*"){
                calcDisplay.value = calcDisplay.value.slice(0, calcDisplay.value.length-1);
                calcDisplay.value += "+";
            }else if(calcDisplay.value.slice((calcDisplay.value.length)-1,calcDisplay.value.length) == "/"){
                calcDisplay.value = calcDisplay.value.slice(0, calcDisplay.value.length-1);
                calcDisplay.value += "+";
            }else if(calcDisplay.value.slice((calcDisplay.value.length)-1,calcDisplay.value.length) == "-"){
                calcDisplay.value = calcDisplay.value.slice(0, calcDisplay.value.length-1);
                calcDisplay.value += "+";
            }else{
                calcDisplay.value += "+";
            }
        }else if(btnText == "-"){
            if(calcDisplay.value.slice((calcDisplay.value.length)-1,calcDisplay.value.length) == "-"){
                calcDisplay.value 
            }else if(calcDisplay.value.slice((calcDisplay.value.length)-1,calcDisplay.value.length) == "*"){
                calcDisplay.value = calcDisplay.value.slice(0, calcDisplay.value.length-1);
                calcDisplay.value += "-";
            }else if(calcDisplay.value.slice((calcDisplay.value.length)-1,calcDisplay.value.length) == "/"){
                calcDisplay.value = calcDisplay.value.slice(0, calcDisplay.value.length-1);
                calcDisplay.value += "-";
            }else if(calcDisplay.value.slice((calcDisplay.value.length)-1,calcDisplay.value.length) == "+"){
                calcDisplay.value = calcDisplay.value.slice(0, calcDisplay.value.length-1);
                calcDisplay.value += "-";
            }else{
                calcDisplay.value += "-";
            }
        }else if(btnText == "C"){
            calcDisplay.value = "";
        }else if(btnText == "D"){
            calcDisplay.value = calcDisplay.value.slice(0, calcDisplay.value.length-1);
        }else if(btnText == "="){
            calcDisplay.value =  eval(calcDisplay.value);
        }else{
            calcDisplay.value += btnText;
        }
    })
}

window.addEventListener("keydown",(e)=>{
    switch (e.key) {
        case "0":
            calcDisplay.value += 0;
            break;
        case "1":
            calcDisplay.value += 1;
            break;
        case "2":
            calcDisplay.value += 2;
            break;
        case "3":
            calcDisplay.value += 3;
            break;
        case "4":
            calcDisplay.value += 4;
            break;
        case "5":
            calcDisplay.value += 5;
            break;
        case "6":
            calcDisplay.value += 6;
            break;
        case "7":
            calcDisplay.value += 7;
            break;
        case "8":
            calcDisplay.value += 8;
            break;
        case "9":
            calcDisplay.value += 9;
            break;
        case ".":
            calcDisplay.value += ".";
            break;
        case "+":
            calcDisplay.value += "+";
            break;
        case "-":
            calcDisplay.value += "-";
            break;
        case "*":
            calcDisplay.value += "*";
            break;
        case "/":
            calcDisplay.value += "/";
            break;
        case "(":
            calcDisplay.value += "(";
            break;
        case ")":
            calcDisplay.value += ")";
            break;
        case "Backspace":
            calcDisplay.value = calcDisplay.value.slice(0, calcDisplay.value.length-1);
            break;
        case "Enter":
            calcDisplay.value =  eval(calcDisplay.value);
            break;
        case "=":
            calcDisplay.value = eval(calcDisplay.value);
            break;
        default:
            break;
    }
})
