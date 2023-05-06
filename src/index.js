import './style.css';
import Project from './project';
import TodoItem from './todoItem';

const projectList = [];

// Create a new project
const a = new Project("Project 1");
projectList.push(a);

// Create a new TodoItem
const todo = new TodoItem("Study", "Do some leetcode", "5/5/2023", 3);
a.addTodoItem(todo);

// Do something with projectList (i.e. print all todoItems to log)
const divContainer = document.getElementById('container');
const projectTitle = document.createElement('h1');

const currentProject = projectList[0];
projectTitle.innerHTML = currentProject.title;
divContainer.appendChild(projectTitle);

projectList.forEach(p => {
    (p.todoItems).forEach(element => {
        console.log(element);
    })
});