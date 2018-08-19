import store from 'store';


export default class TodoService {
    constructor() {
        this.load();
    }

    load() {
        store.each((value, key) => {
            if (key.startsWith(TodoService.NAMESPACE))
                this.todos.set(key, value);
        });
    }

    static NAMESPACE = 'todo::' // prefix 用于区分业务的前缀
    todos = new Map();

    create(title) {
        const todo = {
            key: TodoService.NAMESPACE + (new Date()).valueOf(), // 确保key的唯一即可
            title: title,
            completed: false
        };

        // 存储todo
        this.todos.set(todo.key, todo);
        // 持久化todo
        store.set(todo.key, todo);
        console.log('create todo');
        return todo;
    }

    setTodoState(checked, key) {
        let todo = this.todos.get(key);
        if (todo) {
            todo.completed = checked;
            store.set(key, todo);
        }
    }
}