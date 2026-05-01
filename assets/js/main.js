var winmedia = window.matchMedia("(max-width: 600px)");

const ribbon = document.getElementsByClassName('ribbon')[0];

const ribbonLinks = ribbon.getElementsByClassName('links')[0];
const ribbonToggle = ribbon.getElementsByClassName('toggle')[0];

const sidebar = document.getElementsByClassName('sidebar')[0];

const sidebarPyDemo = document.getElementsByClassName('sidebar pydemo');
const sidebarLibrary = document.getElementsByClassName('sidebar library');

const sidebarToggle = sidebar.getElementsByClassName('toggle')[0];

const pageTitle = sidebarToggle.textContent;

const sidebarLinks = sidebar.getElementsByClassName('links')[0];

const sidebarAccordions = sidebar.getElementsByClassName("accordion");
const sidebarPanels = sidebar.getElementsByClassName('panel');

const canvas = document.getElementsByClassName('canvas')[0];

const canvasItems = canvas.getElementsByClassName('item');

const canvasPageItem = canvas.getElementsByClassName('item page')[0];
const canvasMajorItems = canvas.getElementsByClassName('item major');

const canvasPanels = canvas.getElementsByClassName('panel')

const canvasMinorItems = canvas.getElementsByClassName('item minor');

const hybrid = document.getElementsByClassName('hybrid')[0];

if (typeof hybrid !== 'undefined') {
	hybrid.classList.toggle("active");
	sidebar.classList.remove("active");
	canvas.classList.remove("active");
} else {
	sidebar.classList.toggle("active");
	canvas.classList.toggle("active");
}