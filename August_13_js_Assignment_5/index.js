const library = [];
localStorage.setItem("library",JSON.stringify(library));

function addBook(id, title, author){
    library.push({
        id:id,
        title:title,
        author:author,
        isBorrowed:false,

    });
    localStorage.setItem("library",JSON.stringify(library));
}
function borrowBook(id)
{
    const bookdata = library.find((item)=>item.id===id);
    if(bookdata.isBorrowed)
    {
        return console.log(`${bookdata.title} is Not Available`)
    }
    else{
        bookdata.isBorrowed = true;
        localStorage.setItem("library",JSON.stringify(library));
    }
    return
}

function returnBook(id)
{
    const bookdata = library.find((item)=>item.id===id);
    bookdata.isBorrowed = false;
    localStorage.setItem("library",JSON.stringify(library));
}
function listAvailableBooks(){
    const librariran = JSON.parse(localStorage.getItem("library"))
    for(item of librariran)
    {
        if(item.isBorrowed === false)
        {
            console.log(item.id,item.title,item.author)
        }
    }
    
}

function searchBook(title){
    const librariran = JSON.parse(localStorage.getItem("library"))
    const bookdata = librariran.find((item)=>item.title===title);
    if(bookdata)
    {
        console.log(bookdata)
    }
    else 
    {
        return null;
    }
}

console.log("START START START START START .....................")

addBook(1,"Javascript","Vansh")
addBook(2,"Nodejs","Siddharth")
addBook(3,"MongoDB","Vansh")
addBook(4,"React","Eshan")

var librariran = JSON.parse(localStorage.getItem("library"))
console.log(librariran);

console.log(".....................")
addBook(5,"Money Midset","Rohit");

librariran = JSON.parse(localStorage.getItem("library"))
console.log(librariran);
console.log(".....................")
borrowBook(3);
listAvailableBooks();
console.log(".....................")
borrowBook(3);
listAvailableBooks();
console.log(".....................")
returnBook(3);
listAvailableBooks();
console.log(".....................")
searchBook("React")
console.log(".....................")

console.log("END END END END END .....................")


