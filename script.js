let form = document.getElementById("addForm");
let itemList = document.getElementById("unList");
let textInput= document.getElementById("item-text");
let filterInput= document.getElementById("filterInput")


form.addEventListener('submit', addItem);
itemList.addEventListener('click', deleteItem);
filterInput.addEventListener('keydown', filterItem);

function addItem(e)
{
    e.preventDefault();
    let inputValue= textInput.value;
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

function filterItem()
{
    let filterValue=filterInput.value.toLowerCase();

    let listItems=itemList.getElementsByTagName("li");
    

    for(let li of listItems)
    {
        let liText=li.textContent.toLowerCase();
        if(liText.includes(filterValue))
        {
            li.style.display="block";
        }
        else
        {
            li.style.display="none";
        }
    }
    
}