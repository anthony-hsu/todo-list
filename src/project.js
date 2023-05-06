import TodoItem from './todoItem';

class Project {
    constructor(title) {
        this.title = title;
        this.todoItems = [];
    }

    addTodoItem = (todoItem) => {
        this.todoItems.push(todoItem);
    };
}

export default Project;