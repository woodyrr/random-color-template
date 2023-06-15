//background color
const btn = document.getElementById('btn')
const colors = document.querySelector('.color')
const bgButton = document.querySelector('.bgButton')

btn.addEventListener('click',function bro (){
    let hexColor = lightcolors()
    colors.textContent = hexColor;
    document.body.style.backgroundColor = hexColor;
    bgButton.style.backgroundColor = hexColor
});

function lightcolors(){
  const red = Math.floor(Math.random() * 255)
  const green = Math.floor(Math.random() * 255)
  const blue = Math.floor(Math.random() * 255)
  const opacity = 0.5
  return `rgba(${red}, ${green}, ${blue}, ${opacity})`
    
}


//primary btn
const hex2 = [0,1,2,3,4,5,6,7,8,9,'a','b','c','d','e','f']

const btn2 = document.getElementById('btn')
const colors2 = document.querySelector('.color2')
const button = document.querySelectorAll('.button')

btn2.addEventListener('click',function(){
    let hexColor = '#'
    
    for(let i = 0; i < 6;i++){ 
      hexColor += hex2[rando()];
    }
    
    colors2.textContent = hexColor;
    button.forEach(Element => Element.style.backgroundColor = hexColor)
});

function rando(){
  return Math.floor(Math.random() * hex2.length);
}

//secondary btn
// const hex3 = [0,1,2,3,4,5,6,7,8,9,'a','b','c','d','e','f']

// const btn3 = document.getElementById('btn')
// const colors3 = document.querySelector('.color3')
// const bgButton2 = document.querySelectorAll('.bgButton2')

// btn3.addEventListener('click',function(){
//     let hexColor = '#'
    
//     for(let i = 0; i < 6;i++){ 
//       hexColor += hex3[rando()];
//     }
    
//     colors3.textContent = hexColor;
//     bgButton2.forEach(Element => Element.style.backgroundColor = hexColor)
// });

// function rando(){
//   return Math.floor(Math.random() * hex3.length);
// }

const btn3 = document.getElementById('btn')
const colors3 = document.querySelector('.color3')
const bgButton2 = document.querySelectorAll('.bgButton2')

btn3.addEventListener('click',function(){
    let hexColor = lightcolors()
    colors3.textContent = hexColor;
    bgButton2.forEach(Element => Element.style.backgroundColor = hexColor)
});

function lightcolors(){
  const red = Math.floor(Math.random() * 255)
  const green = Math.floor(Math.random() * 255)
  const blue = Math.floor(Math.random() * 255)
  const opacity = 0.5
  return `rgba(${red}, ${green}, ${blue}, ${opacity})`
    
}


//Accent

const btn4 = document.getElementById('btn')
const colors4 = document.querySelector('.color4')
const bgButton3 = document.querySelectorAll('.bgButton3')

btn4.addEventListener('click',function(){
    let hexColor = lightcolors()
    colors4.textContent = hexColor;
    bgButton3.forEach(Element => Element.style.backgroundColor = hexColor)
});

function lightcolors(){
  const red = Math.floor(Math.random() * 255)
  const green = Math.floor(Math.random() * 255)
  const blue = Math.floor(Math.random() * 255)
  const opacity = 0.5
  return `rgba(${red}, ${green}, ${blue}, ${opacity})`
    
}


