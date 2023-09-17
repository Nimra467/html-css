function displayTime(){
    let dateTime=new Date();
    let hours=dateTime.getHours();
    let min= dateTime.getMinutes();
    let sec=dateTime.getSeconds();
    let session=document.getElementById('session');
    
    //displays 0 with digit if its less than 10
    hours = hours < 10 ? "0"+hours : hours;
    min = min < 10 ? "0"+min : min;
    sec = sec < 10 ? "0"+sec : sec;

    if(hours>=12){
        session.innerHTML="PM";
    }
    else{
        session.innerHTML="AM";
    }
    //convert to 12 hour format
    if(hours>12){
        hours-=12;
    }
    document.getElementById('hours').innerHTML=hours;
    document.getElementById('minutes').innerHTML=min;
    document.getElementById('seconds').innerHTML=sec;
    //setTimeout(displayTime,1000);
}
setInterval(displayTime,1000);
