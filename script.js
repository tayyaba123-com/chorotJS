let main=document.querySelector('main')
 let boxes=document.querySelectorAll(' .box')
 

 const capitalAlphabets = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];
 
 capitalAlphabets.forEach(function(value,i){
    boxes[i].innerText=value
    
    
    })

 

boxes.forEach(function(val){
    val.addEventListener('click',function(){
     sounds(val.innerHTML)
    })
})



   function sounds(key){
         audio=new Audio(`audio/${key}.mp3`)
         audio.play()
        
   }

 
