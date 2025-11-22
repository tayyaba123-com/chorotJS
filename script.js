let img=document.querySelector('img')
let body=document.body

body.addEventListener('mousemove',function(elem){
   console.log(elem)
   img.style.top=elem.y+'px'
    img.style.left=elem.x+'px'
    img.style.transform='translate(50% 50%)'

})