var hours=document.getElementById('hours');
var minutes=document.getElementById('minutes');
var seconds=document.getElementById('seconds');
var ampm=document.getElementById('ampm');

var hrs=new Date().getHours();
var mins=new Date().getMinutes();
var secs=new Date().getSeconds();
//console.log(secs);
// if(hrs>=12){
//     ampm="PM";
// }
// else{
//     ampm="AM"
// }

//24 hours to 12 hours change
if(hrs>12){
    hrs -= 12; 
}

//add zero front
if(hrs < 10){
    hrs="0"+ hrs;
}
if(mins<10){
    mins="0"+ mins;
}
if(secs<10){
    secs="0"+ secs;
}

//display the document
hours.innerHTML=hrs;
minutes.innerHTML=mins;
seconds.innerHTML=secs;






