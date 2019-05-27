var coll = document.getElementsByClassName("collapsible");
var i;
var content;
var old_disp;

// toggle the state of the element that was clicked on screen
function open_close(elem){
  // save the state of the content at the start of the script
  content = elem.nextElementSibling;
  old_disp = content.style.display;

  // hide every collapsible element
  for (var i = 0; i < coll.length; i++){
    // toggle the state of the collapsible
    coll[i].classList.toggle("active");

    // find the content of the collapsoble
    content = coll[i].nextElementSibling;

    // hide the content if it is shown or toggle the state to reflect that it
    // should be hiddem
    if (content.style.display === "block"){
      content.style.display = "none";
    }

    else{
      coll[i].classList.toggle("active");
    }
  }

  // show only the element that was clicked
  // toggle the state of the element
  elem.classList.toggle("active");
  content = elem.nextElementSibling;

  // check to see if we should be hiding or showing the content based on the old
  // display syate
  if (old_disp === "block"){
    content.style.display = "none";
    elem.classList.toggle("active");
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
