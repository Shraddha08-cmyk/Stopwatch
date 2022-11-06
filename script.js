var min =0;
var sec = 0;
var tenss =0;
var timer = false;


function start(){
    timer = true;
    stopwatch();
    
}

function stop(){
    timer=false;

}

function reset(){
    timer=false;

    min=0;
    sec=0;
    tenss=0;

    document.getElementById("minutes").innerHTML = "00";
    document.getElementById("seconds").innerHTML = "00";
    document.getElementById("tens").innerHTML = "00";
    
    

}

function stopwatch(){
    if(timer==true){
        tenss = tenss+1;

        if(tenss==100){
            sec = sec+1;
            tenss=0;
        }
        if(sec==60){
            min=min+1;
            sec=0;
        }
        document.getElementById("minutes").innerHTML = min;
        
        document.getElementById("seconds").innerHTML = sec;
        
        document.getElementById("tens").innerHTML = tenss;

        setTimeout("stopwatch()",10);
    
    }

}