let n1 =[0,1 ,2,3,"shashi"];
let n2 =[5,6,7,8,"kumar"];
let n3 =n1.concat(n2);  /// concation two arrays 
//console.log(n3);
n1.push("kumar");    /// t0 add element at last 
//console.log(n1);
n1.pop() /// to reomove element from last
//console.log(n1);
//delete n1[3]; /// delete operator for deleting element

//n1.unshift("shashi");   // adds element at the beginnnig
//n1.shift();              // removes elements at the beginnig 

let na = n1.slice(1,3); // gives elements between 1 to 3
//let na = n1.splice(1,3);  gives elements from 1 to 3 and also changes original array 


//console.log( na);
//console.log(n1);

let gov =["psi","ips","banking"];
let pri=["software","cloud","data analyst",[4,5,6,7,8],["singigng","dance","trek"]];
let mix =[...gov,...pri.flat(Infinity)]; // jzt makes all array in single line 
mix.sort();


//console.log(mix);
//console.log(n1);
//n1.splice(2,2,23,28); extracts elements from array and we can add elements to array and it does modification in main array 
console.log(n1);
let n5 =[0,1,2,3,4];
let n6= n5.slice(2,4);
console.log(n6);