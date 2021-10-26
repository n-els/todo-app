const todos = [
    {
        title: "Do something",
        completed: false

    },
    {
        title: "Meet my friends",
        completed: true

    },
    {
        title: "Purchase and pay something",
        completed: false

    },
    {
        title: "Go to the cinema and watch a nice movie",
        completed: false

    },
];


document.querySelector("#todo-form").addEventListener("submit", function (e){
    e.preventDefault();
    pushToArray(e);
    e.target.todoText.value = "";
    if (document.querySelector("#hide-tasks").checked) {
        renderTodos(filterTodos(todos))
    } else {
    renderTodos(todos)
    }
})


document.querySelector("#hide-tasks").addEventListener("change", function (e){
    if (e.target.checked) {
        // const undoneTodos = filterTodos(todos)
        renderTodos(filterTodos(todos));
    } else {
        renderTodos(todos)
    }
    
})

// Einträge zum Todo-Array hinzufügen
const pushToArray = function (e) {
    if (e.target.todoText.value != "") {
        todos.push({title: e.target.todoText.value,
            completed: false});
    }
}

// Todo-Einträge generieren und anzeigen
const renderTodos = function (todos) {
    document.querySelector("#todo-wrapper").innerHTML = "";
    todos.forEach(element => {
        const todo = document.createElement("p");
        todo.textContent = element.title;
        document.querySelector("#todo-wrapper").appendChild(todo);
    });
    
};

// Erledigte Todos ausfiltern
const filterTodos = function (todos) {
    const undoneTodos = todos.filter(function (todo) {
        return !todo.completed
    })
    return undoneTodos;
}


renderTodos(todos);

