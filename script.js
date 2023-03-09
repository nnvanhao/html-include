function includeHTML(cb) {
  var z, i, elmnt, file, xhttp;
  /* Loop through a collection of all HTML elements: */
  z = document.getElementsByTagName("*");
  for (i = 0; i < z.length; i++) {
    elmnt = z[i];
    /* Search for elements with a certain atrribute: */
    file = elmnt.getAttribute("w3-include-html");
    if (file) {
      /* Make an HTTP request using the attribute value as the file name: */
      xhttp = new XMLHttpRequest();
      xhttp.onreadystatechange = function () {
        if (this.readyState == 4) {
          if (this.status == 200) { elmnt.innerHTML = this.responseText; }
          if (this.status == 404) { elmnt.innerHTML = "Page not found."; }
          /* Call the addEvents function after including the HTML files: */
          addHeaderEvents();
          addFooterEvents();
          /* Remove the attribute, and call this function once more: */
          elmnt.removeAttribute("w3-include-html");
          includeHTML();
        }
      };
      xhttp.open("GET", file, true);
      xhttp.send();
      /* Exit the function: */
      return;
    }
  }
  /* If no w3-include-html attribute is found, run the callback function: */
  if (cb) cb();
}


var mainBtn = document.getElementById("mainBtn");
if (mainBtn) {
  mainBtn.addEventListener("click", function() {
    alert("You clicked the main button!");
  });
} else {
  console.log("Could not find the 'mainBtn' element.");
}
