// Get all images with the 'image' class
const images = document.querySelectorAll(".image");

// Add click event listener to each image
images.forEach((image) => {
	image.addEventListener("click", function () {
		// Open the clicked image in a new tab
		window.open(image.src, "_blank");
	});
});

const root = document.documentElement;
const windowWidth = window.innerWidth;

// Define event listeners
const columnOne = document.getElementById("column-1");
const columnTwo = document.getElementById("column-2");
const columnFour = document.getElementById("column-4");

// Event listeners for column one and column two
columnOne.addEventListener("click", setColumnOne);
columnTwo.addEventListener("click", setColumnTwo);
columnFour.addEventListener("click", setColumnFour);

// Function to set column based on window width
function setColumnBasedOnWidth() {
	const windowWidth = window.innerWidth;

	if (windowWidth < 420) {
		columnTwo.removeEventListener("click", setColumnTwo);
	} else {
		columnTwo.addEventListener("click", setColumnTwo);
	}

	if (windowWidth < 900) {
		columnFour.removeEventListener("click", setColumnFour);
	} else {
		columnFour.addEventListener("click", setColumnFour);
	}

	// Adjust column based on window width
	if (windowWidth < 420) {
		root.style.setProperty("--column", "1");
	} else if (windowWidth < 600) {
		root.style.setProperty("--column", "2");
	} else if (windowWidth < 900) {
		root.style.setProperty("--column", "3");
	} else {
		root.style.setProperty("--column", "4");
	}
}

// Call the function initially to set column based on initial window width
setColumnBasedOnWidth();

// Event listener for window resize
window.addEventListener("resize", setColumnBasedOnWidth);

// Event handler functions
function setColumnOne() {
	root.style.setProperty("--column", "1");
}

function setColumnTwo() {
	root.style.setProperty("--column", "2");
}

function setColumnFour() {
	root.style.setProperty("--column", "4");
}
