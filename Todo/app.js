console.clear()

const navToggle = document.querySelector('.nav-toggle');
const links = document.querySelector('.links');
const openButton = document.querySelector('.btn');
const modalScreen = document.querySelector('.modal-overlay');
const closeButton = document.querySelector('.close-btn');
const btns = document.querySelectorAll('.task-btn');
const alert = document.querySelector('.alert');
const form = document.querySelector('.task-form');
const task = document.querySelector('#task');
const submitBtn = document.querySelector('.submit-btn');
const container = document.querySelector('.task-container');
const list = document.querySelector('.task-list');
const clearBtn = document.querySelector('.clear-btn');

// nav toggle :
navToggle.addEventListener('click', function(){
    
    links.classList.toggle('show-links');
})

// modal:
openButton.addEventListener('click', function(){
    modalScreen.classList.add('open-modal')
});

closeButton.addEventListener('click', function(){
    modalScreen.classList.remove('open-modal')
})

// task details :

btns.forEach(btn => btn.addEventListener('click', function(event){
    const task = event.currentTarget.parentElement.parentElement
    task.classList.toggle('show-text')
}))
// edit option
let editElement;
let editFlag = false;
let editId = '';

// create task:
//submit form: 
form.addEventListener('submit', addItem);
// clear form :
clearBtn.addEventListener('click', clearItems)

function addItem(e) {
    e.preventDefault();
    // console.log(task.value)
    const value = task.value;
    const id = new Date().getTime().toString();
    console.log(id);
    if (value && !editFlag) { //if(value !== '' && editFlag === false)
        // console.log('adding to the list')
        const element = document.createElement("article");
        let attr = document.createAttribute("data-id");
        attr.value = id;
        element.setAttributeNode(attr);
        element.classList.add("task-item");
        element.innerHTML = `<p class="title">${value}</p>

            <div class="btn-container">
              <!-- edit btn -->
              <button type="button" class="edit-btn">
                <i class="fas fa-edit"></i>
              </button>
              <!-- delete btn -->
              <button type="button" class="delete-btn">
                <i class="fas fa-trash"></i>
              </button>
            </div>
          `;
        // add event listeners to both buttons;
        const deleteBtn = element.querySelector(".delete-btn");
        deleteBtn.addEventListener("click", deleteItem);
        const editBtn = element.querySelector(".edit-btn");
        editBtn.addEventListener("click", editItem);

        // append child
        list.appendChild(element);
        // display alert : 
        displayAlert('list updated', 'success')
        //show container:
        container.classList.add('show-container')
        //add to local storage:
        
        //set back to default 
        setBackToDefault();
    }else if(value && editFlag){ // else if(value !== '' && editFlag === true)
        // console.log('editing')
        editElement.innerHTML = value;
        displayAlert(`value changed to ${value}`, 'success');
        //edit local storage :
        
        setBackToDefault();

    } else {
        displayAlert('please enter value', 'danger');
    }
}

function displayAlert (text, action) {
    alert.textContent = text;
    alert.classList.add(`alert-${action}`);
    //remove alert:
    setTimeout(() => {
        alert.textContent = '';
        alert.classList.remove(`alert-${action}`);
    }, 1500);
}
// clear items :



// edit function <i>fa
// delete function <i> fa


//set to default, remove text from the form :
// function setBackToDefault() {
//     // console.log('set back to default')
//     task.value = '';
//     editFlag = false;
//     editID = '';
//     submitBtn.textContent = 'submit';
// }