$(document).ready(function() {
	// $('#MSOZoneCell_WebPartWPQ6
	// input').removeAttr('onkeypress');
	$('#MSOZoneCell_WebPartWPQ6 input').keypress(function(event) {

		if (event.keyCode == 10 || event.keyCode == 13) {
			event.preventDefault();
			ck_asamblea.interceptSubmit();
		}

	});

	$('#MSOZoneCell_WebPartWPQ7 input').click(function(e) {
		e.preventDefault();
		ck_asamblea.interceptSubmit();

	});

	// ---------------------------------
	ck_asamblea.getLastSearch();

});

// ----------------------------

ck_asamblea = {
	setLastSearch : function(searchTerm) {
		var ck_asambleaStorageBox = {
			'lastSearch' : searchTerm
		};
		console.log(ck_asambleaStorageBox);
		// Put the object into storage
		localStorage.setItem('ck_asambleaStorageBox', JSON.stringify(ck_asambleaStorageBox));

	},
	getLastSearch : function(searchTerm) {

		// Retrieve the object from storage
		var ck_asambleaStorageBox = JSON.parse(localStorage.getItem('ck_asambleaStorageBox'));

		console.log('ck_asambleaStorageBox: ', ck_asambleaStorageBox);

		var textSearch = $('#MSOZoneCell_WebPartWPQ6 input').val();

		console.log('textSearch: ' + textSearch);

		if (window.location.search.indexOf('search=') > -1) {
			var URLterm = $.query.get("search");
			console.log('URLTerm: ' + URLterm);

			/*
			 * if (textSearch != '') { if (textSearch != URLterm) { // Busqueda
			 * nueva o // Update URL var newURL =
			 * 'http://www.asamblea.go.cr/Centro_de_informacion/Consultas_SIL/Pginas/Proyectos.aspx?search=' +
			 * textSearch; console.log(newURL); // $.query.set("search",
			 * $(this).val()); window.history.pushState("Asamblea Legislativa -
			 * Resultados", "Asamblea Legislativa - Resultados", newURL);
			 * console.log('updated URL'); } } else { // shared URL
			 */
			if (textSearch != ck_asambleaStorageBox.lastSearch || textSearch == '') {
				// Search from URL
				ck_asamblea.setLastSearch(textSearch);
				$('#MSOZoneCell_WebPartWPQ6 input').val(URLterm).focus().trigger('change');
				$('form').trigger('submit', [ true ]);
				console.log('submitted');
			}
			// }

		} else {
			if (textSearch != '') {
				if (textSearch != URLterm) { // Busqueda nueva o
					// Update URL
					var newURL = 'http://www.asamblea.go.cr/Centro_de_informacion/Consultas_SIL/Pginas/Proyectos.aspx?search=' + textSearch;
					console.log(newURL);
					// $.query.set("search", $(this).val());
					window.history.pushState("Asamblea Legislativa - Resultados", "Asamblea Legislativa - Resultados", newURL);
					console.log('updated URL');

				}
			}
		}
	},
	// ---------
	interceptSubmit : function() {
		var newURL = "";
		var searchTerm = $('#MSOZoneCell_WebPartWPQ6 input').val();
		if (searchTerm != '') {
			newURL = 'http://www.asamblea.go.cr/Centro_de_informacion/Consultas_SIL/Pginas/Proyectos.aspx?search=' + searchTerm;
			ck_asamblea.setLastSearch($('#MSOZoneCell_WebPartWPQ6 input').val());
			console.log(newURL);

		} else {
			newURL = 'http://www.asamblea.go.cr/Centro_de_informacion/Consultas_SIL/Pginas/Proyectos.aspx';
			ck_asamblea.setLastSearch("");
			console.log(newURL);

		}
		$('form').attr('action', newURL);
		$('form').trigger('submit', [ true ]);
	}
}
