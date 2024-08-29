//seleção de elementos

const todoForm = document.querySelector('#todo-form');
const todoInput = document.querySelector('#todo-input');
const todoList = document.querySelector('#todo-list');
const editForm = document.querySelector('#edit-form');
const editInput = document.querySelector('#edit-input');
const cancelEditBtn = document.querySelector('#cancel-edit-btn');

//funções

const saveTodo = (text) => {
    const todo = document.createElement('div')
    todo.classList.add("todo")

    const todotitle = document.createElement('h3')
    todotitle.innerText = text
    todo.appendChild(todotitle);




    const doneBtn = document.createElement('button')
    doneBtn.classList.add('finish-todo')
    doneBtn.innerHTML ='<i class="fa-solid fa-check"></i>'
    todo.appendChild(doneBtn);

    const editBtn = document.createElement('button')
    editBtn.classList.add('edit-todo')
    editBtn.innerHTML ='<i class="fa-solid fa-pen"></i>'
    todo.appendChild(editBtn);

    const removeBtn = document.createElement('button')
    removeBtn.classList.add('remove-todo')
    removeBtn.innerHTML ='<i class="fa-solid fa-xmark"></i>'
    todo.appendChild(removeBtn);

    

    todoList.appendChild(todo);

    todoInput.value = '';
    todoInput.focus();
}

const toggleForms = ()=>{
    editForm.classList.toggle("hide")
    todoForm.classList.toggle("hide")
    todoList.classList.toggle("hide")
}

//Eventos

todoForm.addEventListener('submit', (e) =>{

    e.preventDefault()

    const inputValue = todoInput.value;

   if(inputValue){
    saveTodo(inputValue)
   }
})

document.addEventListener('click', (e)=>{
    const targetEl = e.target
    const parentEl = targetEl.closest('div')

    if(targetEl.classList.contains('finish-todo')){
        parentEl.classList.toggle('done');
    }

    if(targetEl.classList.contains('remove-todo')){
        parentEl.remove();
    }

    if(targetEl.classList.contains('edit-todo')){
        toggleForms();
    }

    
});

cancelEditBtn.addEventListener('click', (e)=>{
    e.preventDefault()

    toggleForms();
})