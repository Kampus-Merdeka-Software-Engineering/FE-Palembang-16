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

 // Mendapatkan referensi ke tombol dengan ID
 var buttonBeasiswa = document.getElementById("buttonBeasiswa");
 var buttonSpeaking = document.getElementById("buttonSpeaking");
 var buttonGrammar = document.getElementById("buttonGrammar");
 var buttonListening = document.getElementById("buttonListening");

 // Menambahkan event listener untuk mengarahkan pengguna ke halaman lain saat tombol diklik
 buttonBeasiswa.addEventListener("click", function() {
     var halamanBeasiswa = "https://www.scholarsofficial.com/category/beasiswa-luar-negeri/";
     window.location.href = halamanBeasiswa;
 });
 buttonSpeaking.addEventListener("click", function() {
    var halamanSpeaking = "speaking.html";
    window.location.href = halamanSpeaking;
});
buttonGrammar.addEventListener("click", function() {
    var halamanGrammar = "https://www.scholarsofficial.com/category/beasiswa-luar-negeri/";
    window.location.href = halamanGrammar;
});
buttonListening.addEventListener("click", function() {
    var halamanListening = "https://www.scholarsofficial.com/category/beasiswa-luar-negeri/";
    window.location.href = halamanListening;
});