var day = new Date();

//day
var currentDay = day.getDate();
var currentMonth = day.getMonth() ;
var currentYear = day.getFullYear();

function myPage() {
	var day = new Date();
	var monthName = [
		"January",
		"February",
		"March",
		"Abril",
		"May",
		"June",
		"July",
		"August",
		"September",
		"October",
		"November",
		"December"
	];

	var weekName = [
		"Monday",
		"Tuesday",
		"Wednesday",
		"Thursday",
		"Friday",
		"Saturday",
		"Sunday"
	];
	//clock
	var currentHour = day.getHours();
	var currentMinute = day.getMinutes();
	var currentSeconds = day.getSeconds();
	currentMinute = checkTime(currentMinute);
	currentSeconds = checkTime(currentSeconds);

	document.getElementById("div1").innerHTML =
		"<h1>Today is: </h1> " +
		`<h3> ${weekName[currentDay]}</br> ${currentDay} of </br> ${monthName[currentMonth]}  </br>  ${currentYear} <br/> </br> What time it is? </br></br>
		${currentHour} : ${currentMinute} : ${currentSeconds}
	 </h3>`;

	var start = setTimeout(myPage, 500);
}
function checkTime(i) {
	if (i < 10) {
		i = "0" + i;
	}
	return i;
}
fetch(`http://numbersapi.com/${currentMonth}/${currentDay}/date?json`)
	.then(response => response.json())
	.then(data => {
		var div = document.createElement("div");
		div.innerHTML = `<h1>Facts from today: </h1> <br/><br/><br/><br/>${data.text}`;
		document.getElementById("div2").append(div);
		console.log(data.text);
	});
