
var myVar;

function myFunction1() {
  myVar = setTimeout(showPage, 100);
}

function showPage() {
  document.getElementById("loader-text").style.display = "none";
  document.getElementById("myDiv").style.display = "block";

}

window.onscroll = function() {myFunction()};

function myFunction() {
  var winScroll = document.body.scrollTop || document.documentElement.scrollTop;
  var height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
  var scrolled = (winScroll / height) * 100;
  document.getElementById("myBar").style.width = scrolled + "%";
}
