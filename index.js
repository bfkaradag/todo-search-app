var addButton = document.querySelector('input[type="submit"]');
var txtInput = document.getElementById("add-input");
var items = document.getElementById('items');
var btnDelete = document.getElementsByClassName('delete-button');
var searchInput = document.getElementById('search');


var addItemEvent = (e) =>{
    e.preventDefault();

    var li = document.createElement('li');
    li.className='item-list';

    
    var text = document.createTextNode(txtInput.value);
    li.appendChild(text);
    
    let deleteBtn = document.createElement('button');
    deleteBtn.textContent = "X";
    deleteBtn.className='delete-button';
    li.appendChild(deleteBtn);

    items.appendChild(li)

}

var deleteItemEvent = (e) =>{
    if(e.target.contains.className = 'delete-button'){
        var li = e.target.parentElement;
        items.removeChild(li);
    }
}

var searchEvent = (e) => {   
   var text = e.target.value.toLowerCase();
   var itemList = items.children;

   Array.from(itemList).forEach(item =>{
       var itemName = item.firstChild.textContent.toLowerCase();
       if(itemName.indexOf(text) !=-1){
           item.style.display ='block';
       }
       else{
           item.style.display='none';
       }
   })
} 

searchInput.addEventListener('keyup',searchEvent);
items.addEventListener('click',deleteItemEvent)
addButton.addEventListener('click',addItemEvent);
