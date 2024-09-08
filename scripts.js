jQuery(function () {
    createSticky(jQuery("#sticky-wrap"));
  });
  
  function createSticky(sticky) {
    if (typeof sticky != "undefined") {
      var pos = sticky.offset().top + 150,
        win = jQuery(window);
  
      // scroll should really be debounced
      win.on("scroll", function () {
        if (win.scrollTop() > pos) {
          sticky.addClass("stickyhead");
        } else {
          sticky.removeClass("stickyhead");
        }
      });
    }
  }