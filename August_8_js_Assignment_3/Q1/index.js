
const add = (a,b)=>{
    alert(a+b) 
}
const sub = (a,b)=>{
    alert(Math.abs(a-b))

}
const mul = (a,b)=>{
    alert(a*b)

}
const div = (a,b)=>{
    if(b===0)
    {
        return alert("Denominator can't be zero");
    }
    alert(a/b)

}

const Number1 = parseInt(prompt("Enter  Number 1"));
const Number2 = parseInt(prompt("Enter  Number 2"));
const choice = parseInt(prompt("Enter one Operation from below\n1)Addition\n2)Subtraction\n3)Multiplivation\n4)Divison"));

switch(choice)
{
    case 1 :

    add(Number1,Number2);
    break;

    case 2 :
    sub(Number1,Number2);
    break;

    case 3 :
        mul(Number1,Number2);
    break;

    case 4 :
        div(Number1,Number2);
    break;

    default:
        alert("No Option Selected");
}