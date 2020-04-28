/**
 * Attraverso una chiamata ajax all’Api di boolean avremo a disposizione una decina di dischi musicali. 
 * Servendoci di handlebars stampiamo tutto a schermo.
 *
 * Bonus: Creare una select con i seguenti generi: pop, rock, metal e jazz. 
 * In base a cosa scegliamo nella select vedremo i corrispondenti cd.
 */

$(document).ready(function() {
	
	var cdContainer = $('.cds-container');
	// Handlebars init
	var source = $('#disc-template').html();
	var template = Handlebars.compile(source);

	// Ajax request
	$.ajax({
		url: 'https://flynn.boolean.careers/exercises/api/array/music',
		method: 'GET',
		success: function(result) {

			if (result.success) {
				for (var i = 0; i < result.response.length; i++) {
					var item = result.response[i];
					var context = {
						cover: item.poster,
						title: item.title,
						author: item.author,
						year: item.year
					}

					var output = template(context);
					cdContainer.append(output)
				};

			}
		},
		error: function() {
			console.log('Error');
			
		}
	});


}); // end doc ready

