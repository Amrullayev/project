let rt2=document.querySelector('.rt2'),
brought=document.querySelector('.brought');


rt2.addEventListener('click',()=>{
    rt2.classList.toggle('mpath');
    brought.classList.toggle('hidden');

})
let all=document.querySelector('.all'),
boxx=document.querySelector('.huu');

all.addEventListener('click',()=>{
    boxx.classList.toggle('hidden2');
})
let carr=document.querySelector('.carr'),
right=document.querySelector('.hhy'),
img=[1,2],
index=0;
function changeImg() {
    if(index > img.length - 1) {
        index = 0 ;
    }else if (index < 0) {
        index = img.length - 1 ;
    }
    carr.style.cssText = ` transform: translateX(${index * (-1170)}px);`
}


right.addEventListener('click' , () => {
    index-- ;
    reset() ;
    changeImg() ;
})

let interval = setInterval(run , 2000)

function run(){
    index++ ;
    changeImg()
}

function reset () {
    clearInterval(interval)
    interval = setInterval(run , 2000)
}
let sun =document.querySelector('#sun'),
body=document.querySelector('body'),
moon=document.querySelector('#moon');

moon.addEventListener('click',()=>{
    body.classList.add('dark-mode');
    moon.classList.add('hidden1');
    sun.classList.remove('hidden1');
})
sun.addEventListener('click',()=>{
    body.classList.remove('dark-mode');
    moon.classList.remove('hidden1');
    sun.classList.add('hidden1');
})