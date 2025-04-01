const body = document.querySelector('body')
let interval

const randomColors= function(){
    const hex="0123456789ABCDEF"
    let color ='#'
    for(let  i =1;i<=6;i++){
        color+=hex[Math.floor(Math.random()*16)]
    }
    return color;
}

const colourchanger = function(){
    const colorassign =function(){
        body.style.backgroundColor= randomColors();
    }
    if(!interval){
    interval = setInterval( colorassign ,1000);  
    }
    
}

const colorstop =function(){
    clearInterval(interval)
    interval=null;
}
document.querySelector('#start').addEventListener('click',colourchanger)
document.querySelector('#stop').addEventListener('click',colorstop)