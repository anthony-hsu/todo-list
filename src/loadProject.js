const loadProject = (currentProject) => {
    const project = currentProject[1];
    const divHeader = document.getElementById('container-header');
    const divBody = document.getElementById('container-body');
    divHeader.replaceChildren();
    divBody.replaceChildren();

    const projectTitle = document.createElement('h1');
    projectTitle.innerHTML = project.title;
    divHeader.appendChild(projectTitle);

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
        divBody.appendChild(divTodoList);
        divBody.appendChild(document.createElement("br"));
    });
}

export default loadProject;