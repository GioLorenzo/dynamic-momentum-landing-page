// Assign DOM elements
const time = document.getElementById('time'),
  timeWrap = document.getElementById('time-wrap'),
  greeting = document.getElementById('greeting'),
  focus = document.getElementById('focus'),
  amOrPm = document.getElementById('am-pm'),
  focusWrap = document.querySelector('.focus-wrap')
  headline = document.querySelector('.headline');
let name = document.getElementById('name');


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

// Delete content on focus




// Set Background and Greeting
const setBg = () => {
  let today = new Date(),
    hour = today.getHours();
  if (hour < 12) {
    //Morning
    document.body.style.backgroundImage = "url('../assets/img/Morning.jpg')";
    timeWrap.style.color = 'white'
    greeting.textContent = 'Good Morning';
    headline.style.backgroundColor = 'rgba(0, 0, 0, 0.5)';
    headline.style.color = 'white';
    focusWrap.style.color = 'white';
  } else if (hour < 19) {
    // Afternoon
    timeWrap.style.color = 'white';
    document.body.style.backgroundImage = "url('../assets/img/Afternoon.jpg')";
    greeting.textContent = 'Good Afternoon';
    document.body.style.color = 'white';
  } else {
    // Evening
    document.body.style.backgroundImage = "url('../assets/img/night.jpg')";
    focusWrap.style.color = 'white';
    greeting.textContent = 'Good Evening';
    document.body.style.color = 'white';
    timeWrap.style.color = 'black';
    headline.style.backgroundColor = 'rgba(0, 0, 0, 0.5)';
  }
}

// Get Name
function getName() {
  if (localStorage.getItem('name') === null) {
    name.textContent = '[Your Name Here]';
    name.style.opacity = '.4';
  } else {
    name.textContent = localStorage.getItem('name');
    name.style.color = 'rgba(255, 255, 255, 1)';
  }
}

// Get Focus
function getFocus() {
  if (localStorage.getItem('focus') === null) {
    focus.textContent = '[Enter Focus Here]';
    focus.style.opacity = '.4';
  } else {
    focus.textContent = localStorage.getItem('focus');
    focus.style.color = 'rgba(255, 255, 255, 1)';
  }
} 

// Set Name
function setName(e) {
  if (e.type === 'keypress') {
    if (e.which == 13 || e.keyCode == 13) {
      if (name.textContent.length == 0) {
        name.textContent = '[Your Name]';
        name.style.opacity = '.4';
        name.blur();
      } else {
        localStorage.setItem('name', e.target.innerText);
        name.style.opacity = '1';
        name.blur();
      }
    }
  } else {
    if (name.textContent.length == 0) {
      name.textContent = '[Your Name]';
      name.style.opacity = '.4';
    } else {
      localStorage.setItem('name', e.target.innerText);
      name.style.opacity = '1';
    }
  }
}

// Set Focus
function setFocus(e) {
  if (e.type === 'keypress') {
    if (e.which == 13 || e.keyCode == 13) {
      if (focus.textContent.length == 0) {
        focus.textContent = '[Enter Focus Here]';
        focus.style.opacity = '.6';
        focus.blur();
      } else {
        localStorage.setItem('focus', e.target.innerText);
        focus.style.opacity = '1';
        focus.blur();
      }
    }
  } else {
    if (focus.textContent.length == 0) {
      focus.textContent = '[Enter Focus Here]';
      focus.style.opacity = '.6';
      focus.blur();
    } else {
      localStorage.setItem('focus', e.target.innerText);
      focus.style.opacity = '1';
    }
  }
}

// Highlight on Focus

function eraseText(id) {
    document.getElementById(id).innerText = "";
}

name.addEventListener('keypress', setName);
name.addEventListener('blur', setName);
  

focus.addEventListener('keypress', setFocus);
focus.addEventListener('blur', setFocus);
  

// run
getName();
getFocus();
setBg();
showTime();