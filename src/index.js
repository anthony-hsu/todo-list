import './style.css';
import Project from './project';
import TodoItem from './todoItem';
import loadProject from './loadProject';
import loadProjectMenu from './loadProjectMenu';

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

// **** Add Event Listeners ****
const overlay = document.getElementById('overlay');
// New Project (Menu)
const newProjectContainer = document.getElementById('new-project-container');
const newProjectMenu = document.getElementById('menu-new-project');
newProjectMenu.addEventListener('click', () => {
    newProjectContainer.classList.toggle('hidden');
    overlay.classList.toggle('hidden');
});
// New Project (Submit)
const newProjectButton = document.getElementById('btn-new-project');
const newProjectInput = document.getElementById('input-new-project');
const validProjectInputField = (input) => {
    if (input.length > 0) {
        return true;
    }
}
newProjectButton.addEventListener('click', () => {
    if (validProjectInputField(newProjectInput.value)) {
        projectList.push(new Project(newProjectInput.value));
        newProjectInput.value = "";
        newProjectContainer.classList.toggle('hidden');
        overlay.classList.toggle('hidden');
        loadProjectMenu(projectList);
    } else {
        if (!newProjectInput.classList.contains("invalid")) {
            newProjectInput.classList.toggle("invalid");
        }
    }
});
newProjectInput.addEventListener('keydown', () => {
    if (newProjectInput.value.length > 0) {
        if (newProjectInput.classList.contains("invalid")) {
            newProjectInput.classList.toggle("invalid");
        }
    }
});
// New Todo Item (Menu)
// New Todo Item (Submit) 

// Load
loadProjectMenu(projectList);
loadProject(a);