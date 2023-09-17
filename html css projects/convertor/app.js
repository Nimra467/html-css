document.getElementById('convert').onclick=tempConvert;
document.getElementById('clear').onclick=clearForm;

function tempConvert(){

    let fahrenheit = document.getElementById('far').value;
    let celsius = document.getElementById('cel').value;

    if (fahrenheit!=''){
        celsius=(parseFloat(fahrenheit)-32)/1.8;
    }
    else{
        fahrenheit=(parseFloat(celsius)*1.8)+32;
    }
document.getElementById('far').value=parseFloat(fahrenheit).toFixed(1);
document.getElementById('cel').value=parseFloat(celsius).toFixed(1);
}
function clearForm(){
    document.getElementById('far').value='';
    document.getElementById('cel').value='';
}
