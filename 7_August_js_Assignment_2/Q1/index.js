var value ;

let choice = parseInt(prompt("Enter 1 if you want to enter string\nEnter 2 if you want to enter Number"));


if(choice === 1)
{
   value = prompt("Enter any value to check if truthy or falsy")
   console.log("value",Boolean(value));
}
else
{
   value= parseInt(prompt("Enter any value to check if truthy or falsy"))
}


var res = Boolean(value);

    


 if(res)
{
    document.write("Value is truthy")
    alert("Value is truthy");
}
else
{
    document.write("Value is Falsy")
    alert("Value is falsy");
}