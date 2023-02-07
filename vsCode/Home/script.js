var burg = document.body.querySelector('#menu')
var menuContent = document.body.querySelector('#burguer')
var i = 0
var x = 0
burg.addEventListener('click',()=>{
    burg.setAttribute('style','opacity:0;transition:0.2s')
    menuContent.setAttribute('style','opacity:1;transition:0.5s')
    menuContent.className='visible'
    setTimeout(() => {
        burg.className='hidding'     
    }, 200);
    setTimeout(() => {
        i+=1
    }, 500);
})
document.body.querySelector('#nftButt').addEventListener('click',()=>{
    x+=1
})
document.body.querySelector('#hotButt').addEventListener('click',()=>{
    x+=1
})
document.body.addEventListener('click',()=>{
    if(i===1&&x===0){
        burg.setAttribute('style','opacity:1;transition:0.5s')
        menuContent.setAttribute('style','opacity:0;transition:0.2s')
        burg.className='visible'
        setTimeout(() => {
            menuContent.className='hidding'       
        }, 200);        
        i-=1
    }
})
