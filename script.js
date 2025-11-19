let btn=document.querySelector('button')
let p=document.querySelector('p')
let fil=document.querySelector('.fil')
let per=0
let w=0

let work=function(){
  let int=setInterval(function(){
  per++
  w++
  //  console.log(w)
      // console.log(p)

  
  fil.style.width=w+'%'
  p.innerHTML=per+'%'
 },20)

setTimeout(() => {
   clearInterval(int)
}, 2000);
}

console.log(work)

btn.addEventListener('click',work)

btn.removeEventListener('click',work)


