//Assign DOM elements

const time = document.getElementById('time'),
  greeting = document.getElementById('greeting'),
  name = document.getElementById('name'),
  focus = document.getElementById('focus'),
  amOrPm = document.getElementById('am-pm');

//Show Time

function showTime() {
  let today = new Date(),
    hour = today.getHours(),
    min = today.getMinutes(),
    sec = today.getSeconds();
  
  //Set AM or PM
  const amPm = hour >= 12 ? 'PM' : 'AM';

  // 12hr Format
  hour = hour % 12 || 12;

  //Output Time
  time.innerHTML = `${hour}<span>:</span>${addZero(min)}<span>:</span>${addZero(sec)}`;
  amOrPm.innerHTML = `${amPm}`;

  //Refresh Every Second
  setTimeout(showTime, 1000);
}

//Add zero in front of single digit values
const addZero = n => ((parseInt(n, 10) < 10) ? '0' : '') + n;

//Set Background and Greeting
const setBg = () => {
  let today = new Date(),
    hour = today.getHours();
  
  if ( hour > 5 && hour < 12) {
    //Morning
    document.body.style.backgroundImage = "url('')";
  } else if (hour > 11 && hour < 16) {
    //Afternoon
    document.body.style.backgroundImage = "url('')";
  } else {
    //Evening
    document.body.style.backgroundImage = "url('')";
  }
}

//run
showTime();