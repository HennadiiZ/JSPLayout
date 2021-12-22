const header__burger = document.querySelector('.header__burger'); 
const header__menu = document.querySelector('.header__menu');

header__burger.addEventListener('click', function(event) { 
    header__burger.classList.toggle('active'); 
    header__menu.classList.toggle('active'); 
    document.body.classList.toggle('lock'); 
})


//
// const tabs = document.querySelectorAll('.design__item'); 
// const tabsParent = document.querySelector('.design__items'); 
// const design__item_arrow = document.querySelectorAll('.design__item-arrow')

// function hideTab(){
//     design__item_arrow.forEach((tab,i)=>{
//             tab.classList.remove('active');
//             // console.log(tab)
//             });
// };
// function showTab(i=0){
//     design__item_arrow[i].classList.add('active');
//     // console.log(design__item_arrow[i])
// };

// hideTab();
// showTab();

// tabsParent.addEventListener('click', (e)=>{
//     if(e.target && e.target.classList.contains('design__i')){
//         design__item_arrow.forEach((item,i)=>{
//             if(item == e.target){ 
//                 console.log("!!!")
//                 hideTab();
//                 showTab(i); 
//             }
//         })
//     }
// })

// //
