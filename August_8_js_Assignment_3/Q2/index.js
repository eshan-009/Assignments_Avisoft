let arr = [1,2,3,4,5,"Mango",9,6,"Apple","p",10];

let i=arr.length;
var sum=0;

// console.log(typeof(i));
for(let i of arr)
{
    if(typeof(i)=== "number")
    {
        sum = sum+i;
    
    }
}
console.log("Sum of all the numerical values",sum);