// import './header/script';

function includeHTML(callback) {
  var z, i, elmnt, file, xhttp;
  /* Loop through a collection of all HTML elements */
  z = document.getElementsByTagName("*");
  for (i = 0; i < z.length; i++) {
    elmnt = z[i];
    /*search for elements with a certain atrribute*/
    file = elmnt.getAttribute("w3-include-html");
    if (file) {
      /* Make an HTTP request using the attribute value as the file name */
      xhttp = new XMLHttpRequest();
      xhttp.onreadystatechange = function() {
        if (this.readyState == 4) {
          if (this.status == 200) {
            elmnt.innerHTML = this.responseText;
            elmnt.removeAttribute("w3-include-html");
            includeHTML(callback);
          }
          if (this.status == 404) {
            elmnt.innerHTML = "Page not found.";
            elmnt.removeAttribute("w3-include-html");
          }
        }
      }
      xhttp.open("GET", file, true);
      xhttp.send();
      /* Exit the function */
      return;
    }
  }
  /* Call the callback function if it is defined */
  if (typeof callback === "function") {
    callback();
  }
}

var mainBtn = document.getElementById("mainBtn");
if (mainBtn) {
  mainBtn.addEventListener("click", function() {
    alert("You clicked the main button!");
  });
} else {
  console.log("Could not find the 'mainBtn' element.");
}
