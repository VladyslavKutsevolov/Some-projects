const addToList = document.querySelector('.addToList');
const todoList = document.querySelector('.todo-list');


// Add Event Listener
addToList.addEventListener('click', addTask);
todoList.addEventListener('click' , doneTask);
todoList.addEventListener('click', removeTask);


function addTask(e) {
    const addItem = document.querySelector('.main-input').value;

    if(addItem === ''){
        const shake =  document.getElementById('main-input')
        shake.classList.add('apply-shake');
        const pop = document.querySelector('.setTask');
        pop.setAttribute('data-text', 'Please enter your task!');
        setTimeout(() => {
            pop.removeAttribute('data-text');
            shake.classList.remove('apply-shake');
        }, 1000);
    } else {
        // Add task to list
        const li = document.createElement('li');
        li.classList = 'list-item';
        li.appendChild(document.createTextNode(addItem));
        todoList.appendChild(li);
        // Create check button
        const checkBtn = document.createElement('i');
        checkBtn.className = 'fas fa-check-circle checkBtn';
        li.appendChild(checkBtn);
        
        // Create delete button
        const delBtn = document.createElement('i');
        delBtn.className = 'fas fa-trash-alt delBtn';
        li.appendChild(delBtn);
    }
    clearFields();

}
// Clear input field
function clearFields() {
    document.querySelector('.main-input').value = '';
}

// When task is done
function doneTask(e) {
    const checkMark = e.target.classList;
    if(checkMark.contains('checkBtn')) {
        checkMark.toggle('checked');
    }
    const list =  document.getElementsByClassName('list-item'); 
    for(let li of list) {
        if(li.firstElementChild.classList.contains('checked')){
            li.setAttribute('style', 'text-decoration: line-through');
        } else {
            li.removeAttribute('style', 'text-decoration: line-through');
        }
    }
}


// Remove a task
function removeTask(e){
    if(e.target.classList.contains('delBtn')){
        let li = e.target.parentElement;
        todoList.removeChild(li);
    }
}
// Set Date
(() => {
    const event = new Date();
    const options = { weekday: 'long', year: 'numeric', month: 'short', day: 'numeric' };
    const date = event.toLocaleDateString('en-us', options);
    
    document.querySelector('.date').innerHTML = date;

})()


