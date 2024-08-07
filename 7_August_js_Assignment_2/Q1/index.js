let value = prompt("Enter any value to check if truthy or falsy");



var res;

console.log(value.length)
if(value.length>2)
{
      res = Boolean(value);
}
else{ 

 res = Boolean(Number(value));
    }


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