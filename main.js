function appendToDisplay(value)
{
    document.getElementById('display').value += value;
}
function clearDisplay()
{
    document.getElementById('display').value='';
}
function calculateResult()
{
    let display=document.getElementById('display');
    try
    {
        display.value=eval(display.value);
        // display.value=new function('return'+display.value)();
    }
    catch(error)
    {
        display.value ='error';
    }
}
function deletelast()
{
    display.value=display.value.slice(0,-1);
}