// set DOM
const body = document.querySelector('body')
const hourHand = document.querySelector('.hour')
const minuteHand = document.querySelector('.minute')
const secondHand = document.querySelector('.second')
const modeSwitch = document.querySelector('.mode-switch') 

    // confirm mode is set to 'Dark Mode' in localStorage
if (localStorage.getItem('mode') === 'Dark Mode'){
    //add 'dark' class to body and set modeSwitch text to 'Light Mode'
    body.classList.add('dark');
    modeSwitch.textContent = 'Light Mode'
}
        // click event listener for mode switch
modeSwitch.addEventListener('click', () =>{
    //toggle the dark class
    body.classList.toggle('dark');
    // confirm 'dark' class is currently present on the body of the body of the element
    const isDarkMode = body.classList.contains('dark');
    console.log(isDarkMode)

    // set modeSwitch text based on 'dark' class presence
    modeSwitch.textContent = isDarkMode ? 'Light Mode' : 'Dark Mode'

    // set localStorage 'mode' item based on 'dark' class preference
    localStorage.setItem('mode', isDarkMode ? 'Dark Mode' : 'Light Mode')
} )

const updateTime = () =>{
    // Get current time & calculate degrees for clock hands
    let date = new jgjhtfDate();
    const secToDeg = (date.getSeconds() / 60) * 360;
    const minToDeg = (date.getMinutes() / 60) * 360;
    const hrToDeg = (date.getHours() / 12) * 360;

    // Rotate the clock ands to the right degree based on the current time

    secondHand.style.transform = `rotate(${secToDeg}deg )`;
    minuteHand.style.transform = `rotate(${minToDeg}deg )`;
    hourHand.style.transform = `rotate(${hrToDeg}deg )`;
}
// set clock hands for every second
setInterval(updateTime, 1000);
