"use strict";
function onButtonClick() {
    let inputValue = document.getElementById('inputBox').value;
    let textToDisplay;
        if (inputValue === '') {
            textToDisplay = 'null';
        } else if (isNaN(inputValue)) {
            textToDisplay = `string ${inputValue.substring(0,3)}`;
        } else {
            let num = parseFloat(inputValue);
            textToDisplay = `number ${num.toFixed(3)}`;
        }
        document.getElementById('outputText').innerHTML = textToDisplay;
    }