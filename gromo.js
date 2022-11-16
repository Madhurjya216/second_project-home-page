
// ===================  Nav bar part ============================= //

// var menulist = document.getElementById("menulist");

//         menulist.style.maxHeight = "0px";

//         function togglemenu()
//         {
//             if(menulist.style.maxHeight == "0px")
//             {
//                 menulist.style.maxHeight = "250px";
//             }
//             else
//         {
//                 menulist.style.maxHeight = "0px";
//             }
//         }


/* ======================= Login form part ======================= */



let login = document.getElementById("login");

document.getElementById("login-click").onclick = () => {
    login.classList.toggle('active');
}




/* ======================= Search form part ======================== */



let search = document.getElementById("search");

document.getElementById("s-click").onclick = () => {
    search.classList.toggle('active');
}




/* ======================== Shopping-Cart part ======================= */


let shopping = document.getElementById("shopping");

document.getElementById("shopping-cart").onclick = () => {
    shopping.classList.toggle('active');
}




/* ======================== slider part ======================= */



var swiper = new Swiper(".products", {
        slidesPerView: 3,
        spaceBetween: 30,
        slidesPerGroup: 3,
        loop: true,
        autoplay: {
          delay: 5000,
          disableOnInteraction: false,
        },
        loopFillGroupWithBlank: true,
        pagination: {
          el: ".swiper-pagination",
          clickable: true,
        },
        navigation: {
          nextEl: ".swiper-button-next",
          prevEl: ".swiper-button-prev",
        },
      });



    /* ======================== Go To Top button ======================= */



      let tobtn = document.querySelector('.to-btn');

      window.addEventListener('scroll', checkHeight)
  
      function checkHeight(){
          if(window.scrollY > 500) {
              tobtn.style.display = 'block';
          }else{
              tobtn.style.display = 'none';
          }
      }
  
      tobtn.addEventListener('click', () => {
          window.scrollTo({
              top: 0,
          });
      })





      

 