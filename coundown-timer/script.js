
setInterval(function() {
  const newYears = "1 Jan 2023";
  const newYearsDate = new Date(newYears);
  const currentDate = new Date();
  const totalSeconds = (newYearsDate - currentDate) / 1000
  
  const days = Math.floor((totalSeconds / 3600 / 24))
  const hours = Math.floor((totalSeconds / 3600) % 24)
  const minutes = Math.floor((totalSeconds / 60) % 60)
  const seconds = Math.floor((totalSeconds) % 60)
  
  document.getElementById('days').innerHTML = formatTime(days)
  document.getElementById('hours').innerHTML = formatTime(hours)
  document.getElementById('minutes').innerHTML = formatTime(minutes)
  document.getElementById('seconds').innerHTML = formatTime(seconds)

}, 1000)

function formatTime (time) {
  return time < 10 ? `0${time}` : time
}


 