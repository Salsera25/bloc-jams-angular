 (function() {
     function SongPlayer() {
          var SongPlayer = {};
		  var currentSong = null;
		 
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
        		currentSong.playing = null;
			  }
 
			  currentBuzzObject = new buzz.sound(song.audioUrl, {
				  formats: ['mp3'],
				  preload: true
			  });
 
			  currentSong = song;
 		  };
	 
		 
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
		  * @public method SongPlay.play
		  * @desc if the selected song is not the current song, it is set and then will play; or if the selected song is the same as the current song and currentBuzzObject is paused, then the selected song will play
		  * @param {Object} song
		  */  
          SongPlayer.play = function(song) {
			  if (currentSong !== song) {
				  setSong(song);
				  playSong(song);
				  // replacing code below with playSong function
				  //currentBuzzObject.play();  
				  //song.playing = true;
			   } else if (currentSong === song) {
				   if (currentBuzzObject.isPaused()) {
					    playSong(song); 
					   // replacing code below with playSong function
					   //currentBuzzObject.play();
         	       }
     	       }
		  };
		 
		  /**ASSIGNMENT CHECKPOINT 7
		  * @public method SongPlayer.pause
		  * @desc stops playing currentBuzzObject 
		  * @param {Object} song
		  */  
		  SongPlayer.pause = function(song) {
			  currentBuzzObject.pause();
			  song.playing = false;
 		  };
		 
	 	  return SongPlayer;
     	}
     angular
         .module('blocJams')
         .factory('SongPlayer', SongPlayer);
 })();