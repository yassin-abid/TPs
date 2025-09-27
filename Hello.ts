let msg : String ="Hello, TypeScript!";
console.log(msg);

// ex2
let name:string = "yassine" ;
let age:number = 21;
let isAdmin:boolean = true;

let scores : number[] = [100, 90, 80];


let etudiant : [string, number] = ["Alice", 20];

enum Role { User, Admin, SuperAdmin }
let Myrole: Role = Role.SuperAdmin;
console.log(Myrole);

// ex3
let id : number | string = 101  ;
type A = { id :number};
type B = {name : string } ;
type c = B & A ;
let user : c = {id : 1 , name : "yassine"} ;
console.log(user);
type Status = "pending" | "done" | "canceled";
let stat : Status = "done" ;

let x:unknown ='203';
let longueur : number = (x as string).length ;
console.log(longueur);

//ex4
interface user {
    id : number ;
    name : string ;
    email ?: string ; 
    readonly isAdmin : boolean ;
}
let user1: user = {id : 1 , name : "yassine" , isAdmin : true} ;

interface Admin extends user {
    permissions : Array<string> ;
}
let admin1 : Admin = {id : 2 , name : "Abouda" , isAdmin : true , permissions : ["read" , "write"]} ;
console.log(admin1);

//ex5
/*function add (x:number , y:number) : number {
    return x + y ;
}
console.log(add(5,10));*/

function greet (name : string , age?:number) : string {
    if (age) {
        return `Hello, my name is ${name} and I am ${age} years old.`;
    } else {
        return `Hello, my name is ${name}.`;
    }
}
console.log(greet("yassine" , 21));
console.log(greet("yassine"));

function power (base : number , exp:number = 2) : number {  
    let p:number = base ;
    for (let i = 1 ; i < exp ; i++) {
        p = p * base ;

    }
    return p ;
}
console.log(power(2));
console.log(power(2,3));

function combine(a: number, b: number): number;
function combine(a: string, b: string): string;
function combine(a: any, b: any): any {
    return a + b;
}


console.log(combine(2, 3));         
console.log(combine("ab", "cd"));   

//ex6
class Person {
    name: string;
    age: number;

    constructor(name : string , age :number) {
        this.name = name;
        this.age = age;
    }    
    greet() : void {
        console.log(`Hello, my name is ${this.name} and I am ${this.age} years old.`);
    }
}
let person1 = new Person("yassine" , 21);
person1.greet();

class Student extends Person {
    school : string ;
    constructor(name : string , age :number , school : string) {
        super(name , age) ;
        this.school = school ;
    }   
}

abstract class Shape {
    abstract area() : number ;
    }

class Circle extends Shape {
    radius: number;

    constructor(radius: number) {
        super();
        this.radius = radius;
    }

    area(): number {
        return Math.PI * this.radius * this.radius;
    }
}

class Rectangle extends Shape {
    width: number;
    height: number;

    constructor(width: number, height: number) {
        super();
        this.width = width;
        this.height = height;
    }

    area(): number {
        return this.width * this.height;
    }
}

interface Drivable {
    drive(): void;
}

class Car implements Drivable {
    drive(): void {
        console.log("The car is driving.");
    }
}
//ex7
function indentity<T>(arg: T): T{
    return arg ;
}

function getFirst<T>(arr: T[]): T | undefined   {  //undefined for the case where the first element is empty
    return arr[0] ;
}

class Repository<T> {
private items: T[] = [];
add(item: T): void {
    this.items.push(item);
}
remove(item: T): void {
    const index = this.items.indexOf(item);
    if (index != -1) {
        this.items.splice(index, 1);
    }    
}
getAll(): T[] {
    return this.items;

    
}
}

interface ApiResponse<T> {
    data: T;
    error?: string;

}

//ex8
import { add } from "./math";
console.log(add(5, 10));


import type { User } from "./types";
let user2: User = { id: 1, name: "yassine"};
console.log(user2);

