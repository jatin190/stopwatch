let houres = 0;
let minutes = 0;
let second = 0;
let interval ;
function increase(){
    second++;
    if(second == 60){
        minutes++;
        second =0;
    }
    if(minutes==60){
        houres++;
        minutes =0;
    }
    
    document.getElementById("hours").textContent = houres.toString().padStart(2, "0");
  document.getElementById("minutes").textContent = minutes.toString().padStart(2, "0");
  document.getElementById("seconds").textContent = second.toString().padStart(2, "0");
}

function resetfunction(){
   stopinterval();
    houres = 0;
    minutes = 0;
    second = 0;
    let startvalue = document.getElementById("sbtn");
    startvalue.value = "true";
    let prbtn = document.getElementById("pr");
    prbtn.value = "true";
    prbtn.textContent = "pause";
    document.getElementById("hours").textContent = houres.toString().padStart(2, "0");
  document.getElementById("minutes").textContent = minutes.toString().padStart(2, "0");
  document.getElementById("seconds").textContent = second.toString().padStart(2, "0");

}

function pause(){
    let prbtn = document.getElementById("pr");
    let spancontent = document.getElementById("seconds");
    if(prbtn.value == "true"){
        if(spancontent.textContent !== "00"){
        prbtn.textContent = "resume";
        prbtn.value = "false";
        stopinterval();
     }
    }
    else{
        if(spancontent.textContent !== "00"){
            prbtn.textContent = "pause";
            prbtn.value = "true";
            interval=  setInterval(increase, 1000);
        }
        
    }
    
}

function startfunction(){
    let svalue = document.getElementById("sbtn");
    if(svalue.value == "true"){
        // resetfunction();/
      interval=  setInterval(increase, 1000);
      svalue.value = false;
    }
    

}

function stopinterval(){
    clearInterval(interval);
}