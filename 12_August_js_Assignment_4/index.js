const library = [];

function addBook(id, title, author){
    library.push({
        id:id,
        title:title,
        author:author,
        isBorrowed:false,

    });
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
    }
}

function returnBook(id)
{
    const bookdata = library.find((item)=>item.id===id);
    bookdata.isBorrowed = false;
}
function listAvailableBooks(){
    for(item of library)
    {
        if(item.isBorrowed === false)
        {
            console.log(item.id,item.title,item.author)
        }
    }
    
}

function searchBook(title){
    const bookdata = library.find((item)=>item.title===title);
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

console.log(library);

console.log(".....................")
addBook(5,"Money Midset","Rohit");
console.log(library);
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


