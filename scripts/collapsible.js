var coll = document.getElementsByClassName("collapsible");
var i;
var k;
var content;
var old_disp;

// toggle the state of the element that was clicked on screen
function open_close(elem){
  // get all of the elements that have the same id as the clicked element
  content = document.getElementsByClassName(elem.id);

  // save the state of the content at the start of the script
  for (i = 0; i < content.length; i++){
    if (content[i].className != "collapsible"){
      // only get the state of the last element in the array of content
      old_disp = content[content.length - 1].style.display;
    }
  }

  // go through every element that is a collapsible
  for (i = 0; i < coll.length; i++){
    content = document.getElementsByClassName(coll[i].id);

    // hide every element that is not a collapsible
    for (k = 0; k < content.length; k++){

      // we only want to modity the state of elements that are not collapsibles
      if (content[k].className != "collapsible"){

        // only toggle the state if the content is not currently hidden
        if (content[k].style.display === "block"){
          coll[i].classList.toggle("active");
          content[k].style.display = "none";
        }
      }
    }
  }

  // get all of the elements that have the same id as the clicked element
  content = document.getElementsByClassName(elem.id);

  // toggle the state of the element
  if (old_disp != "block"){
    elem.classList.toggle("active");

    // show all of the elements
    for (i = 0; i < content.length; i++){
      content[i].style.display = "block";
    }
  }
}




for (i = 0; i < coll.length; i++) {
  coll[i].addEventListener("click", function() {
    open_close(this);
  });
}
