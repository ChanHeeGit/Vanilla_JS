
//Array
const myName = "Lee Chan Hee"

const dayday = ["Mon", "2", "3", "4", "5", "6", "ooMM", myName]; 
console.log(dayday); 

//Objects
const objj = {
    name : "LeeChanHee",
    age : 26,
    gender : "Male",
    fav : ["ala", "trans", "loge"], // object 안에 array 넣기 가능
    favFood: [
            {name:"kimchi", fatty : false},
            {name:"hamburger", fatty: true} 
             ]
}

objj.name = "chaneeee"; // 변경 가능 

console.log(objj);
console.log(objj.age); // age 에만 접근
console.log(objj.fav[0]);