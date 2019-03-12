// When the user scrolls the page, execute keepHeaderFixed 
window.onscroll = function() {keepHeaderFixed()};

// Get the header
var header = document.getElementById("fixed_header");

// Get the offset position of the navbar
var sticky = header.offsetTop;

// Add the sticky class to the header when you reach its scroll position. Remove "sticky" when you leave the scroll position
function keepHeaderFixed() {
  if (window.pageYOffset > sticky) {
    header.classList.add("sticky");
  } else {
    header.classList.remove("sticky");
  }
}