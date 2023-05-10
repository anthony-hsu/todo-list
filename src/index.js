import './style.css';
import Project from './project';
import TodoItem from './todoItem';
import loadProject from './loadProject';

const projectList = [];

// Create a new project
const a = new Project("Project 1");
const b = new Project("Project 2");
projectList.push(a);
projectList.push(b);

// Create a new TodoItem
const todo1 = new TodoItem("Study", "Do some leetcode", "5/5/2023", 3);
const todo2 = new TodoItem("Eat", "Eat some food", "5/5/2023", 2);
a.addTodoItem(todo1);
a.addTodoItem(todo2);
const todo3 = new TodoItem("Run", "Run a mile", "5/5/2023", 1);
const todo4 = new TodoItem("Sleep", "Get some sleep", "5/5/2023", 5);
b.addTodoItem(todo3);
b.addTodoItem(todo4);

var currentProject = [0, projectList[0]];

// **** Add Event Listeners ****
const overlay = document.getElementById('overlay');
// New Project (Menu)
const newProjectContainer = document.getElementById('new-project-container');
const newProjectMenu = document.getElementById('menu-new-project');
newProjectMenu.addEventListener('click', () => {
    newProjectContainer.classList.toggle('hidden');
    overlay.classList.toggle('hidden');
    newProjectInput.focus();
});
// New Project (Submit)
const newProjectButton = document.getElementById('btn-new-project');
const newProjectInput = document.getElementById('input-new-project');
newProjectButton.addEventListener('click', () => {
    // Hide modals
    newProjectContainer.classList.toggle('hidden');
    overlay.classList.toggle('hidden');
    // Add new project
    projectList.push(new Project(newProjectInput.value));
    // Clear Title field
    newProjectInput.value = "";
    // Load new project into project menu
    loadProjectMenu();
    // Load new project into New Todo Modal dropdown
    loadNewTodoProjectDropdown(false);
});
// New Todo Item (Menu)
const newTodoMenu = document.getElementById('menu-new-todo-item');
const newTodoInputTitle = document.getElementById('input-new-todo-title');
const newTodoInputDescription = document.getElementById('input-new-todo-description');
const newTodoInputDueDate = document.getElementById('input-new-todo-due-date');
const newTodoInputPriority = document.getElementById('input-new-todo-priority');
const newTodoSelectProject = document.getElementById('select-new-todo-project');
const newTodoContainer = document.getElementById('new-todo-item-container');
newTodoMenu.addEventListener('click', () => {
    newTodoContainer.classList.toggle('hidden');
    overlay.classList.toggle('hidden');
    loadNewTodoProjectDropdown(false);
    newTodoInputTitle.focus();
});
// New Todo Item (+ Button)
const newTodoCurrentProjectButton = document.getElementById('btn-new-todo-current-project');
newTodoCurrentProjectButton.addEventListener('click', () => {
    loadNewTodoProjectDropdown(true);
    newTodoContainer.classList.toggle('hidden');
    overlay.classList.toggle('hidden');
    newTodoInputTitle.focus();
});
// New Todo Item (Submit) 
const newTodoButton = document.getElementById('btn-new-todo');
newTodoButton.addEventListener('click', () => {
    const newTodoItem = new TodoItem(newTodoInputTitle.value, newTodoInputDescription.value, newTodoInputDueDate.value, newTodoInputPriority.value);
    projectList[newTodoSelectProject.value].addTodoItem(newTodoItem);
    loadProject(currentProject);
});
// Escape Modals
document.onkeydown = (e) => {
    if (e.key == 'Escape') {
        if (!overlay.classList.contains('hidden')) {
            overlay.classList.toggle('hidden');
        }
        if (!newProjectContainer.classList.contains('hidden')) {
            newProjectContainer.classList.toggle('hidden');
        }
        if (!newTodoContainer.classList.contains('hidden')) {
            newTodoContainer.classList.toggle('hidden');
        }
    }
}

const loadProjectMenu = () => {
    const projectDropdown = document.getElementById('dropdown-project-list');
    projectDropdown.replaceChildren();
    
    for (let i = 0; i < projectList.length; i++) {
        const item = document.createElement('a');
        item.href = "#";
        item.innerHTML = projectList[i].title;
        item.addEventListener('click', () => {
            currentProject = [i, projectList[i]];
            loadProject(currentProject);
        });
        projectDropdown.appendChild(item);

    };
}

const loadNewTodoProjectDropdown = (fromCurrent) => {
    newTodoSelectProject.replaceChildren();
    if (fromCurrent) {
        const currentOption = document.createElement('option');
        currentOption.innerHTML = currentProject[1].title;
        currentOption.value = currentProject[0];
        newTodoSelectProject.appendChild(currentOption);
        newTodoSelectProject.disabled = true;
    } else {
        for (let i = 0; i < projectList.length; i++) {
            const newTodoOption = document.createElement('option');
            newTodoOption.innerHTML = projectList[i].title;
            newTodoOption.value = i;
            newTodoSelectProject.appendChild(newTodoOption);
        }
        newTodoSelectProject.disabled = false;
    }
}

// Load
loadProjectMenu();
loadProject(currentProject);
loadNewTodoProjectDropdown(false);