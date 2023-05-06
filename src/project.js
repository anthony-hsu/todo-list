import TodoItem from './todoItem';

class Project {
    constructor(title) {
        this.title = title;
        this.todoItems = [];
    }

    createTodoItem = (title, description, date, priority) => {
        this.todoItems.push(new TodoItem(title, description, date, priority));
    };
}

export default Project;