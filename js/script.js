const counterElements = document.querySelectorAll(".counter");

counterElements.forEach((counterEl) => {
  // @ts-ignore
  counterEl.innerText = "0";

  const incrementCounter = () => {
    // @ts-ignore
    const currentNum = +counterEl.innerText;
    const dataCeil = counterEl.getAttribute("data-ceil");
    // console.log(dataCeil);
    // @ts-ignore
    const increment = dataCeil / 15;
    // @ts-ignore
    const currentNums = Math.floor(currentNum + increment);
    // @ts-ignore
    counterEl.innerText = currentNums;
    // @ts-ignore
    if (currentNum < dataCeil) {
      // @ts-ignore
      counterEl.innerText = currentNums;
      setTimeout(incrementCounter, 50);
    } else {
      // @ts-ignore
      counterEl.innerText = dataCeil;
    }
  };

  incrementCounter();
});
