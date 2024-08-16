const student ={
    Name:"Eshan",
    Age:"12",
    Grade:"90",
    subject:["Math","English","Hindi"],
}

function displayInfo(message1,message2='',message3=''){

    console.log(this.Name,this.Age,this.Grade,this.subject);
    console.log(message1);
    console.log(message2);
    console.log(message3);
  
}

displayInfo.call(student,"Message : Hi I am a Student");
console.log(".............................................");

const boundDisplayInfo = displayInfo.bind(student,"Message : Hi I am a Student");
boundDisplayInfo();

console.log(".............................................");

displayInfo.apply(student,["Message1 : Hi I am a Student","Message2 : Hi I am Not Student","Message3 : Hi I am Not Student"])

console.log(".............................................");

const arr = student.subject;

function processSubjects(arr,fn){
    let i=1;
for(let sub of arr)
{
    
   console.log(fn(sub,i));
   i++;
}
}

function fn(sub,i){
return `Subject ${i} : `+sub;
}

processSubjects(arr,fn);

console.log(".............................................");
const grades = {"Math":100,
    "English": 90,
    "Hindi": 60,
    "SST" : 65,
};

console.log(grades)

console.log(".............................................");
const mapit = (grades)=>{
return  Object.fromEntries(Object.entries(grades).map(([a,b])=>[a,b*2]))
}
const mapresult = mapit(grades);
console.log(mapresult);


console.log(".............................................");
const filterit = (grades)=>{
    return  Object.fromEntries(Object.entries(grades).filter(([a,b])=>{ 
        if(b>=70)
        {
            return [a,b]
        }
        else
        {
            return null;
        }
    }))
}
const filterresult = filterit(grades);
console.log(filterresult);







// function gradeaction(grades,fn){
// let res = [];

// for(i in grades)
// {
   
//     res.push(fn(i,grades));
// }
// return res;
// }

// const result1 = gradeaction(grades,doubleGrades);
// const result2 = gradeaction(grades,filtergrades);

// function doubleGrades(i,grades){
//     return grades[i]*2;
// }

// function filtergrades(i,grades){
//     if(grades[i] >=70)
//     {
//         return  i;
//     }
//     else
//     return  
    
// }

// console.log(result2);