function updateSavedValue() {
  const savedName = localStorage.getItem("userName");
  const savedValueElement = document.getElementById("savedValue");
  if (savedName) {
    savedValueElement.textContent = `Nome salvato: ${savedName}`;
  } else {
    savedValueElement.textContent = "";
  }
}

document.getElementById("saveButton").addEventListener("click", () => {
  const name = document.getElementById("nameInput").value;
  if (name) {
    localStorage.setItem("userName", name);
    updateSavedValue();
    document.getElementById("nameInput").value = "";
  }
});

document.getElementById("removeButton").addEventListener("click", () => {
  localStorage.removeItem("userName");
  updateSavedValue();
});

updateSavedValue();
