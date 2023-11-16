// Grabs text
const inputtdl = document.querySelector('.textarea');
const buttontdl = document.querySelector('.buttoninput');
const listtdl = document.querySelector('.todolist');

function clickButton(event) {
    // what happens when button is clicked
    event.preventDefault();
    addItem()
} 

function addItem() {
    const itemall = document.createElement('div')
    itemall.classList.add('itemall')
    
    const item = document.createElement('p');
    item.classList.add('item')
    item.innerText = inputtdl.value
    itemall.appendChild(item)

    if (inputtdl.value === '') return

    const checkbutton = document.createElement("button")
    checkbutton.innerHTML = '<p> check </p>'
    checkbutton.classList.add("check-button")
    itemall.appendChild(checkbutton)

    const trashbutton = document.createElement("button")
    trashbutton.innerHTML = '<p> trash </p>'
    trashbutton.classList.add("trash-button")
    itemall.appendChild(trashbutton)

    listtdl.appendChild(itemall)
    inputtdl.value = ''
}

function deleteItem() {
    
}

buttontdl.addEventListener('click', clickButton)