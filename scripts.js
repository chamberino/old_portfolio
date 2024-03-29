const portfolioSites = ['https://chamberino.github.io/project_7_web_app_dashboard', 'https://chamberino.github.io/project_3_interactive_form/','https://chamberino.github.io/project_2_list_pagination_and_filtering/','https://chamberino.github.io/Project_4_Web_Style_Guide','https://chamberino.github.io/project_8_employee_directory','https://chamberino.github.io/project_6_game_show_app',]
const modalSRC = document.querySelector('IFRAME');
let selectedUser = 0;



// ===   Enable Touch Events for Mobile   //

document.addEventListener("touchstart", function(){}, true);

// ===   START PARALLAX SCROLLING FUNCTIONALITY   //

// helper function
function $$(selector, context) {
    context = context || document;
    var elements = context.querySelectorAll(selector);
    return Array.prototype.slice.call(elements);
}

window.addEventListener("scroll", function() {
   var scrolledHeight= window.pageYOffset;
  $$(".title").forEach(function(el,index,array) {
    var limit= el.offsetTop+ el.offsetHeight;
    el.style.paddingTop =  (scrolledHeight - el.offsetTop) /1.5+ "px";

     });
});

//===   END PARALLAX SCROLLING FUNCTIONALITY   ===//


//===   START MODAL OVERLAY FUNCTIONS   //

const grid = document.querySelector('.container');
const modal = document.querySelector('.modal');
grid.addEventListener('click', (e) => {
  if (e.target.className === 'photo') {
  modal.classList.add('show-modal');
  console.log(e.target);
  document.querySelector('.modal-content').innerHTML =
  `
    <iframe>
        title=""
        width="95%"
        height="90%"
        src="../${portfolioSites[e.target.id]}">
    </iframe>
  `
}
});


const button = document.querySelectorAll('.button');
for (let i=0; i<button.length; i++) {
  button[i].addEventListener('click', () => {
    if (modal.className=='modal') {
      selectedUser = i;
      modal.classList.toggle('show-modal');
      modalSRC.src=`${portfolioSites[selectedUser]}`
    }
  });
}

modal.addEventListener('click', event => {
  if (event.target.className === 'close-modal' || event.target.className === 'modal show-modal') {
    modal.classList.toggle('show-modal');
  }
  else if (modal.classList.contains('show-modal') && event.target.className=='right-arrow') {
    if (selectedUser < portfolioSites.length-1) {
      selectedUser += 1;
      modalSRC.src=portfolioSites[selectedUser];
    }
  } else if (modal.classList.contains('show-modal') && event.target.className=='left-arrow') {
    if (selectedUser > 0) {
      selectedUser -= 1;
      modalSRC.src=portfolioSites[selectedUser];
    }
  }
})


//===   END MODAL OVERLAY FUNCTIONS   ===//


//===   MOBILE NAV BAR   ===//

const menuButton = document.querySelector('.mobile-btn');
const navMenu = document.querySelector('.nav')
const siteWrapper = document.querySelector('.wrapper');

menuButton.addEventListener('click', (e) => {
  navMenu.classList.add('nav-mobile');
  siteWrapper.classList.add('move-page');

  navMenu.classList.toggle('nav-close');
  siteWrapper.classList.toggle('close-page');
})

navMenu.addEventListener('click', () => {
    navMenu.classList.toggle('nav-close');
    siteWrapper.classList.toggle('close-page');
  });
