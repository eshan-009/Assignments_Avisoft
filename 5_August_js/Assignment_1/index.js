let interest = document.querySelector("[interest]");

let interestAmount;



let Principal = prompt("Please enter Principal amount");

let RateOfInterest = prompt("Please enter rate of Interest(Per Annum)");

let Timeperiod = prompt("Please enter Time Period(Years)");

interestAmount = (Principal * RateOfInterest * Timeperiod)/100;
console.log(interestAmount);

interest.innerHTML = interestAmount;