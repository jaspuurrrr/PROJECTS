
			const abtcaptext = ["A photo of me in a fitting room. Really, I just can't find a nice pic of me.", "Not my best photo but at least I'm happy in this one", "A photo captured in one of the best nights of my life."];
			var abtcapcount = 1;

			const mathcaptext = ["I got a Silver Award in the Sipnayan 2020 challenge hosted by Ateneo de Manila University", "I've been a part of the Photomath Marketplace's Team of Math Experts since 2021", "We, together with my teammate Vincent dela Cruz, won first place in the PiTAGORAS Challenge hosted by University of Santo Tomas in 2019."];
			var mathcapcount = 1;

			const codecaptext = ["Front page of the website we made before.", "One of the small projects we made in our early college days.", "Of course, this website."];
			var codecapcount = 1;

			const musiccaptext = ["Weathering With You Album by RADWIMPS", "Flying Solo Album by Pamungkas", "evermore AKA Taylor Swift's best album"];
			var musiccapcount = 1;

			const gamescaptext = ["Genshin Impact, one of the best games I've played.", "Beat my No.30 Philippines Diggie",  "My favorite game as a child"];
			var gamescapcount = 1;

			var frontpage = document.getElementById("frontpage");

			function showContent() {
			    frontpage.style.opacity = 1;
			}

			setTimeout(showContent, 1000);


			var fbut = document.getElementById("fbut");
			var farrow = document.getElementById("farrow");
			var ftext = document.getElementsByClassName("ftext");
			var rotatedtext = document.getElementsByClassName("rotatedtext");
			var content = document.getElementById("content");

			fbut.addEventListener("click", function butclick() {
				if(document.getElementById("xx").textContent == "Know More About Me"){ 
					frontpage.style.position = "static";
					content.style.display = "block";
					document.getElementById("content1").classList.remove("vanish");
					document.getElementById("content1").classList.add("current");

					var backgroundColor = window.getComputedStyle(document.getElementById("content1")).backgroundColor;
			        document.getElementsByClassName("content-body")[0].style.backgroundColor = backgroundColor;
					content.scrollIntoView({ behavior: "smooth" });
					setTimeout(function() {
						document.getElementsByClassName("hi")[0].style.width = "320%";
						document.getElementsByClassName("name")[0].style.fontSize = "8vw";
						setTimeout(function() {
						    farrow.classList.remove("rotate-180");
						}, 100);
						for(let i = 1; i < ftext.length; i++){
							ftext[i].classList.add("invisible");
						}
						for(let i = 0; i < rotatedtext.length; i++){
							rotatedtext[i].classList.add("visible");
						}
						document.getElementById("xx").textContent = "Learn More";
						frontpage.style.display = "none";
					    //content.style.position = "sticky";
					    content.style.top = "0";
					}, 1000);


				} else {
					document.getElementsByClassName("hi")[0].style.width = "40%";
					document.getElementsByClassName("name")[0].style.fontSize = "5vw";
					document.getElementById("xx").textContent = "Know More About Me";
					setTimeout(function() {
					    farrow.classList.add("rotate-180");
					}, 100);
					for(let i = 1; i < ftext.length; i++){
						ftext[i].classList.remove("invisible");
					}
					for(let i = 0; i < rotatedtext.length; i++){
						rotatedtext[i].classList.remove("visible");
					}
				}
			});

			document.getElementsByClassName("mathtile")[0].addEventListener("click", function() {
				if(document.getElementById("xx").textContent == "Know More About Me"){ 
					document.getElementById("content2").classList.remove("vanish");
					document.getElementById("content2").classList.add("current");
					document.querySelectorAll('.content-tab:not(#tab2)').forEach(function (el){
			    		el.classList.remove('active');
			    	});
			    	document.getElementById("tab2").classList.add('active');

					var backgroundColor = window.getComputedStyle(document.getElementById("content2")).backgroundColor;
			        document.getElementsByClassName("content-body")[0].style.backgroundColor = backgroundColor;

			        frontpage.style.position = "static";
					content.style.display = "block";
					
					content.scrollIntoView({ behavior: "smooth" });
					setTimeout(function() {
						document.getElementsByClassName("hi")[0].style.width = "320%";
						document.getElementsByClassName("name")[0].style.fontSize = "8vw";
						setTimeout(function() {
						    farrow.classList.remove("rotate-180");
						}, 100);
						for(let i = 1; i < ftext.length; i++){
							ftext[i].classList.add("invisible");
						}
						for(let i = 0; i < rotatedtext.length; i++){
							rotatedtext[i].classList.add("visible");
						}
						document.getElementById("xx").textContent = "Learn More";
						frontpage.style.display = "none";
					    //content.style.position = "sticky";
					    content.style.top = "0";
					}, 1000);
					
				} else {
					fbut.click();
				}
			});

			document.getElementsByClassName("codetile")[0].addEventListener("click", function() {
				if(document.getElementById("xx").textContent == "Know More About Me"){
					document.getElementById("content3").classList.remove("vanish");
					document.getElementById("content3").classList.add("current");
					document.querySelectorAll('.content-tab:not(#tab3)').forEach(function (el){
			    		el.classList.remove('active');
			    	});
			    	document.getElementById("tab3").classList.add('active');

					var backgroundColor = window.getComputedStyle(document.getElementById("content3")).backgroundColor;
			        document.getElementsByClassName("content-body")[0].style.backgroundColor = backgroundColor;
			        frontpage.style.position = "static";
					content.style.display = "block";
					
					content.scrollIntoView({ behavior: "smooth" });
					setTimeout(function() {
						document.getElementsByClassName("hi")[0].style.width = "320%";
						document.getElementsByClassName("name")[0].style.fontSize = "8vw";
						setTimeout(function() {
						    farrow.classList.remove("rotate-180");
						}, 100);
						for(let i = 1; i < ftext.length; i++){
							ftext[i].classList.add("invisible");
						}
						for(let i = 0; i < rotatedtext.length; i++){
							rotatedtext[i].classList.add("visible");
						}
						document.getElementById("xx").textContent = "Learn More";
						frontpage.style.display = "none";
					    //content.style.position = "sticky";
					    content.style.top = "0";
					}, 1000);
				} else {
					fbut.click();
				}
			});

			document.getElementsByClassName("musictile")[0].addEventListener("click", function() {
				if(document.getElementById("xx").textContent == "Know More About Me"){
					document.querySelectorAll('.content-tab:not(#tab4)').forEach(function (el){
			    		el.classList.remove('active');
			    	});
			    	document.getElementById("tab4").classList.add('active');
					document.getElementById("content4").classList.remove("vanish");
					document.getElementById("content4").classList.add("current");

					var backgroundColor = window.getComputedStyle(document.getElementById("content4")).backgroundColor;
			        document.getElementsByClassName("content-body")[0].style.backgroundColor = backgroundColor;
			        frontpage.style.position = "static";
					content.style.display = "block";
					
					content.scrollIntoView({ behavior: "smooth" });
					setTimeout(function() {
						document.getElementsByClassName("hi")[0].style.width = "320%";
						document.getElementsByClassName("name")[0].style.fontSize = "8vw";
						setTimeout(function() {
						    farrow.classList.remove("rotate-180");
						}, 100);
						for(let i = 1; i < ftext.length; i++){
							ftext[i].classList.add("invisible");
						}
						for(let i = 0; i < rotatedtext.length; i++){
							rotatedtext[i].classList.add("visible");
						}
						document.getElementById("xx").textContent = "Learn More";
						frontpage.style.display = "none";
					    //content.style.position = "sticky";
					    content.style.top = "0";
					}, 1000);
				} else {
					fbut.click();
				}
			});

			document.getElementsByClassName("gamestile")[0].addEventListener("click", function() {
				if(document.getElementById("xx").textContent == "Know More About Me"){
					document.querySelectorAll('.content-tab:not(#tab5)').forEach(function (el){
			    		el.classList.remove('active');
			    	});
			    	document.getElementById("tab5").classList.add('active');
					document.getElementById("content5").classList.remove("vanish");
					document.getElementById("content5").classList.add("current");

					var backgroundColor = window.getComputedStyle(document.getElementById("content5")).backgroundColor;
			        document.getElementsByClassName("content-body")[0].style.backgroundColor = backgroundColor;
			        frontpage.style.position = "static";
					content.style.display = "block";
					
					content.scrollIntoView({ behavior: "smooth" });
					setTimeout(function() {
						document.getElementsByClassName("hi")[0].style.width = "320%";
						document.getElementsByClassName("name")[0].style.fontSize = "8vw";
						setTimeout(function() {
						    farrow.classList.remove("rotate-180");
						}, 100);
						for(let i = 1; i < ftext.length; i++){
							ftext[i].classList.add("invisible");
						}
						for(let i = 0; i < rotatedtext.length; i++){
							rotatedtext[i].classList.add("visible");
						}
						document.getElementById("xx").textContent = "Learn More";
						frontpage.style.display = "none";
					    //content.style.position = "sticky";
					    content.style.top = "0";
					}, 1000);
				} else {
					fbut.click();
				}
			});

			for (let i = 1; i <= 5; i++) {
			    document.getElementById("tab" + i).addEventListener("click", function () {
			    	document.querySelectorAll('.content-tab:not(#tab' + i + ')').forEach(function (el){
			    		el.classList.remove('active');
			    	});
			    	document.getElementById("tab" + i).classList.add('active');
			        if (!document.getElementById("content" + i).classList.contains("current")) {

			            // Remove 'current' class from all content
			            document.querySelectorAll('.stack.current').forEach(function (el) {
			                el.classList.remove('current');
			            });

			            // Remove 'vanish' class from all content
			            document.querySelectorAll('.stack.vanish').forEach(function (el) {
			                el.classList.remove('vanish');
			            });

			            // Add 'vanish' class to non-selected content
			            document.querySelectorAll('.stack:not(#content' + i + ')').forEach(function (el) {
			                el.classList.add('vanish');
			            });

			            // Fade out non-selected content
			            document.querySelectorAll('.stack:not(#content' + i + ')').forEach(function (el) {
			                el.style.transition = 'opacity 1s, background-color 1s';
			                el.style.opacity = 0;
			            });

			            // Fade in selected content
			            setTimeout(function () {
			                document.getElementById("content" + i).classList.add("current");
			                document.getElementById("content" + i).style.transition = 'opacity 1s, background-color 1s';
			                document.getElementById("content" + i).style.opacity = 1;
			            }, 100);

			            // Set background color
			            var backgroundColor = window.getComputedStyle(document.getElementById("content" + i)).backgroundColor;
			            document.getElementsByClassName("content-body")[0].style.transition = 'background-color 1s';
			            document.getElementsByClassName("content-body")[0].style.backgroundColor = backgroundColor;   
			        }
			    });
			}

			document.getElementById("logo").addEventListener("click", function(){
				document.body.style.opacity = 0;
				setTimeout(function(){
					location.reload();
				},500);
			})

			const abtleftArrow = document.querySelector('.abt.left-arrow');
			const abtrightArrow = document.querySelector('.abt.right-arrow');

			function abtnext() {
			  	const abtslider = document.getElementById('aboutme-slider');
				const abttop = abtslider.querySelector('.abt.polaroid:first-child');

			  	if (abttop) {
			    	abtslider.appendChild(abttop);
			  	}
			  	abtcapcount++;
			  	document.querySelector(".abt.caption-text").textContent = abtcaptext[(abtcapcount-1)%3];
			}

			function abtback() {
				const abtslider = document.getElementById('aboutme-slider');
				const abtimg = abtslider.querySelectorAll('.abt.polaroid');
			  
			    if (abtimg.length > 1) {
			        const bottomImage = abtimg[abtimg.length - 1];
			        const topImage = abtslider.firstChild;
			        abtslider.insertBefore(bottomImage, topImage);
			    }
			    abtcapcount--;
			    if(abtcapcount < 1){
			    	abtcapcount = abtcapcount + 3;
			    }
			  	document.querySelector(".abt.caption-text").textContent = abtcaptext[(abtcapcount-1)%3];
			}
			abtleftArrow.addEventListener('click', function() {
			    abtback(); 
			});
			abtrightArrow.addEventListener('click', function() {
			    abtnext();
			});

			const mathleftArrow = document.querySelector('.math.left-arrow');
			const mathrightArrow = document.querySelector('.math.right-arrow');

			function mathnext() {
			  	const mathslider = document.getElementById('math-slider');
				const mathtop = mathslider.querySelector('.math.polaroid:first-child');

			  	if (mathtop) {
			    	mathslider.appendChild(mathtop);
			  	}
			  	mathcapcount++;
			  	document.querySelector(".math.caption-text").textContent = mathcaptext[(mathcapcount-1)%3];
			}

			function mathback() {
				const mathslider = document.getElementById('math-slider');
				const mathimg = mathslider.querySelectorAll('.math.polaroid');
			  
			    if (mathimg.length > 1) {
			        const bottomImage = mathimg[mathimg.length - 1];
			        const topImage = mathslider.firstChild;
			        mathslider.insertBefore(bottomImage, topImage);
			    }
			    mathcapcount--;
			    if(mathcapcount < 1){
			    	mathcapcount = mathcapcount + 3;
			    }
			  	document.querySelector(".math.caption-text").textContent = mathcaptext[(mathcapcount-1)%3];
			}
			mathleftArrow.addEventListener('click', function() {
			    mathback(); 
			});
			mathrightArrow.addEventListener('click', function() {
			    mathnext();
			});

			const codeleftArrow = document.querySelector('.code.left-arrow');
			const coderightArrow = document.querySelector('.code.right-arrow');

			function codenext() {
			  	const codeslider = document.getElementById('code-slider');
				const codetop = codeslider.querySelector('.code.polaroid:first-child');

			  	if (codetop) {
			    	codeslider.appendChild(codetop);
			  	}
			  	codecapcount++;
			  	document.querySelector(".code.caption-text").textContent = codecaptext[(codecapcount-1)%3];
			}

			function codeback() {
				const codeslider = document.getElementById('code-slider');
				const codeimg = codeslider.querySelectorAll('.code.polaroid');
			  
			    if (codeimg.length > 1) {
			        const bottomImage = codeimg[codeimg.length - 1];
			        const topImage = codeslider.firstChild;
			        codeslider.insertBefore(bottomImage, topImage);
			    }
			    codecapcount--;
			    if(codecapcount < 1){
			    	codecapcount = codecapcount + 3;
			    }
			  	document.querySelector(".code.caption-text").textContent = codecaptext[(codecapcount-1)%3];
			}
			codeleftArrow.addEventListener('click', function() {
			    codeback(); 
			});
			coderightArrow.addEventListener('click', function() {
			    codenext();
			});

			const musicleftArrow = document.querySelector('.music.left-arrow');
			const musicrightArrow = document.querySelector('.music.right-arrow');

			function musicnext() {
			  	const musicslider = document.getElementById('music-slider');
				const musictop = musicslider.querySelector('.music.polaroid:first-child');

			  	if (musictop) {
			    	musicslider.appendChild(musictop);
			  	}
			  	musiccapcount++;
			  	document.querySelector(".music.caption-text").textContent = musiccaptext[(musiccapcount-1)%3];
			}

			function musicback() {
				const musicslider = document.getElementById('music-slider');
				const musicimg = musicslider.querySelectorAll('.music.polaroid');
			  
			    if (musicimg.length > 1) {
			        const bottomImage = musicimg[musicimg.length - 1];
			        const topImage = musicslider.firstChild;
			        musicslider.insertBefore(bottomImage, topImage);
			    }
			    musiccapcount--;
			    if(musiccapcount < 1){
			    	musiccapcount = musiccapcount + 3;
			    }
			  	document.querySelector(".music.caption-text").textContent = musiccaptext[(musiccapcount-1)%3];
			}
			musicleftArrow.addEventListener('click', function() {
			    musicback(); 
			});
			musicrightArrow.addEventListener('click', function() {
			    musicnext();
			});

			const gamesleftArrow = document.querySelector('.games.left-arrow');
			const gamesrightArrow = document.querySelector('.games.right-arrow');

			function gamesnext() {
			  	const gamesslider = document.getElementById('games-slider');
				const gamestop = gamesslider.querySelector('.games.polaroid:first-child');

			  	if (gamestop) {
			    	gamesslider.appendChild(gamestop);
			  	}
			  	gamescapcount++;
			  	document.querySelector(".games.caption-text").textContent = gamescaptext[(gamescapcount-1)%3];
			}

			function gamesback() {
				const gamesslider = document.getElementById('games-slider');
				const gamesimg = gamesslider.querySelectorAll('.games.polaroid');
			  
			    if (gamesimg.length > 1) {
			        const bottomImage = gamesimg[gamesimg.length - 1];
			        const topImage = gamesslider.firstChild;
			        gamesslider.insertBefore(bottomImage, topImage);
			    }
			    gamescapcount--;
			    if(gamescapcount < 1){
			    	gamescapcount = gamescapcount + 3;
			    }
			  	document.querySelector(".games.caption-text").textContent = gamescaptext[(gamescapcount-1)%3];
			}
			gamesleftArrow.addEventListener('click', function() {
			    gamesback(); 
			});
			gamesrightArrow.addEventListener('click', function() {
			    gamesnext();
			});
