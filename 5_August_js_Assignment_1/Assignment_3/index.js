let interest = document.querySelector("[finalmessage]");

let finalMessage="";

let errormess = "Please enter"

let Name = prompt("Please enter Name");

let greeting = prompt("Please enter Greeting");
finalMessage = greeting + " "+ Name;
if(!Name || !greeting)
{
    finalMessage = "Please enter in Prompt"
}

console.log(finalMessage);
interest.innerHTML = finalMessage;