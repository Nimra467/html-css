const stopwatch=document.getElementById("stopwatch");
let hour=0;
let min=0;
let sec=0;
let timer=false;

function startTimer(){
    timer=true;
    stopWatch();    
}
function stopTimer(){
    timer=false;
}
function resetTimer(){
    timer=false;
    hour=0;
    min=0;
    sec=0;
    stopwatch.innerHTML=hour + "0 : " + min + "0 : 0" + sec
}
function stopWatch(){
    if(timer==true){
        sec=parseInt(sec);
        min=parseInt(min);
        hour=parseInt(hour);

        sec++
    if(sec===60){
        sec=0;
        min++;
        if(min===60){
            min=0;
            hour++;
        }
        
    }
    hour=hour<10?"0"+hour:hour;
    min=min<10?"0"+min:min;
    sec=sec<10?"0"+sec:sec;
       stopwatch.innerHTML=hour+" : "+ min+ " : "+sec;
        setTimeout("stopWatch()",1000)
    }
}

