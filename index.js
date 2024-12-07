let presentDisplay = "0";
let resultDisplay = "false";
function appendToDisplay(value)
{
    if(presentDisplay === "0" || resultDisplay)
    {
        presentDisplay = value;
        resultDisplay  = false;
    }
    else{
        presentDisplay = presentDisplay + value;
    }
    resultDisplay = false;
    updateDisplay();
}
function updateDisplay()
{
    const displayElement = document.getElementById("display");
    displayElement.textContent = presentDisplay;
}
function calculateResult()
{
    try {
        const result = eval(presentDisplay);
        presentDisplay += "\n" + result.toString();
        updateDisplay();
    } catch (error) {
        presentDisplay += "\n + Error";
        updateDisplay();
    }
    resultDisplay = true;
}
function clearLastElement()
{
    presentDisplay = presentDisplay.slice(0,-1);
    if(presentDisplay === "")
    {
        presentDisplay = "0";
    }
    updateDisplay();
}
function clearDisplay()
{
    presentDisplay = "0";
    resultDisplay = false;
    updateDisplay();
}





