$(songs).hide();

 $("#site").click(function(){
 		console.log("hi");
		$.getJSON("lab4.json", function(result){
			console.log(result);
			var track = "";
			var artist ="";
			var album ="";
			var year = "";
			var genre="";
			var site="";
			var cover="";
			$.each(result.songbook, function(i, item){
				if(item.fave == true){
				 	$(songNames).append($('<li>',{
				 		text: item.track,
				 		class: "favorite"
				}));
				 }else{
					$(songNames).append($('<li>',{
						text: item.track
					}));
				 }
				$(artists).append($('<li>',{
						text: item.artist
				}));
 				$(albumNames).append($('<li>',{
 					text: item.album
 				}));
 				$(releaseDate).append($('<li>',{
 					text: item.year
 				}));
 				$(genres).append($('<li>',{
 					text: item.genre
 				}));
 				$(webSites).append($('<li>',{}).append($('<a>',{
 					href: item.artistURL,
 					text: item.site
 				})));
 				$(covers).append($('<li>', {}).append($('<img>',{
					src: item.cover,
					alt: item.album
				})));
			});
		$(songs).show();
		document.getElementById("site").style.display = 'none';
	});
});
