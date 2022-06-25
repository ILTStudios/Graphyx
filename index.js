//Menu Animation
const menu_btn = document.getElementById('menu-btn');
let is_open = false;
menu_btn.addEventListener('click', () => {
    if (!is_open) {
        menu_btn.classList.add('open'); 
        is_open = true;
        //Menu Popup Animation
    }
    else {
        menu_btn.classList.remove('open');
        is_open = false;
    }
})