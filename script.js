/* Atributes */
var menuBug = document.body.querySelector('#burguer')
var menuContent = document.body.querySelector('nav')
var i = 0
var x = 0

var products = (document.body.querySelectorAll('.hiddingMainRight'))
var totalProducts = Number(products.length)
var positionProducts = totalProducts - 1

/* Methods */
/* OnMenuBar */
menuBug.addEventListener('click', () => {
    if (i === 0) {
        setTimeout(() => {
            menuContent.setAttribute('style', 'opacity:1;transition:0.2s;backdrop-filter: blur(9px)')
            menuContent.className = 'visibleHeader'
        }, 200);
        setTimeout(() => {
            i += 1
        }, 500);
    }
})
/* OnMenuBarButtons */
document.body.querySelector('.flex').addEventListener('click', () => {
    x += 1

/* OffMenuBar */
document.body.addEventListener('click', () => {
    if (i === 1 && x === 0) {
        menuContent.className = 'hiddingHeader'
        menuContent.setAttribute('style', 'opacity:0;transition:0.2s')
        setTimeout(() => {
        }, 200);
        i -= 1
    }
})
