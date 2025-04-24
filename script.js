let form = document.getElementById("addForm");
let itemList = document.getElementById("unList");
let textInput= document.getElementById("item-text");

form.addEventListener('submit', addItem);

function addItem(e)
{
    e.preventDefault();
    let newItem=textInput.value;
    console.log(newItem);

    let newLi=document.createElement("li");
    newLi.textContent=newItem;

    itemList.appendChild(newLi);

    textInput.value="";
    
    
    
}