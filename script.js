$(document).ready(function(){
    $(window).scroll(function(){
       
    });

    // slide-up script
    $('.scroll-up-btn').click(function(){
        $('html').animate({scrollTop: 0});
        // removing smooth scroll on slide-up button click
        $('html').css("scrollBehavior", "auto");
    });

    $('.navbar .menu li a').click(function(){
        // applying again smooth scroll on menu items click
        $('html').css("scrollBehavior", "smooth");
    });

    // toggle menu/navbar script
    $('.menu-btn').click(function(){
        $('.navbar .menu').toggleClass("active");
        $('.menu-btn i').toggleClass("active");
    });

    // typing text animation script
    var typed = new Typed(".typing", {
        strings: ["Trigonometri", "Sinus", "Cosius", "Tangen"],
        typeSpeed: 100,
        backSpeed: 60,
        loop: true
    });

    var typed = new Typed(".typing-2", {
        strings: ["Pemain Pripayer", "Student", "Maou-sama", "Programer", "Anime"],
        typeSpeed: 100,
        backSpeed: 60,
        loop: true
    });

    // owl carousel script
    $('.carousel').owlCarousel({
        margin: 20,
        loop: true,
        autoplayTimeOut: 2000,
        autoplayHoverPause: true,
        responsive: {
            0:{
                items: 1,
                nav: false
            },
            600:{
                items: 2,
                nav: false
            },
            1000:{
                items: 3,
                nav: false
            }
        }
    });
});

// jgn di apa apain

const tabs = document.querySelectorAll('.tab_btn');
const all_content = document.querySelectorAll('.content');

tabs.forEach((tab, index)=>{
  tab.addEventListener('click', (e)=>{
    tabs.forEach(tab=>{tab.classList.remove('active')});
    tab.classList.add('active');

    var line=document.querySelector('.line');
    line.style.width = e.target.offsetWidth + "px";
    line.style.left = e.target.offsetLeft + "px";

    all_content.forEach(content=>{content.classList.remove('active')});
    all_content[index].classList.add('active');
  })


})

// grafik
// Fungsi untuk memperbarui grafik sinus
function updateGraph() {
    // Mendapatkan nilai sudut dari input pengguna
    var angle = parseFloat(document.getElementById('angleInput').value);
    // Memastikan sudut yang dimasukkan adalah angka
    if (isNaN(angle)) {
        alert('Masukkan sudut yang valid.');
        return;
    }
    
    // Array untuk menyimpan nilai x dan y
    var xValues = [];
    var yValues = [];
    var step = 0.1;
    
    // Mengisi nilai x dan y
    for (var i = 0; i <= 360; i += step) {
        xValues.push(i);
        yValues.push(Math.sin((i + angle) * (Math.PI / 180)));
    }
    
    // Membuat objek trace untuk plot
    var trace = {
        x: xValues,
        y: yValues,
        type: 'scatter',
        mode: 'lines',
        name: 'Sinus'
    };
    
    // Konfigurasi layout plot dengan latar belakang putih dan transparan
    var layout = {
        title: 'Grafik Sinus',
        xaxis: {
            title: 'Sudut (derajat)'
        },
        yaxis: {
            title: 'Nilai Sinus'
        },
        plot_bgcolor: 'rgba(255, 255, 255, 0)', // Warna latar belakang transparan
        paper_bgcolor: 'rgba(255, 255, 255, 0)' // Warna kertas (border) transparan
    };
    
    // Membuat plot menggunakan Plotly
    Plotly.newPlot('sinusGraph', [trace], layout);
    }