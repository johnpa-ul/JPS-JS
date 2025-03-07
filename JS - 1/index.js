const num1Txt = document.getElementById("num1");
const num2Txt = document.getElementById("num2");
const resultTxt = document.getElementById("sum");
const resultTxt2 = document.getElementById("dif");
const resultTxt3 = document.getElementById("pro");
const resultTxt4 = document.getElementById("quo");
let sum = 0;
let dif = 0;
let pro = 0;
let quo = 0;

function newFunction() {
    int; sum = 0;
    int; dif = 0;
    int; pro = 0;
    int; quo = 0;
}

function calculate() {
    if(!(num1Txt.value === "" || num2Txt.value === "")) {
        
        sum = parseInt(num1Txt.value) + parseInt(num2Txt.value);
        resultTxt.innerHTML = sum;
        
    }
    if(!(num1Txt.value === "" || num2Txt.value === "")) {
    dif = parseInt(num1Txt.value) - parseInt(num2Txt.value);
        resultTxt2.innerHTML = dif;
    }
    if(!(num1Txt.value === "" || num2Txt.value === "")) {
        pro = parseInt(num1Txt.value) * parseInt(num2Txt.value);
            resultTxt3.innerHTML = pro;
    }
    if(!(num1Txt.value === "" || num2Txt.value === "")) {
        quo = parseInt(num1Txt.value) / parseInt(num2Txt.value);
            resultTxt4.innerHTML = quo;
    }
}

function clearEntries() {
    num1Txt.value = "";
    num2Txt.value = ""
    resultTxt.innerHTML = "";
    resultTxt2.innerHTML = "";
    resultTxt3.innerHTML = "";
    resultTxt4.innerHTML = "";
}