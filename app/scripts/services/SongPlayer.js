 (function() {
     function SongPlayer(Fixtures) {
          var SongPlayer = {};
		  var currentAlbum = Fixtures.getAlbum();
		  /**
 		  * @desc Buzz object audio file
 		  * @type {Object}
 		  */
		  var currentBuzzObject = null;
		   
		  /**
		  * @function setSong
		  * @desc Stops currently playing song and loads new audio file as currentBuzzObject
		  * @param {Object} song
		  */
		  var setSong = function(song) {
			  if (currentBuzzObject) {
        		currentBuzzObject.stop();
        		SongPlayer.currentSong.playing = null;
			  }
 
			  currentBuzzObject = new buzz.sound(song.audioUrl, {
				  formats: ['mp3'],
				  preload: true
			  });
 
			  SongPlayer.currentSong = song;
 		  };
		 
		 /**
		* @function getSongIndex  
		* @descr Gets the index of a song
		* @param {Object} song
 		*/
	     var getSongIndex = function(song) {
     		return currentAlbum.songs.indexOf(song);
		 };
		 
		/**
		* @desc Active song object from list of songs
		* @type {Object}
 		*/
		SongPlayer.currentSong = null;
		 
	    /**ASSIGNMENT CHECKPOINT 7
		* @function playSong
		* @desc starts playing currentBuzzObject 
		* @param {Object} song
		*/  
		var playSong = function(song) {
			  if (currentBuzzObject) {
        		currentBuzzObject.play(); 
        		song.playing = true;
			  }
 		  };
		 
		 
		 
		  /**ASSIGNMENT CHECKPOINT 7
		  /**
 		  * @function play -public method
		  * @desc Play current or new song
 		  * @param {Object} song
 		  */  
          SongPlayer.play = function(song) {
			  song = song || SongPlayer.currentSong;
			  if (SongPlayer.currentSong !== song) {
				  setSong(song);
				  playSong(song);
				  // replacing code below with playSong function
				  //currentBuzzObject.play();  
				  //song.playing = true;
			   } else if (SongPlayer.currentSong === song) {
				   if (currentBuzzObject.isPaused()) {
					    playSong(song); 
					   // replacing code below with playSong function
					   //currentBuzzObject.play();
         	       }
     	       }
		  };
		 
		  /**ASSIGNMENT CHECKPOINT 7
		  * @function pause - public method 
		  * @desc pause current song 
		  * @param {Object} song
		  */  
		  SongPlayer.pause = function(song) {
			  song = song || SongPlayer.currentSong;
			  currentBuzzObject.pause();
			  song.playing = false;
 		  };
		 
		  /**
		  * @function previous - public method 
		  * @desc plays previous song
		  */  
		  SongPlayer.previous = function() {
     		  var currentSongIndex = getSongIndex(SongPlayer.currentSong);
			  currentSongIndex--;
			  
			  if (currentSongIndex < 0) {
				  currentBuzzObject.stop();
				  SongPlayer.currentSong.playing = null;
			  } else {
         			var song = currentAlbum.songs[currentSongIndex];
         			setSong(song);
         			playSong(song);
     		  }
 		  };
		 
	 	  return SongPlayer;
     	}
     angular
         .module('blocJams')
         .factory('SongPlayer', ['Fixtures', SongPlayer]);
 })();