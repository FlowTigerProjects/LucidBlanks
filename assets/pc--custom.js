$('.collection_inner_info').slick({
  dots: false,
  arrows: true,
  infinite: true,
  speed: 300,
  slidesToShow: 2,
  slidesToScroll: 1,
  centerMode: true,
  centerPadding: "356px",
  prevArrow: '<button type="button" class="slick-prev"><svg width="16px" height="16px" viewBox="0 0 1024 1024" class="icon" version="1.1" xmlns="http://www.w3.org/2000/svg"><path d="M768 903.232l-50.432 56.768L256 512l461.568-448 50.432 56.768L364.928 512z" fill="#000000" /></svg></button>',
  nextArrow: '<button type="button" class="slick-next"><svg width="16px" height="16px" viewBox="0 0 1024 1024" class="icon" version="1.1" xmlns="http://www.w3.org/2000/svg"><path d="M256 120.768L306.432 64 768 512l-461.568 448L256 903.232 659.072 512z" fill="#000000" /></svg></button>',
  responsive: [
    {
      breakpoint: 1440,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 1,
        centerPadding: "200px",
      }
    },
    {
      breakpoint: 1200,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 1,
         centerPadding: "150px",
      }
    },
    {
      breakpoint: 991,
      settings: {
        slidesToShow: 2,
        centerMode: true,
        arrows: false,
        centerPadding: "70px",
        slidesToScroll: 1
      }
    },
    {
      breakpoint: 768,
      settings: {
        slidesToShow: 2,
        centerMode: true,
        arrows: false,
        centerPadding: "50px",
        slidesToScroll: 1
      }
    },
    {
      breakpoint: 576,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
        centerMode: true,
        arrows: false,
        centerPadding: "44px",
      }
    }
  ]
});



$('.about_gallery_slide').owlCarousel({
  loop:true,
  margin:0,
  autoplay:true,
  nav:false,
  dots:false,
  responsive:{
      0:{
          items:1.2
      },
      600:{
          items:2.4
      },
      1000:{
          items:2.7
      }
  }
});


$('.menu_drawer_close').click(function(){
    $('body').removeClass('overflow-hidden-tablet');
    $('.section-header').removeClass('menu-open');
    $('.menu-drawer-container').removeClass('menu-opening');
    $('.menu-drawer-container').removeAttr('open');
    $('.menu-drawer-container summary').attr('aria-expanded', 'false');
})

$(document).ready(function () {
    const currentPath = window.location.pathname.replace(/\/$/, '');
    const togglebtn = document.querySelector(".tab_drop");
    $('ul li a').each(function () {
      let href = $(this).attr('href')?.trim().replace(/\/$/, '');

      if (href && href !== "#" && href === currentPath) {
        $(this).addClass('active');
        const cat = $(this).text();
        $(togglebtn).find('span').text(cat);
      }
    });
});


if ($(window).width() < 768) {

  document.addEventListener("DOMContentLoaded", function () {
    const parentdrop = document.querySelector(".main_page_data");
    const toggleBtn = document.querySelector(".tab_drop span");
    const toggleBtns = document.querySelector(".tab_drop");
    const dropdownMenu = document.querySelector(".tab_drop_menu");
    const links = document.querySelectorAll(".tab_drop_menu a");
    const currentPath = window.location.pathname.replace(/\/$/, "");
  
    let activeFound = false;
  
    links.forEach(link => {
      const linkPath = link.getAttribute("href").replace(/\/$/, "");
      
      // Auto-select current page
      if (linkPath === currentPath) {
        link.classList.add("active");
        toggleBtn.textContent = link.textContent;
        activeFound = true;
      }
  
      // Handle click
      link.addEventListener("click", (e) => {
        e.preventDefault();
        toggleBtn.textContent = link.textContent;
        window.location.href = link.href;
      });
    });
  
    // If no match, use default
    if (!activeFound) {
      toggleBtn.textContent = "Select a page";
    }
  
    // Toggle dropdown
    toggleBtns.addEventListener("click", () => {
      $(parentdrop).toggleClass('drop_open');
      dropdownMenu.style.display = dropdownMenu.style.display === "block" ? "none" : "block";
    });
  
    // Close dropdown when clicking outside
    document.addEventListener("click", (e) => {
      if (!e.target.closest(".main_page_data")) {
        $(parentdrop).removeClass('drop_open');
        dropdownMenu.style.display = "none";
      }
    });
  });
}


// $('.accordion_data_title').click(function(){
//   $(this).parent().siblings().removeClass('active');
//   $(this).parent().siblings().find('.accordion_data_desc').slideUp();
//   $(this).parent().toggleClass('active');
//   $(this).next().slideToggle();
// })


$(document).ready(function () {
  // Click event
  $('.accordion_data_title').click(function () {
    $(this).parent().siblings().removeClass('active');
    $(this).parent().siblings().find('.accordion_data_desc').slideUp();
    $(this).parent().toggleClass('active');
    $(this).next().slideToggle();
  });

  // Auto-open second accordion
  $('.accordion_data_list:eq(0)').addClass('active');
  $('.accordion_data_list:eq(0) .accordion_data_desc').slideDown();
});















