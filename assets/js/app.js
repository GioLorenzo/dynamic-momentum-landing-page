// Assign DOM elements
const time = document.getElementById('time'),
  greeting = document.getElementById('greeting'),
  name = document.getElementById('name'),
  focus = document.getElementById('focus'),
  amOrPm = document.getElementById('am-pm');


// Show Time
function showTime() {
  let today = new Date(),
    hour = today.getHours(),
    min = today.getMinutes(),
    sec = today.getSeconds();
  
  // Set AM or PM
  const amPm = hour >= 12 ? 'PM' : 'AM';

  // 12hr Format
  hour = hour % 12 || 12;

  // Output Time
  time.innerHTML = `${hour}<span>:</span>${addZero(min)}<span>:</span>${addZero(sec)}`;
  amOrPm.innerHTML = `${amPm}`;

  // Refresh Every Second
  setTimeout(showTime, 1000);
}


// Add zero in front of single digit values
const addZero = n => ((parseInt(n, 10) < 10) ? '0' : '') + n;


// Set Background and Greeting
const setBg = () => {
  let today = new Date(),
    hour = today.getHours();
  if (hour < 12) {
    //Morning
    document.body.style.backgroundImage = "url('../assets/img/Morning.jpg')";
    greeting.textContent = 'Good Morning';
  } else if (hour < 18) {
    // Afternoon
    document.body.style.backgroundImage = "url('../assets/img/Afternoon.jpg')";
    greeting.textContent = 'Good Afternoon';
    document.body.style.color = 'white';
  } else {
    // Evening
    document.body.style.backgroundImage = "url('../assets/img/night.jpg')";
    greeting.textContent = 'Good Evening';
    document.body.style.color = 'white';
  }
}

// Get Name
function getName() {
  if (localStorage.getItem('name') === null) {
    name.textContent = '[Your Name]'
  } else {
    name.textContent = localStorage.getItem('name');
  }
}



// Get Focus
function getFocus() {
  if (localStorage.getItem('name') === null) {
    focus.textContent = '[Enter Focus Here]'
  } else {
    focus.textContent = localStorage.getItem('focus');
  }
}




// run
getName();
getFocus();
setBg();
showTime();