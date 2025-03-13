var rn = Math.floor(Math.random()*6)+1;
var rn2 = Math.floor(Math.random()*6)+1;

    const button1 = document.getElementById('btnid')
    button1.addEventListener("click", dice)

    
function dice (){
    const rn = Math.floor(Math.random()*6)+1;

    if(rn === 1){
        var imgo = document.firstElementChild.lastElementChild.querySelector("#img2 img");
    imgo.src = "./images/dice1.png";
    
    }else if(rn === 2){
        var imgo = document.firstElementChild.lastElementChild.querySelector("img");
        imgo.src = "./images/dice2.png";
        
    }else if(rn === 3){
        var imgo = document.firstElementChild.lastElementChild.querySelector("img");
        imgo.src = "./images/dice3.png";
        
    }else  if(rn === 4){
        var imgo = document.firstElementChild.lastElementChild.querySelector("img");
        imgo.src = "./images/dice4.png";
        
    }else  if(rn === 5){
        var imgo = document.firstElementChild.lastElementChild.querySelector("img");
        imgo.src = "./images/dice5.png";
        
    }else if(rn === 6){
        var imgo = document.firstElementChild.lastElementChild.querySelector("img");
        imgo.src = "./images/dice6.png";
        
    }

 const rn2 = Math.floor(Math.random()*6)+1;
    
    
if(rn2 === 1){
    var imgo = document.firstElementChild.lastElementChild.getElementsByTagName("img")[1];
    imgo.src = "./images/dice1.png";

}else if(rn2 === 2){
    var imgo = document.firstElementChild.lastElementChild.getElementsByTagName("img")[1];
imgo.src = "./images/dice2.png";
    
}else if(rn2 === 3){
    var imgo = document.firstElementChild.lastElementChild.getElementsByTagName("img")[1];
imgo.src = "./images/dice3.png";
    
}else  if(rn2 === 4){
    var imgo = document.firstElementChild.lastElementChild.getElementsByTagName("img")[1];
    imgo.src = "./images/dice4.png";
    
}else  if(rn2 === 5){
    var imgo = document.firstElementChild.lastElementChild.getElementsByTagName("img")[1];
    imgo.src = "./images/dice5.png";
    
}else if(rn2 === 6){
    var imgo = document.firstElementChild.lastElementChild.getElementsByTagName("img")[1];
imgo.src = "./images/dice6.png";
}

if(rn > rn2){
    var p1 = document.firstElementChild.lastElementChild.querySelector("h1");
    p1.innerHTML = "player 1 win";
    }else if(rn < rn2){
        var p2 = document.firstElementChild.lastElementChild.querySelector("h1");
        p2.innerHTML = "player 2 win";
    }else if (rn === rn2){
        var p = document.firstElementChild.lastElementChild.querySelector("h1");
        p.innerHTML = "its a draw";
    }


}
    




