var theme = localStorage.preferredTheme;

function autoEffects() {	 //...This is the function to control the visibility and appearanc of elements  based on users scrolling
	let screen_position = window.pageYOffset;
	let navbar = document.getElementById('navbar');
	let navClasses = navbar.classList;
	let darkModeToggler = document.getElementById('dark_mode_toggle');
	let screenHeight = window.innerHeight;
	let backToTop = document.getElementById('back_to_top');
	// This is for the navbar and the dark mode toggle button
	if (localStorage.preferredTheme == "lightTheme") {
		if (screen_position > 60) {
			navClasses.remove("bg-light");
			navClasses.add("antique-white");
			darkModeToggler.classList.remove("btn-outline-secondary");
			darkModeToggler.classList.add("btn-light");
			darkModeToggler.classList.add("dark-shadow");
		} else {
			navClasses.remove("antique-white");
			navClasses.add("bg-light");
			darkModeToggler.classList.remove("btn-light");
			darkModeToggler.classList.remove("dark-shadow");
			darkModeToggler.classList.add("btn-outline-secondary");
		}
	} else if (localStorage.preferredTheme == "darkTheme") {
		if (screen_position > 60) {
			navClasses.remove("bg-custom-dark");
			navClasses.add("dark-navbar");
		} else {
			navClasses.remove("dark-navbar");
			navClasses.add("bg-custom-dark");
			darkModeToggler.classList.add("btn-secondary");
			darkModeToggler.classList.remove("btn-custom-dark");
			darkModeToggler.classList.remove("light-shadow");
		}
	}

	// This is for the back-to-top button
	if (screen_position > (screenHeight / 2)) {
		backToTop.classList.add('backTop');
	} else {
		backToTop.classList.remove('backTop');
	}
}

function scrollToTop() {  //This is the function to scroll back to the top of the webpage
	window.scrollTo(0, 0);
}


// Make sure to check those elements that have a default light background that are not declared using classes
// For example, the lists in the contact us page should be adjusted also in the script above.

// Let the screen_position variable hold the value for the offset ...

// Let the function to make the navbar sticky be done as:
// 		A condition is written for when the screen_position value is greater than the height of the navbar,
// 			the navabr element should get a grey background and fixed position

// Let the function to make the back-to-top button be done as follows:
// 		A condition is written that when the screen_position value is greater the viewport's height,
// 			the back-to-top element height initially set to 0 is then changed to 40px,
// 			so as the give it the visibility needed

// 		A block is also written so that when the button is clicked, the window.scrollTo(0,0) fucntion is invoked
