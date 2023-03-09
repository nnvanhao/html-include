function addFooterEvents() {
  var footerBtn = document.getElementById("footerBtn");
  if (footerBtn) {
    footerBtn.addEventListener("click", function () {
      alert("You clicked the footer button!");
    });
  } else {
    console.log('footer not found');
  }
}