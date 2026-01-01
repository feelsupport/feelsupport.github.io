var hideScroll = window.scrollY;

  window.onscroll = function() {
    var currentScrollPos = window.scrollY;
      
      if (hideScroll > window.scrollY) {
        document.getElementById("top-bar").style.top = "0";
      } else {
        document.getElementById("top-bar").style.top = "-5z0px";
      }

    hideScroll = currentScrollPos;
  }