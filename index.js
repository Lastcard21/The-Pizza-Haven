function showSidebar(){
    const sidebar = document.querySelector(".sidebar");
    sidebar.style.display = "flex";
}


function hideSidebar(){
    const sidebar = document.querySelector(".sidebar");
    sidebar.style.display = "none";
}

ScrollReveal({ 
    reset: true,
    distance: '60px',
    duration: 2500,
    delay: 400
 });




// amimation for index
 ScrollReveal().reveal('.article, .div-text, .hot, .footer-container, .social-icons, .copy, .quality, .delivery, .recipes', { delay: 500, origin: 'left' });
 ScrollReveal().reveal('.pizza-pic', { delay: 500, origin: 'bottom' });

 ScrollReveal().reveal('.quality, .newsletter, .recipes, .fine', { delay: 500, origin: 'right' });



 