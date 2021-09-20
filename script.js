
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