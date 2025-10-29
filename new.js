class Animal {
    makeSound(){
        throw new Error();
    }
}

class Dog extends Animal{
    makeSound(){

        console.log("Dog is barking");
    }

}

class Cat extends Animal{
    makeSound(){
        console.log("meow");
    }
}

let dog =new Dog();
dog.makeSound();

let cat = new Cat();
cat.makeSound();




// class Laptop {

//   constructor() {
//     if (this.constructor == Laptop) {
//       throw new Error();
//     }
//   }

//   started() {
//     throw new Error();
//   }
// }

// class Hp extends Laptop {
//   started() {
//     console.log("Laptop is started");
//   }
// }


// let obj = new Hp();
// obj.started();







// // Parent Class
// class Animal {
//   sound() {
//     console.log("Animal makes a sound");
//   }
// }

// // Child Class (inherits Animal)
// class Dog extends Animal {
//   bark() {
//     console.log("Dog barks: Woof Woof!");
//   }
// }

// const d = new Dog();
// d.sound(); // ✅ Inherited from Animal
// d.bark();  // ✅ Own method


let studentarray=[];
studentarray.push({
    "name" : "rohit",
    "id" : studentarray.length+1,
}
)

studentarray.push({
    "name" : "vicky",
    "id" : studentarray.length+1,
}
)

 let index=studentarray.findIndex(
    object=>object.id==1

 )

 studentarray[index]={
    name : "sharma",
    id :1
 }


 console.log(studentarray)


 let marks = {ajay:55, suraj:66, raman:990, kaish:75};
let total = marks.ajay + marks.suraj + marks.raman + marks.kaish;
let avg = total / 4;
console.log(avg);




let arr = [59,29,33,46,55,66,99,87,33,77,89,55,22];
let even=0, odd=0;
for(let n of arr){
  if(n%2==0) even++;
  else odd++;
}
console.log("Even:",even,"Odd:",odd);


function isPrime(num){
  if(num<2) return false;
  for(let i=2;i<=Math.sqrt(num);i++){
    if(num%i==0) return false;
  }
  return true;
}
console.log(isPrime(7)); // true
console.log(isPrime(10)); // false
