// console.log("Hello World")

// fetch('home.html')

var newdiv = document.createElement('div');

newdiv.location = "home.html";

console.log(newdiv);

function clickchange(clickid) {
    // var page = window.location.pathname
    // console.log(page)
    document.getElementById('canvascontent').innerHTML = clickid;
    // window.open("home.html")
    // var text = `<p>This is the content of Home ${clickid}</p>`
    // document.getElementById("content").innerHTML='<object type="text/html" data="home.html" ></object>';
    // divtag.innerHTML = document.getElementById('courseflow');
}

// function changeClass(){
//   document.getElementById("myNAVlnk").className = "active";
// }

// window.onload = function(){
//   document.getElementById("myNAVlnk").addEventListener('click',changeClass);
// }

// function myFunction(){
//   document.getElementById("demo").innerHTML="Shiriyev";
//   }

// function photoNext(){
//   document.getElementById("demo2").src="my_photo/p2.jpg";
//   }

// function photoPrev(){
//   document.getElementById("demo2").src="my_photo/p1.jpg";
//   }