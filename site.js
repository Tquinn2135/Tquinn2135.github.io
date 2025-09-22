
const hours = new Date().getHours() // get the current hour
const key = 'It\'s a secret to everybody.'
const message = 'It\s dangerous to go alone take this!'
const isMorning = hours >= 4 && hours < 12 // is it morning?
const isAfternoon = hours >= 12 && hours < 17 // is it afternoon?
const isEvening = hours >= 17 || hours < 4 // is it evening?

 const welcome = document.getElementById('welcome')
 
 if (isMorning)
 {
    welcome.innerHTML = '<p>Good Morning</p>'
 }

 if (isAfternoon)
 {
    welcome.innerHTML = '<p>Good Afternoon</p>'
 }

 if (isEvening)
 {
    welcome.innerHTML = '<p>Good Evening</p>'
 }
 
const secretMessage = localStorage.setItem(key, message) 
 
 
console.log("Hi")