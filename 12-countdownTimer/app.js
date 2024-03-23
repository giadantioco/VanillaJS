const months = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];
  const weekdays = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];

  //deadline
  //giveaway
  //h4s 
  const giveaway = document.querySelector('.giveaway');
  const deadline = document.querySelector('.deadline')
  const items = document.querySelectorAll('.deadline-format h4');
  // console.log(items);

  //new date: when the giveaway will end
  // let currentDate = new Date() 
  // console.log(currentDate)

  let tempDate = new Date();
  let tempYear = tempDate.getFullYear();
  let tempMonth = tempDate.getMonth();
  let tempDay = tempDate.getDate();

  // HARD CODED VERSION -->
  // let futureDate = new Date(2024, 2, 23, 17, 30, 0);
  // console.log(futureDate)

  const futureDate = new Date (tempYear, tempMonth, tempDay + 10, 11, 30, 0);
  const year = futureDate.getFullYear();
  const hours = futureDate.getHours();
  const minutes = futureDate.getMinutes();

  let month = futureDate.getMonth();
  month = months[month]

  const date = futureDate.getDate();

  let weekday = futureDate.getDay();
  weekday = weekdays[weekday];
  
  giveaway.textContent = `giveaway ends on ${weekday} ${date} ${month} ${year} ${hours} ${minutes}am`;

  // future time in ms (milliseconds) .getTime()
  const futureTime = futureDate.getTime();
  console.log(futureTime) // --> output 17112978000000

  function getRemainingTime(){
    const today = new Date().getTime();
    // console.log(today)
    // subtract futureTime to today
    const t = futureTime - today;
    console.log(t);
    // 1s = 1000ms
    // 1m = 60s
    // 1hr = 60min
    // 1d = 24hr

    // values in ms
    const oneDay = 24 * 60 * 60 * 1000;
    // console.log(oneDay) // --> 86400000 ms in one day 
    const oneHour = 60 * 60 * 1000;
    // console.log(oneHour) // --> 3600000 ms in one hour
    const oneMin = 60 * 1000;
    // console.log(oneMin) // --> 60000 ms in one min
    //calculate all values
    let days = t / oneDay;
    // console.log(days)
    days = Math.floor(days);
    let hours = Math.floor((t % oneDay) / oneHour);
    let minutes = Math.floor((t % oneHour) / oneMin);
    let seconds = Math.floor((t % oneMin) / 1000);

    // set values array
    const values = [days, hours, minutes, seconds];

    function format(item) {
      if(item < 10) {
        return (item = `0${item}`);
      }
        return item;
    }


    items.forEach(function (item, index) {
      item.innerHTML = format(values[index]);
    });
    if ( t < 0 ) {
      clearInterval(countdown);
      deadline.innerHTML = `<h4 class="expired">sorry, this giveaway has expired</h4>`;
    }
  }

  // countdown
  let countdown = setInterval(getRemainingTime, 1000);
  getRemainingTime();