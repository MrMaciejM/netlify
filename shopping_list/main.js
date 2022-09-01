let list = document.querySelector('ul');
let input = document.querySelector('input');
let btn = document.getElementById('btn');
let btnDelAll = document.getElementById('btnDelAll');
let shoppingList = document.getElementsByClassName('shoppingList');

// info/help button variables 
let infoBtn = document.getElementById('info');
let infoPara = document.getElementById('infoPara');
let isHidden = infoPara.style.visibility.value = 'hidden';

function action() {
    let myItem = input.value; // take value from input
    input.value = ""; // clears the input field after adding an item

    // create li, span, and button, store them in variables         
    let listItem = document.createElement('li');
    let listText = document.createElement('span');

    //prevent adding blank items + throw visible error
    let emptyItemError = document.getElementById('emptyError');        
    if(myItem == '') {
        emptyItemError.style.visibility = 'visible';
        throw "List cannot be empty";
    }
    else {emptyItemError.style.visibility = 'hidden';}

    // append list items
    listItem.appendChild(listText); // items in the list
    listText.textContent = myItem; // displays items in list
    list.appendChild(listItem); // makes items + bullet points appear
    
    // removes item from list with double mouse click 
    listItem.addEventListener('dblclick', () => {
        list.removeChild(listItem);
        emptyItemError.style.visibility = 'hidden';
    })    
    
    // implement delete all button 
    btnDelAll.addEventListener('click', () => {            
        listItem.remove(); // removes all items            
        emptyItemError.style.visibility = 'hidden';                   
    })

    // hide help when an item is added 
    if(!(document.querySelector('li') == '')) {
        infoPara.style.visibility = 'hidden';
        isHidden = 'hidden';
    }
};

// make shopping list useable with mouse-click on 'Add item'
btn.addEventListener('click', () => {    
    action(); 
});

// add items to the list with Enter key
input.addEventListener("keypress", function(e) {    
    if(e.key === 'Enter') {
        action(); 
    }
});

// IMPORTANT NOTE: when using id with addEventListener you don't get a function error.

// Implement help section, hide and unhide upon clicking on 'i'.
infoBtn.addEventListener('click', () => {
    
    if(isHidden === 'hidden') {

        infoPara.textContent = `Double-click an item to remove it.\r\n
        Use Delete All button to remove all items.\r\n
        Please note: this action cannot be undone.`;

        infoPara.append();
        infoPara.style.visibility = 'visible';
        isHidden = 'visible';
                              
    } // end of if statement      

    else if (isHidden === 'visible'){                   
        infoPara.style.visibility = 'hidden';
        isHidden = 'hidden';   
    }
});

// TO-DO: 
// clean-up the code
// DONE - if item is added, hide instructions 
// DONE - add key event listener 'ENTER' to add item to the shopping list
// DONE - increase height of the shopping list
// DONE - Prevent addition of empty item 
// DONE - add instructions / how to use
// DONE - Fix text overflow 
// DONE - Fix 'Delete' buttons that are not aligning properly (delete those buttons and use double click to remove items from the list + insert instructions for the shopping list)
//  DONE - Add 'Delete All' button functionality



