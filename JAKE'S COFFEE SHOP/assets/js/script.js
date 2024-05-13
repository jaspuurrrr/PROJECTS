var state = 0;

document.getElementsByClassName("current")[0].style.opacity = 1;

setTimeout(function() {
	document.getElementById("loading").style.display = "none";
	document.getElementById("container").style.display = "block";
}, 6500);

document.getElementById("nav").addEventListener("click", function(){
	if(state){
		document.getElementById("navimg").classList.add("hidden"); 
		setTimeout(function() {
		    document.getElementById("navimg").src = "assets/img/close.png";
		    document.getElementById("navimg").classList.remove("hidden"); 
		    state = 0;

		    document.getElementById("nav-column").style.width = "20%";
		    document.getElementById("content-page").style.width = "80%";
		    document.getElementById("content-page").style.borderBottomLeftRadius = "0pt";

		    setTimeout(function() {
		    	for(let i = 0; i<5; i++){
			    	document.getElementsByClassName("nav-bar")[i].style.opacity = 1;
			    }	
		    }, 250)

		}, 250);
		
		
	} else {
		document.getElementById("navimg").classList.add("hidden"); 
		setTimeout(function() {
		    document.getElementById("navimg").src = "assets/img/nav.png";
		    document.getElementById("navimg").classList.remove("hidden"); 
		    state = 1;

		    setTimeout(function() {
		    	document.getElementById("nav-column").style.width = "0%";
		    	document.getElementById("content-page").style.width = "100%";
		    	document.getElementById("content-page").style.borderBottomLeftRadius = "20pt";
		    }, 250)

		    for(let i = 0; i<5; i++){
			    document.getElementsByClassName("nav-bar")[i].style.opacity = 0;
			}

		}, 250);
	}
})

document.getElementById("home-nav").addEventListener("click", function(){
	if(document.getElementById("home-page").classList.contains("current")){
		return 0;
	} else {

		document.getElementsByClassName("current")[0].style.opacity = 0;

		setTimeout(function(){
			document.getElementsByClassName("page")[0].classList.add("hidden");
			document.getElementsByClassName("page")[1].classList.add("hidden");
			document.getElementsByClassName("page")[2].classList.add("hidden");
			document.getElementsByClassName("page")[3].classList.add("hidden");
			document.getElementsByClassName("current")[0].classList.remove("current");
			document.getElementById("home-page").classList.remove("hidden");
			document.getElementById("home-page").classList.add("current");
			document.getElementsByClassName("active")[0].classList.remove("active");
			document.getElementById("home-nav").classList.add("active");
			setTimeout(function(){
				document.getElementsByClassName("current")[0].style.opacity = 1;
			},100);
		}, 500);

	}
})

document.getElementById("menu-nav").addEventListener("click", function(){
	if(document.getElementById("menu-page").classList.contains("current")){
		return 0;
	} else {
		document.getElementsByClassName("current")[0].style.opacity = 0;

		setTimeout(function(){
			document.getElementsByClassName("page")[0].classList.add("hidden");
			document.getElementsByClassName("page")[1].classList.add("hidden");
			document.getElementsByClassName("page")[2].classList.add("hidden");
			document.getElementsByClassName("page")[3].classList.add("hidden");
			document.getElementsByClassName("current")[0].classList.remove("current");
			document.getElementById("menu-page").classList.remove("hidden");
			document.getElementById("menu-page").classList.add("current");
			document.getElementsByClassName("active")[0].classList.remove("active");
			document.getElementById("menu-nav").classList.add("active");
			setTimeout(function(){
				document.getElementsByClassName("current")[0].style.opacity = 1;
			},100);
		}, 500);
	}
})

document.getElementById("music-nav").addEventListener("click", function(){
	if(document.getElementById("music-page").classList.contains("current")){
		return 0;
	} else {
		document.getElementsByClassName("current")[0].style.opacity = 0;

		setTimeout(function(){
			document.getElementsByClassName("page")[0].classList.add("hidden");
			document.getElementsByClassName("page")[1].classList.add("hidden");
			document.getElementsByClassName("page")[2].classList.add("hidden");
			document.getElementsByClassName("page")[3].classList.add("hidden");
			document.getElementsByClassName("current")[0].classList.remove("current");
			document.getElementById("music-page").classList.remove("hidden");
			document.getElementById("music-page").classList.add("current");
			document.getElementsByClassName("active")[0].classList.remove("active");
			document.getElementById("music-nav").classList.add("active");
			setTimeout(function(){
				document.getElementsByClassName("current")[0].style.opacity = 1;
			},100);
		}, 500);
		
	}
})

document.getElementById("jobs-nav").addEventListener("click", function(){
	if(document.getElementById("jobs-page").classList.contains("current")){
		return 0;
	} else {
		document.getElementsByClassName("current")[0].style.opacity = 0;

		setTimeout(function(){
			document.getElementsByClassName("page")[0].classList.add("hidden");
			document.getElementsByClassName("page")[1].classList.add("hidden");
			document.getElementsByClassName("page")[2].classList.add("hidden");
			document.getElementsByClassName("page")[3].classList.add("hidden");
			document.getElementsByClassName("current")[0].classList.remove("current");
			document.getElementById("jobs-page").classList.remove("hidden");
			document.getElementById("jobs-page").classList.add("current");
			document.getElementsByClassName("active")[0].classList.remove("active");
			document.getElementById("jobs-nav").classList.add("active");
			setTimeout(function(){
				document.getElementsByClassName("current")[0].style.opacity = 1;
			},100);
		}, 500);
	}
})

document.getElementsByClassName("dropdown")[0].addEventListener("click", function(){
		if(document.getElementsByClassName("dropdown")[0].nextElementSibling.classList.contains("collapsed")){
			document.getElementsByClassName("dropdown")[0].nextElementSibling.classList.remove("collapsed");
			document.getElementsByClassName("dropdown")[0].nextElementSibling.classList.add("condensed");
		} else {
			document.getElementsByClassName("dropdown")[0].nextElementSibling.classList.remove("condensed");
			document.getElementsByClassName("dropdown")[0].nextElementSibling.classList.add("collapsed");
		}
	})



