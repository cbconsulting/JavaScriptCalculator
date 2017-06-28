var dbz = document.getElementById("screen");

function sendToScreen(x){
    dbz.value+=x;
    if(x ==='c'){
        dbz.value='';
    }
}
function qual(){
    x=dbz.value
    x=eval(x);
    dbz.value=x;
}

function Sqrt(){
    x=dbz.value;
    x=eval(Math.sqrt(x));
    dbz.value=x;
}

function clearOne(){
    var boo = dbz.value;
    var lenny = boo.length-1;
    var newBoo = boo.substring(0,lenny);
    dbz.value = newBoo;
}










