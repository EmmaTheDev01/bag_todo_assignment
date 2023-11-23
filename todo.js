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
     <li id="todo-list-item"> ${itemsToLocalStorage[i]}</li>
      <div class="edit-task">
        <button id="btnEdit">Edit</button>
      </div>
      <div class="delete-task">
        <button id="btnDelete">Delete</button>
      </div>
    </div>
    <div class="update-task">
      <button id="btnUpdate">Update</button>
      <input type="checkbox" id="btnComplete" name="complete" />
    </div>
  </div>`;
  }
  //Displaying the items on the web page
  document.getElementById("todo-list").innerHTML = items;

  //   Perform actions on tasks
  deleteItemsBtn();
  editItemsBtn();
  completeItemsBtn();
}

// Deleting item or task
function deleteItemsBtn() {
  let btnDelete = document.getElementsByClassName("delete-task");
  for (let i = 0; i < btnDelete.length; i++) {
    btnDelete[i].addEventListener("click", () => {
      itemsToLocalStorage.splice(i, 1);
      localStorage.setItem("items", JSON.stringify(itemsToLocalStorage));
      window.location.reload();
    });
  }
}

// Editing item or task
function editItemsBtn() {
  let btnEdit = document.getElementsByClassName("edit-task");
  for (let i = 0; i < btnEdit.length; i++) {
    btnEdit[i].addEventListener("click", () => {
      let editItem = document.getElementById("item");
      editItem.value = itemsToLocalStorage[i];
      localStorage.setItem("items", JSON.stringify(itemsToLocalStorage));
      itemsToLocalStorage.splice(i, 1);
    });
  }
}
// Strikethrough completed task
function completeItemsBtn() {
  let btnComplete = document.getElementsByClassName("update-task");
  for (let i = 0; i < btnComplete.length; i++) {
    btnComplete[i].addEventListener("click", () => {
      const todoItem = document.getElementById("todo-list-item");
      if (btnComplete[i].checked) {
        todoItem.classList.add("checked");
      }
    });
  }
}
console.log(itemsToLocalStorage.reverse());
