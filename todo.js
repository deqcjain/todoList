function addHandler() {
    var li = document.createElement("li");
    var inputVal = document.getElementById("input1").value;
    document.getElementById("input1").value="";
    var t = document.createTextNode(inputVal);
    li.classList.add("todoNodes");
    li.appendChild(t);
    if (inputVal.trim() == "" || inputVal == null) {
      alert("Please enter a value");
      return;
    } else {
      document.getElementById("myUl").appendChild(li);
      li.addEventListener("click", removeTask);
    }
  }

  function removeTask(event) {
    const todoNode = event.target.closest(".todoNodes");
    if (todoNode) {
      todoNode.remove();
    }
    document.getElementById("input1").value = "";
  }
  
