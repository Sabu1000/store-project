/**
 * 
 */


function displayTime() {
	var dateTime = new Date();
	var hrs = dateTime.getHours();
	var min = dateTime.getMinutes();
	var sec = dateTime.getSeconds();
	var day = dateTime.getDay();
	var timeofDay = document.getElementById("timeofDay");
	
	
	if(hrs >= 12) {
		timeofDay.innerHTML = "PM";
	}
	else {
		timeofDay.innerHTML = "AM";
	}
	
	if (hrs == 10) {
		openClose.innerHTML = "We are open!";
		document.getElementById("mainPic").style.borderColor = "green";
	}
	else if (hrs == 11) {
		openClose.innerHTML = "We are open!";
		document.getElementById("mainPic").style.borderColor = "green";
	}
	else if (hrs == 12) {
		openClose.innerHTML = "We are open!";
		document.getElementById("mainPic").style.borderColor = "green";
	}
	else if (hrs == 13) {
		openClose.innerHTML = "We are open!";
		document.getElementById("mainPic").style.borderColor = "green";
	}
	else if (hrs == 14) {
		openClose.innerHTML = "We are open!";
		document.getElementById("mainPic").style.borderColor = "green";
	}
	else if (hrs == 15) {
		openClose.innerHTML = "We are open!";
		document.getElementById("mainPic").style.borderColor = "green";
	}
	else if (hrs == 16) {
		openClose.innerHTML = "We are open!";
		document.getElementById("mainPic").style.borderColor = "green";
	}
	else if (hrs == 17) {
		openClose.innerHTML = "We are open!";
		document.getElementById("mainPic").style.borderColor = "green";
	}
	else if (hrs == 18) {
		openClose.innerHTML = "We are open!";
		document.getElementById("mainPic").style.borderColor = "green";
	}
	else if (hrs == 19) {
		openClose.innerHTML = "We are open!";
		document.getElementById("mainPic").style.borderColor = "green";
	}
	else if (hrs == 20) {
		openClose.innerHTML = "We are open!";
		document.getElementById("mainPic").style.borderColor = "green";
	}
	else if (hrs == 21) {
		openClose.innerHTML = "We are closing soon!"
		document.getElementById("mainPic").style.borderColor = "yellow";
	}
	else if (hrs == 9) {
		openClose.innerHTML = "We are opening soon!"
		document.getElementById("mainPic").style.borderColor = "yellow";
	}
	else {
		openClose.innerHTML = "We are closed!"
		document.getElementById("mainPic").style.borderColor = "red";
	}
	
	
	document.getElementById("hours").innerHTML = hrs;
	document.getElementById("minutes").innerHTML = min;
	document.getElementById("seconds").innerHTML = sec;



	if(day == 0) {
		document.getElementById("sun").style.fontSize = "50px";
		document.getElementById("sun").style.color = "green";
		document.getElementById("sun").style.fontStyle = "bold";
		document.getElementById("sunTime").style.fontSize = "50px";
		document.getElementById("sunTime").style.color = "green";
		document.getElementById("sunTime").style.fontStyle = "bold";
	}
	else if(day == 1) {
		document.getElementById("mon").style.fontSize = "50px";
		document.getElementById("mon").style.color = "green";
		document.getElementById("mon").style.fontStyle = "bold";
		document.getElementById("monTime").style.fontSize = "50px";
		document.getElementById("monTime").style.color = "green";
		document.getElementById("monTime").style.fontStyle = "bold";
		
	}
	else if(day == 2) {
		document.getElementById("tue").style.fontSize = "50px";
		document.getElementById("tue").style.color = "green";
		document.getElementById("tue").style.fontStyle = "bold";
		document.getElementById("tueTime").style.fontSize = "50px";
		document.getElementById("tueTime").style.color = "green";
		document.getElementById("tueTime").style.fontStyle = "bold";
	}
	else if(day == 3) {
		document.getElementById("wed").style.fontSize = "50px";
		document.getElementById("wed").style.color = "green";
		document.getElementById("wed").style.fontStyle = "bold";
		document.getElementById("wedTime").style.fontSize = "50px";
		document.getElementById("wedTime").style.color = "green";
		document.getElementById("wedTime").style.fontStyle = "bold";
	}
	else if(day == 4) {
		document.getElementById("thu").style.fontSize = "50px";
		document.getElementById("thu").style.color = "green";
		document.getElementById("thu").style.fontStyle = "bold";
		document.getElementById("thuTime").style.fontSize = "50px";
		document.getElementById("thuTime").style.color = "green";
		document.getElementById("thuTime").style.fontStyle = "bold";
	}
	else if(day == 5) {
		document.getElementById("fri").style.fontSize = "50px";
		document.getElementById("fri").style.color = "green";
		document.getElementById("fri").style.fontStyle = "bold";
		document.getElementById("friTime").style.fontSize = "50px";
		document.getElementById("friTime").style.color = "green";
		document.getElementById("friTime").style.fontStyle = "bold";
	}
	else if(day == 6) {
		document.getElementById("sat").style.fontSize = "50px";
		document.getElementById("sat").style.color = "green";
		document.getElementById("sat").style.fontStyle = "bold";
		document.getElementById("satTime").style.fontSize = "50px";
		document.getElementById("satTime").style.color = "green";
		document.getElementById("satTime").style.fontStyle = "bold";
	}

	
}

setInterval(displayTime, 1);



