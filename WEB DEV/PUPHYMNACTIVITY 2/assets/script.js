			var tstamp = [12, 15, 18, 24, 29, 35, 41, 47, 53, 56, 62, 68, 74, 80, 86, 89, 95, 112];
	    	var music = document.getElementById('music');
	    	var lyrics = document.getElementById('lyrics');
	    	var currentLine = -1
	    	music.addEventListener('timeupdate', function(){
	    		var currentTime = music.currentTime;
	    		var lineNo = -1;
	    		for (let i=0; i < tstamp.length; i++){
	    			if (currentTime < tstamp[i]){
	    				continue;
	    			} else{
	    				lineNo = i;
	    				//break;
	    			}
	    		}
	    		console.log(lineNo);
	    		if (currentLine == lineNo){
	    			return
	    		} else{
	    			currentLine = lineNo;
	    			var scrollPosition = (Math.max(lineNo - 2, 0) / (tstamp.length - 5)) * (lyrics.scrollHeight + 50 - lyrics.clientHeight);
			        lyrics.scrollTop = scrollPosition;
			        for(let i = 1; i <= 17; i++){
			        	document.getElementById('line' + i).style.color = "black";
			        	document.getElementById('line' + i).style.fontSize = 36 + 'px';
			        }
			        if (lineNo >= 0 && lineNo < 17){
				        document.getElementById('line' + (lineNo + 1)).style.color = "#0047ab";
				        document.getElementById('line' + (lineNo + 1)).style.fontSize = 48 + 'px';
				    }
	    		}
		        
	    	})
	    	document.querySelectorAll('p').forEach(function(element) {
			    element.addEventListener('click', function() {
			        var id = this.id; 
			        var number = id.match(/\d+/); 

			        if (number !== null) {
			            var x = parseInt(number[0]); 
			            music.currentTime = tstamp[x - 1];
			            if (music.paused) {
					        music.play();
					    } 
			        } else {
			            console.log('No number found in ID');
			        }
			    });
			});