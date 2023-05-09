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

var currentProject = projectList[0];

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
    loadNewTodoProjectDropdown();
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
    newTodoInputTitle.focus();
});
// New Todo Item (Submit) 
const newTodoButton = document.getElementById('btn-new-todo');
newTodoButton.addEventListener('click', () => {
    console.log(newTodoInputTitle.value);
    console.log(newTodoInputDescription.value);
    console.log(newTodoInputDueDate.value);
    console.log(newTodoInputPriority.value);
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
    projectList.forEach(project => {
        const item = document.createElement('a');
        item.href = "#";
        item.innerHTML = project.title;
        item.addEventListener('click', () => {
            loadProject(project);
            currentProject = project;
        });
        projectDropdown.appendChild(item);
    });
}

const loadNewTodoProjectDropdown = () => {
    newTodoSelectProject.replaceChildren();
    for (let i = 0; i < projectList.length; i++) {
        const newTodoOption = document.createElement('option');
        newTodoOption.innerHTML = projectList[i].title;
        newTodoOption.value = i;
        newTodoSelectProject.appendChild(newTodoOption);
    }
}

// Load
loadProjectMenu();
loadProject(a);
loadNewTodoProjectDropdown();