// burger menu
function toggleBurger(item) {
  item.classList.toggle("active");
  let menu = document.querySelector('.header-menu')
  menu.classList.toggle("open");
}



// Learning Tabs


const tabsBtn = document.querySelectorAll('.tabs-nav-btn');
const tabsItems = document.querySelectorAll('.tabs-item')


tabsBtn.forEach(item => {
  item.addEventListener('click', () => {
    let currentBtn = item;
    let tabId = currentBtn.getAttribute('data-tab')
    let currentTab = document.querySelector(tabId)

    tabsBtn.forEach((item) => {
      item.classList.remove('activeted')
    })
    tabsItems.forEach((item) => {
      item.classList.remove('show')
    })
    currentBtn.classList.add('activeted')
    currentTab.classList.add('show')
  })
})



// Training plan accordion


function toggleAccordion(item) {
  item.classList.toggle("active");
  let content = item.lastElementChild;
  content.classList.toggle("active");
}



// SLIDER RESULT


let rangeSlider = document.getElementById("rs-range-line");
let rangeBullet = document.getElementById("rs-bullet");

rangeSlider.addEventListener("input", showSliderValue, false);

function showSliderValue() {
  rangeBullet.innerHTML = rangeSlider.value;
  let bulletPosition = (rangeSlider.value / rangeSlider.max);
  rangeBullet.style.left = (bulletPosition * 620) + "px";
}


function updateSlider() {

  let slider = document.querySelector("#rs-range-line");
  let value = slider.value;

  if (value >= 1500) {
    slider.classList.add("mid");
  }
  else {
    slider.classList.remove('mid');
  }


}





// calback-form

let prevScrollPos = window.pageYOffset;


window.addEventListener("scroll", function () {
  const currentScrollPos = window.pageYOffset;

  if (prevScrollPos > currentScrollPos) {

    document.querySelector('header').style.top = '0';
  } else {
    document.querySelector('header').style.top = '-100px';
  }

  prevScrollPos = currentScrollPos;


  let header = document.querySelector("header");
  let scrolled = window.pageYOffset || document.documentElement.scrollTop;

  if (scrolled > 0) {
    header.classList.add("show");
  } else {
    header.classList.remove("show");

  }
});

window.addEventListener('scroll', hideShowHeader);
