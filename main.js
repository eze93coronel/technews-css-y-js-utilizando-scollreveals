//alert('hello word');

document.querySelector('.menu-btn').addEventListener('click', () =>{
    document.querySelector('.nav-main').classList.toggle('show');
})

/// scroll reveale 
ScrollReveal().reveal('.showcase');
ScrollReveal().reveal('.news-cards' ,{delay: 550});
ScrollReveal().reveal('.cards-banner-one' ,{delay: 550});
ScrollReveal().reveal('.cards-banner-two' ,{delay: 550});


