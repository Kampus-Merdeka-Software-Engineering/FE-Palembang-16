//Toggle class active untuk hamburger menu
const navbarNav = document.querySelector (".navbar-nav");

//ketika hamburger menu di klik
document.querySelector('#hamburger-menu').onclick = (e) => {
    navbarNav.classList.toggle('active');
    e.preventDefault();
};

//klik di luar elemen
const hm = document.querySelector ('#hamburger-menu');
const sb = document.querySelector ('#search-button');

document.addEventListener('click',function(e) {
    if(!hm.contains(e.target) && !navbarNav.contains(e.target)) {
        navbarNav.classList.remove('active')
    }
    if(!sb.contains(e.target) && !searchForm.contains(e.target)) {
        searchForm.classList.remove('active')
    }
});

//Toggle class active untuk search form
const searchForm = document.querySelector (".search-form");
const searchBox = document.querySelector ("#search-box");

//ketika search form di klik
document.querySelector('#search-button').onclick = (e) => {
    searchForm.classList.toggle('active');
    searchBox.focus();
    e.preventDefault();
};

// Modal Box
const itemDetailModal = document.querySelector('#item-detail-modal');
const itemDetailButtons = document.querySelectorAll('.item-detail-button');

itemDetailButtons.forEach((btn) => {
    btn.onclick = (e) => {
        itemDetailModal.style.display = "flex";
        e.preventDefault ();
    };
});

// klik tombol close
document.querySelector('.modal .close-icon').onclick = (e) => {
    itemDetailModal.style.display = 'none';
}

window.onclick = (e) => {
    if (e.target === itemDetailModal) {
        itemDetailModal.style.display = 'none';
    }
}