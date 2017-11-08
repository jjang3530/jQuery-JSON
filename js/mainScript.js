$(document).ready(function() {

	var responseText = GetInitData();
	
	$("#receiving").html(responseText);
	
	// parse JSON to object
	var obj = JSON.parse(responseText);

	// create genre combo box
	var genreHtml = "GENRE&nbsp;:&nbsp;<select id='genre'><option value=''>";
	var genreArray = obj.genre;
	for(var i in genreArray)
	{
		genreHtml += "<option value='" + genreArray[i] + "'>" + genreArray[i];
	}
	genreHtml += "</select>";
	$("#genreArea").html(genreHtml);
	
	// create actor check box
	var actorHtml = "ACTOR&nbsp;:&nbsp;<br>";
	var actorArray = obj.actor;
	
	for(var i in actorArray)
	{
		actorHtml += "<input type='checkbox' value='" + actorArray[i] + "' >&nbsp;" + actorArray[i] + "<br>";
	}
	$("#actorArea").html(actorHtml);

});

$(document).ready(function() {

	$("#search").click(function() {

		var searchCondition = new Object();
		// set a selected genre
		searchCondition.genre = $('#genre').val();
		
		// set checked actors
		var checkedActor = $("#actorArea [type='checkbox']:checked");
		var actorArray = new Array();
		for(var i=0; i<checkedActor.length; i++)
		{
			actorArray.push(checkedActor[i].value);
		}
		searchCondition.actor = actorArray;
		
		// make Object to JSON
		var jsonParam = JSON.stringify(searchCondition);
		$("#sending").html(jsonParam);

		var responseText = GetMovieList(jsonParam);
		$("#receiving").html(responseText);
	
		var movieList = JSON.parse(responseText);
		var html = "<table>";
		for(var i in movieList){
		
			html += "<tr>";
			html += "<td class='posterTD'><img src='" + movieList[i].imgAddr + "' class='poster'></td>"
			html += "<td class='infoTD'>"; 
			html += "<div class='title'><h2>Title : " + movieList[i].title + "</h2></div>";
			html += "<div>Year : " + movieList[i].year + "</div>";
			html += "<div>Actor : " + movieList[i].actor + "</div>";
			html += "<div>Genre : " + movieList[i].genre + "</div>";
			html += "<div>Director : " + movieList[i].director + "</div>";
			html += "</td>";
			html += "</tr>";

		}
		
		html += "</table>";
		$("#result").html(html);

	})

});	


	
