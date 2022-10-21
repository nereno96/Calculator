"use strict";

window.onload = init;

function init() 
{
const addBtn = document.getElementById("addBtn");
addBtn.onclick = onAddBtnClicked;

const subtBtn = document.getElementById("subBtn");
subtBtn.onclick = onSubBtnClicked;

const mulBtn = document.getElementById("mulBtn");
mulBtn.onclick = onMulBtnClicked;

const divBtn = document.getElementById("divBtn");
divBtn.onclick = onDivBtnClicked;
}

function onAddBtnClicked() 
{
    const num1 = document.getElementById("number1Field");
    let number1 = Number(num1.value);
    const num2 = document.getElementById("number2Field");
    let number2 = Number(num2.value);

    let answer = number1 + number2;

    const ans = document.getElementById("answerField");
    ans.value = answer;

}

function onSubBtnClicked() 
{
    const number1Field = document.getElementById("number1Field");
    let number1 = number1Field.value
    const number2Field = document.getElementById("number2Field");
    let number2 = number2Field.value

    let answer = Number(number1) - Number(number2)

}


function onMulBtnClicked() 
{
    const number1Field = document.getElementById("number1Field");
    let number1 = number1Field.value
    const number2Field = document.getElementById("number2Field");
    let number2 = number2Field.value

    let answer = Number(number1) * Number(number2)
}

function onDivBtnClicked() 
{
    const number1Field = document.getElementById("number1Field");
    let number1 = number1Field.value
    const number2Field = document.getElementById("number2Field");
    let number2 = number2Field.value

    let answer = Number(number1) / Number(number2)
}