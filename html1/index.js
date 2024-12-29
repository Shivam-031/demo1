

// // var result=a+(b || 0);
// // console.log(result);
// // document.write(result);

// // document.querySelector("#hello")
// // document.write("hello");

// var x =0;
// var y =20;
// sum1=x+y;
// console.log(sum1);

// function sum(z,p){
//     return(this.z+this.p);
// }
// let c= sum(8,9);
// console.log(c)
// console.log(sum(5,6));

// console.log(5 && 6 || 7);

// var g=0;
// console.log(g || "hello world");


// var q = 5;
// var p;
// console.log(q+(p??0));

// console.log(null|| 0 || 0)


// let isgood = false;
// if(!isgood){
//     console.log(`hello ${isgood}`);
// }
// else if(isgood){
//     console.log(`hello2 ${isgood}`);
// }

// function foo(bar){
//     bar=bar??42;
//     console.log(bar);
// }
// foo(0);

// while(x<=10){
//     console.log("hello world");
//     x+=1;
// }
// console.log("");
// for(x=1;x<=10;x++){
//     console.log("Hello World");
// }


// const userName ="shivam negi";
// for(i=0;i<= userName.length;i++){
//     console.log(userName[i]);
// }

// for(i=1;i<=12;i++){
//     for(j=1;j<=10;j++){
//          console.log(`${i} X ${j} = ${i * j}`);
//      }
//     console.log("");
// }

// var j="happy new year";
// var code_match = "ynh";
// var k=0;
// var sum = 0
// for(i=0;i<j.length;i++){
//     while(j[i]===code_match[k]){
//         console.log(`${i}`);
//         k++;
//         sum+=1;
//     }
//     // k=0;
// }
// if(sum>=1){
//     console.log("match!!");
// }

// var For_Print= " *";
// for (i=0;i<=10;i+=1){
//     console.log(For_Print.repeat(i));
// }
// for (i=10;i>=0;i-=1){
//     console.log(For_Print.repeat(i));
// }

// for(i=0;i<=5;i+=1){
//     console.log(i)
// }


// let readlineSync = require("readline-sync");
// let replie=readlineSync.question("hello how are you ??");
// if (replie=="fine"){
//     console.log("ok sir");
// }
// else if (replie=="not fine"){
//     console.log("whats is your problem sir");
// }
// else{
//     console.log("false input");
// }


// let number = readlineSync.question("enter a number between 50-100 -");
// while(number <= 50 || number >= 100){
//     number=readlineSync.question("false input re-enter a number b/w 50 - 100 -");
// }
// console.log("number accepted");

// let given_Input="hegeeksyourwelcomellpohph";
// let given_matching="our";
// let c=0;
// for(i=0;i<given_Input.length;i++){
//     if(given_Input[i]===given_matching[0]){
//         if(given_Input[i+1]===given_matching[1]){
//             if (given_Input[i+2]===given_matching[2]){
//                 console.log("matched!!")
//                 c=1;
//                 break;
//             }
//         }
//     }
// }
// if(c==0){
//     console.log("not matched");
// }

// username="shivam"

// try{
// console.log(helloname);
// }catch(error){
// console.log("hello not defined");
// console.log(error.name);
// }
// console.log(username.toUpperCase());

// let readlineSync=require('readline-sync');
// let user_Value=readlineSync.question("enter the value to be repeated -");

// d=0;
// try{

//     if(typeof(user_Value) != String ){
//         do{
//             console.log("hello world!!")
//             d++;
//         }while(d<user_Value);
//     }
        
    
// }catch(error){
//     console.log("faulty value");
//     console.log(error.name);
// }
// console.log(typeof(user_Value));
    


var p ="heqjbdhcbhvdshabcduheuf";
var s ="dsh";
var answer=p.search(s);
console.log(answer);git 