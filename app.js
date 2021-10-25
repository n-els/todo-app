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
    renderTodos(todos)
    console.log(todos);
})

const pushToArray = function (e) {
    if (e.target.todoText.value != "") {
        todos.push({title: e.target.todoText.value,
            completed: false});
    }
}

const renderTodos = function (todos) {
    document.querySelector("#todo-wrapper").innerHTML = "";
    todos.forEach(element => {
        const todo = document.createElement("p");
        todo.textContent = element.title;
        document.querySelector("#todo-wrapper").appendChild(todo);
    });
    
};

renderTodos(todos);