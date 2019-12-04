const addToList = document.querySelector('.todo');
const todoList = document.querySelector('.todo-list');
const goal = document.querySelector('.goal');



// Add Event Listener
todo.addEventListener('click', addTask);
todoList.addEventListener('click' , doneTask);
todoList.addEventListener('click', removeTask);
goal.addEventListener('click', addGoal);

// Add task
function addTask() {
    const addItem = document.querySelector('.main-input').value;
    if(addItem === ''){
        ifEmpty();
    } else {
        createLi(addItem);
    }
    clearFields();
    
}

// Add Goal 

// function addGoal() {
//     const addItem = document.querySelector('.main-input').value;
//     if(addItem === ''){
//         ifEmpty();
//     } else {
//         createLi(addItem);
//     }
//     clearFields();
    
// }

// If empty
function ifEmpty() {
    const shake =  document.getElementById('main-input')
    shake.classList.add('apply-shake');
    const pop = document.querySelector('.setTask');
    pop.setAttribute('data-text', 'Please enter your task!');
    setTimeout(() => {
        pop.removeAttribute('data-text');
        shake.classList.remove('apply-shake');
    }, 1000);
    
}

// Create list item 
function createLi(val) {
        // Add task to list
        const li = document.createElement('li');
        li.classList = 'list-item';
        li.appendChild(document.createTextNode(val));
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
    for(const li of list) {
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
    const date = new Date();
    const options = { weekday: 'long', year: 'numeric', month: 'short', day: 'numeric' };
    const getWeek = getNumberOfWeek();
    const todoDate = date.toLocaleDateString('en-us', options);
    
    document.querySelector('.goalDate').innerHTML = `Week: ${getWeek}`;
    document.querySelector('.todoDate').innerHTML = todoDate;

})()

function getNumberOfWeek() {
    const today = new Date();
    const firstDayOfYear = new Date(today.getFullYear(), 0, 1);
    const pastDaysOfYear = (today - firstDayOfYear) / 86400000;
    return Math.ceil((pastDaysOfYear + firstDayOfYear.getDay() + 1) / 7);
}


