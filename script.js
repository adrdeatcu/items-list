let form = document.getElementById("addForm");
let itemList = document.getElementById("unList");
let textInput= document.getElementById("item-text");
let filterInput= document.getElementById("filterInput")

form.addEventListener('submit', addItem);
itemList.addEventListener('click', deleteItem);

function addItem(e)
{
    e.preventDefault();
    let inputValue= textInput.value;
    console.log(inputValue);

    let newLi=document.createElement("li");
    newLi.textContent=inputValue;
    let deleteButton = document.createElement("button");
    deleteButton.textContent = "X";
    deleteButton.classList.add("delete-button");
    newLi.appendChild(deleteButton);
    
    itemList.appendChild(newLi);

    textInput.value="";
}

function deleteItem(e)
{   
    if(e.target.classList.contains("delete-button"))
    {
        let li= e.target.parentElement;
        itemList.removeChild(li);
    }
}