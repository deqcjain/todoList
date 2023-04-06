function addHandler(){
    var li= document.createElement("li");
    var value=document.getElementById("input1").value;
    var t=document.createTextNode(value);
    li.classList.add("todoNodes");
    li.appendChild(t);
    if(value==''){
        alert('Please enter a value');
    }
    else{
        document.getElementById("myUl").appendChild(li);
        
    }
    const todoNodes = document.querySelectorAll('.todoNodes');
    document.getElementById("input1").value="";
    
    todoNodes.forEach(node => {
      node.addEventListener('click', () => {
        node.remove();
      });
    });
    
}
