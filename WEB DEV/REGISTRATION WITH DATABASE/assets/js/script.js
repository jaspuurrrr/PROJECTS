const regButton = document.getElementById("reg-button");
const nextbut1 = document.getElementById("next-but-1");
const backbut1 = document.getElementById("back-but-1");
const nextbut2 = document.getElementById("next-but-2");
const backbut2 = document.getElementById("back-but-2");
const submit = document.getElementById("submit");
const cities = {
  "Muntinlupa": ["Alabang", "Bayanan", "Buli", "Cupang", "New Alabang Village", "Poblacion", "Putatan", "Sucat", "Tunasan"],
  "Pateros": ["Aguho", "Magtanggol", "Martires del 96", "Poblacion", "San Pedro", "San Roque", "Santa Ana", "Santo Rosario-Kanluran", "Santo Rosario-Silangan", "Tabacalera"],
  "Parañaque": ["Baclaran", "Don Galo", "La Huerta", "San Dionisio", "Santo Niño", "Tambo", "B. F. Homes", "Don Bosco", "Marcelo Green Village", "Merville", "Moonwalk", "San Antonio", "San Isidro", "San Martin De Porres", "Sun Valley", "Vitalez"],
  "Marikina": ["Barangka", "Calumpang", "Concepcion Dos", "Concepcion Uno", "Fortune", "Industrial Valley", "Jesus De La Peña", "Malanday", "Marikina Heights (Concepcion)", "Nangka", "Parang", "San Roque", "Santa Elena (Pob.)", "Santo Niño", "Tañong", "Tumana"],
  "Navotas": ["Bagumbayan North", "Bagumbayan South", "Bangkulasi", "Daanghari", "Navotas East", "Navotas West", "NBBS Dagat-dagatan", "NBBS Kaunlaran", "NBBS Proper", "North Bay Boulevard North", "San Jose (Poblacion)", "San Rafael Village", "San Roque", "Sipac Almacen", "Tangos North", "Tangos South", "Tanza 1", "Tanza 2"],
  "Las Piñas": ["Almanza Uno", "Almanza Dos", "C.A.A. – B. F. International", "Daniel Fajardo", "Elias Aldana", "Ilaya", "Manuyo Uno", "Manuyo Dos", "Pamplona Uno", "Pamplona Dos", "Pamplona Tres", "Pilar Village", "Pulang Lupa Uno", "Pulang Lupa Dos", "Talon Uno", "Talon Dos", "Talon Tres", "Talon Kuatro", "Talon Singko", "Zapote"],
  "Malabon": ["Baritan", "Bayan-bayanan", "Catmon", "Concepcion", "Dampalit", "Flores", "Hulong Duhat", "Ibaba", "Maysilo", "Muzon", "Niugan", "Panghulo", "San Agustin", "Santulan", "Tañong (Poblacion)", "Acacia", "Longos", "Potrero", "Tinajeros", "Tonsuya", "Tugatog"],
  "San Juan": ["Addition Hills", "Balong–Bato", "Batis", "Corazón de Jesús (Poblacion)", "Ermitaño", "Greenhills", "Isabelita", "Kabayanan", "Little Baguio", "Maytunas", "Onse", "Pasadeña", "Pedro Cruz", "Progreso", "Rivera", "Saint Joseph (Halo-Halo)", "Salapán", "San Perfecto", "Santa Lucia", "Tibagan", "West Crame"],
  "Mandaluyong": ["Addition Hills", "Bagong Silang", "Barangka Drive", "Barangka Ibaba", "Barangka Ilaya", "Barangka Itaas", "Buayang Bato", "Burol", "Daang Bakal", "Hagdan Bato Itaas", "Hagdan Bato Libis", "Harapin Ang Bukas", "Highway Hills", "Hulo", "Mabini–J.Rizal", "Malamig", "Mauway", "Namayan", "New Zañiga", "Old Zañiga", "Pag-Asa", "Plainview", "Pleasant Hills", "Poblacion", "San Jose", "Vergara", "Wack-Wack Greenhills"],
  "Taguig": ["Bagumbayan", "Bambang", "Calzada-Tipas", "Cembo", "Central Bicutan", "Central Signal Village", "Comembo", "East Rembo", "Fort Bonifacio", "Hagonoy", "Ibayo-Tipas", "Katuparan", "Ligid-Tipas", "Lower Bicutan", "Maharlika Village", "Napindan", "New Lower Bicutan", "North Daang Hari", "North Signal Village", "Palingon-Tipas", "Pembo", "Pinagsama", "Pitogo", "Post Proper Northside", "Post Proper Southside", "Rizal", "San Miguel", "Santa Ana", "South Cembo", "South Daang Hari", "South Signal Village", "Tanyag", "Tuktukan", "Upper Bicutan", "Ususan", "Wawa", "West Rembo", "Western Bicutan"],
  "Pasig": ["Bagong Ilog", "Bagong Katipunan", "Bambang", "Buting", "Caniogan", "Dela Paza", "Kalawaan", "Kapasigan", "Kapitolyo", "Malinao", "Manggahanb", "Maybunga", "Oranbo", "Palatiw", "Pinagbuhatan", "Pineda", "Rosario", "Sagad", "San Antonio", "San Joaquin", "San Jose", "San Miguel", "San Nicolas", "Santa Cruz", "Santa Lucia", "Santa Rosa", "Santo Tomas", "Santolan", "Sumilang", "Ugong"]
};


var today = new Date();

var formattedDate = today.toISOString().slice(0, 10);

document.getElementById('mdate').setAttribute('min', formattedDate);

document.addEventListener("DOMContentLoaded", function() {
	setTimeout(function() {
		document.getElementsByClassName("intro-page")[0].classList.add("loaded");
	}, 1750);
});

regButton.addEventListener("click", function () {
	document.getElementsByClassName("intro-page")[0].classList.remove("loaded");
	regButton.classList.add("exit");
	document.getElementById("intro-deco-line").classList.add("exit");
	console.log("check");
	document.getElementsByClassName("intro-message")[0].classList.add("exit");
	document.getElementsByClassName("intro-container")[0].classList.add("exit");
	document.getElementsByClassName("body-container")[0].style.opacity = 1;
	document.getElementsByClassName("field-container")[0].classList.add("enter");
	document.getElementsByClassName("desc-container")[0].classList.add("enter");
})

nextbut1.addEventListener("click", function() {

	var error = 0;

	if(document.getElementById("fname").value == '' || /^\s*$/.test(document.getElementById("fname").value) ){
		error++;
		document.getElementById("fname").style.borderBottomColor = "#e76d83";
	} else {
		document.getElementById("fname").style.borderBottomColor = "#76ABAE";
	}

	if(document.getElementById("mname").value == '' || /^\s*$/.test(document.getElementById("mname").value) ){
		error++;
		document.getElementById("mname").style.borderBottomColor = "#e76d83";
	} else {
		document.getElementById("mname").style.borderBottomColor = "#76ABAE";
	}

	if(document.getElementById("lname").value == '' || /^\s*$/.test(document.getElementById("lname").value) ){
		error++;
		document.getElementById("lname").style.borderBottomColor = "#e76d83";
	} else {
		document.getElementById("lname").style.borderBottomColor = "#76ABAE";
	}

	if(document.getElementById("suffix").value == ''){
		document.getElementById("suffix").style.borderBottomColor = "#31363F";
	} else {
		document.getElementById("suffix").style.borderBottomColor = "#76ABAE";
	}

	if(document.getElementById("dob").value == '' || /^\s*$/.test(document.getElementById("dob").value) ){
		error++;
		document.getElementById("dob").style.borderBottomColor = "#e76d83";
	} else {
		document.getElementById("dob").style.borderBottomColor = "#76ABAE";
	}

	if(document.getElementById("sex").value == '' || /^\s*$/.test(document.getElementById("sex").value) ){
		error++;
		document.getElementById("sex").style.borderBottomColor = "#e76d83";
	} else {
		document.getElementById("sex").style.borderBottomColor = "#76ABAE";
	}

	var emailpattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

	if(document.getElementById("email").value == '' || !emailpattern.test(document.getElementById("email").value)){
		error++;
		document.getElementById("email").style.borderBottomColor = "#e76d83";
	} else {
		document.getElementById("email").style.borderBottomColor = "#76ABAE";
	}

	var phonepattern = /^09\d{9}$/;

	if(document.getElementById("phone").value == '' || !phonepattern.test(document.getElementById("phone").value)){
		error++;
		document.getElementById("phone").style.borderBottomColor = "#e76d83";
	} else {
		document.getElementById("phone").style.borderBottomColor = "#76ABAE";
	}

	if(document.getElementById("address1").value == '' || /^\s*$/.test(document.getElementById("address1").value) ){
		error++;
		document.getElementById("address1").style.borderBottomColor = "#e76d83";
	} else {
		document.getElementById("address1").style.borderBottomColor = "#76ABAE";
	}

	if(document.getElementById("address2").value == ''){
		document.getElementById("address2").style.borderBottomColor = "#31363F";
	} else {
		document.getElementById("address2").style.borderBottomColor = "#76ABAE";
	}

	if(document.getElementById("city").value == ''  || /^\s*$/.test(document.getElementById("city").value) ){
		error++;
		document.getElementById("city").style.borderBottomColor = "#e76d83";
	} else {
		document.getElementById("city").style.borderBottomColor = "#76ABAE";
	}

	if(document.getElementById("barangay").value == '' || /^\s*$/.test(document.getElementById("barangay").value) ){
		error++;
		document.getElementById("barangay").style.borderBottomColor = "#e76d83";
	} else {
		document.getElementById("barangay").style.borderBottomColor = "#76ABAE";
	}

	if(document.getElementById("zipcode").value == '' || /^\s*$/.test(document.getElementById("zipcode").value) ){
		error++;
		document.getElementById("zipcode").style.borderBottomColor = "#e76d83";
	} else {
		document.getElementById("zipcode").style.borderBottomColor = "#76ABAE";
	}

	if(error > 0){
		alert("Fill all required fields properly.")
		return;
	}

	if(document.querySelectorAll('.desc-container.personal')[0].classList.contains("enter")){
		document.querySelectorAll('.desc-container.personal')[0].classList.remove("enter");
		document.querySelectorAll('.field-container.personal')[0].classList.remove("enter");
	} else {
		document.querySelectorAll('.desc-container.personal')[0].classList.remove("swap");
		document.querySelectorAll('.field-container.personal')[0].classList.remove("swap");
	}
	document.querySelectorAll('.desc-container.personal')[0].style.opacity = 1;
	document.querySelectorAll('.field-container.personal')[0].style.opacity = 1;
	document.querySelectorAll('.desc-container.personal')[0].classList.add("exit");
	document.querySelectorAll('.field-container.personal')[0].classList.add("exit");
	setTimeout(function() {
		document.querySelectorAll('.form.membership')[0].style.display = "flex";
		document.querySelectorAll('.form.personal')[0].style.display = "none";
		document.querySelectorAll('.desc-container.membership')[0].classList.add("swap");
		document.querySelectorAll('.field-container.membership')[0].classList.add("swap");
	}, 750);
	
})

backbut1.addEventListener("click", function() {
	document.querySelectorAll('.desc-container.membership')[0].classList.remove("swap");
	document.querySelectorAll('.field-container.membership')[0].classList.remove("swap");
	document.querySelectorAll('.desc-container.membership')[0].style.opacity = 1;
	document.querySelectorAll('.field-container.membership')[0].style.opacity = 1;
	document.querySelectorAll('.desc-container.membership')[0].classList.add("exit");
	document.querySelectorAll('.field-container.membership')[0].classList.add("exit");
	setTimeout(function() {
		document.querySelectorAll('.form.personal')[0].style.display = "flex";
		document.querySelectorAll('.form.membership')[0].style.display = "none";
		document.querySelectorAll('.desc-container.personal')[0].classList.add("swap");
		document.querySelectorAll('.field-container.personal')[0].classList.add("swap");
	}, 750);
	
})

nextbut2.addEventListener("click", function() {
	var error = 0;

	if(document.getElementById("mtype").value == '' || /^\s*$/.test(document.getElementById("mtype").value) ){
		error++;
		document.getElementById("mtype").style.borderBottomColor = "#e76d83";
	} else {
		document.getElementById("mtype").style.borderBottomColor = "#76ABAE";
	}

	if(document.getElementById("mdate").value == '' || /^\s*$/.test(document.getElementById("mdate").value) ){
		error++;
		document.getElementById("mdate").style.borderBottomColor = "#e76d83";
	} else {
		document.getElementById("mdate").style.borderBottomColor = "#76ABAE";
	}

	if(document.getElementById("duration").value == '' || /^\s*$/.test(document.getElementById("duration").value) ){
		error++;
		document.getElementById("duration").style.borderBottomColor = "#e76d83";
	} else {
		document.getElementById("duration").style.borderBottomColor = "#76ABAE";
	}

	if(error > 0){
		alert("Fill all required fields properly.")
		return;
	}

	document.querySelectorAll('.desc-container.membership')[0].classList.remove("swap");
	document.querySelectorAll('.field-container.membership')[0].classList.remove("swap");
	document.querySelectorAll('.desc-container.membership')[0].style.opacity = 1;
	document.querySelectorAll('.field-container.membership')[0].style.opacity = 1;
	document.querySelectorAll('.desc-container.membership')[0].classList.add("exit");
	document.querySelectorAll('.field-container.membership')[0].classList.add("exit");
	setTimeout(function() {
		document.querySelectorAll('.form.skills')[0].style.display = "flex";
		document.querySelectorAll('.form.membership')[0].style.display = "none";
		document.querySelectorAll('.desc-container.skills')[0].classList.add("swap");
		document.querySelectorAll('.field-container.skills')[0].classList.add("swap");
	}, 750);
	
})

backbut2.addEventListener("click", function() {
	document.querySelectorAll('.desc-container.skills')[0].classList.remove("swap");
	document.querySelectorAll('.field-container.skills')[0].classList.remove("swap");
	document.querySelectorAll('.desc-container.skills')[0].style.opacity = 1;
	document.querySelectorAll('.field-container.skills')[0].style.opacity = 1;
	document.querySelectorAll('.desc-container.skills')[0].classList.add("exit");
	document.querySelectorAll('.field-container.skills')[0].classList.add("exit");
	setTimeout(function() {
		document.querySelectorAll('.form.membership')[0].style.display = "flex";
		document.querySelectorAll('.form.skills')[0].style.display = "none";
		document.querySelectorAll('.desc-container.membership')[0].classList.add("swap");
		document.querySelectorAll('.field-container.membership')[0].classList.add("swap");
	}, 750);
	
})

submit.addEventListener("click", function() {
	document.querySelectorAll('.desc-container.skills')[0].classList.remove("swap");
	document.querySelectorAll('.field-container.skills')[0].classList.remove("swap");
	document.querySelectorAll('.desc-container.skills')[0].style.opacity = 1;
	document.querySelectorAll('.field-container.skills')[0].style.opacity = 1;
	document.querySelectorAll('.desc-container.skills')[0].classList.add("exit");
	document.querySelectorAll('.field-container.skills')[0].classList.add("exit");
	setTimeout(function() {
		document.querySelectorAll('.form.thanks')[0].style.display = "flex";
		document.querySelectorAll('.form.skills')[0].style.display = "none";
		document.querySelectorAll('.field-container.thanks')[0].classList.add("outro");
	}, 750);
	
})

document.getElementById('certificate').addEventListener('change', function() {
    var files = this.files;
    if(files.length == 0){
    	document.getElementById('thumbnail').style.display = "flex";
    	document.getElementById('thumbnail-text').style.display = "flex";
    	document.querySelectorAll('.clear-files')[0].style.opacity = 0;
    	var parentDiv = document.getElementById('file-list');
		var childElements = parentDiv.childNodes;
		for (var i = 0; i < childElements.length; i++) {
		    if (childElements[i].nodeName === 'DIV') {
		        parentDiv.removeChild(childElements[i]);
		        i--;
		    }
		}
    } else {
    	document.getElementById('thumbnail').style.display = "none";
    	document.getElementById('thumbnail-text').style.display = "none";
    	document.querySelectorAll('.clear-files')[0].style.opacity = 1;
    	for (var i = 0; i < files.length; i++) {
	        var fileDiv = document.createElement('div');
	        var fileNameSpan = document.createElement('span');
	        fileNameSpan.textContent = files[i].name;
	        fileDiv.appendChild(fileNameSpan);
	        document.getElementById('file-list').appendChild(fileDiv);
	    }
    }
});

document.querySelectorAll('.clear-files')[0].addEventListener("click", function () {
	document.getElementById('certificate').value = '';
	var event = new Event('change', { bubbles: true });
    document.getElementById('certificate').dispatchEvent(event);
})

document.getElementsByClassName('upload')[0].addEventListener('dragover', function(e) {
    e.preventDefault();
});

document.getElementsByClassName('upload')[0].addEventListener('drop', function(e) {
    e.preventDefault();
    var files = e.dataTransfer.files;
    document.getElementById('certificate').files = files;
    var event = new Event('change', { bubbles: true });
    document.getElementById('certificate').dispatchEvent(event);
});

document.getElementsByClassName('upload')[0].addEventListener('click', function(e) {
    document.getElementById('certificate').click();
});

const required = document.getElementsByClassName("required");

for(let i = 0; i < required.length; i++){
	required[i].addEventListener("input", function() {
		if(required[i].value == '' || /^\s*$/.test(required[i].value)){
			required[i].style.borderBottomColor = "#e76d83";
		} else {
			required[i].style.borderBottomColor = "#76ABAE";
		}
	})
}

document.getElementById("email").addEventListener("input", function() {
	var emailpattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
	if(document.getElementById("email").value == '' || !emailpattern.test(document.getElementById("email").value)){
		document.getElementById("email").style.borderBottomColor = "#e76d83";
	} else {
		document.getElementById("email").style.borderBottomColor = "#76ABAE";
	}
})

document.getElementById("phone").addEventListener("input", function() {
	var phonepattern = /^09\d{9}$/;
	if(document.getElementById("phone").value == '' || !phonepattern.test(document.getElementById("phone").value)){
		document.getElementById("phone").style.borderBottomColor = "#e76d83";
	} else {
		document.getElementById("phone").style.borderBottomColor = "#76ABAE";
	}
})

const cityDropdown = document.getElementById("city");
const barangayDropdown = document.getElementById("barangay");

cityDropdown.addEventListener("change", populateBarangays);

function populateBarangays() {
    const selectedCity = cityDropdown.value;
    barangayDropdown.innerHTML = ""; 
  
    if (selectedCity === "") {
	    const defaultOption = document.createElement("option");
	    defaultOption.text = "Select a city first";
	    defaultOption.disabled = true;
	    defaultOption.selected = true;
	    defaultOption.value = "";
	    barangayDropdown.add(defaultOption);
	    var event = new Event('input', { bubbles: true });
    	document.getElementById('barangay').dispatchEvent(event);
	} else {
		barangayDropdown.disabled = false;
    	const barangays = cities[selectedCity];
    	const option = document.createElement("option");
    	option.text = "Select Barangay";
        option.value = "";
        barangayDropdown.add(option);
    	barangays.forEach(barangay => {
        	const option = document.createElement("option");
        	option.text = barangay;
        	option.value = barangay;
        	barangayDropdown.add(option);
    	});
    	var event = new Event('input', { bubbles: true });
    	document.getElementById('barangay').dispatchEvent(event);
    }
}


document.getElementById("next-but-2").addEventListener("click", function(){
	
})



