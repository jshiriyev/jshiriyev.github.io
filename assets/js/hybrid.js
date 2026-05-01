function changeMainView(ID) {

	hybrid.classList.remove('active');
	sidebar.classList.toggle('active');
	canvas.classList.toggle('active');

	sidebarToggle.textContent = [pageTitle,'>>',sidebarAccordions[ID].textContent].join(' ');

	if (!winmedia.matches) {
		sidebarAccordions[ID].classList.toggle("active");
		sidebarAccordions[ID].nextElementSibling.classList.toggle("active")
	}

	canvasPageItem.classList.remove("active")

	canvasMajorItems[ID].classList.toggle("active")

	canvasPanels[ID].classList.toggle("active")

};