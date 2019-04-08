function showResult() {
  const from = document.querySelector("#from");
  const step = document.querySelector("#step");
  const to = document.querySelector("#to");

  const fromValue = Number(from.value),
    stepValue = Number(step.value),
    toValue = Number(to.value);

  if (fromValue && stepValue && !toValue) {
    const addition = (stepValue / 100) * fromValue;
    const toResult = fromValue + addition;
    to.value = toResult;
  } else if (!fromValue && stepValue && toValue) {
    const addition = 100 + stepValue;
    const fromResult = (toValue * 100) / addition;
    from.value = fromResult;
  } else if (fromValue && !stepValue && toValue) {
    const stepResult = ((toValue - fromValue) * 100) / fromValue;
    step.value = stepResult;
  }
}

const calculate = document.querySelector("#calculate");
calculate.addEventListener("click", showResult);
