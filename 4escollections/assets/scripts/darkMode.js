
	let darkLightToggler = document.getElementById("dark_mode_toggle");	
	darkLightToggler.addEventListener('click', darkMode);

	function darkMode() {
		let parentList = ['homepage', 'products_page', 'about_us', 'about_content', 'contact_page'];
		for (i = 0; i < parentList.length; i++) {
			let reqElement = document.getElementById(parentList[i]);
				let elementClass = reqElement.classList;
					elementClass.remove('bg-light');
					document.getElementById('about_content').classList.remove('about-wrapper-bg');
				let darkStyleClass = `${parentList[i]}_dark`;
				elementClass.add(darkStyleClass);
				let ggg = document.querySelectorAll(`.${darkStyleClass}`);
		}
		// document.getElementById('navbar').classList.add("navbar-dark");
		// document.getElementById('navbar').classList.add("bg-dark");
		let cardDivs = document.querySelectorAll("div.card-body");
		for (i = 0; i < cardDivs.length; i++) {
			let cardElement = cardDivs[i];
			cardElement.style.background = "#404040";
		}
		let listItems = document.querySelectorAll("li.list-group-item");
		for (i = 0; i < listItems.length; i++) {
			let listElement = listItems[i];
			listElement.style.background = "#404040";
			listElement.style.color = "#f1f2f3";
		}

		let cardMainDivs = document.querySelectorAll("div.card");
		for (i = 0; i < cardMainDivs.length; i++) {
			let cardMainElement = cardMainDivs[i];
			cardMainElement.style.border = "none";
		}

		let catalogueCta = document.querySelectorAll("a.catalogueCta");
		for (i = 0; i < catalogueCta.length; i++) {
			let catalogueElem = catalogueCta[i];
			catalogueElem.classList.remove('btn-outline-danger');
			catalogueElem.classList.add('btn-danger');
		}
		document.body.style.background = "#303030";
		document.getElementById('dark_mode_toggle').innerHTML = "<i class='fa fa-solid fa-sun'></i> Light Mode";
		document.getElementById('dark_mode_toggle').removeEventListener('click', darkMode);
		document.getElementById('dark_mode_toggle').addEventListener('click', lightMode);

	}


	function lightMode(){
		let parentList = ['homepage', 'products_page', 'about_us', 'contact_page'];
		for (i = 0; i < parentList.length; i++) {
			let reqElement = document.getElementById(parentList[i]);
				let elementClass = reqElement.classList;
					elementClass.add('bg-light');
					document.getElementById('about_content').classList.add('about-wrapper-bg');
				let darkStyleClass = `${parentList[i]}_dark`;
				elementClass.remove(darkStyleClass);
				let ggg = document.querySelectorAll(`.${darkStyleClass}`);
		}
		// document.getElementById('navbar').classList.add("navbar-dark");
		// document.getElementById('navbar').classList.add("bg-dark");
		let cardDivs = document.querySelectorAll("div.card-body");
		for (i = 0; i < cardDivs.length; i++) {
			let cardElement = cardDivs[i];
			cardElement.style.background = "#ffffff";
		}
		let listItems = document.querySelectorAll("li.list-group-item");
		for (i = 0; i < listItems.length; i++) {
			let listElement = listItems[i];
			listElement.style.background = "#fafbfc";
			listElement.style.color = "#212529";
		}

		let cardMainDivs = document.querySelectorAll("div.card");
		for (i = 0; i < cardMainDivs.length; i++) {
			let cardMainElement = cardMainDivs[i];
			cardMainElement.style.border = "1px solid #dfdfdf";
		}

		let catalogueCta = document.querySelectorAll("a.catalogueCta");
		for (i = 0; i < catalogueCta.length; i++) {
			let catalogueElem = catalogueCta[i];
			catalogueElem.classList.remove('btn-danger');
			catalogueElem.classList.add('btn-outline-danger');
		}
		document.body.style.background = "#f8f9fa";
		document.getElementById('dark_mode_toggle').innerHTML = "<i class='fa fa-solid fa-moon'></i> Dark mode";
		document.getElementById('dark_mode_toggle').removeEventListener('click', lightMode);
		document.getElementById('dark_mode_toggle').addEventListener('click', darkMode);

	}