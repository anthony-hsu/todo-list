import './style.css';
import Project from './project';

// Create a new project
const a = new Project("Project 1");

// Create a new TodoItem
a.createTodoItem("Study", "Do some leetcode", "5/5/2023", 3);

a.todoItems.forEach(element => {
    console.log(element);
});