let slideIndex = 1;
showSlides(slideIndex);

plusSlides(-1);

function plusSlides(n) {
  console.log("plusSlides")
  showSlides(slideIndex += n);
}

function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  console.log("running")
  let i;
  let slides = document.getElementsByClassName("mySlides");
  let dots = document.getElementsByClassName("dot");
  if (n > slides.length) {slideIndex = 1}    
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";  
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block";  
  dots[slideIndex-1].className += " active";
}

// taking user to the top //
// Get the button:
let mybutton = document.getElementById("myBtn");

function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    mybutton.style.display = "block";
  } else {
    mybutton.style.display = "none";
  }
}

// When the user clicks on the button, scroll to the top of the document
function topFunction() {
  document.body.scrollTop = 0; // For Safari
  document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
}

const selectedOptionsArray = [];

function updateSelectedOptions(selectElement) {
    const selectedList = document.getElementById('selected-list');
    const options = Array.from(selectElement.options); // Get all options

    // Add selected options to the list
    options.forEach(option => {
        if (option.selected) {
            const listItem = document.createElement('li');
            listItem.textContent = option.textContent;
            selectedList.appendChild(listItem);
        }
    });
}

function placeOrder() {
  alert("Your order has been placed");
  const selectedList = document.getElementById('selected-list');
  selectedList.innerHTML = ''; // Clear the selected options
}


function clearSelectedOptions() {
  const selectedList = document.getElementById('selected-list');
  selectedList.innerHTML = ''; // Clear the selected options
}

options.forEach(option => {
  if (option.selected) {
      const listItem = document.createElement('li');
      listItem.textContent = option.textContent;
      selectedList.appendChild(listItem);
  }
});

function removeSelectedOption(event) {
  if (event.target.tagName === 'LI') {
      event.target.remove(); // Remove the clicked list item
  }
}