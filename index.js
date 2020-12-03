/* Exercise 1:
console.log("Raichur Mahendra Kumar")
*/
var readlineSync = require("readline-sync");
var userName = readlineSync.question('May i Know your name?');
var score = 0;
console.log('Welcome '+userName);
console.log();

function play(ques,ans){
  var userAnswer = readlineSync.question(ques+"\n");
  if(userAnswer.toUpperCase()==ans.toUpperCase()){
    console.log("Way to go!!");
    score = score +1;
  }
  else{
    console.log("your score remains the same--");
  }
  console.log("Score is : "+score);
}
var q1 = {
  ques:'which college do i study in?',
  ans:'vasavi'
}

var q2 = {
  ques:'which company lap do i own?',
  ans:'dell'
}

var q3 = {
  ques:'which tvseries do i like the most?',
  ans:'Big Bang Theory'
}


var q4 = {
  ques:'which company smart phone do i own?',
  ans:'Realme'
}

var q5 = {
  ques:'which super hero character do i like the most?',
  ans:'Dead Pool'
}



var qns = [q1,q2,q3,q4,q5]
var len = qns.length;
for(var i=0;i<len;i++){
  play(qns[i].ques,qns[i].ans);
}
