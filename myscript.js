//Responsive navbar
function toggle_function() {
    var x = document.getElementsByTagName("header");
    if (x.tagName === "header") {
      x.className += " responsive";
    } else {
      x.tagName = "header";
    }
  }