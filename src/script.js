var toggleOpen = document.getElementById('toggleOpen');
var toggleClose = document.getElementById('toggleClose');
var collapseMenu = document.getElementById('collapseMenu');

function handleClick() {
  if (collapseMenu.style.display === 'block') {
    collapseMenu.style.display = 'none';
  } else {
    collapseMenu.style.display = 'block';
  }
}

toggleOpen.addEventListener('click', handleClick);
toggleClose.addEventListener('click', handleClick);



/* =========== Toggle Menu ============ */
const openNav = document.querySelector(".open-btn");
const closeNav = document.querySelector(".close-btn");
const menu = document.querySelector(".nav-list");

openNav.addEventListener("click", () => {
  menu.classList.add("show");
});

closeNav.addEventListener("click", () => {
  menu.classList.remove("show");
});


/**slider */

// $('#dasteh-bandi').mouseenter(function (){
//   $('.master-div').fadeIn(100)
// })
// $('#dasteh-bandi').mouseleave(function (){
//   $('.master-div').fadeOut(100)
// })


("#left-img-story").click(function (){
  $('.story-ul').animate({'margin-left':'+=100px'})
})
$("#right-img-story").click(function (){
  $('.story-ul').animate({'margin-right':'-=100px'})

})

