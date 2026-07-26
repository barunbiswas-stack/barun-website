// ===============================
// Learn More Button Popup
// ===============================


let button = document.getElementById("learnBtn");

let popup = document.getElementById("popup");

let closeBtn = document.getElementById("closePopup");


if(button && popup){

    button.addEventListener("click", function(){

        popup.style.display = "flex";

    });

}


if(closeBtn && popup){

    closeBtn.addEventListener("click", function(){

        popup.style.display = "none";

    });

}




// ===============================
// Mobile Menu
// ===============================


let menuBtn = document.getElementById("menuBtn");

let navMenu = document.getElementById("navMenu");


if(menuBtn && navMenu){

    menuBtn.addEventListener("click", function(){

        navMenu.classList.toggle("active");

    });

}





// ===================================
// Scroll Animation
// ===================================


let reveals = document.querySelectorAll(".reveal");


window.addEventListener("scroll", function(){


    for(let i = 0; i < reveals.length; i++){


        let windowHeight = window.innerHeight;


        let elementTop = reveals[i].getBoundingClientRect().top;


        let elementVisible = 100;



        if(elementTop < windowHeight - elementVisible){


            reveals[i].classList.add("active");


        }


    }


});



// ================= LOADING SCREEN =================


window.addEventListener("load", function(){

    let loader = document.querySelector(".loader");

    loader.classList.add("hide");

});











