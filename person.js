class Person{
    constructor(name, age){
        this.name = name;
        this.age = age;
    }
    //class method
    greeting(){
        console.log("My name is " + this.name);
       // console.log("My age is "+ this.age);
       return false;
    }
}



module.exports = Person;