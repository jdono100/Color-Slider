export default function OutputHandler({ red, green, blue }) {
  const outputDiv = document.getElementById('outputdiv');
  outputDiv.style.backgroundColor = `rgb(${red}, ${green}, ${blue})`
}