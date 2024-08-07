alert("Select one option below to perform an operation \n 1) Addition \n 2) Subtraction \n 3) Multiplication \n 4) Division");

let action = parseInt(prompt("Choose Operation"))

let Number1 = parseInt(prompt("Enter Number 1"));

let Number2 = parseInt(prompt("Enter Number 2"));
var res;

switch(action)
{
    case 1:
        res = Number1 + Number2;
        alert(res);
        break;
    case 2:
            if(Number1>Number2)
            {
                res = Number1 - Number2
                // alert(res)
            }
            else
            {
               res=  Number2-Number1
            
            }
            alert(res);
            break;
    case 3:
            res = Number1 * Number2
            alert(res);
            break;
    case 4:
        if(Number2 === 0)
        {
             alert("Number 2 cant be  zero for division")
        }
        else{
            res = Number1/Number2
        }
        alert(res);
        break;
}

