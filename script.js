let btn=document.querySelector('button')
let p=document.querySelector('h2')
let fil=document.querySelector('.progress-fill')
let per=0
let w=0

//    btn.addEventListener('click',function(){
//   let int=setInterval(function(){
//   per++
//   w++
 

  
//   fil.style.width=w+'%'
//   p.innerHTML=per+'%'
//  },20)

// setTimeout(() => {
//    clearInterval(int)
// }, 2000)


// },{once:true})


//    let handleCick=function(){
//   let int=setInterval(function(){
//   per++
//   w++
 

  
//   fil.style.width=w+'%'
//   p.innerHTML=per+'%'
//  },20)

// setTimeout(() => {
//    clearInterval(int)
// }, 2000)


// btn.removeEventListener('click',handleCick)

// }

// btn.addEventListener('click',handleCick)


   btn.addEventListener('click',function(){
      let num=50+Math.floor(Math.random()*50)
    btn.style.pointerEvents='none'
    console.log(`dowloing will complete in ${num/10} seconds`)
  let int=setInterval(function(){
  per++
  w++  
  fil.style.width=w+'%'
  p.innerHTML=per+'%'
 },num)

 
setTimeout(() => {
   clearInterval(int)
   btn.innerHTML="Dowloaded"
   btn.style.opacity='0.5'
}, num*100)
  
},)




