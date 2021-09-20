
// js 02 "navigation-button


const navBtn = document.querySelectorAll('.navigation-button');

Array.from(navBtn).forEach((a_item)=>{

    a_item.addEventListener('click',()=>{
        a_item.parentElement.parentElement.classList.toggle('change');
    });

});


// ❌코딩용... 자동으로 가장 밑으로 스크롤
// scrollBy()
/* document.addEventListener("scroll",()=>{
    window.scrollBy(0, window.innerHeight);
});
 */

/* js 04 put colors */
const color = ['red','blue','green','yellow','orange']

let i = 0;
const navLink = document.querySelectorAll('.nav-link');

Array.from(navLink).forEach((a_item)=>{
    a_item.style.cssText = ``
});

/* js 06 click nav  icon  */

const container = document.querySelector('.container');

const openNavbar = document.querySelector(".open-navbar-icon");
const closeNavbar = document.querySelector('.close-navbar-icon');

openNavbar.addEventListener("click",()=>{
    container.classList.add('change');
});
closeNavbar.addEventListener('click',()=>{
    container.classList.remove('change');
});