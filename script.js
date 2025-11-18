let btn = document.querySelector('button')
let main=document.querySelector('main')

const loveQuotes = [
  "You are my sunshine.",
  "I love you to the moon and back.",
  "You complete me.",
  "My heart beats for you.",
  "You are my everything.",
  "Love you more each day.",
  "You make my heart smile.",
  "Forever and always.",
  "You are my dream come true.",
  "My love for you is endless.",
  "You are my happy place.",
  "Soulmates forever.",
  "You have my whole heart.",
  "Better together.",
  "You are my always.",
  "Love at first sight.",
  "You're the one for me.",
  "My heart belongs to you.",
  "You make life beautiful.",
  "Perfect together."
];

btn.addEventListener('click',function(){

    let h2=document.createElement('h2')
    
    //position 
    let x=Math.random()*100
    let y=Math.random()*100
       

    //color
        let c1=Math.floor(Math.random()*256)
        let c2=Math.floor(Math.random()*256)
        let c3=Math.floor(Math.random()*256)
      
     //rotation
      let r=Math.floor(Math.random()*361)  

      //index
      let i=Math.floor(Math.random()*loveQuotes.length) 


      //giving text
       h2.innerHTML=loveQuotes[i]

       //for scale
      let s=Math.floor(Math.random()*3)




    //style
    h2.style.color= `rgb(${c1},${c2},${c3})`
    h2.style.position='absolute'
    h2.style.top=x+'%'
    
    h2.style.left=y+'%'
    h2.style.rotate=x+'deg'
    h2.style.overflow="hidden"
    h2.style.scale=s
     
    //appened to main
    main.appendChild(h2)


})