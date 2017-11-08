function GetGenreData(){
	
	var genreDataArray = new Array();
	genreDataArray.push("ACTION");
	genreDataArray.push("COMEDY");
	genreDataArray.push("CRIME");
	genreDataArray.push("DRAMA");
	genreDataArray.push("FANTASY");
	genreDataArray.push("SCI-FI");
	return genreDataArray;
	
}

function GetActorData()
{
	
	var actorDataArray = new Array();
	actorDataArray.push("Brad Pitt");
	actorDataArray.push("Jim Carrey");
	actorDataArray.push("Leonardo DiCaprio");
	actorDataArray.push("Tom Cruise");
	return actorDataArray;
	
}

function GetMovieData()
{
	
	var movieList = new Array();
	
	var movie = new Object();
	movie.imgAddr = "img/the mask.jpg";
	movie.title = "The Mask ";
	movie.genre = "Comedy, Family, Fantasy";
	movie.year = "1994";
	movie.director = "Chuck Russell ";
	movie.actor = "Jim Carrey, Cameron Diaz, Peter Riegert";
	movieList.push(movie);
	
	movie = new Object();
	movie.imgAddr = "img/Batman_Forever.jpg";
	movie.title = "Batman Forever ";
	movie.genre = "Action, Adventure, Fantasy";
	movie.year = "1995";
	movie.director = "Joel Schumacher";
	movie.actor = "Val Kilmer, Tommy Lee Jones, Jim Carrey";
	movieList.push(movie);
	
	movie = new Object();
	movie.imgAddr = "img/Titanic.jpg";
	movie.title = "Titanic";
	movie.genre = " Drama, Romance";
	movie.year = "1997";
	movie.director = "James Cameron";
	movie.actor = "Leonardo DiCaprio, Kate Winslet, Billy Zane";
	movieList.push(movie);

	movie = new Object();
	movie.imgAddr = "img/BruceAlmighty.jpg";
	movie.title = "Bruce Almighty";
	movie.genre = "Comedy, Drama, Fantasy";
	movie.year = "2003";
	movie.director = "Tom Shadyac";
	movie.actor = "Jim Carrey, Jennifer Aniston, Morgan Freeman";
	movieList.push(movie);
	
	movie = new Object();
	movie.imgAddr = "img/ace-ventura-when-nature-calls-movie-poster.jpg";
	movie.title = "Ace Ventura: When Nature Calls";
	movie.genre = "Adventure, Comedy, Crime";
	movie.year = "1995";
	movie.director = "Steve Oedekerk";
	movie.actor = "Jim Carrey, Ian McNeice, Simon Callow";
	movieList.push(movie);
	
	movie = new Object();
	movie.imgAddr = "img/catch-me.jpg";
	movie.title = "Catch Me If You Can";
	movie.genre = " Biography, Crime, Drama";
	movie.year = "2002";
	movie.director = "Steven Spielberg";
	movie.actor = "Leonardo DiCaprio, Tom Hanks, Christopher Walken";
	movieList.push(movie);

	movie = new Object();
	movie.imgAddr = "img/aFewGoodMen.jpg";
	movie.title = "A Few Good Men";
	movie.genre = "Drama, Thriller";
	movie.year = "1992";
	movie.director = "Rob Reiner";
	movie.actor = "Tom Cruise, Jack Nicholson, Demi Moore";
	movieList.push(movie);
	
	movie = new Object();
	movie.imgAddr = "img/Inception.jpg";
	movie.title = "Inception";
	movie.genre = "Action, Adventure, Sci-Fi";
	movie.year = "2010";
	movie.director = "Christopher Nolan";
	movie.actor = "Leonardo DiCaprio, Joseph Gordon-Levitt, Ellen Page";
	movieList.push(movie);
	
	movie = new Object();
	movie.imgAddr = "img/jerryMaguire.jpg";
	movie.title = "Jerry Maguire";
	movie.genre = "Comedy, Drama, Romance";
	movie.year = "1996";
	movie.director = "Cameron Crowe";
	movie.actor = "Tom Cruise, Cuba Gooding Jr., Renée Zellweger";
	movieList.push(movie);
	
	movie = new Object();
	movie.imgAddr = "img/Legendsoffallposter.jpg";
	movie.title = "Legends of the Fall";
	movie.genre = "Drama, Romance, War ";
	movie.year = "1994";
	movie.director = "Edward Zwick";
	movie.actor = "Brad Pitt, Anthony Hopkins, Aidan Quinn";
	movieList.push(movie);
	
	movie = new Object();
	movie.imgAddr = "img/liarLiar.jpg";
	movie.title = "Liar Liar ";
	movie.genre = "Comedy, Fantasy";
	movie.year = "1997";
	movie.director = "Tom Shadyac";
	movie.actor = "Jim Carrey, Maura Tierney, Justin Cooper";
	movieList.push(movie);
	
	movie = new Object();
	movie.imgAddr = "img/minorityReport.jpg";
	movie.title = "Minority Report";
	movie.genre = "Action, Adventure, Crime";
	movie.year = "2002";
	movie.director = "Steven Spielberg";
	movie.actor = "Tom Cruise, Colin Farrell, Samantha Morton";
	movieList.push(movie);
	
	movie = new Object();
	movie.imgAddr = "img/moneyBall.jpg";
	movie.title = "Moneyball";
	movie.genre = "Biography, Drama, Sport ";
	movie.year = "2011";
	movie.director = "Bennett Miller";
	movie.actor = "Brad Pitt, Robin Wright, Jonah Hill";
	movieList.push(movie);
	
	movie = new Object();
	movie.imgAddr = "img/oceans13.jpg";
	movie.title = "Ocean's Thirteen";
	movie.genre = "Crime, Thriller";
	movie.year = "2007";
	movie.director = "Steven Soderbergh";
	movie.actor = "George Clooney, Brad Pitt, Matt Damon";
	movieList.push(movie);
	
	movie = new Object();
	movie.imgAddr = "img/se7en.jpg";
	movie.title = "Se7en";
	movie.genre = "Crime, Drama, Mystery";
	movie.year = "1995";
	movie.director = "David Fincher";
	movie.actor = "Morgan Freeman, Brad Pitt, Kevin Spacey";
	movieList.push(movie);
	
	movie = new Object();
	movie.imgAddr = "img/benjamin.jpg";
	movie.title = "The Curious Case of Benjamin Button";
	movie.genre = "Drama, Fantasy, Romance";
	movie.year = "2008";
	movie.director = "David Fincher";
	movie.actor = "Brad Pitt, Cate Blanchett, Tilda Swinton";
	movieList.push(movie);
	
	movie = new Object();
	movie.imgAddr = "img/departed.jpg";
	movie.title = "The Departed";
	movie.genre = " Crime, Drama, Thriller";
	movie.year = "2006";
	movie.director = "Martin Scorsese";
	movie.actor = " Leonardo DiCaprio, Matt Damon, Jack Nicholson";
	movieList.push(movie);
	
	movie = new Object();
	movie.imgAddr = "img/gatsby.jpg";
	movie.title = "The Great Gatsby";
	movie.genre = "Drama, Romance";
	movie.year = "2013";
	movie.director = "Baz Luhrmann";
	movie.actor = "Leonardo DiCaprio, Carey Mulligan, Joel Edgerton";
	movieList.push(movie);
	
	movie = new Object();
	movie.imgAddr = "img/trumanShow.jpeg";
	movie.title = "The Truman Show";
	movie.genre = "Comedy, Drama, Sci-Fi";
	movie.year = "1998";
	movie.director = "Peter Weir";
	movie.actor = "Jim Carrey, Ed Harris, Laura Linney";
	movieList.push(movie);
	
	movie = new Object();
	movie.imgAddr = "img/topgun.jpg";
	movie.title = "Top Gun";
	movie.genre = "Action, Drama, Romance";
	movie.year = "1986";
	movie.director = "Tony Scott";
	movie.actor = "Tom Cruise, Tim Robbins, Kelly McGillis";
	movieList.push(movie);
	
	return movieList;
	
}


function GetInitData()
{
	var genreData = GetGenreData();
	var actorData = GetActorData();
	
	var initData = new Object();
	initData.genre = genreData;
	initData.actor = actorData;

	var initJSON = JSON.stringify(initData);
	return initJSON;
	
}


function GetMovieList(jsonParam)
{

	var searchCondition = JSON.parse(jsonParam);
	var condGenre = searchCondition.genre.toUpperCase();
	var condActorArray = searchCondition.actor;
	
	var movieList = GetMovieData();
	var retList = new Array();
	
	for(var i=0; i<movieList.length; i++)
	{
		var targetGenre = movieList[i].genre.toUpperCase();
		var targetActor = movieList[i].actor.toUpperCase();
	
		if(condGenre != "" && condActorArray.length != 0)
		{
		
			if(targetGenre.indexOf(condGenre) > -1)
			{
				for(var j=0; j<condActorArray.length; j++)
				{	
					if(targetActor.indexOf(condActorArray[j].toUpperCase()) > -1)
					{
						retList.push(movieList[i]);
						break;
					}
				}
				
			}
			
		}else if (condGenre != "" && condActorArray.length == 0)
		{
			if(targetGenre.indexOf(condGenre) > -1)
			{
				retList.push(movieList[i]);
			}
			
		}else if(condGenre == "" && condActorArray.length != 0)
		{
			for(var j=0; j<condActorArray.length; j++)
			{
				if(targetActor.indexOf(condActorArray[j].toUpperCase()) > -1)
				{
					retList.push(movieList[i]);
					break;
				}
			}			
			
		}else{
			retList.push(movieList[i]);
		}
	}

	var jsonData = JSON.stringify(retList);
	
	return jsonData;
	
}
