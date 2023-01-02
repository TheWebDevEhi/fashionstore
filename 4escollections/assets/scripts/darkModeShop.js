
	// if(localStorage.preferredTheme == "darkTheme"){
	// 	darkMode();
	// 	darkLightToggler.addEventListener('click', lightMode);
	// }else if(localStorage.preferredTheme == "lightTheme"){
	// 	lightMode();
	// }


	let darkLightToggler = document.getElementById("dark_mode_toggle");	
	darkLightToggler.addEventListener('click', darkMode);

	function darkMode() {
		let parentList = ['homepage', 'footer'];
		for (i = 0; i < parentList.length; i++) {
			let reqElement = document.getElementById(parentList[i]);
				let elementClass = reqElement.classList;
					elementClass.remove('bg-light');
				let darkStyleClass = `${parentList[i]}_dark`;
				elementClass.add(darkStyleClass);
		}
		document.getElementById('navbar').classList.add("navbar-dark");
		document.getElementById('navbar').classList.add("bg-custom-dark");
		document.getElementById('navbar').classList.remove("navbar-light");
		document.getElementById('navbar').classList.remove("bg-light");
		document.getElementById('navbar').classList.remove("antique-white");
	
		document.body.style.background = "#303030";
		document.getElementById('dark_mode_toggle').innerHTML = "<i class='fa fa-solid fa-sun'></i> Light Mode";
		document.getElementById('dark_mode_toggle').removeEventListener('click', darkMode);
		document.getElementById('dark_mode_toggle').addEventListener('click', lightMode);
		document.getElementById('dark_mode_toggle').classList.remove("btn-outline-secondary");
		document.getElementById('dark_mode_toggle').classList.add("btn-secondary");

		// Set a localStorage variable with the preferred color theme of the user 
		localStorage.preferredTheme = "darkTheme";

	}


	// function lightMode(){
	// 	document.getElementById('dark_mode_toggle').classList.add("btn-outline-secondary");
	// 	document.getElementById('dark_mode_toggle').classList.remove("btn-secondary");
	// 	let parentList = ['homepage', 'footer'];
	// 	for (i = 0; i < parentList.length; i++) {
	// 		let reqElement = document.getElementById(parentList[i]);
	// 			let elementClass = reqElement.classList;
	// 				elementClass.add('bg-light');
	// 				document.getElementById('about_content').classList.add('about-wrapper-bg');
	// 			let darkStyleClass = `${parentList[i]}_dark`;
	// 			elementClass.remove(darkStyleClass);
	// 	}
	// 	document.getElementById('navbar').classList.remove("navbar-dark");
	// 	document.getElementById('navbar').classList.remove("bg-custom-dark");
	// 	document.getElementById('navbar').classList.add("navbar-light");
	// 	document.getElementById('navbar').classList.add("bg-light");
		
	// 	document.body.style.background = "#f8f9fa";
	// 	document.getElementById('dark_mode_toggle').innerHTML = "<i class='fa fa-solid fa-moon'></i> Dark mode";
	// 	document.getElementById('dark_mode_toggle').removeEventListener('click', lightMode);
	// 	document.getElementById('dark_mode_toggle').addEventListener('click', darkMode);
	// 	localStorage.preferredTheme = "lightTheme";

	// }