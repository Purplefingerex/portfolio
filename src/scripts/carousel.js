function initializeCarousel() {
	const prevBtn = document.querySelector(".prev-btn");
	const nextBtn = document.querySelector(".next-btn");
	const images = document.querySelectorAll(".carousel img");
	const imgDots = document.querySelectorAll(".img-nav");

	let currentImageIndex = 0;

	function showImage(index) {
		images.forEach((image, i) => {
			image.classList.remove("active");
		});
		images[index].classList.add("active");
	}
	// img navigation dots
	function removeActiveClass() {
		imgDots.forEach(dot => {
			dot.classList.remove("active");
		});
	}

	function setActiveDot(index) {
		removeActiveClass();
		imgDots[index].classList.add("active");
		images.forEach(image => {
			image.style.opacity = 0; // Beállítjuk az inaktív képek átlátszóságát 0-ra
		});
		images[index].style.opacity = 1; // Az aktív kép átlátszóságát beállítjuk 1-re
	}

	imgDots.forEach((dot, index) => {
		dot.addEventListener("click", function () {
			currentImageIndex = index;
			showImage(currentImageIndex);
			setActiveDot(currentImageIndex);
		});
	});
	// buttons
	prevBtn.addEventListener("click", function () {
		currentImageIndex =
			(currentImageIndex - 1 + images.length) % images.length;
		showImage(currentImageIndex);
		setActiveDot(currentImageIndex);
	});

	nextBtn.addEventListener("click", function () {
		currentImageIndex = (currentImageIndex + 1) % images.length;
		showImage(currentImageIndex);
		setActiveDot(currentImageIndex);
	});
}

//  initializeCarousel called when DOMContentLoaded
document.addEventListener("DOMContentLoaded", function () {
	initializeCarousel();
});
export { initializeCarousel };
