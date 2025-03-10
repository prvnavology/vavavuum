// Toggle Menu Functionaliy Start
$(document).ready(function () {
  $(".menu-toggle-btn").click(function () {
    $("body").addClass("menuToggle");
  });
  $(".menu-close-btn").click(function () {
    $("body").removeClass("menuToggle");
  });
});  
// Toggle Menu Functionaliy End

// Header Scroll JS Start
  $(document).ready(function () {
    $(window).scroll(function () {
      var header = $("header");
      header.toggleClass("fixed_header", $(window).scrollTop() > 0);
    });
  });
  // Header Scroll JS End



// Read More Functionality JS Start
$('.subpage-readmore-btn').click(function (e) {
  e.preventDefault();
  const $this = $(this);
  const content = $this.parent().prev();
  content.stop(true, true).slideToggle(400);
  $this.html(function (_, currentHtml) {
      return currentHtml.includes('Read More')
          ? 'Read Less <i class="fa-solid fa-angle-up"></i>'
          : 'Read More <i class="fa-solid fa-angle-down"></i>';
  });
});
// Read More Functionality JS end


// AOS JS Start
AOS.init({
  duration:1200,
});
// AOS JS End



