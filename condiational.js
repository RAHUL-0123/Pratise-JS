let a = prompt("Enter your age");
console.log(typeof a);
if(a>0){
    console.log("You have entre the invalid age.")
   }
   else if(a<=13){
    console.log("You are kid.")
   }
   else if(a<=17){
    console.log("You are teenage.")
   }
   else{
    console.log("You are above 18 and can vote.")
   }