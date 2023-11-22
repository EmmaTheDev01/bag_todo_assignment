// Adding items to the local storage
const itemsToLocalStorage = localStorage.getItem("items") ? JSON.parse(localStorage.getItem("items")) : [];
// Adding event listener to the Adfd button
const add = document.getElementById("add");
add.addEventListener("click", () => {
    const item = document.getElementById("item").value;
    if (item) {
        itemsToLocalStorage.push(item);
        localStorage.setItem("items", JSON.stringify(itemsToLocalStorage));
        window.location.reload();
    }
})
// Function to get the current date of the exact day
function CurrentDate() {
  let d = new Date();
  let day = d.getDate();
  let month = d.getMonth() + 1;
  let year = d.getFullYear();
  return `${day}-${month}-${year}`;
}
window.onload = function () {
  document.getElementById("date").innerHTML = CurrentDate();
};

console.log(itemsToLocalStorage);