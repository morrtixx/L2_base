function howManyTimes(time1, time2) {
  let current = new Date(time1);
  let end = new Date(time2);
  let strikes = 0;

  while (current < end) {
    let hours = current.getHours() % 12;
    if (hours === 0) {
      hours = 12;
    }

    let minutes = current.getMinutes();
    let seconds = current.getSeconds();

    if (minutes === 0 && seconds < hours) {
      strikes++;
    }

    if (minutes === 30 && seconds === 0) {
      strikes++;
    }

    current.setSeconds(current.getSeconds() + 1);
  }

  return strikes;
}