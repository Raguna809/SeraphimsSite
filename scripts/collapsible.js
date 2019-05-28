var coll = document.getElementsByClassName("collapsible");
var i;
var k;
var content;
var old_disp;

// // toggle the state of the element that was clicked on screen
// function open_close(elem){
//   // save the state of the content at the start of the script
//   content = elem.nextElementSibling;
//   old_disp = content.style.display;
//
//   // hide every collapsible element
//   for (var i = 0; i < coll.length; i++){
//     // toggle the state of the collapsible
//     coll[i].classList.toggle("active");
//
//     // find the content of the collapsible
//     content = document.getElementsById(elem.id)
//
//     // hide the content if it is shown or toggle the state to reflect that it
//     // should be hiddem
//     for (k = 0; k < content.length; k++){
//       if (content[k].className != "collapsible"){
//         if (content[k].style.display === "block"){
//           content[k].style.display = "none";
//         }
//
//         else{
//           coll[i].classList.toggle("active");
//         }
//       }
//     }
//   }
//
//   // show only the element that was clicked
//   // toggle the state of the element
//   elem.classList.toggle("active");
//   content = elem.nextElementSibling;
//
//   // check to see if we should be hiding or showing the content based on the old
//   // display syate
//   if (old_disp === "block"){
//     for (k = 0; k < content.length; k++){
//       content.style.display = "none";
//     }
//
//     elem.classList.toggle("active");
//   }
//
//   else{
//     content.style.display = "block";
//   }
// }

// toggle the state of the element that was clicked on screen
function open_close(elem){
  // get all of the elements that have the same id as the clicked element
  content = document.getElementsByClassName(elem.id);

  // save the state of the content at the start of the script
  for (i = 0; i < content.length; i++){
    if (content[i].className != "collapsible"){
      old_disp = content[content.length - 1].style.display;
    }
  }

  // go through every element that is a collapsible
  for (i = 0; i < coll.length; i++){
    content = document.getElementsByClassName(coll[i].id);

    // hide every element that is not a collapsible
    for (k = 0; k < content.length; k++){

      if (content[k].className != "collapsible"){

        if (content[k].style.display === "block"){
          coll[i].classList.toggle("active");
          content[k].style.display = "none";
        }
      }
    }
  }

  // get all of the elements that have the same id as the clicked element
  content = document.getElementsByClassName(elem.id);

  console.log(content);

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
