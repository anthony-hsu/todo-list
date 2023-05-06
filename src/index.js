import './style.css';
import Project from './project';
import TodoItem from './todoItem';

const project_list = [];

// Create a new project
const a = new Project("Project 1");
project_list.push(a);

// Create a new TodoItem
const todo = new TodoItem("Study", "Do some leetcode", "5/5/2023", 3);
a.addTodoItem(todo);

// Do something with project_list (i.e. print all todoItems to log)
project_list.forEach(p => {
    (p.todoItems).forEach(element => {
        console.log(element);
    })
});