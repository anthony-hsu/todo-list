const loadProject = (project) => {
    const divContainer = document.getElementById('container');
    divContainer.replaceChildren();

    const projectTitle = document.createElement('h1');
    projectTitle.innerHTML = project.title;
    divContainer.appendChild(projectTitle);

    // append div of todoList "cards"
    (project.todoItems).forEach(todoItem => {
        const divTodoList = document.createElement('div');
        const todoTitle = document.createElement('h3');
        const todoDescription = document.createElement('p');
        const todoDueDate = document.createElement('p');
        const todoPriority = document.createElement('p');

        // Title
        todoTitle.innerHTML = todoItem.title;
        divTodoList.appendChild(todoTitle);
        // Description
        todoDescription.innerHTML = `Description: ${todoItem.description}`;
        divTodoList.appendChild(todoDescription);
        // DueDate
        todoDueDate.innerHTML = `Due Date: ${todoItem.dueDate}`;
        divTodoList.appendChild(todoDueDate);
        // Priority
        todoPriority.innerHTML = `Priority: ${todoItem.priority}`;
        divTodoList.appendChild(todoPriority);

        divTodoList.classList.add("todoItem");
        divContainer.appendChild(divTodoList);
        divContainer.appendChild(document.createElement("br"));
    });
}

export default loadProject;