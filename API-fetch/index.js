// fetch('https://awesome-todo-api.herokuapp.com/tasks').then ((response)=> { //i repsonse hamnar svaret från servern
//     console.log(response)
//     return response.json(); //gör om svaret till ett json-format
// }).then((data) =>{
//     console.log(data);
// });
const todoListElem = document.querySelector('#todos');
const inputElem = document.querySelector('#todo-text');
const addTodoButton = document.querySelector('#add-todo');

async function getTodos() {
    const response = await fetch('https://awesome-todo-api.herokuapp.com/tasks');
    const data = await response.json();
    console.log(data); //körs inte eftersom await stoppar JavaScriptet tills den hämtat det den ska
    
    displayTodos(data.todos);
}

async function addTodo(todoText) {
    const body = {
        task: todoText
    }

    const response = await fetch('https://awesome-todo-api.herokuapp.com/tasks', {
        method: 'POST',
        body: JSON.stringify(body), // man kan inte skicka object över en server. Gör om till sträng. Body= det vi vill skicka med till servern
        headers: { //information till servern
            'Content-Type': 'application/json'
        }
    });
    const data = await response.json();
    console.log(data);
    displayTodos(data.todo);
}

async function deleteTodo(todoItemID) {
    const response = await fetch(`https://awesome-todo-api.herokuapp.com/tasks/${todoItemID}`, { 
        method: 'DELETE' 
    });
    const data = await response.json();
    if (data.success) {
         getTodos();
    }
   
    console.log(data);
}

getTodos();

function displayTodos(todos) {
    todoListElem.innerHTML = '';
    console.log('display todos', todos);
    for (const todo of todos) {
        if (todo.hasOwnProperty('task')) {
            createTodoItem(todo);
        }
    }
}


function createTodoItem (todo) {
    const todoItem = document.createElement('li');
    todoItem.innerText = todo.task;
    todoListElem.append(todoItem);
    todoItem.setAttribute('data-id', todo.id);

    todoItem.addEventListener('click', (event) => {
        
        deleteTodo(todo.id);
    });
}

addTodoButton.addEventListener('click', () => {
    const todoText = inputElem.value;

    addTodo(todoText);
});
