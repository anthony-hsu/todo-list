import './style.css';
import Project from './project';
import TodoItem from './todoItem';
import loadProject from './loadProject';

const projectList = [];

// Create a new project
// TODO: When new project is created, add an event listener to it, which calls "loadProject()"
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

// Do something with projectList (i.e. print all todoItems to log)
const projectDropdown = document.getElementById('dropdown-project-list');
projectList.forEach(project => {
    const item = document.createElement('a');
    item.href = "#";
    item.innerHTML = project.title;
    item.addEventListener('click', () => {
        // Load project
        loadProject(project);
    });
    projectDropdown.appendChild(item);
});

// Initialize New dropdowns
const newProjectMenu = document.getElementById('menu-new-project');
newProjectMenu.addEventListener('click', () => {
    const newProjectContainer = document.getElementById('new-project-container');
    const overlay = document.getElementById('overlay');
    newProjectContainer.classList.toggle('hidden');
    overlay.classList.toggle('hidden');
});

loadProject(a);