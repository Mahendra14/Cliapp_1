/* Exercise 1:
console.log("Raichur Mahendra Kumar")
*/
var readlineSync = require("readline-sync");
var userName = readlineSync.question('May i Know your name?');
var score = 0;
console.log('Welcome '+userName);
console.log();

function play(ques,ans){
  var userAnswer = readlineSync.question(ques);
  if(userAnswer==ans){
    console.log("Way to go!!");
    score = score +1;
  }
  else{
    console.log("your score remains the same--");
  }
  console.log("Score is : "+score);
}
var q1 = {
  ques:' which college do i study in?',
  ans:'vasavi'
}

var q2 = {
  ques:'which lap company do i own?',
  ans:'dell'
}

var qns = [q1,q2]
var len = qns.length;
for(var i=0;i<len;i++){
  play(qns[i].ques,qns[i].ans);
}
