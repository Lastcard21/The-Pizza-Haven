function showSidebar(){
    const sidebar = document.querySelector(".sidebar");
    sidebar.style.display = "flex";
}


function hideSidebar(){
    const sidebar = document.querySelector(".sidebar");
    sidebar.style.display = "none";
}



var numOfCards = document.querySelectorAll('.pizza-pic').length;
for(var i = 0; i < numOfCards; i++){
    document.querySelectorAll('.pizza-pic')[i].addEventListener("mouseenter", function(){
        this.classList.add('bg-pizza');
    })
    document.querySelectorAll('.pizza-pic')[i].addEventListener("mouseleave", function(){
        this.classList.remove('bg-pizza');
    })
}

// ScrollReveal({ 
//     reset: true,
//     distance: '60px',
//     duration: 2500,
//     delay: 400
//  });




// // amimation for index
//  ScrollReveal().reveal('.article, .div-text, .hot, .footer-container, .social-icons, .copy, .quality, .delivery, .recipes', { delay: 500, origin: 'left' });
//  ScrollReveal().reveal('.pizza-pic', { delay: 500, origin: 'bottom' });

//  ScrollReveal().reveal('.quality, .newsletter, .recipes, .fine', { delay: 500, origin: 'right' });



 const product = [
    {
        id: 0,
        image: 'Images/pizza1.gif',
        title: 'MARGHERITA';
        price: '2.60',
    }
    {
        id: 1,
        image: 'Images/pizza2.gif',
        title: 'VINCENT',
        price: '3.00'
    }
 ]