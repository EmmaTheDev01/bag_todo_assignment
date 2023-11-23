// Adding items to the local storage
const itemsToLocalStorage = localStorage.getItem("items")
  ? JSON.parse(localStorage.getItem("items"))
  : [];
// Adding event listener to the Adfd button
const add = document.getElementById("add");
add.addEventListener("click", () => {
  const item = document.getElementById("item").value;
  if (item) {
    itemsToLocalStorage.push(item);
    localStorage.setItem("items", JSON.stringify(itemsToLocalStorage));
    window.location.reload();
  }
});
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
  displayItems();
};

// Function to display added items on the web page
function displayItems() {
  let items = "";
  for (let i = 0; i < itemsToLocalStorage.length; i++) {
    items += `   <div class="item">
    <div class="input-create">
      <li disabled>${itemsToLocalStorage[i]}</li>
      <div class="edit-task">
        <button id="btnEdit">Edit</button>
      </div>
      <div class="delete-task">
        <button id="btnDelete">Delete</button>
      </div>
    </div>
    <div class="update-task">
      <button id="btnUpdate">Update</button>
      <button id="btnCancel">Cancel</button>
    </div>
  </div>`;
  }
  //Displaying the items on the web page
  document.getElementById("todo-list").innerHTML = items;

//   Perform actions on tasks
  deleteItemsBtn();
  editItemsBtn();
  updateItemsBtn();
  cancelItemsBtn();
}
console.log(itemsToLocalStorage);
