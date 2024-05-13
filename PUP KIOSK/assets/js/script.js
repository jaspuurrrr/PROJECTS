const originalCoords = {
    "Interfaith Chapel": "1273,1205,162",
    "Track and Football Oval": "1585,1122,1830,778,1862,748,1894,731,1929,718,1972,713,2013,718,2049,728,2088,750,2116,776,2137,806,2154,842,2163,881,2165,913,2161,956,2148,988,1890,1343,1866,1364,1836,1384,1804,1397,1770,1405,1727,1401,1688,1392,1651,1375,1617,1349,1591,1319,1576,1289,1561,1248,1559,1214,1559,1182,1567,1154",
    "Nutrition and Food Science Building": "1434,1401,1060,1457",
    "Campus Development and Maintenance Building": "832,1431,965,1457",
    "East Wing": "890,1098,1045,1098,1045,1377,1021,1377,1021,1407,927,1405,927,1377,894,1382",
    "South Wing": "590,1042,612,1087,601,1091,734,1317,745,1312,764,1349,883,1280,866,1250,874,1244,814,1149,894,1100,866,1055,790,1100,734,1001,726,1007,734,1001,704,979,644,1012",
    "West Wing": "618,878,666,788,687,810,698,782,943,928,868,1058,623,917,644,887",
    "North Wing": "995,926,1235,788,1250,810,1274,791,1315,872,1296,887,1311,915,1068,1057",
    "Dome": "947,927,997,927,1068,1062,1042,1101,894,1101,868,1056",
    "Community Building (Gabriela Silang)": "2111,1148,2141,1165,2074,1258,2046,1234",
    "Grandstand": "1577,946,1590,963,1603,972,1653,927,1691,875,1717,815,1708,804,1680,802,1631,847,1605,877",
    "Gazebo": "1650,637,1646,652,1680,652,1680,637",
    "Apolinario Mabini Shrine": "1519,643,1633,724,1521,879,1422,823,1487,671",
    "Mabini Monument PUP Obelisk": "1412,555,53",
    "Lagoon": "1115,385,1132,383,1149,392,1167,409,1179,435,1173,461,1152,484,1130,506,1115,527,1113,551,1104,577,1089,605,1072,635,1050,661,1025,686,999,704,986,699,960,714,919,716,878,731,878,716,909,701,939,699,964,684,967,661,960,635,960,609,967,587,982,564,1005,553,1042,551,1066,538,1076,510,1076,478,1074,452,1076,428,1083,403,1093,392",
    "Property Building": "205,5,205,46,244,46,244,65,313,65,315,48,354,42,356,3",
    "Printing Press Building": "201,115,257,194,291,175,238,93",
    "Laboratory High School": "448,25,646,132,704,381,678,418,334,209",
    "Charlie del Rosario Hall": "371,254,756,484,749,572,683,656,408,499,347,317",
    "Student Canteen": "586,629,554,676,625,717,661,665",
    "University Canteen and Sampaguita Canteen": "515,671,640,744,582,822,461,751",
    "PUP Sta. Mesa Ferry Station": "711,1429,659,1446,631,1373,678,1356",
    "Generator Facility": "638,1316,644,1340,663,1335,659,1314",
    "Amphitheater": "889,748,939,733,988,736,1014,774,1029,811,1003,821,975,828,945,821,919,806,896,781",
    "Gymnasium and Sports Center": "1663,67,1648,276,1986,306,1999,93",
    "Swimming Pool": "1364,104,1356,214,1599,231,1607,122",
    "Tahanan ng Alumni": "1302,100,1341,102,1334,210,1293,203",
    "Physical Education Building": "1222,25,1291,29,1274,352,1207,350",
    "Ninoy Aquino Library and Learning Resources Center": "780,65,885,25,954,214,1130,156,1167,263,988,325,1055,512,945,553,876,338,857,349,816,416,756,237,838,285,853,282",
    "Linear Park": "268,272,285,264,511,968,524,1006,691,1290,610,1318,513,1041",
    "Water Pump Facility": "702,6,700,59,775,57,769,6",
    "R.C. Underground Water Tank": "719,70,726,90,758,77,752,61",
    "R.C. Overhead Water Tank": "743,142,771,140,790,160,790,188,775,207,745,209,726,188,726,162",
    "Outdoor Basketball and Volleyball Court": "1496,309,1487,449,1711,464,1717,324",
    "Tennis Court": "1734,323,1721,504,1934,517,1945,334",
    "Visitor Information Center": "2024,464,2020,537,2091,541,2095,470",
    "Pylon": "2134,563,2197,565,2194,505,2134,503",
    "Freedom Park": "1354,655,1390,668,1427,672,1474,660,1371,889,1332,913,1257,752,1302,709,1332,782,1311,797,1334,842,1379,819,1354,773,1328,782,1304,711",
    "Flag Pole": "1317,801,1354,777,1371,818,1334,836",
    "Guard House": "2104,630,2102,662,2134,664,2136,630",
    "Main Gate": "2106,564,2141,568,2136,624,2104,624",
    "Mural Brass Sculpture": "2231,651,2141,646,2141,612,2224,614",
};


document.getElementById("explore").addEventListener("click", function(){
	document.getElementById("explore").classList.add("exit");
	document.getElementById("welcome").classList.add("exit");
	setTimeout(function(){
		document.getElementById("intro-text").classList.add("exit");
		document.getElementById("content-page").classList.add("show");
		adjustMapCoordinates();
	}, 2500);
})


function adjustMapCoordinates() {
    var img = document.getElementById('img-map');
    var currentWidth = img.width;
    var currentHeight = img.height;

    var areas = document.getElementsByTagName('area');

    for (var i = 0; i < areas.length; i++) {
        var areaTitle = areas[i].getAttribute('data-title');
        var coords = originalCoords[areaTitle].split(',');

        var adjustedCoords = [];

        for (var j = 0; j < coords.length; j++) {
            if (j % 2 === 0) {
                adjustedCoords.push(Math.round(coords[j] * (currentWidth / 2434)));
            } else {
                adjustedCoords.push(Math.round(coords[j] * (currentHeight / 1459)));
            }
        }
        areas[i].setAttribute('coords', adjustedCoords.join(','));
    }
}

window.addEventListener('load', adjustMapCoordinates);
window.addEventListener('resize', adjustMapCoordinates);


document.addEventListener('DOMContentLoaded', function() {
    // Get the speech balloon element
    var speechBalloon = document.getElementById('speech-balloon');
    var speechContentTitle = document.getElementById('speech-content-title');
    var hoverImg = document.getElementById('hover-img');
    var speechContentDesc = document.getElementById('speech-content-desc');

    // Get all area elements
    var areas = document.getElementsByTagName('area');

    // Function to calculate the position of the speech balloon
    function calculateBalloonPosition(mouseX, mouseY) {
        var viewportHeight = window.innerHeight;
        var balloonWidth = speechBalloon.offsetWidth;
        var balloonHeight = speechBalloon.offsetHeight;
        var balloonLeft = mouseX - balloonWidth / 2;
        var balloonTop = mouseY - balloonHeight - 20; // sa taas ng cursor

        // flip algo
        if (mouseY - balloonHeight < 0) {
            // Flip pag lagpas
            balloonTop = mouseY + 20;
        }

        return { left: balloonLeft, top: balloonTop };
    }

    for (var i = 0; i < areas.length; i++) {
        areas[i].addEventListener('mouseenter', function(event) {
            
            var areaTitle = event.target.getAttribute('data-title');
            var dataImg = event.target.getAttribute('data-img');
            var dataDesc = event.target.getAttribute('data-desc');

            //speechBalloon.textContent = areaTitle;
            speechContentTitle.textContent = areaTitle;
            hoverImg.src = "assets/img/" + dataImg;
            speechContentDesc.textContent = dataDesc;

            var mouseX = event.pageX;
            var mouseY = event.pageY;

            var balloonPosition = calculateBalloonPosition(mouseX, mouseY);

            speechBalloon.style.left = balloonPosition.left + 'px';
            speechBalloon.style.top = balloonPosition.top + 'px';

            speechBalloon.style.display = 'flex';
            speechBalloon.style.opacity = 1;
        });

        areas[i].addEventListener('mouseleave', function() {
            speechBalloon.style.display = 'none';
            speechBalloon.style.opacity = 0;
        });
    }

    document.addEventListener('mousemove', function(event) {
        var mouseX = event.pageX;
        var mouseY = event.pageY;

        var balloonPosition = calculateBalloonPosition(mouseX, mouseY);

        speechBalloon.style.left = balloonPosition.left + 'px';
        speechBalloon.style.top = balloonPosition.top + 'px';
    });
});

