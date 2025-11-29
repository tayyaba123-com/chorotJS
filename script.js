let para =document.querySelector('p')
let text=para.innerText
const character="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuwxyz"
let iteration=0
let intervalId=null


para.addEventListener('mouseenter',function(){
   
clearInterval(intervalId)
iteration=0
 intervalId=setInterval(radomText, 30); 
})

function radomText(){
let newtext=text.split("").map(function(char,index){
    if(index<iteration){
        return char
    }
        return character.split("")[Math.floor(Math.random()*character.length)]
    }).join("")
    para.innerText=newtext

    iteration+=0.42
    console.log('hry')

    if(iteration>=text.length){
        clearInterval(intervalId)
         para.innerText=text
    }
}
