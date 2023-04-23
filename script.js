'use strict'

//ES6
//--DESTRUCTING--

//.1.

let person ={
  name: 'AJAY',
  age: '20',
  address: 'NEPAL',
}

let {
   name: myname, 
   age: myage, 
   address: myaddress} = person

console.log(myname)
console.log(myage)
console.log(myaddress);


//.2.

function getfullname (name){
  let {firstname, lastname }= name
  return firstname + lastname
}

let name = { firstname: 'ANZAY', lastname: ' GIRI'}
let fullname = getfullname(name)
console.log(fullname)


//--SPREAD OPERATOR--
//.1.

let array1 = [1,2,3]
let array2 = [4,5,6]

let array3 = [...array1,...array2]
console.log(array3)


//.2.

let numbers = [10,20,30,40,50]

function getlargest(numbers){
  return Math.max(...numbers)
}

let largestnum = getlargest(numbers)
console.log(largestnum)


//--REST OPERATOR--
//.1.

let sum = function(...parameters){
  let sum = 0
  for (let i = 0; i < parameters.length; i = i +1){
      sum += parameters[i]
  }
  console.log('Sum', + sum)

}
sum (10,20,30,40,50)


