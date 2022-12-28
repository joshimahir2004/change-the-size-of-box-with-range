const Rn = document.getElementById("InputRange");
const box = document.getElementById("box");

const changeHandle = () => {
  const value = Rn.value;
  box.style.width = value + "vw"
}