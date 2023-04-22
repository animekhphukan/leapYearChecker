var readlineSync = require("readline-sync");
var question1 = ("Please enter the Year: ");
var year= readlineSync.question(question1);
if(year%4===0){
  if(year%100===0){
    if(year%1000===0){
      console.log("It is a leap year")
    }
    else{
  console.log("The year is not a leap year");
}
  }else{
    console.log("It is a leap year")
  }
  
}
else{
  console.log("The year is not a leap year");
}

