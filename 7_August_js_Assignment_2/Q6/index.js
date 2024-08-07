let marks = parseInt(prompt("Enter your marks out of 100"));

if(marks>=95 && marks<=100)
{
    alert("Grade A+")
}
else if(marks>=90 && marks<95)
{
    alert("Grade A")
}
else if(marks>=80 && marks<90)
    {
        alert("Grade B+")
    }
    else if(marks>=70 && marks<80)
        {
            alert("Grade B")
        }
        else if(marks>=60 && marks<70)
            {
                alert("Grade C+")
            }
            else if(marks>=50 && marks<60)
                {
                    alert("Grade C")
                }
                else if(marks>=40 && marks<50)
                    {
                        alert("Grade D")
                    }
                    else if(marks<40 && marks>=0)
                        {
                            alert("Grade F")
                        }
                        else
                        {
                            alert("Enter Valid Marks")
                        }