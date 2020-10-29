// Hamburger Menu
$(document).ready(function () {
  $(".hamburger").on("click", function () {
    $("header").toggleClass("open");
  });
  $("a").on("click", function () {
    $("header").removeClass("open");
  });
});

// Scroll to top button //

var mybutton = document.getElementById("myBtn");

window.onscroll = function () {
  scrollFunction();
};

function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    mybutton.style.display = "block";
  } else {
    mybutton.style.display = "none";
  }
}

function topFunction() {
  document.body.scrollTop = 0; // For Safari
  document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
}


// Cross Browsers Smooth Scrolling
$(document).ready(function () {
  // Add smooth scrolling to all links with #
  $('a[href*="#"]').on("click", function (event) {
    // Make sure this.hash has a value before overriding default behavior
    if (this.hash !== "") {
      // Prevent default anchor click behavior
      event.preventDefault();

      // Store hash
      var hash = this.hash;

      // Using jQuery's animate() method to add smooth page scroll
      // The optional number (800) specifies the number of milliseconds it takes to scroll to the specified area
      $("html, body").animate(
        {
          scrollTop: $(hash).offset().top,
        },
        700,
        "linear",
        function () {
          // Add hash (#) to URL when done scrolling (default click behavior)
          window.location.hash = hash;
        }
      );
    } // End if
  });
});


// Tests Page Menu button
$(".test-menu-toggler").on("click", function () {
  $(".test-menu").toggleClass("show");
});

// Videos page Menu button
$(".btn-toggler").on("click", function () {
  $(".menu").toggleClass("show");
});
