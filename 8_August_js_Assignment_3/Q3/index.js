const showposition = (guess,random,guesscount)=>{
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
const generateRandom = ()=>(Math.floor(Math.random()*100));
const guessIt = ()=>parseInt(prompt("Guess the number between 0 to 100"));
const playagain = ()=>parseInt(prompt("Enter 1 to play again"));
const startgame = (start,guess,guesscount)=>{
    do
{    
const random = generateRandom();
console.log(random);
while(guess!==random)
{
        guess = guessIt();
        guesscount++;
        showposition(guess,random,guesscount); 
    }
    start=0;
    guess=-1;
    guesscount=0;
    
start = playagain()
}while(start===1);
}

alert("Welcome to the Game");


var start=1;
var guess=-1;
var guesscount =0;



startgame(start,guess,guesscount); 