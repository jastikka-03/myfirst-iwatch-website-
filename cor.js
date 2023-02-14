var images = ['images/undraw_palette_110c.png','images/undraw_Smartwatch_re_59lx.png','images/undraw_watch_application_uhc9 (1).png'];

var i =0;

function slideShow() {

    document.getElementById("image").src=images[i];

    if(i<images.length-1){

        i++;

    }

    else {

        i=0;

    }

    setTimeout("slideShow()" , 500);

}

window.onload = slideShow;


//img zoom in out

let myImage = document.getElementById("myImage");
let zoom = 1;

myImage.addEventListener("mouseover", function() {
  myImage.style.transform = `scale(${zoom + 0.2})`;
  zoom += 0.2;
});

myImage.addEventListener("mouseout", function() {
  myImage.style.transform = `scale(${zoom - 0.2})`;
  zoom -= 0.2;
});

//button hovor color
function mouseOver(button)
{
    document.getElementById("button").style.backgroundColor="darkblue";
}
function mouseOut(button){
    document.getElementById("button").style.backgroundColor="gray";
}
 

// filter//////////////////////////////////////////////////////////////////////////////////
filterSelection("all")
function filterSelection(c) {
  var x, i;
  x = document.getElementsByClassName("column");
  if (c == "all") c = "";
  for (i = 0; i < x.length; i++) {
    w3RemoveClass(x[i], "show");
    if (x[i].className.indexOf(c) > -1) w3AddClass(x[i], "show");
  }
}

function w3AddClass(element, name) {
  var i, arr1, arr2;
  arr1 = element.className.split(" ");
  arr2 = name.split(" ");
  for (i = 0; i < arr2.length; i++) {
    if (arr1.indexOf(arr2[i]) == -1) {element.className += " " + arr2[i];}
  }
}

function w3RemoveClass(element, name) {
  var i, arr1, arr2;
  arr1 = element.className.split(" ");
  arr2 = name.split(" ");
  for (i = 0; i < arr2.length; i++) {
    while (arr1.indexOf(arr2[i]) > -1) {
      arr1.splice(arr1.indexOf(arr2[i]), 1);     
    }
  }
  element.className = arr1.join(" ");
}


// Add active class to the current button (highlight it)
var btnContainer = document.getElementById("myBtnContainer");
var btns = btnContainer.getElementsByClassName("btnx");
for (var i = 0; i < btns.length; i++) {
  btns[i].addEventListener("click", function(){
    var current = document.getElementsByClassName("active");
    current[0].className = current[0].className.replace(" active", "");
    this.className += " active";
  });
}


///////////////////////////////////////////////////////////////////////////////////pathing

function newDoc() {
  window.location.assign("/home/ukistudent/Documents/myprojects/iWatch-website/iWatch/product.html")
}