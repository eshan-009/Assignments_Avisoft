let finalvalue = document.querySelector("[finalvalue]");

let result;



var Valuetoconvert = prompt("Please enter Valuetoconvert (Meter or Centi-meter)");

const beforUnit = prompt("Please enter unit of value (Meter or Centi-meter)");

const afterUnit = prompt("Please enter the unit you want to convert to (Meter or Centi-meter)");

if(beforUnit === 'cm' || 'Cm')
{
   
    switch(afterUnit)
    {
         case 'M':
         case 'm' :
        result = Valuetoconvert/100;
        break;

        case 'Mm':
        case 'MM':
        case 'mm':
        result = Valuetoconvert*10;
        break;
    }
}
if(beforUnit === 'M' || 'm')
{
    console.log("beforUnit",beforUnit);
    switch(afterUnit)
    {
         case 'Cm':
         case 'CM':
         case 'cm' :
        result = Valuetoconvert*100;
        break;

        case 'Mm':
        case 'MM':
        case 'mm':
        result = Valuetoconvert*1000;
        break;
    }
}
console.log(result);
finalvalue.innerHTML = result;