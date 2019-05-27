var coll = document.getElementsByClassName("collapsible");
var i;
var content;

// toggle the state of the element that was clicked on screen
function open_close(elem){
  // hide every collapsible element
  for (var i = 0; i < coll.length; i++){
    coll[i].classList.toggle("active");
    content = coll[i].nextElementSibling;
    if (content.style.display === "block"){
      content.style.display = "none";
    }

    else{
      coll[i].classList.toggle("active");
    }
  }

  // show only the element that was clicked
  elem.classList.toggle("active");
  var content = elem.nextElementSibling;
  if (content.style.display === "block"){
    content.style.display = "none";
  }
  else{
    content.style.display = "block";
  }
}

for (i = 0; i < coll.length; i++) {
  coll[i].addEventListener("click", function() {
    open_close(this);
  });
}
