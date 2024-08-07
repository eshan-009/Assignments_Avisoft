var start = parseInt(prompt("Enter 1 to start the game "));

var guess;
var guesscount =0;

while(start)
{
    const random = Math.floor(Math.random()*100)
console.log(random);
    
    do{
        guess = parseInt(prompt("Guess the number between 0 to 100 \nEnter number greater than 100 to stop"));
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
            else if(guess>100)
            {
                alert("Game Terminated");
            }
            else{
                alert("Too Far")
            }
    
    }while(guess!==random && guess<=100);

    start =0;
    
    start = parseInt(prompt("Enter 1 to play again"));
}