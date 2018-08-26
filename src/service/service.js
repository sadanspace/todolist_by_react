import store from 'store';
import { observable } from 'mobx';


export default class TodoService {
    constructor() {
        this.load();
    }

    load() {
        store.each((value, key) => {
            if (key.startsWith(TodoService.NAMESPACE))
                this._todos.set(key, value);
        });
    }

    static NAMESPACE = 'todo::' // prefix 用于区分业务的前缀
    _todos = new Map();
    @observable changed = 0;
    @observable filter = 'uncompleted';

    get todos() {
        return [...this._todos.values()].filter(item => {
            return (this.filter === "all") ||
                (this.filter === 'completed' && item.completed === true) ||
                (this.filter === 'uncompleted' && item.completed === false) ? true : false;
        })
    };

    create(title) {
        const todo = {
            key: TodoService.NAMESPACE + (new Date()).valueOf(), // 确保key的唯一即可
            title: title,
            completed: false
        };

        // 存储todo
        this._todos.set(todo.key, todo);
        // 持久化todo
        store.set(todo.key, todo);
        console.log('create todo');

        this.changed = (new Date()).valueOf() + Math.random();
        return todo;
    }

    setTodoState(checked, key) {
        let todo = this._todos.get(key);
        if (todo) {
            todo.completed = checked;
            store.set(key, todo);
        }
        this.changed = (new Date()).valueOf() + Math.random();
    }

    setFilterState(value) {
        this.filter = value;
    }
}