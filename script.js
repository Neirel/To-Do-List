// Grabs text
const textinput = document.querySelector('.textarea');
// Grabs button input
const buttoninput = document.querySelector('.buttoninput');
// Grabs the list of items in todo list
const itemlist = document.querySelector('.todolist');

function clickButton(event) {
    // function to call addItem
    event.preventDefault();
    addItem()
} 

function addItem() {
    // creates a an element for the new item
    const newItem = document.createElement('div')
    // adds a class 'newItem' to the element
    newItem.classList.add('newItem')
    
    // creates an element for the text in our item
    const itemContent = document.createElement('p');
    // adds a class 'item' to the element
    itemContent.classList.add('itemContent')
    // the text of the element 'p' is what the text is in our query selector
    itemContent.innerText = textinput.value
    // add the itemContent to the newItem div
    newItem.appendChild(itemContent)

    // if textbox is empty, do nothing
    if (textinput.value === '') return

    // create a button to check off items
    const checkbutton = document.createElement("button")
    // makes the text inside button to say check
    checkbutton.innerHTML = 'check'
    // adds class
    checkbutton.classList.add("check-button")
    // adds checkButton to the newItem
    newItem.appendChild(checkbutton)

    // creates a button to delete items
    const trashbutton = document.createElement("button")
    // makes the text inside to say trash
    trashbutton.innerHTML = 'trash'
    // adds class
    trashbutton.classList.add("trash-button")
    // add trashbutton to the newItem
    newItem.appendChild(trashbutton)

    // add the new item to the list of items
    itemlist.appendChild(newItem)
    // reset the text in textbox to blank to prep next input
    textinput.value = ''
}

function deleteItem() {
    
}

// checks for button clicks
buttoninput.addEventListener('click', clickButton)