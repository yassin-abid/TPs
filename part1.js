  
//ex1

  var a = 1;
  let b = 2;
  const c = 3;
  console.log("Avant bloc : var a=", a, ", let b=", b, ", const c=", c);

  {
    var a = 10;    
    let b = 20;    
    const c = 30;  
    console.log("Dans bloc : var a=", a, ", let b=", b, ", const c=", c);
  }
  //const c = 8 ;
  console.log("Après bloc : var a=", a, ", let b=", b, ", const c=", c);
  

//ex2


const somme = (a, b) => a + b;
console.log("somme(3,4) =", somme(3,4));


//ex3


const user = { name: "Noor", age: 10, city: "Tunis" };
const { name , age } = user;
console.log( name , age);


//ex4

const arr1 = [1,2,3];
const arr2 = [4,5,6];
//console.log(" arr1 =", ...arr1);
const fusion = [...arr1, ...arr2];
console.log(" fusion =", fusion);

const book = { title: "Le Petit Prince", author: "Antoine", year: 1943 };
const bookCopy = { ...book, year: 2025 };
console.log(" copie  =", bookCopy);

