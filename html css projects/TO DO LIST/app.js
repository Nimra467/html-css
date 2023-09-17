const inputBox=document.getElementById("box");
const listCon=document.getElementById("list");

function addTask(){
    if(inputBox.value===''){
        alert("You must write something!");
    }
    else{
        let li=document.createElement("li");
        li.innerHTML=inputBox.value;
        listCon.appendChild(li);
        let span=document.createElement("span");
        span.innerHTML="\u00d7";
        li.appendChild(span);
    }
    inputBox.value='';
}

listCon.addEventListener("click",function(e){
    if(e.target.tagName==="LI"){
        e.target.classList.toggle("checked");
    }
    else if(e.target.tagName==="SPAN"){
        e.target.parentElement.remove();
    }
},false);