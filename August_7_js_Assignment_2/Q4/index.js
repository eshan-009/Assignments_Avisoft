alert("Welcome to the Game");
var start=1;

var guess=-1;
var guesscount =0;

do
{
    
const random = Math.floor(Math.random()*100)
console.log(random);

while(guess!==random)
{
    
        guess = parseInt(prompt("Guess the number between 0 to 100"));
        guesscount++;
        if(guess === random)
        {
            alert(`Congratulations you guessed it right \n Your Number of guesses are ${guesscount}`) ;
        }
        else if(Math.abs(guess-random)<10)
        {
            alert("too close")
        }
        else if(Math.abs(guess-random)<20)
            {
                alert("Close")
            }
        else if(Math.abs(guess-random)<40)
            {
                alert("Far")
            }
            else{
                alert("Too Far")
            }
    
    }

    start =0;
    guess=0;
    guesscount=0;
    
    start = parseInt(prompt("Enter 1 to play again"));
}while(start===1);