const inputs = document.querySelectorAll('#controls input');
const bodyStyles = window.getComputedStyle(document.body);


function handleUpdate(){
  const suffix = this.dataset.sizing || "";
  document.documentElement.style.setProperty(`--${this.name}`, this.value + suffix);
  document.getElementById('current-size').innerHTML = bodyStyles.getPropertyValue('--size');
  document.getElementById('current-blur').innerHTML = bodyStyles.getPropertyValue('--blur');
  document.getElementById('current-color').innerHTML = bodyStyles.getPropertyValue('--bg-color');
}

inputs.forEach(input => input.addEventListener("change", handleUpdate));
inputs.forEach(input => input.addEventListener('mousemove', handleUpdate))