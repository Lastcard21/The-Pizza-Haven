// function showSidebar(){
//     const sidebar = document.querySelector(".sidebar");
//     sidebar.style.display = "flex";
// }


// function hideSidebar(){
//     const sidebar = document.querySelector(".sidebar");
//     sidebar.style.display = "none";
// }

ScrollReveal({ 
    reset: true,
    distance: '60px',
    duration: 2500,
    delay: 400
 });

 ScrollReveal().reveal('.welcome-text, .about-text, .order-btn, .div-text h2, .div-text p', { delay: 500, origin: 'left' });
 ScrollReveal().reveal('.about-img', { delay: 500, origin: 'bottom' });