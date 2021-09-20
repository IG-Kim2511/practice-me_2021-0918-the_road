
// js 02 "navigation-button


const navBtn = document.querySelectorAll('.navigation-button');

Array.from(navBtn).forEach((a_item)=>{

    a_item.addEventListener('click',()=>{
        a_item.parentElement.parentElement.classList.toggle('change');
    });

});