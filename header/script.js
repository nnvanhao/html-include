function addHeaderEvents() {
  var headerBtn = document.getElementById("headerBtn");
  if (headerBtn) {
    headerBtn.addEventListener("click", function () {
      console.log('12331');
      alert("You clicked the header button!");
    });
  } else {
    console.log('header not found');
  }
}