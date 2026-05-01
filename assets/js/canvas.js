// It is going to scroll to lower text when clicked on item head

canvasItems[0].classList.toggle("active")

function changeCanvasItemFromCanvas(CIID) {

  for (let i = 0; i < canvasItems.length; i++) {
    canvasItems[i].classList.remove('active');
  }

  var canvasItemById = document.getElementById(CIID);

  canvasItemById.classList.toggle('active')

}