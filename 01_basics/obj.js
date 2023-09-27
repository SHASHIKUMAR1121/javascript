const mysymbol = Symbol("key1");

const jsuser ={
    name:"shashi kumar",
    [mysymbol]:"key1",
    age:25,
    gmail:"shashikumar599puc@gmail.com",
    message:"its ur life",
    logged:["monday","sunday"]
}
jsuser.name="warrior bharbarika";
//console.log(jsuser[mysymbol]);



jsuser.greeting =function(){
  //  console.log(`hello warrior ${this.name}`)
}
//console.log(jsuser.greeting());


const tinderuser ={};
tinderuser.id ="123a";
tinderuser.name={
    fullname:{
        firstname :"shashi",
        lastname:"kumar"
    }
}

console.log(tinderuser.name.fullname.lastname);


const obj1 ={
    1:"a",2:"b"
}
const obj2 ={
    3:"a",4:"d"
}
const obj3 ={...obj1,...obj2};

// const obj3 =Object.assign({},obj1,obj2);
//console.log(obj3);

//console.log(Object.keys(tinderuser));
//console.log(Object.values(tinderuser));
//console.log(Object.entries(tinderuser));
console.log(tinderuser.hasOwnProperty('name'));


///// destructuring 

const course ={
    name :"frontend ",
    instuctor:"shashi",
    fees:"free"
}
const {instuctor} =course;
console.log(instuctor);
