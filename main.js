const keys = [...document.getElementsByClassName("key")];
const result = document.getElementById("result");

keys.forEach((element) => {
  element.addEventListener("click", () => {
    let key = element.innerHTML;
    let temp = result.innerHTML;
    temp = temp === "0" ? "" : temp;
    temp =
      key === "="
        ? eval(temp.replaceAll("×", "*").replaceAll("÷", "/"))
        : key === "A"
        ? "0"
        : key === "C"
        ? temp.slice(0, -1)
        : temp + key;
    result.innerHTML = temp === "" ? "0" : temp;
  });
});
