// 1.logic to move aroung our hands of watch
 setInterval(setClock, 1000); //using set interval becuase we want to use our function every second.. Every 1000milisec we are goona wall our functoin setClock  

//5.accessing hands for rotation
const hourHand = document.querySelector('[data-hour-hand]');
const minuteHand = document.querySelector('[data-minute-hand]');
const secondsHand = document.querySelector('[data-second-hand]');

//2. setting clock, telling hands to follow what path,, rotation function is down below
function setClock() {
	const currentDate = new	Date(); //built-in date constructor in JS .. now we can get second from that
	const secondsRatio = currentDate.getSeconds() / 60; //dividing by 60 bcz there are 60 seconds in a minute
	const minutesRatio = (secondsRatio + currentDate.getMinutes()) / 60; //adding secondsRatio to minutes bcz we don't want to jump our these hands by hrs, so we add percentage of secondsRatio to it
	const hoursRatio = (minutesRatio + currentDate.getHours()) / 12; //adding minutesRatio to the hrs we do it to work properly, division by 12 becasue there are 12 total hrs
	//3.now we wanna set values for rotation for our hands, let's add some data attributes to it in HTML
	//4.now we can select these out in our parent scope

	//7. calling setRotation function made for all hands, we will set rotation of all 3 hands
	setRotation(secondsHand, secondsRatio);
	setRotation(minuteHand, minutesRatio);
	setRotation(hourHand, hoursRatio);
} 

//6.rotation function, now we have selected our hands for raotaion now lets define a function that'll rotate them
//property of rotation will be set to elements (like secondsHand means hands)
 function setRotation(element, rotationRatio) {
 	element.style.setProperty('--rotation', rotationRatio * 360); //hands move 360 degrees
 }

 setClock();