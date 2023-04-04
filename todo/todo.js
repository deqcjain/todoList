function addHandler(){
    var li= document.createElement("li");
    var value=document.getElementById("input1").value;
    var t=document.createTextNode(value);
    li.appendChild(t);
    if(value==''){
        alert('Please enter a value');
    }
    else{
        document.getElementById("myUl").appendChild(li);
        
    }
    document.getElementById("input1").value="";
    
}

function removeHandler(){
    for(var i=0;i<nodeList.length;i++){
        nodeList[i].onclick=()=>{
            this.parentNode.remove(); 
        }
    }
}

