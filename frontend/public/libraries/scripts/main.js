const navUser = document.querySelector('.navUser');
const navItems = document.querySelector('.navItems');
const navItemsWrapper = document.querySelector('.navItemsWrapper');
const navList = document.querySelectorAll('.navList');
const hilang = document.querySelector('#hilang');

const sideProfil = document.getElementById('sideProfil');
const signSide = document.getElementById('signSide');

const clickedId = document.querySelector('#clickedId');
const clickedLoc = document.querySelector('.clickedLoc');

const noSearch = document.querySelector('.noSearch');
const searchActive = document.querySelector('.searchActive')


clickedId.addEventListener('click', () => {
    if (noSearch.classList.contains('hidden')) {
        clickedLoc.classList.remove('hidden');
    } else {
        clickedLoc.classList.toggle('hidden');
    }
})

const checkBox = document.getElementById('searchInp');

checkBox.addEventListener('click', () => {
    clickedLoc.classList.toggle('hidden');
})
// console.log(nico);

function getChecked() {
    const checkBox = document.getElementById('searchInp').value;
    if (checkBox !== "") {
        noSearch.classList.add('hidden');
        searchActive.classList.remove('hidden');
        clickedLoc.classList.remove('hidden');
      } else {
        noSearch.classList.remove('hidden');
        searchActive.classList.add('hidden');
    }
  }

// sideProfil.onclick = function() {
//     signSide.classList.toggle('hidden');
// }

// document.onclick = function(e){
//     if(e.target.id !== 'sideProfil' && e.target.id !== 'signSide'){
//         if (e.target.className !== 'navItems') {
//             signSide.classList.add('hidden');
//             console.log('nico');
//         } else{
//             console.log('apa');
//         }
//     }
// }


navUser.addEventListener('click', () => {
    navItems.classList.toggle('hidden');
    // console.log(event.target);
})

// window.addEventListener('scroll', function() {
//     let header = document.querySelector('.head');
//     let windowPosition = window.scrollY > 2;
//     header.classList.toggle('bg-black', windowPosition);
// })

// document.addEventListener('click', function(event) {
//     if(event.target.closest('#hilang')) {
//         navItems.classList.toggle('hidden');
//         console.log('top');
//         // return
//     } else {
//         console.log('akska');
//         // navItems.classList.add('hidden');

//     }
    
// })


// navItemsWrapper.addEventListener('click', (event) => {
//     if(event.target != navItems){
//         navItems.classList.toggle('hidden');
//     }
// })

// hilang.addEventListener('click', (event) => {
//     if(event.target !== navList){
//         navItems.classList.toggle('hidden');
//         console.log('nico');
//     }
// })

// window.onload = function() {
//     const hilang = document.getElementById('hilang');
//     document.onclick = function(div){
//         if(div.target.id !== 'hilang'){
//             hilang.classList.add('hidden');
//         }
//     }
// }


// window.addEventListener('mouseup', function(event){
//     const hilang = document.getElementById('hilang');
//     if(event.target != navList){
//         // navItems.classList.add('hidden');
//         navItems.forEach(function(e, n) {
//             console.log(this.e[n]);
//         })
//     }
// })