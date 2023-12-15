export const navigateBackToAuth = (ms, elem) => {
  let timerLeft = ms;
  //   console.log('Elem', elem);

  const navigateTime = setInterval(() => {
    if (timerLeft <= 0) {
      clearInterval(navigateTime);
      console.log(`clicked the ${elem}`);
      elem.click();
    }

    timerLeft -= 1;
  }, 1000);
};
