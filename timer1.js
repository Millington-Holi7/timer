let setOffTimer = process.argv.slice(2);

const alarmClock = function(time) {

  if (time.length > 0) {

    for (const sec of time) {

      if (sec < 0 || isNaN(sec)) continue;

      setTimeout(() => {
        process.stdout.write('\x07');
      }, sec * 1000);

    }
  } else {
    return;
  }
};

alarmClock(setOffTimer);
